from django.contrib import admin
from .models import Meal,Category
from django.contrib.admin.filters import SimpleListFilter

class CategoryFilter(SimpleListFilter):
    title = ("Category")
    parameter_name = "category"

    def lookups(self, request, model_admin):
        """Returns categories only for the logged-in user's restaurant"""
        if not hasattr(request.user, "restaurant") or not request.user.restaurant:
            return []

        categories = Category.objects.filter(restaurant=request.user.restaurant)
        return [(cat.id, cat.name) for cat in categories]

    def queryset(self, request, queryset):
        """Filters meals based on the selected category"""
        if self.value():
            return queryset.filter(category_id=self.value())
        return queryset


class MealAdmin(admin.ModelAdmin):
    list_display = ['title', 'product_image', 'category', 'price', 'is_vegetarian', 'is_available']
    list_filter = [CategoryFilter, 'is_vegetarian', 'is_available', 'created_at']
    search_fields = ['title', 'description']
    ordering = ['-created_at']
    list_per_page = 20

    def get_queryset(self, request):
        """Filter meals by logged-in user's restaurant"""
        queryset = super().get_queryset(request)
        if hasattr(request.user, "restaurant") and request.user.restaurant:

            queryset = queryset.filter(restaurant=request.user.restaurant)
        return queryset

    class Media:
        js = ('others/drop_paste.js',)  # This is for the image paste/drop functionality
admin.site.register(Meal, MealAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'its_image', 'parent']
    search_fields = ['name',]
    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        if request.user.restaurant:
            queryset = queryset.filter(restaurant=request.user.restaurant)
        return queryset
    class Media:
        js = ('others/drop_paste.js',)

admin.site.register(Category,CategoryAdmin)

