from django.db import models
import random
import string

def generate_uid(length=8):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

class Restaurant(models.Model):
    uid = models.CharField(max_length=8, primary_key=True, default=generate_uid, unique=True)
    name = models.CharField(max_length=32, unique=True)
    description = models.TextField(blank=True)
    brand_logo = models.ImageField(upload_to='restaurants', blank=True, default='restaurants/default.jpg')
    background_image = models.ImageField(upload_to='restaurants', blank=True, default='restaurants/default.jpg')

    insta_link = models.CharField(max_length=48, blank=True,null=True)
    short_video = models.CharField(max_length=48, blank=True,null=True)

    def __str__(self):
        return self.name