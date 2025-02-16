# import requests
# from bs4 import BeautifulSoup
# from myapp.models import Category, Product
# from django.utils.text import slugify
#
# URL = "https://bellissimo.uz/menu"
#
#
# def scrape_products():
#     response = requests.get(URL)
#     if response.status_code != 200:
#         print("Xatolik: Sahifa yuklanmadi")
#         return
#
#     soup = BeautifulSoup(response.text, "html.parser")
#     categories = soup.find_all("div", class_="category-class")  # HTML strukturasiga qarab to'g'rilang
#
#     for category in categories:
#         cat_name = category.find("h2").text.strip()
#         cat_slug = slugify(cat_name)
#         cat_obj, created = Category.objects.get_or_create(name=cat_name, slug=cat_slug)
#
#         products = category.find_all("div", class_="product-class")  # HTML strukturasiga qarab to'g'rilang
#         for product in products:
#             name = product.find("h3").text.strip()
#             price = float(product.find("span", class_="price-class").text.replace(" ", "").replace("so'm", ""))
#             image_url = product.find("img")["src"]
#
#             Product.objects.create(
#                 category=cat_obj,
#                 name=name,
#                 price=price,
#                 image_url=image_url
#             )
#
#     print("Barcha mahsulotlar saqlandi!")
#
#
# scrape_products()
