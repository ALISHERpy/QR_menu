# Generated by Django 5.1.4 on 2025-02-15 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_user_is_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_owner',
            field=models.BooleanField(default=False, editable=False),
        ),
    ]
