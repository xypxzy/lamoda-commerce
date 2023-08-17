from rest_framework import generics
from django.contrib.auth import get_user_model

from . import models
from . import serializers
from . import permissions
from backend.products.permissions import IsAuthor

User = get_user_model()


class UserRegisterAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.IsNotAuthenticatedOrReadOnly]


class UserRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [IsAuthor, ]
