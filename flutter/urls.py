from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter


app_name='flutter'


router = DefaultRouter()
router.register('Meal', MealModelViewSet, 'meal')


urlpatterns = [
    path('', include(router.urls)),
]