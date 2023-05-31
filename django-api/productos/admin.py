from django.contrib import admin
from .models import Product, Categoria, Review

# Register your models here.


class Productos_Admin(admin.ModelAdmin):
    readonly_fields = ('creado', 'editado')
    search_fields = ('nombre', 'profesion', 'telefono',
                     'correo', 'descripcion', 'precio', 'categoria__nombre')
    list_display = ('nombre', 'profesion', 'telefono',
                    'correo', 'descripcion', 'precio', 'categorias_info', 'reviews_info')
    ordering = ('-creado',)


class Categorias_Admin(admin.ModelAdmin):
    readonly_fields = ('creado', 'editado')
    search_fields = ('nombre',)
    list_display = ('nombre',)
    ordering = ('-creado',)


class Reviews_Admin(admin.ModelAdmin):
    model = Review
    readonly_fields = ('creado', 'editado')
    search_fields = ('titulo', 'nombre', 'mensaje')
    list_display = ('titulo', 'nombre', 'mensaje')
    ordering = ('-creado',)


admin.site.register(Product, Productos_Admin)
admin.site.register(Categoria, Categorias_Admin)
admin.site.register(Review, Reviews_Admin)
