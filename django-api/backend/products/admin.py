from django.contrib import admin

from . import models


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'name',
        'serial_number',
        'user',
        'get_categories',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'id',
        'name',
        'serial_number'
    ]
    search_fields = ['name', 'serial_number__iexact', 'user__exact']
    sortable_by = ['id', 'created_at', 'updated_at']

    def get_categories(self, obj):
        return ', '.join([c.category for c in obj.objects.all()])


    def get_fullname(self, obj):
        return obj.user.get_full_name()


@admin.register(models.ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(models.FavouriteProduct)
class FavouriteProductAdmin(admin.ModelAdmin):
    pass