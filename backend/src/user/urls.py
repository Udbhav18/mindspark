from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth.views import LogoutView
from .views import PersonViewSet
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

router = DefaultRouter()
router.register('', PersonViewSet, basename='person')

urlpatterns = [
    path('', TemplateView.as_view(template_name="user/index.html")),
    path('accounts/', include('allauth.urls')),
    path('logout', LogoutView.as_view()),
    path('api/', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_refresh'),
]
