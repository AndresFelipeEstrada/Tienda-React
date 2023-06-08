from django.db import models
from django.contrib.auth.models import User


class Categoria(models.Model):
    nombre = models.CharField(max_length=100, verbose_name='Nombre')
    creado = models.DateTimeField(
        auto_now_add=True, verbose_name='Fecha de creacion')
    editado = models.DateTimeField(
        auto_now_add=True, verbose_name='Fecha de actualizacion')

    class Meta:
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'

    def __str__(self):
        return self.nombre


class Product(models.Model):
    nombre = models.CharField(
        max_length=50, blank=False, verbose_name='Nombre')
    profesion = models.CharField(
        max_length=50, blank=False, verbose_name='Profesion')
    telefono = models.CharField(
        max_length=15, blank=False, verbose_name='Telefono')
    correo = models.EmailField(unique=True, verbose_name='Correo Electronico')
    password = models.CharField(
        max_length=128, null=False, blank=False, default='default_password', verbose_name='Contrasena')
    descripcion = models.TextField(
        max_length=100, blank=False, verbose_name='Descripcion')
    precio = models.IntegerField(verbose_name='precio', blank=False)
    imagen = models.ImageField(upload_to="images/", null=False)
    creado = models.DateTimeField(
        auto_now_add=True, verbose_name='fecha de creacion')
    editado = models.DateTimeField(
        auto_now=True, verbose_name='fecha de actualizacion')
    categoria = models.ManyToManyField(
        Categoria, verbose_name='Categorias', blank=True, related_name="productos")

    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'

    def __str__(self):
        return self.nombre

    def categorias_info(self):
        categorias = self.categoria.all()
        return [{"id": categoria.id, "nombre": categoria.nombre} for categoria in categorias]

    def reviews_info(self):
        reviews = self.review_set.all()
        return [{"id": review.id, "titulo": review.titulo, "nombre": review.nombre, "mensaje": review.mensaje} for review in reviews]


class Review(models.Model):
    titulo = models.CharField(max_length=50, verbose_name='titulo')
    nombre = models.CharField(
        max_length=100, verbose_name='Nombre', default='Anonimo')
    mensaje = models.CharField(max_length=800, verbose_name='mensaje')
    creado = models.DateTimeField(
        auto_now_add=True, verbose_name='Fecha de creacion')
    editado = models.DateTimeField(
        auto_now_add=True, verbose_name='Fecha de actualizacion')
    producto = models.ForeignKey(
        Product, on_delete=models.CASCADE, null=False, blank=False)

    class Meta:
        verbose_name = 'Review'
        verbose_name_plural = 'Reviews'

    def __str__(self):
        return self.nombre
