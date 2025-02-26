import os
import uuid
from django.db import models
from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver
from django.utils.safestring import mark_safe
from django.utils.text import slugify
from .models import Meal, Category

# Utility function to delete the old image file if it exists
def delete_old_file(path):
    if path and os.path.exists(path):
        os.remove(path)

# Signal for the Meal model to generate a slug before saving
@receiver(pre_save, sender=Meal)
def generate_meal_slug(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.title) + "-" + str(uuid.uuid4())[:8]

# Signal to delete old image when Meal instance is updated
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

# Signal to delete the image when a Meal instance is deleted
@receiver(post_delete, sender=Meal)
def delete_image_on_delete(sender, instance, **kwargs):
    if instance.image:
        delete_old_file(instance.image.path)


# Signal for the Category model to automatically assign a slug before saving
@receiver(pre_save, sender=Category)
def generate_category_slug(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = str(uuid.uuid4())  # Slug based on UUID, unique by default

# Signal to delete the old image when a Category instance is updated
@receiver(pre_save, sender=Category)
def delete_old_category_image(sender, instance, **kwargs):
    if not instance.pk:
        return
    try:
        old_instance = sender.objects.get(pk=instance.pk)
    except sender.DoesNotExist:
        return
    if old_instance.image and old_instance.image.url != instance.image.url:
        delete_old_file(old_instance.image.path)

# Signal to delete the image when a Category instance is deleted
@receiver(post_delete, sender=Category)
def delete_category_image_on_delete(sender, instance, **kwargs):
    if instance.image:
        delete_old_file(instance.image.path)
