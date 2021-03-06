from rest_framework import serializers
from .models import User, PersonDetail
from rest_framework_simplejwt.tokens import RefreshToken



def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonDetail
        fields = '__all__'

