from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils.text import slugify
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


def get_image_filename(instance, filename):
    title = instance.title
    slug = slugify(title)
    return "user_avatar/%s-%s" % (slug, filename)


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    name = models.CharField(max_length=200, blank=True, null=True)
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    auth_img = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    isRecruiter = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin


class PersonDetail(models.Model):
    User = models.OneToOneField(User, on_delete=models.CASCADE)
    date_of_birth = models.DateField(blank=True, null=True)
    avatar = models.ImageField(
        blank=True, null=True, upload_to=get_image_filename, verbose_name='Image')
    company = models.CharField(max_length=200, blank=True, null=True)
    website = models.CharField(max_length=200, blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    designation = models.CharField(max_length=200, blank=True, null=True)
    skills = ArrayField(models.CharField(
        max_length=200, blank=True, null=True), blank=True, null=True, default=list)
    disablity = ArrayField(models.CharField(
        max_length=200, blank=True, null=True), blank=True, null=True, default=list)
    bio = models.TextField(blank=True, null=True)
    github = models.CharField(max_length=200, blank=True, null=True)
    experience = ArrayField(models.JSONField(
        blank=True, null=True), blank=True, null=True, default=list)
    education = ArrayField(models.JSONField(
        blank=True, null=True), blank=True, null=True, default=list)
    social = models.JSONField(blank=True, null=True)
    UDID = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return f'{self.User}'
