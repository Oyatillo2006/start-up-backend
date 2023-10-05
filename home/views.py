from django.shortcuts import render
from .models import Service, Staff, Album, Blog

def home(request):

    data = {
        "services": Service.objects.all(),
        "staff": Staff.objects.all(),
        "album": Album.objects.all(),
        "blogs": Blog.objects.all(),
    }
    return render(request, 'index.html', data)
