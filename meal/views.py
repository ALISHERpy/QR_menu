from .models import Category, Meal
from django.shortcuts import render, get_object_or_404
from django.http import FileResponse, Http404
import os
from django.conf import settings
from django.contrib.admin.views.decorators import staff_member_required

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



