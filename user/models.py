from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    restaurant = models.ForeignKey('restaurant.Restaurant', on_delete=models.SET_NULL, null=True, blank=True,related_name='admin')
    is_developer = models.BooleanField(default=False,editable=False)