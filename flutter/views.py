from rest_framework.permissions import IsAuthenticated
from meal.models import Meal,Category
from rest_framework.viewsets import ModelViewSet
from rest_framework.parsers import FormParser, MultiPartParser, FileUploadParser
from .serializers import *

class MealModelViewSet(ModelViewSet):
    queryset = Meal.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = MealModelSerializer
    parser_classes = (FormParser, MultiPartParser, FileUploadParser)
    http_method_names = ('get', 'list')
    def get_queryset(self):
        return self.queryset.filter(restaurant=self.request.user.restaurant)
class CategoryModelViewSet(ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = CategoryModelSerializer
    parser_classes = (FormParser, MultiPartParser, FileUploadParser)
    http_method_names = ('get', 'list')
    def get_queryset(self):
        return self.queryset.filter(restaurant=self.request.user.restaurant)
