from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import User
from .serializer import UserSerializer
from django.contrib.auth import login, authenticate
from rest_framework_simplejwt.tokens import RefreshToken


class PersonViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
    queryset = User.objects.all()


def login(request):
    user = authenticate(
        request, username=request.POST['email'], password=request.POST['password'])

    if user is None:
        return {'error': 'Invalid Credentials.'}

    login(request, user)
    token = RefreshToken.for_user(user)
    data = {
        'access': str(token.access_token),
        'id': user.id,
        'email': user.email,
        'username': user.first_name + user.last_name,
        'isRecruiter': user.person.isRecruiter
    }
    return data
