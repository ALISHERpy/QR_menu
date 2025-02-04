import os
import uuid
from django.db import models
from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver
from django.utils.safestring import mark_safe
from restaurant.models import Restaurant

class Category(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="categories")  # Link to Restaurant
    slug = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return f"{self.name} - {self.restaurant.name}"


class Meal(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="meals")  # Link to Restaurant
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='meals')
    image = models.ImageField(upload_to='meals', blank=True, default='default.jpg')

    is_vegetarian = models.BooleanField(default=False)
    is_available = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - {self.restaurant.name}"

    def product_image(self):
        if self.image:
            return mark_safe(f'<img src="{self.image.url}" width="50" height="50" />')
        return "No Image"


def delete_old_file(path):
    if path and os.path.exists(path):
        os.remove(path)

@receiver(pre_save, sender=Meal)
def delete_old_image(sender, instance, **kwargs):
    if not instance.pk:
        return
    try:
        old_instance = sender.objects.get(pk=instance.pk)
    except sender.DoesNotExist:
        return
    if old_instance.image and old_instance.image.url != instance.image.url:
        delete_old_file(old_instance.image.path)

@receiver(post_delete, sender=Meal)
def delete_image_on_delete(sender, instance, **kwargs):
    if instance.image:
        delete_old_file(instance.image.path)
