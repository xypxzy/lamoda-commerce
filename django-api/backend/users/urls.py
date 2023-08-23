from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views
from backend.products.views import FavouriteProductListAPIView, FavouriteProductDestroyAPIView

urlpatterns = [
    path('register/', views.UserRegisterAPIView.as_view()),
    path('auth/', include('rest_framework.urls')),

    # jwt token
    path('token/', TokenObtainPairView.as_view(), name='token_pair_obtain'), 
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), 

    path('', views.UserRetrieveUpdateAPIView.as_view()),
    path('favourite/', FavouriteProductListAPIView.as_view()),
    path('favourite/<int:pk>/delete/', FavouriteProductDestroyAPIView.as_view())
]
