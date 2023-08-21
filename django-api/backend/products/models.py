from django.db import models
from datetime import datetime

from backend.users.models import User


# creating a directory for all the product images
def product_image_folder(instance, filename):
    return f'products/{instance.product.serial_number}/{filename}'


class Category(models.Model):
    name = models.CharField(max_length=80)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=80, null=False, blank=False)
    serial_number = models.CharField(max_length=10, unique=True)
    description = models.TextField()
    way_to_use = models.TextField()
    compound = models.ManyToManyField('Compound', related_name='compounds')
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    categories = models.ManyToManyField('Category')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to=product_image_folder)


class FavouriteProduct(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favourite_products')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='favourite_products')

    class Meta:
        unique_together = ('user', 'product')
        

class Compound(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name