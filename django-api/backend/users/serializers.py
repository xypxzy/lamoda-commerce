from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        # here i'm putting form fields in order
        fields = ('username', 'password', 'password2', 'first_name', 'last_name',
                  'email', 'profile_image')
        extra_kwargs = {
            # to make the password invisible after the user is created
            'password': {'write_only': True},
        }

    # checking if passwords match
    def validate(self, data):
        password1 = data.get('password')
        password2 = data.pop('password2')

        if password1 != password2:
            raise serializers.ValidationError('Passwords do not match.')
        return data

    # validating the password
    def validate_password(self, password):
        if len(password) < 8:
            # raising an error in case the password is too short
            raise serializers.ValidationError('Пароль должен быть длиннее 8 символов')
        if not any(value.isdigit() for value in password):
            # raising an error in case password doesn't contain any numbers
            raise serializers.ValidationError('В пароле должны присутсвовать цифры')
        if not any(value.isupper() for value in password):
            # raising an error in case password doesn't contain any uppercase letters
            raise serializers.ValidationError('В пароле должны быть заглавные буквы')
        if not any(value.islower() for value in password):
            # raising an error in case password doesn't contain any lowercase letters
            raise serializers.ValidationError('В пароле должны быть прописные буквы')
        return password

    # overwriting create method to save the model properly
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    