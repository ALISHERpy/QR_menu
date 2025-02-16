from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from .models import User  # Sizning Custom User modelingiz

class CustomUserAdmin(UserAdmin):
    fieldsets = (
        (None, {"fields": ("username", "password")}),  # ✅ Parol maydoni qo‘shildi
        # (_("Personal info"), {"fields": ("first_name", "last_name", "email")}),
        (_("Restaurant Info"), {"fields": ("restaurant",)}),
        (_("Permissions"), {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        # (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )

    add_fieldsets = (  # ✅ Yangi foydalanuvchi qo‘shish uchun
        (None, {
            "classes": ("wide",),
            "fields": ("username", "password1", "password2"),
        }),
    )

    list_display = ("username", "email", "last_login", "restaurant")
    search_fields = ("username", "restaurant__name")
    ordering = ("last_login", "username")

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_developer:
            return qs
        return qs.filter(id=request.user.id)

    def get_fieldsets(self, request, obj=None):
        """ Foydalanuvchining huquqiga qarab maydonlarni boshqarish """
        if not request.user.is_developer:
            return ((None, {"fields": ("username", "password")}),)  # Faqat username va parol
        return super().get_fieldsets(request, obj)  # Standart holatda barcha maydonlar

admin.site.register(User, CustomUserAdmin)
