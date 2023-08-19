from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

from . import views
from backend.products.views import FavouriteProductListAPIView, FavouriteProductDestroyAPIView

urlpatterns = [
    path('register/', views.UserRegisterAPIView.as_view()),
    path('token/', obtain_auth_token),
    path('auth/', include('rest_framework.urls')),

    path('', views.UserRetrieveUpdateAPIView.as_view()),
    path('favourite/', FavouriteProductListAPIView.as_view()),
    path('favourite/<int:pk>/delete/', FavouriteProductDestroyAPIView.as_view())
]
