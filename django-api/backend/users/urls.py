from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views
from backend.products.views import FavouriteProductListAPIView, FavouriteProductDestroyAPIView

urlpatterns = [
    path('register/', views.UserRegisterAPIView.as_view()),
    # token obtaining
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('auth/', include('rest_framework.urls')),

    path('', views.UserRetrieveUpdateAPIView.as_view()),
    path('favourite/', FavouriteProductListAPIView.as_view()),
    path('favourite/<int:pk>/delete/', FavouriteProductDestroyAPIView.as_view())
]
