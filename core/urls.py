from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
# from django.conf.urls import handler404  # Importing handler404 here

# Custom 404 handler
# handler404 = 'meal.views.custom_404_view'

urlpatterns = [
    path("xadmin/", admin.site.urls),
    path('', include('meal.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
