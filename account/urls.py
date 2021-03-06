from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import AuthViewSet, UserViewSet, ProfileView

login =  AuthViewSet.as_view({'post': 'login_user'})
register =  AuthViewSet.as_view({'post': 'register_user'})

users_url = UserViewSet.as_view({
    'get': 'retrieve',
    'post': 'update',
})

urlpatterns = [
    path('accounts/register/', register),
    path('accounts/login/', login),
    path('accounts/', users_url),
    path('accounts/update/', ProfileView.as_view()),
]
