from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from user.models import Person
from .serializer import PersonSerializer

class PersonViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = PersonSerializer
    queryset = Person.objects.all()
