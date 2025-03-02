import sqlite3
import os
import django
# Django sozlamalarini belgilash
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")  # Loyiha nomingizni to‘g‘ri qo‘ying
django.setup()
from meal.models import Category,Meal  # Django model importi



##-----------------------------------------------------------------------------
#
# source_db = sqlite3.connect("111.sqlite3")  # Manba baza
#
# category_ids = [28, 29, 30, 31, 33, 35, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
#
# cursor = source_db.cursor()


# #########category import
# cursor.execute(f"-- SELECT * FROM meal_category WHERE id IN ({','.join(map(str, category_ids))})")
# categories = cursor.fetchall()
# print(categories)
# # for category in categories:
# #     Category.objects.create(
# #         id=category[0],
# #         name=category[1],
# #         restaurant_id=category[2],
# #         image=category[3],
# #         slug=category[4],
# #         parent_id=category[5],
# #     )
# cursor.close()
# source_db.close()

# ###meal import


source_db = sqlite3.connect("111.sqlite3")
source_db.row_factory = sqlite3.Row  # Bu natijalarni dictionary (dict) sifatida olishni ta’minlaydi
cursor = source_db.cursor()

category_ids = [28, 29, 30, 31, 33, 35, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]

query = "SELECT * FROM meal_meal WHERE category_id IN ({})".format(",".join("?" * len(category_ids)))
cursor.execute(query, category_ids)

meals = [dict(row) for row in cursor.fetchall()]  # Har bir natijani dictionary formatiga o‘giradi
print(meals)

for meal in meals:
    Meal.objects.create(
        title=meal["title"],  # meal[1] o‘rniga, ustun nomi bo‘yicha olish yaxshiroq
        description=meal["description"],
        price=meal["price"],
        is_vegetarian=meal["is_vegetarian"],
        is_available=meal["is_available"],
        category_id=meal["category_id"],
        restaurant_id=meal["restaurant_id"],
        slug=meal["slug"],
        image=meal["image"],
    )
cursor.close()
source_db.close()