from django.contrib import admin
from .models import Service, Staff, Blog, Album

admin.site.register([Service, Staff, Blog, Album])