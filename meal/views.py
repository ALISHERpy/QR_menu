from django.shortcuts import render, get_object_or_404
from .models import Category, Meal
from restaurant.models import Restaurant

def products_by_category(request, uid=None, category_slug=None):
    restaurant=Restaurant.objects.get(uid=uid)
    categories = Category.objects.filter(restaurant_id=uid)

    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
    elif categories.exists():
        category = categories.first()

    if category:
        products = Meal.objects.filter(category=category, is_available=True)
    else:
        products = Meal.objects.filter(is_available=True)

    context = {
        "restaurant":restaurant,
        "uid":uid,
        'categories': categories,
        'products': products,
        'current_category': category,
    }
    return render(request, 'menu.html', context)
