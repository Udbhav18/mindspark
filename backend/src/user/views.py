from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import User, Person
from .serializer import UserSerializer
from django.contrib.auth import login, authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

class PersonViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
    queryset = Person.objects.all()


@csrf_exempt
def loginView(request):
    extract = json.load(request)
    print(extract)
    user = authenticate(
        request, email=extract['email'], password=extract['password'])

    if user is None:
        return {'error': 'Invalid Credentials.'}

    login(request, user)
    token = RefreshToken.for_user(user)
    data = {
        'access': str(token.access_token),
        'id': user.id,
        'email': user.email,
        'isRecruiter': user.isRecruiter
    }
    return JsonResponse(data)
