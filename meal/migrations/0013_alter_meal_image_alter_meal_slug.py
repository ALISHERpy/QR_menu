# Generated by Django 5.1.4 on 2025-02-26 14:13

import shortuuid.main
import shortuuidfield.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meal', '0012_alter_meal_price_alter_meal_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meal',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='meals'),
        ),
        migrations.AlterField(
            model_name='meal',
            name='slug',
            field=shortuuidfield.fields.ShortUUIDField(blank=True, db_index=True, default=shortuuid.main.ShortUUID.uuid, editable=False, max_length=22, unique=True),
        ),
    ]
