from django.urls import path
from .views import *


app_name='meal'


urlpatterns = [
    path('product/<slug:slug>/', product_detail, name='product-detail'),
    path('<str:uid>/', products_by_category, name='meal-list'),
    path('<str:uid>/<slug:category_slug>/', products_by_category, name='meal-list-category'),

    path('api/product_detail/<slug:slug>/', ProductDetailAPIView.as_view(), name='product-detail-api'),
    path('api/products/category/', ProductsByCategoryAPIView.as_view(), name='all-products-api'),  # No category_slug
    path('api/products/category/<slug:category_slug>/', ProductsByCategoryAPIView.as_view(),
         name='products-by-category-api'),
]