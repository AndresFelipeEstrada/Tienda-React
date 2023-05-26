from django.urls import path
from .views import Productos_APIView, Productos_APIView_List, Productos_APIView_Detail, Categoria_APIView, Categoria_APIView_Detail, Categoria_APIView_List

urlpatterns = [
    path('v1/product/add', Productos_APIView.as_view()),
    path('v1/product', Productos_APIView_List.as_view()),
    path('v1/product/<int:pk>', Productos_APIView_Detail.as_view()),
    path('v1/category/add', Categoria_APIView.as_view()),
    path('v1/category', Categoria_APIView_List.as_view()),
    path('v1/category/<int:pk>', Categoria_APIView_Detail.as_view()),
]
