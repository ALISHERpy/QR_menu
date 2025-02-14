import os
import uuid
from django.db import models
from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver
from django.utils.safestring import mark_safe
from restaurant.models import Restaurant
from django.utils.text import slugify

class Category(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="categories")  # Link to Restaurant
    slug = models.UUIDField(default=uuid.uuid4, editable=False, unique=True,db_index=True)
    name = models.CharField(max_length=32)
    image = models.ImageField(upload_to='category',blank=True,null=True)
    parent = models.ForeignKey(
        "self", on_delete=models.CASCADE, related_name="subcategories",
        null=True, blank=True
    )
    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return f"{self.name} (Subcategory of {self.parent.name})" if self.parent else self.name
    def its_image(self):
        if self.image:
            return mark_safe(f'<img src="{self.image.url}" width="50" height="50" />')
        return "No Image"

class Meal(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="meals")
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True, null=True,db_index=True)  # ✅ Slug qo'shildi
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='meals')
    image = models.ImageField(upload_to='meals', blank=True, default='default.jpg')

    is_vegetarian = models.BooleanField(default=False)
    is_available = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title) + "-" + str(uuid.uuid4())[:8]  # ✅ Slug avtoyaratiladi
        super().save(*args, **kwargs)

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
