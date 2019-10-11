from django.shortcuts import render, get_object_or_404
from django.contrib.auth import authenticate

from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser

from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from .serializer import UserSerializer, ProfileSerializer

from .models import Profile

class AuthViewSet(ViewSet):
    """ User login/register view
    """

    permission_classes = (AllowAny,)
    serializer = UserSerializer

    def login_user(self, *args, **kwargs):
        username = self.request.data.get('username', None)
        password = self.request.data.get('password', None)
        if username and password:
            user = authenticate(username=username, password=password)
            if user:
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key}, status=200)
        print('error')
        return Response(status=400)

    def register_user(self, *args, **kwargs):
        serializer = self.serializer(data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)


class UserViewSet(ViewSet):
    """ User viewsets
    """
    authentication_classes = (TokenAuthentication,)
    serializer = UserSerializer

    def retrieve(self, *args, **kwargs):
        serializer = self.serializer(self.request.user)
        return Response(serializer.data, status=200)
    
    def update(self, *args, **kwargs):
        pass


class ProfileView(APIView):
    """ Profle view
        update user profile avatar
    """

    authentication_classes = (TokenAuthentication,)
    serializer = ProfileSerializer
    parser_classes = (MultiPartParser,)

    def post(self, *args, **kwargs):
        profile, _ = Profile.objects.get_or_create(
            user=self.request.user
        )    
        serializer = self.serializer(profile, data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)