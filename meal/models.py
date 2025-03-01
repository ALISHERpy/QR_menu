import uuid
from django.db import models
from django.utils.safestring import mark_safe
from restaurant.models import Restaurant
from django.utils.text import slugify

from shortuuidfield import ShortUUIDField
import shortuuid

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
        verbose_name = 'Kategoriya'  # Singular form
        verbose_name_plural = 'Kategoriyalar'  # Plural form
        

    def __str__(self):
        return f"{self.name} (Subcategory of {self.parent.name})" if self.parent else self.name
    def its_image(self):
        if self.image:
            return mark_safe(f'<img src="{self.image.url}" width="50" height="50" />')
        return "No Image"
    

class Meal(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="meals")
    title = models.CharField(max_length=200)
    slug = ShortUUIDField(unique=True, editable=False, db_index=True,default=shortuuid.uuid)  

    description = models.TextField(blank=True, null=True)
    price = models.CharField(max_length=32, default='1')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='meals')
    image = models.ImageField(upload_to='meals', blank=True, null=True)

    is_vegetarian = models.BooleanField(default=False)
    is_available = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Taom'  # Singular form
        verbose_name_plural = 'Taomlar'  # Plural form

    def __str__(self):
        return f"{self.title} - {self.category}- {self.restaurant.name}"

    def product_image(self):
        if self.image:
            return mark_safe(f'<img src="{self.image.url}" width="50" height="50" />')
        return "No Image"

