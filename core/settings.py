

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-p)l#j&%-@y^peje^jzyqw!4&w64%o+gk$d=!9xe3z&e!k)=s3g'

# settings.py

DEBUG = True

# ALLOWED_HOSTS = ['localhost', '127.0.0.1', 'your-domain.com']
ALLOWED_HOSTS = ['*']


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
    'https://digitalmenu.uz',
]

# CORS_ALLOWED_ORIGINS = [
#     'https://web-production-8508.up.railway.app',
#     'https://yourcustomdomain.com'
# ]
DATA_UPLOAD_MAX_MEMORY_SIZE = 10485760  # 10MB (adjust as needed)

AUTH_USER_MODEL='user.User'

# bot
TELEGRAM_BOT_TOKEN = '6873534034:AAFsF_IxGbRAauDkM7M38CvP611YYV8tm-M'
TELEGRAM_CHAT_ID = '-4770744934'

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

####################################deploy settings##################################
