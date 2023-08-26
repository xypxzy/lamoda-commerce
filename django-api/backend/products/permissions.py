from rest_framework.permissions import BasePermission, SAFE_METHODS

from .models import Product


# permission that checks if the user is authored
class IsAuthor(BasePermission):
    def has_object_permission(self, request, view, obj):
        return bool(
            request.user and
            request.user.is_authenticated and
            request.user == obj.user
        )

    def has_permission(self, request, view):
        return bool(
            request.user and
            request.user.is_authenticated
        )


class IsProductAuthor(BasePermission):
    def has_permission(self, request, view):
        product = Product.objects.get(id=view.kwargs['product_id'])
        user_object = product.user
        return bool(
            request.user and
            request.user.is_authenticated and
            user_object.id == request.user.id
        )

class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        return bool(
            # GET, HEAD, OPTIONS methods that do not influence data
            request.method in SAFE_METHODS or
            request.user and
            # is_staff to check if the user is admin
            request.user.is_staff
        )

class IsAuthorOrReadOnly(IsAuthor):
    def has_object_permission(self, request, view, obj):
        return bool(
            request.method in SAFE_METHODS or
            (request.user.is_authenticated and
            request.user == obj.user)
        )