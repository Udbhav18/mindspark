from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import User, PersonDetail
from .serializer import UserSerializer
from django.contrib.auth import login, authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
import cv2
import face_recognition
import base64
import numpy as np
from .utils import in_disability_db


class PersonDetailViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
    queryset = PersonDetail.objects.all()


@csrf_exempt
def loginView(request):
    extract = json.load(request)
    # print(extract)
    checkuser = User.objects.get(email=extract['email'])

    if checkuser is None:
        return JsonResponse({'error': 'Invalid Credentials.'})

    if extract['img'] != '':
        if not checkuser.auth_img:
            return JsonResponse({'error': 'FaceID does not exist!'})

        # img = base64.b64decode(extract['img'].split(',')[1])
        # img.save('image.png', 'PNG')
        # npimg = np.frombuffer(img, dtype=np.uint8)
        # img = cv2.imdecode(npimg, flags=cv2.IMREAD_COLOR)
        # rgb = cv2.cvtColor(npimg, cv2.COLOR_BGR2RGB)

        img_data = base64.b64decode(extract['img'].split(',')[1])
        nparr = np.fromstring(img_data, np.uint8)
        img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        boxes = face_recognition.face_locations(img_np, model='hog')
        encodings1 = face_recognition.face_encodings(img_np, boxes)

        # read 2nd image and store encodings
        # img = base64.b64decode(checkuser.auth_img.split(',')[1])
        # npimg = np.frombuffer(img, dtype=np.uint8)
        # img = cv2.imdecode(npimg, flags=cv2.IMREAD_COLOR)
        # rgb = cv2.cvtColor(npimg, cv2.COLOR_BGR2RGB)

        img_data = base64.b64decode(checkuser.auth_img.split(',')[1])
        nparr = np.fromstring(img_data, np.uint8)
        img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        boxes = face_recognition.face_locations(img_np, model='hog')
        encodings2 = face_recognition.face_encodings(img_np, boxes)

        # print(encodings1, encodings2)
        # now compare two encodings
        # optionally pass threshold, by default it is 0.6

        matches = face_recognition.compare_faces(
            np.array(encodings1), np.array(encodings2))
        # print(matches)
        if len(matches) != 0:
            if matches[0]:
                login(request, checkuser, backend='django.contrib.auth.backends.ModelBackend')
                token = RefreshToken.for_user(checkuser)
                data = {
                    'message': 'Welcome ' + checkuser.email,
                    'access': str(token.access_token),
                    'id': checkuser.id,
                    'email': checkuser.email,
                    'isRecruiter': checkuser.isRecruiter
                }
                return JsonResponse(data)
            return JsonResponse({'error': 'Invalid FaceID.'})

    user = authenticate(
        request, email=extract['email'], password=extract['password'])

    if user is None:
        return JsonResponse({'error': 'Invalid Credentials.'})

    login(request, user)
    token = RefreshToken.for_user(user)
    data = {
        'access': str(token.access_token),
        'id': user.id,
        'email': user.email,
        'isRecruiter': user.isRecruiter
    }
    return JsonResponse(data)


@csrf_exempt
def signupView(request):
    extract = json.load(request)
    user = User(email=extract['email'], auth_img=extract['img'])
    user.set_password(extract['password'])
    details = PersonDetail()
    user.save()
    details.User = user
    details.save()
    token = RefreshToken.for_user(user)
    data = {
        'access': str(token.access_token),
        'id': user.id,
        'email': user.email,
        'isRecruiter': user.isRecruiter
    }
    return JsonResponse(data)


@csrf_exempt
def verifyUDID(request):
    extract = json.load(request)
    check = in_disability_db(aadhaar=extract['aadhaar'], district=extract['district'], state=extract['indianState'])
    # print(check)
    return JsonResponse({'check': check})


@csrf_exempt
def updateProfile(request):
    extract = json.load(request)
    print(extract)
    details = request.user.persondetail
    details.company=extract['company']
    details.website=extract['website']
    details.bio=extract['bio']
    details.location=extract['location']
    details.designation=extract['status']
    details.skills=extract['skills'].split(',')
    details.social={
        'twitter': extract['twitter'],
        'facebook': extract['facebook'],
        'linkedin': extract['linkedin'],
        'youtube': extract['youtube'],
        'instagram': extract['instagram']
    }
    details.save()
    print(details)
    data = {
        'company': details.company,
        'website': details.website,
        'location': details.location,
        'status': details.designation,
        'skills': details.skills,
        'githubusername': details.github,
        'bio': details.bio,
        'social': details.social,
    }
    return JsonResponse(data)
