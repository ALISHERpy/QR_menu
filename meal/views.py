from .models import Category, Meal
from django.shortcuts import render, get_object_or_404


def products_by_category(request, category_slug=None):
    categories = Category.objects.all()

    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = Meal.objects.filter(category=category)
    else:
        category = categories.first()
        products = Meal.objects.filter(category=category)
    products = products.filter(is_available=True)
    context = {
        'categories': categories,
        'products': products,
        'current_category': category,
    }
    return render(request, 'menu.html', context)


def custom_404_view(request, exception):
    return render(request, '404.html', status=404)
