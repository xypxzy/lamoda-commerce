from django.db import IntegrityError
from rest_framework import generics, viewsets, permissions
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter

from . import models
from . import serializers
from .permissions import IsAuthor, IsAdminOrReadOnly, IsProductAuthor, IsAuthorOrReadOnly


class ProductListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, ]
    filter_backends = [SearchFilter, OrderingFilter]

    # спецификация полей, по которым будет выполняться поиск и сортировка.
    search_fields = ['name', 'serial_number__iexact', 'user__username__iexact', 'compounds__name__iexact']
    ordering_fields = ['created_at', 'updated_at', 'price']

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)


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
    filter_backends = [SearchFilter, ]

    search_fields = ['name', ]


class ProductImagesCreateAPIView(generics.CreateAPIView):
    queryset = models.ProductImage.objects.all()
    serializer_class = serializers.ProductImageSerializer
    permission_classes = [IsProductAuthor, ]

    def perform_create(self, serializer):
        serializer.save(
            product=models.Product.objects.get(id=self.kwargs['product_id'])
        )
        


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


class CompoundViewSet(viewsets.ModelViewSet):
    queryset = models.Compound.objects.all()
    serializer_class = serializers.CompoundSerializer
    permission_classes = [permissions.IsAdminUser, ]