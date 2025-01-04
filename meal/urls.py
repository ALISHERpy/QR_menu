from django.urls import path
from . import views

app_name='meal'


urlpatterns = [
    path('test/', views.test_view, name='test_view'),
    path('menu/', views.products_by_category, name='products'),
    path('menu/<str:category_slug>/', views.products_by_category, name='products_by_category'),

]

