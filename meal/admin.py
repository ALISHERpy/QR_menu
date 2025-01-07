from django.contrib import admin
from .models import Meal,Category


class MealAdmin(admin.ModelAdmin):
    list_display = ['title', 'product_image', 'category', 'price', 'is_vegetarian', 'is_available']
    list_filter = ['category', 'is_vegetarian', 'is_available', 'created_at']
    search_fields = ['title', 'description']
    ordering = ['-created_at']
    list_per_page = 20

    class Media:
        js = ('js/drop_paste.js',)  # This is for the image paste/drop functionality
admin.site.register(Meal, MealAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']
    search_fields = ['name',]
admin.site.register(Category,CategoryAdmin)
