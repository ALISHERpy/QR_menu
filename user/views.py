from django.shortcuts import render
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

def home(request):
    return render(request, 'index.html')

@csrf_exempt  # Only for development, use CSRF middleware in production
def submit_form(request):
    if request.method == "POST":
        name = request.POST.get("name")
        phone = request.POST.get("phone")
        telegram = request.POST.get("telegram")
        message = request.POST.get("message", "Xabar yo‘q")

        if not name or not phone or not telegram:
            return JsonResponse({"success": False, "error": "All fields are required"})

        # Sending message to Telegram group
        text = f"📩 New Cooperation Request:\n\n👤 Name: {name}\n📞 Phone: {phone}\n💬 Telegram: {telegram}\n📝 Message: {message}"
        telegram_url = f"https://api.telegram.org/bot{settings.TELEGRAM_BOT_TOKEN}/sendMessage"
        response = requests.post(telegram_url, data={"chat_id": settings.TELEGRAM_CHAT_ID, "text": text})

        if response.status_code == 200:
            return JsonResponse({"success": True})
        else:
            return JsonResponse({"success": False, "error": "Failed to send Telegram message"})

    return JsonResponse({"success": False, "error": "Invalid request method"})