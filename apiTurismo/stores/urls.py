from django.urls import path
from .views import LugaresLisAPIView, LugarAPIView, LugarAPIViewByDepa

urlpatterns = [ path('', LugaresLisAPIView.as_view(),name="lugares_list"), 
    path('<int:id>/', LugarAPIView.as_view(), name="pizzeria_detail"),
    path('departamento/<str:departamento>/', LugarAPIViewByDepa.as_view(), name="all_depas")

]
