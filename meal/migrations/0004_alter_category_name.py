# Generated by Django 5.1.4 on 2025-02-13 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meal', '0003_remove_category_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(max_length=32),
        ),
    ]
