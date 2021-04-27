from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-$%@b#&8-t_e4hq%jqhy%_ci&@fchk!lw9r!suia%o3$i_8c8tc'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Application definition
INSTALLED_APPS = [
    'corsheaders',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    'django.middleware.common.CommonMiddleware',
    'corsheaders.middleware.CorsMiddleware',  
]

ROOT_URLCONF = 'stockSearchBE.urls'

WSGI_APPLICATION = 'stockSearchBE.wsgi.application'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'public')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
            ],
        },
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Redis Settings
REDIS_HOST = 'localhost'
REDIS_PORT = 6379

CORS_ORIGIN_ALLOW_ALL = True

STATIC_URL = '/static/'
MEDIA_URL = '/media/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'public', "static"),  
)

print(os.path.join(BASE_DIR, 'public/'))