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
    compounds = serializers.SerializerMethodField()
    categories = serializers.SerializerMethodField()

    class Meta:
        model = models.Product
        fields = ('id', 'name', 'serial_number', 'description', 'way_to_use', 'compounds', 
                  'price', 'user', 'categories', 'created_at', 'updated_at', 'images') 
        read_only_fields = ['user', 'created_at', 'updated_at']

    def get_compounds(self, obj):
        queryset = models.Compound.objects.filter(compounds=obj)
        return [CompoundSerializer(comp).data['name'] for comp in queryset]
    
    def get_categories(self, obj):
        queryset = models.Category.objects.filter(product=obj)
        return [CategorySerializer(cat).data['name'] for cat in queryset]


class FavouriteProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FavouriteProduct
        fields = '__all__'
        read_only_fields = ['user', 'product']
        unique_together = ('user', 'product')


class CompoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Compound
        fields = '__all__'
