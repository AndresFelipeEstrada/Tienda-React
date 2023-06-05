from rest_framework import serializers
from .models import Product, Categoria, Review


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'nombre', 'profesion', 'correo', 'password',
                  'descripcion', 'precio', 'imagen', 'categorias_info', 'reviews_info')
        ordering_fields = ['-id']
        ordering = ['-id']


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id', 'nombre')
        ordering_fields = ['id']
        ordering = ['-id']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'titulo', 'nombre', 'mensaje', 'creado')
        ordering_fields = ['id']
        ordering = ['-id']
