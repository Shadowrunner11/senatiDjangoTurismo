from rest_framework import serializers
from .models import Lugar

class LugarListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lugar
        fields = ['id','name', 'description', 'link_img', 'region', 'departamento']

