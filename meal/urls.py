from django.urls import path
from .views import *

app_name='meal'


urlpatterns = [
    path('<str:uid>/', products_by_category, name='meal-list'),
    path('<str:uid>/<slug:category_slug>/', products_by_category, name='meal-list-category'),
]
