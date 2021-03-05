from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
from django.utils.text import slugify


def get_image_filename(instance, filename):
    title = instance.title
    slug = slugify(title)
    return "user_avatar/%s-%s" % (slug, filename)


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(
        blank=True, null=True, upload_to=get_image_filename, verbose_name='Image')
    company = models.CharField(max_length=200, blank=True, null=True)
    website = models.CharField(max_length=200, blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    designation = models.CharField(max_length=200, blank=True, null=True)
    skills = ArrayField(models.CharField(
        max_length=200, blank=True, null=True))
    bio = models.TextField(blank=True, null=True)
    github = models.CharField(max_length=200, blank=True, null=True)
    experience = ArrayField(models.JSONField(blank=True, null=True))
    education = ArrayField(models.JSONField(blank=True, null=True))
    social = models.JSONField(blank=True, null=True)
