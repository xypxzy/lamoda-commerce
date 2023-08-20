from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
# router.register('product', views.ProductViewSet)
router.register('category', views.CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('product/', views.ProductListCreateAPIView.as_view()),
    path('product/<int:pk>/', views.ProductRetrieveUpdateDestroyAPIView.as_view()),
    path('product/<int:product_id>/images/', views.ProductImagesCreateAPIView.as_view()),
    path('product/<int:product_id>/favourite/', views.FavouriteProductCreateAPIView.as_view()),
]
