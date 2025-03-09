
from datetime import timedelta
from pathlib import Path
from dotenv import load_dotenv
import os


BASE_DIR = Path(__file__).resolve().parent.parent
# settings.py

DEBUG = True

# ALLOWED_HOSTS = ['*']
ALLOWED_HOSTS = ['127.0.0.1','localhost','digitalmenu.uz', 'www.digitalmenu.uz']

load_dotenv()
SECRET_KEY = os.getenv('SECRET_KEY')

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # lacal
    'meal',
    'user',
    'restaurant',
    'flutter',

    ######extra
    'rest_framework',
    'rest_framework_simplejwt',
    # 'drf_yasg',
    'drf_spectacular',
    'drf_spectacular_sidecar',
    'django_filters',
    'corsheaders',

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates']
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.i18n'
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/


# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
#######################################################################

REST_FRAMEWORK = {

    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',

    'DEFAULT_AUTHENTICATION_CLASSES': [
            'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_PAGINATION_CLASS': 'core.pagination.StandardResultsSetPagination',
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=120),  # 120 kunlik access token
    'REFRESH_TOKEN_LIFETIME': timedelta(days=120),
}

SPECTACULAR_SETTINGS = {
    'TITLE': 'Digital menu api manual',
    'DESCRIPTION': 'description here',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
    # OTHER SETTINGS
    'SWAGGER_UI_DIST': 'SIDECAR',  # shorthand to use the sidecar instead
    'SWAGGER_UI_FAVICON_HREF': 'SIDECAR',
    'REDOC_DIST': 'SIDECAR',
}


CRISPY_TEMPLATE_PACK = 'bootstrap5'
CRISPY_ALLOWED_TEMPLATE_PACK = 'bootstrap5'

STATIC_URL = '/static/'
STATICFILES_DIRS = (str(BASE_DIR.joinpath("static")),)
STATIC_ROOT = str(BASE_DIR.joinpath("staticfiles"))

MEDIA_URL = '/media/'
MEDIA_ROOT = str(BASE_DIR.joinpath("media"))

CORS_ALLOW_METHODS = [
    "DELETE",
    "GET",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT",
]

CORS_ALLOWED_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOWED_ORIGINS = [
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    'http://digitalmenu.uz',
    "https://digitalmenu.uz",
    "https://www.digitalmenu.uz",
]

DATA_UPLOAD_MAX_MEMORY_SIZE = 10485760  # 10MB (adjust as needed)

AUTH_USER_MODEL='user.User'

# bot
TELEGRAM_BOT_TOKEN=os.getenv("TELEGRAM_BOT_TOKEN")
TELEGRAM_CHAT_ID=os.getenv("TELEGRAM_CHAT_ID")

from django.utils.translation import gettext_lazy as _

LANGUAGES = [
    ('uz-latn', _('O‘zbek (Lotin)')),
    ('uz-cyrl', _('Ўзбек (Кирилл)')),
    ('ru', _('Русский')),
    ('en', _('English')),
    ('tr', _('Turkish')),
]
LANGUAGE_CODE = "uz-latn"  # 🔥 Asosiy tilni O‘zbek Lotin qilib qo‘yamiz
TIME_ZONE = "UTC"
USE_I18N = True
USE_L10N = True
LOCALE_PATHS = [
    BASE_DIR/'locale/',
]

CSRF_TRUSTED_ORIGINS = [
    "https://digitalmenu.uz",
    "https://www.digitalmenu.uz",
]

####################################deploy settings##################################
# ALLOWED_HOSTS = [
#     'web-production-8508.up.railway.app',
#     'yourcustomdomain.com'
# ]
# CORS_ALLOWED_ORIGINS = [
#     'https://web-production-8508.up.railway.app',
#     'https://yourcustomdomain.com'
# ]
#
# CORS_ALLOW_METHODS = [
#     "DELETE",
#     "GET",
#     "OPTIONS",
#     "PATCH",
#     "POST",
#     "PUT",
# ]
#
# CORS_ALLOWED_HEADERS = [
#     'accept',
#     'accept-encoding',
#     'authorization',
#     'content-type',
#     'dnt',
#     'origin',
#     'user-agent',
#     'x-csrftoken',
#     'x-requested-with',
# ]
# CSRF_TRUSTED_ORIGINS = [
#     'https://web-production-8508.up.railway.app',
#     'https://yourcustomdomain.com'
# ]
#
# # Xavfsizlik sozlamalari
# SECURE_SSL_REDIRECT = True  # HTTPS ga yo'naltirish
# SESSION_COOKIE_SECURE = True  # Faqat HTTPS orqali cookie yuborish
# CSRF_COOKIE_SECURE = True  # Faqat HTTPS orqali CSRF cookie yuborish
# SECURE_HSTS_SECONDS = 31536000  # HSTS (HTTP Strict Transport Security) ni yoqish
# SECURE_HSTS_INCLUDE_SUBDOMAINS = True  # Subdomains uchun ham HSTS ni qo'llash
# SECURE_HSTS_PRELOAD = True  # HSTS preload ro'yxatiga qo'shish
# SECURE_CONTENT_TYPE_NOSNIFF = True  # Content-Type ni tekshirish
# SECURE_BROWSER_XSS_FILTER = True  # XSS hujumlaridan himoya qilish
# X_FRAME_OPTIONS = 'DENY'  # Saytni iframe orqali yuklashni bloklash

####################################deploy settings##################################
