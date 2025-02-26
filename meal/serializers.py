from rest_framework import serializers
from .models import Meal, Category

class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ["id", "title", "slug", "description", "price", "image", "category"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug", "parent",'image']
