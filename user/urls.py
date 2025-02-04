from django.urls import path
from . import views

app_name='user'

urlpatterns = [
    path('',views.home,name='homepage'),
    path('submit-form/', views.submit_form, name='submit_form'),

]