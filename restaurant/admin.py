from django.contrib import admin
from .models import Restaurant

class RestaurantAdmin(admin.ModelAdmin):
    search_fields = ['name',]

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_developer:
            return qs
        else:
            return qs.filter(admin=request.user)

    def get_fields(self, request, obj=None):
        if request.user.is_developer:
            return super().get_fields(request, obj)
        return ('name', 'description', 'brand_logo', 'background_image', 'insta_link', 'short_video')


admin.site.register(Restaurant, RestaurantAdmin)