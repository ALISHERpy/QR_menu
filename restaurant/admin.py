from django.contrib import admin
from .models import Restaurant

class RestaurantAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super().get_queryset(request)

        if request.user.is_superuser and request.user.restaurant_id is not None:
            return qs.filter(admin=request.user)
        else:
            return qs
admin.site.register(Restaurant, RestaurantAdmin)