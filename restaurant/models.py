from django.db import models
import random
import string
from datetime import timedelta, date

def generate_uid(length=8):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

class Restaurant(models.Model):
    uid = models.CharField(max_length=8, primary_key=True, default=generate_uid, unique=True,db_index=True)
    name = models.CharField(max_length=32, unique=True)
    description = models.TextField(blank=True)

    brand_logo = models.ImageField(upload_to='restaurants', blank=True, default='default.jpg')
    background_image = models.ImageField(upload_to='restaurants', blank=True, default='default.jpg')

    insta_link = models.CharField(max_length=48, blank=True,null=True,default='https://www.instagram.com/alisher_py')
    short_video = models.CharField(max_length=48, blank=True,null=True)
    menu_design = models.IntegerField(default=2,null=True,blank=True)

    payment_period = models.IntegerField(default=3, help_text="Subscription duration in months")  # Example: 1 month, 2 months, etc.
    expiration_date = models.DateField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.expiration_date:  # Only set if not already defined
            self.expiration_date = date.today() + timedelta(days=self.payment_period * 30)
        super().save(*args, **kwargs)

    def is_expired(self):
        """Check if the restaurant's subscription has expired."""
        return self.expiration_date and self.expiration_date < date.today()

    def __str__(self):
        return self.name