# Generated by Django 5.1.4 on 2025-01-04 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meal', '0003_category_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='slug',
            field=models.SlugField(max_length=25, unique=True),
        ),
    ]
