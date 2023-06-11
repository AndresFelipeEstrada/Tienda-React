from django.urls import path
from .views import Productos_APIView, Productos_APIView_List, Productos_APIView_Detail, Review_APIView, Review_APIView_List

urlpatterns = [
    path('v1/product/add', Productos_APIView.as_view()),
    path('v1/product', Productos_APIView_List.as_view()),
    path('v1/product/<int:pk>', Productos_APIView_Detail.as_view()),
    path('v1/product/<int:pk>/reviews/add',
         Review_APIView.as_view(), name='addReview'),
    path('v1/product/<int:pk>/reviews/', Review_APIView_List.as_view())
]
