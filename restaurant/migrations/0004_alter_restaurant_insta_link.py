# Generated by Django 5.1.4 on 2025-02-06 08:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0003_alter_restaurant_background_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='insta_link',
            field=models.CharField(blank=True, default='https://www.instagram.com/alisher_py', max_length=48, null=True),
        ),
    ]
