from django.shortcuts import render, get_object_or_404
from .models import Category, Meal
from restaurant.models import Restaurant
from django.views.decorators.cache import cache_page
from django.core.cache import cache
from django.db.models import Q



# @cache_page(60 * 15)  # 30 daqiqa cache
def products_by_category(request, uid=None, category_slug=None):
    cache_key = f"menu_{uid}_{category_slug}"
    cached_data = cache.get(cache_key)

    if cached_data:
        return cached_data

    restaurant = Restaurant.objects.prefetch_related("categories").get(uid=uid)
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

    response = render(request, f'menu{restaurant.menu_design}.html', {
        "restaurant": restaurant,
        "uid": uid,
        'categories': categories,
        'products': products,
        'current_category': category,
    })
    # cache.set(cache_key, response, 900)  # 30 daqiqa cache
    return response


