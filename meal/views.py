from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Meal, Category, Restaurant
from .serializers import MealSerializer, CategorySerializer
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated


def product_detail(request, slug):
    product = get_object_or_404(Meal, slug=slug, is_available=True)
    return render(request, 'product_detail.html', {'product': product})
def products_by_category(request, uid=None, category_slug=None):
    restaurant = Restaurant.objects.prefetch_related("categories").get(uid=uid)

    if restaurant.is_expired():
        return render(request, 'restaurant_expired.html', {'restaurant': restaurant})

    categories = restaurant.categories.filter(parent__isnull=True)
    category = None
    products = Meal.objects.filter(restaurant=restaurant, is_available=True)

    if category_slug:
        category = get_object_or_404(
            Category.objects.prefetch_related("subcategories"),
            slug=category_slug,
            restaurant=restaurant
        )
        subcategories = category.subcategories.all()
        products = products.filter(Q(category=category) | Q(category__in=subcategories))
    elif categories.exists():
        category = categories.first()
        subcategories = category.subcategories.all()
        products = products.filter(Q(category=category) | Q(category__in=subcategories))

    # **list_price ni har bir `product` uchun qo‘shish**
    for product in products:
        product.list_price = product.price.split('/') if '/' in product.price else [product.price]

    response = render(request, f'menu{restaurant.menu_design}.html', {
        "restaurant": restaurant,
        "uid": uid,
        'categories': categories,
        'products': products,
        'current_category': category,
    })
    return response

class ProductDetailAPIView(APIView):
    def get(self, request, slug):
        product = get_object_or_404(Meal, slug=slug, is_available=True)
        serializer = MealSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ProductsByCategoryAPIView(APIView):
    """🔍 Retrieve all products (optionally filtered by category) for the authenticated user's restaurant"""
    permission_classes = [IsAuthenticated]
    def get(self, request, category_slug=None):
        restaurant = request.user.restaurant
        if restaurant.is_expired():
            return Response({"error": "Restaurant subscription has expired."}, status=status.HTTP_403_FORBIDDEN)

        categories = restaurant.categories.filter(parent__isnull=True)
        products = Meal.objects.filter(restaurant=restaurant, is_available=True)

        if category_slug:
            category = get_object_or_404(
                Category.objects.prefetch_related("subcategories"),
                slug=category_slug,
                restaurant=restaurant
            )
            subcategories = category.subcategories.all()
            products = products.filter(Q(category=category) | Q(category__in=subcategories))
        elif categories.exists():
            category = categories.first()
            subcategories = category.subcategories.all()
            products = products.filter(Q(category=category) | Q(category__in=subcategories))

        data = {
            "restaurant": {"uid": restaurant.uid, "name": restaurant.name,"image":restaurant.brand_logo.url},
            "categories": CategorySerializer(categories, many=True).data,
            "products": MealSerializer(products, many=True).data,
            "current_category": CategorySerializer(category).data if category else None,
        }
        return Response(data, status=status.HTTP_200_OK)