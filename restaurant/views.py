from django.shortcuts import render, get_object_or_404
from .models import Restaurant

def restaurant_list(request):
    restaurants = Restaurant.objects.all()
    return render(request, 'restaurant/restaurant_list2.html', {'restaurants': restaurants})

def restaurant_detail(request, uid):
    restaurant = get_object_or_404(Restaurant, uid=uid)
    return render(request, 'restaurant/detail-page.html', {'restaurant': restaurant})
