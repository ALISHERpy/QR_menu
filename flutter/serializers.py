from rest_framework.serializers import ModelSerializer

from meal.models import Meal, Category


class MealModelSerializer(ModelSerializer):
    class Meta:
        model = Meal
        fields = ("__all__")
class CategoryModelSerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ("__all__")

