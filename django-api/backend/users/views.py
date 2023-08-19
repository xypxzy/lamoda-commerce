from rest_framework import generics
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework.generics import get_object_or_404

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

    
    def get_object(self):
        """
        Returns user instance so user doesn't have to search for his id. 
        """

        # getting current logged in user instance 
        obj = get_object_or_404(self.queryset, id=self.request.user.id)
        # checking user's permissions
        self.check_object_permissions(self.request, obj)
        return obj
    