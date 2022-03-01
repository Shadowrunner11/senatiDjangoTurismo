from cgitb import lookup
from django.shortcuts import render
from .serializers import LugarListSerializer
from rest_framework import generics
from .models import Lugar
# Create your views here.

class LugaresLisAPIView(generics.ListAPIView):
    queryset= Lugar.objects.all()
    serializer_class = LugarListSerializer

class LugarAPIView(generics.RetrieveAPIView):
    lookup_field="id"
    queryset= Lugar.objects.all()
    serializer_class = LugarListSerializer