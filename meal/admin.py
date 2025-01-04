from django.contrib import admin
from .models import Meal,Category

class MealAdmin(admin.ModelAdmin):
    list_display = ['title', 'product_image','category', 'price', 'is_vegetarian', 'is_available']
    list_filter = ['category', 'is_vegetarian', 'is_available', 'created_at']
    search_fields = ['title', 'description']
    ordering = ['-created_at']
    class Media:
        js = ('js/image_paste.js',)
        #bu drop image funcsiyasi
admin.site.register(Meal, MealAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']
    search_fields = ['name',]
admin.site.register(Category,CategoryAdmin)
