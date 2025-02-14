from django.conf.urls.i18n import i18n_patterns
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.i18n import set_language
from django.contrib import admin

urlpatterns = [
    path("xadmin/", admin.site.urls),
    path('', include('user.urls')),
    path('prod/', include('meal.urls')),
    path('rest/', include('restaurant.urls')),
    path('i18n/setlang/', set_language, name='set_language'),  # ✅ Til almashtirish yo‘nalishi
]

urlpatterns = i18n_patterns(*urlpatterns) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
