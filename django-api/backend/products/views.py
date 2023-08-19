from django.db import IntegrityError
from rest_framework import generics, viewsets, permissions
from rest_framework.response import Response

from . import models
from . import serializers
from .permissions import IsAuthor, IsAdminOrReadOnly, IsAuthorImages, IsAuthorOrReadOnly


class ProductListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, ]

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            instance = serializer.save(user=self.request.user)


class ProductRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer
    permission_classes = [IsAuthorOrReadOnly, ]

    def perform_update(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(
                user=self.request.user,
                product=self.queryset.get(id=self.kwargs['pk'])
            )    


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer
    # only admin user can create categories
    permission_classes = [IsAdminOrReadOnly]


class ProductImagesListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.ProductImage.objects.all()
    serializer_class = serializers.ProductImageSerializer
    permission_classes = [IsAuthorImages, ]


class FavouriteProductCreateAPIView(generics.CreateAPIView):
    queryset = models.FavouriteProduct.objects.all()
    serializer_class = serializers.FavouriteProductSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            try:
                serializer.save(
                    user=self.request.user,
                    product=models.Product.objects.get(id=self.kwargs['product_id'])
                )
            except IntegrityError:
                existing_favourite = models.FavouriteProduct.objects.filter(
                    user=self.request.user,
                    product_id=self.kwargs['product_id']
                )
                existing_favourite.delete()


class FavouriteProductListAPIView(generics.ListAPIView):
    queryset = models.FavouriteProduct.objects.all()
    serializer_class = serializers.FavouriteProductSerializer
    permission_classes = [IsAuthor, ]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
    

class FavouriteProductDestroyAPIView(generics.DestroyAPIView):
    queryset = models.FavouriteProduct.objects.all()
    serializer_class = serializers.FavouriteProductSerializer
    permission_classes = [IsAuthor, ]

