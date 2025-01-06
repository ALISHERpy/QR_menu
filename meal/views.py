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


def custom_404_view(request, exception):
    return render(request, '404.html', status=404)



@staff_member_required  # Restrict access to admin users
def download_db(request):
    db_path = settings.DATABASES['default']['NAME']
    if os.path.exists(db_path):
        return FileResponse(open(db_path, 'rb'), as_attachment=True, filename=os.path.basename(db_path))
    else:
        raise Http404("Database file not found")
