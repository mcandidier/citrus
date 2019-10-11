from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User

from .models import Profile


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        read_only_fields = ['id', 'password',]

    # def create(self, validated_data):
    #     user = User.objects.create_user(**validated_data)
    #     raw_password = validated_data.get('password')
    #     user.set_password(raw_password)
    #     return user


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user', 'profile',)
        read_only_fields = ['user',]