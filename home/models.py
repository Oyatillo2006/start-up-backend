from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to="images/service")
    text = models.TextField()

    def __str__(self):
        return self.name


class Staff(models.Model):
    full_name = models.CharField(max_length=50)
    image = models.FileField(upload_to="images/staff")
    job = models.CharField(max_length=50)
    social_media = models.CharField(max_length=250)

    def __str__(self):
        return self.full_name


class Blog(models.Model):
    title = models.CharField(max_length=250)
    subtitle = models.CharField(max_length=100)
    date = models.DateField()
    author = models.ForeignKey(Staff, on_delete=models.CASCADE)
    text = models.TextField()
    image = models.ImageField(upload_to="images/blog")

    def __str__(self):
        return self.title

class Album(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="image/album")

    def __str__(self):
        return self.name

