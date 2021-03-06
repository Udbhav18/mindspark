from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth.views import LogoutView
from numpy import add
from .views import PersonDetailViewSet, add_education, add_experience, signupView, verifyUDID, updateProfile, user_profile
from rest_framework.routers import DefaultRouter
from django.contrib.auth.views import LogoutView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)
from . import views
router = DefaultRouter()
router.register('', PersonDetailViewSet, basename='person')

urlpatterns = [
    path('', TemplateView.as_view(template_name="user/index.html")),
    path('accounts/', include('allauth.urls')),
    path('logout/', LogoutView.as_view()),
    path('api/', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_refresh'),
    path('login/', views.loginView, name='login'),
    path('signup/', signupView, name='signup'),
    path('verifyUDID/', verifyUDID, name='verifyID'),
    path('update/', updateProfile, name='updateProfile'),
    # path('logoutall/', LogoutAllView.as_view(), name='auth_logout_all'),
    path('addExperience/', add_experience, name='add_experience'),
    path('addEducation/', add_education, name='add_education'),
    path('profile/', user_profile, name='profile'),
]
