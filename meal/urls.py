from django.urls import path
from .views import *

app_name='meal'


urlpatterns = [
    path('product/<slug:slug>/', product_detail, name='product-detail'),
    path('<str:uid>/', products_by_category, name='meal-list'),
    path('<str:uid>/<slug:category_slug>/', products_by_category, name='meal-list-category'),
]

