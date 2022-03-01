from django.urls import path
from .views import LugaresLisAPIView, LugarAPIView

urlpatterns = [ path('', LugaresLisAPIView.as_view(),name="lugares_list"), 
    path('<int:id>/', LugarAPIView.as_view(), name="pizzeria_detail")
]
