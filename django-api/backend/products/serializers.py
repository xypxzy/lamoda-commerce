import rest_framework.serializers as serializers

from . import models


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductImage
        fields = '__all__'
        read_only_fields = ['product']


class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = models.Product
        fields = '__all__'
        read_only_fields = ['user', 'created_at', 'updated_at']


class FavouriteProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FavouriteProduct
        fields = '__all__'
        read_only_fields = ['user', 'product']
        unique_together = ('user', 'product')
