from django.urls import path
from . import views

app_name='meal'


urlpatterns = [
    path('', views.products_by_category, name='products'),
    path('<str:category_slug>/', views.products_by_category, name='products_by_category'),

]

