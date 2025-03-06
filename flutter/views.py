from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated

# Create your views here.
from meal.models import Meal,Category
from rest_framework.viewsets import ModelViewSet
from rest_framework.parsers import FormParser, MultiPartParser, FileUploadParser
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import *

class MealModelViewSet(ModelViewSet):
    queryset = Meal.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = MealModelSerializer
    parser_classes = (FormParser, MultiPartParser, FileUploadParser)
    # filter_backends = (DjangoFilterBackend, SearchFilter)
    # filterset_class = UserFilter
    # search_fields = ('full_name', 'pupil_class')
    # http_method_names = ('get', 'post', 'patch', 'delete')

    def get_queryset(self):
        return Meal.objects.filter(restaurant=self.request.user.restaurant)
