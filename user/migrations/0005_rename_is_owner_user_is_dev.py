# Generated by Django 5.1.4 on 2025-02-15 18:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_alter_user_is_owner'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='is_owner',
            new_name='is_dev',
        ),
    ]
