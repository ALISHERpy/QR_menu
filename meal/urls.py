from django.urls import path
from .views import *


app_name='meal'


urlpatterns = [
    ###menu3
    path('menu3/<str:uid>/', menu3, name='menu3'),
    # confirm order
    path('confirm-order/', confirm_order, name='confirm_order'),

    ###########
    path('product/<slug:slug>/', product_detail, name='product-detail'),
    path('<str:uid>/', products_by_category, name='meal-list'),
    path('<str:uid>/<slug:category_slug>/', products_by_category, name='meal-list-category'),
###apis
    path('api/product_detail/<slug:slug>/', ProductDetailAPIView.as_view(), name='product-detail-api'),
    path('api/products/category/', ProductsByCategoryAPIView.as_view(), name='all-products-api'),  # No category_slug
    path('api/products/category/<slug:category_slug>/', ProductsByCategoryAPIView.as_view(),
         name='products-by-category-api'),
        
]