from django.contrib import admin
from .models import Meal,Category


class MealAdmin(admin.ModelAdmin):
    # Display fields in the admin list view
    list_display = ['title', 'product_image', 'category', 'price', 'is_vegetarian', 'is_available']
    # Filters for the right sidebar
    list_filter = ['category', 'is_vegetarian', 'is_available', 'created_at']
    # Search bar fields
    search_fields = ['title', 'description']
    # Default ordering of objects in the list view
    ordering = ['-created_at']
    # Add custom JavaScript file
    class Media:
        js = ('js/drop_paste.js',)  # This is for the image paste/drop functionality
# Register the model with the custom admin configuration
admin.site.register(Meal, MealAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']
    search_fields = ['name',]
admin.site.register(Category,CategoryAdmin)
