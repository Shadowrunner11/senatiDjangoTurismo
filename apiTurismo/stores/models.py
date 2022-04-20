from statistics import mode
from django.db import models

# Create your models here.
class Lugar(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1024)
    region = models.CharField(max_length=50)
    link_img = models.CharField(max_length=1024)
    departamento = models.CharField(max_length=500)