from django.shortcuts import render, get_object_or_404
from .models import Restaurant

def restaurant_list(request):
    # Query all restaurants
    restaurants = Restaurant.objects.all()
    return render(request, 'restaurant/restaurant_list.html', {'restaurants': restaurants})

def restaurant_detail(request, uid):
    # Get a specific restaurant by its uid
    restaurant = get_object_or_404(Restaurant, uid=uid)
    return render(request, 'restaurant/restaurant_detail.html', {'restaurant': restaurant})
