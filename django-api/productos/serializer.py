from rest_framework import serializers
from .models import Product, Review


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'nombre', 'profesion', 'correo', 'password', 'telefono',
                  'descripcion', 'imagen', 'categoria', 'reviews_info')
        ordering_fields = ['-id']
        ordering = ['-id']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'titulo', 'nombre', 'mensaje', 'creado')
        ordering_fields = ['id']
        ordering = ['-id']
