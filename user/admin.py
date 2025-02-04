from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super().get_queryset(request)

        if request.user.is_superuser and request.user.restaurant_id is not None:
            return qs.filter(id=request.user.id)
        else:
            return qs

admin.site.register(User,UserAdmin)
# Register your models here.
