from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView, TokenBlacklistView

app_name='user'

urlpatterns = [
    path('',views.home,name='homepage'),
    path('submit-form/', views.submit_form, name='submit_form'),

    path('token/', TokenObtainPairView.as_view(), name='token-obtain-pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token-verify'),
    path('token/blacklist/', TokenBlacklistView.as_view(), name='token-blacklist'),
]
