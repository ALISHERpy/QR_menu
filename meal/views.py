from .models import Category, Meal
from django.shortcuts import render, get_object_or_404

def test_view(request):
    return render(request, '404.html', {'categories': 11})

def menu_view(request):
    categories = Category.objects.prefetch_related('meals').all()
    return render(request, 'menu.html', {'categories': categories})

from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse

def products_by_category(request, category_slug=None):
    categories = Category.objects.all()

    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = Meal.objects.filter(category=category)
    else:
        category = categories.first()
        products = Meal.objects.filter(category=category)

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        html = render(request, 'partials/product_list.html', {'products': products}).content.decode('utf-8')
        return JsonResponse({'html': html})

    context = {
        'categories': categories,
        'products': products,
        'current_category': category,
    }
    return render(request, 'menu.html', context)



def custom_404_view(request, exception):
    return render(request, '404.html', status=404)