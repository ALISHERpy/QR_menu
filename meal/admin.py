from django.contrib import admin
from .models import Meal,Category
from django.contrib.admin.filters import SimpleListFilter
from django.utils.text import slugify

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
        """ Foydalanuvchi o‘z restoraniga tegishli ovqatlarni ko‘rsin """
        queryset = super().get_queryset(request)
        if request.user.is_developer:
            return queryset
        return queryset.filter(restaurant=request.user.restaurant)

    def get_form(self, request, obj=None, **kwargs):
        """ Restaurant maydonini yashirish va avtomatik to‘ldirish """
        form = super().get_form(request, obj, **kwargs)
        if not request.user.is_developer:
            form.base_fields['restaurant'].initial = request.user.restaurant
            form.base_fields['restaurant'].disabled = True  # Maydonni o‘zgartirib bo‘lmaydi
        form.base_fields.pop('slug', None)  # Slug maydonini admin paneldan yashirish
        return form

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        """ Category bo‘limida faqat foydalanuvchiga tegishli kategoriyalar chiqishi kerak """
        if db_field.name == "category" and not request.user.is_developer:
            kwargs["queryset"] = Category.objects.filter(restaurant=request.user.restaurant)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def save_model(self, request, obj, form, change):
        """ Slug avtomatik generatsiya bo‘lishi """
        if not obj.slug:
            obj.slug = slugify(obj.title)
        obj.restaurant = request.user.restaurant  # Restaurant maydonini foydalanuvchi restorani bilan to‘ldirish
        super().save_model(request, obj, form, change)

    class Media:
        js = ('others/drop_paste.js',)  # This is for the image paste/drop functionality
admin.site.register(Meal, MealAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'its_image', 'parent']
    search_fields = ['name',]

    def get_queryset(self, request):
        """ Foydalanuvchi o‘z restoraniga tegishli kategoriyalarni ko‘rsin """
        queryset = super().get_queryset(request)
        if request.user.is_developer:
            return queryset
        return queryset.filter(restaurant=request.user.restaurant)

    def get_form(self, request, obj=None, **kwargs):
        """ Foydalanuvchi o‘z restoranini avtomatik tanlaydi va 'Restaurant' maydonini yashiradi """
        form = super().get_form(request, obj, **kwargs)
        if not request.user.is_developer:
            form.base_fields['restaurant'].initial = request.user.restaurant
            form.base_fields['restaurant'].disabled = True  # Maydonni o‘zgartirib bo‘lmaydi
        return form

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        """ Parent bo‘limida faqat foydalanuvchiga tegishli kategoriyalar chiqishi kerak """
        if db_field.name == "parent" and not request.user.is_developer:
            kwargs["queryset"] = Category.objects.filter(restaurant=request.user.restaurant)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    class Media:
        js = ('others/drop_paste.js',)

admin.site.register(Category, CategoryAdmin)


