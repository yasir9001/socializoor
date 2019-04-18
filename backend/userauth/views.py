from django.shortcuts import render
from rest_framework import viewsets

from userauth.models import User
from userauth.serializers import UserSerializer

class UserViewSets(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
