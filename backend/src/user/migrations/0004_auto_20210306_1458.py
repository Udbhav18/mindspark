# Generated by Django 3.1.7 on 2021-03-06 09:28

from django.conf import settings
import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion
import user.models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_user_auth_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='PersonDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_of_birth', models.DateField(blank=True, null=True)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to=user.models.get_image_filename, verbose_name='Image')),
                ('company', models.CharField(blank=True, max_length=200, null=True)),
                ('website', models.CharField(blank=True, max_length=200, null=True)),
                ('location', models.CharField(blank=True, max_length=200, null=True)),
                ('designation', models.CharField(blank=True, max_length=200, null=True)),
                ('skills', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=200, null=True), blank=True, null=True, size=None)),
                ('bio', models.TextField(blank=True, null=True)),
                ('github', models.CharField(blank=True, max_length=200, null=True)),
                ('experience', django.contrib.postgres.fields.ArrayField(base_field=models.JSONField(blank=True, null=True), blank=True, null=True, size=None)),
                ('education', django.contrib.postgres.fields.ArrayField(base_field=models.JSONField(blank=True, null=True), blank=True, null=True, size=None)),
                ('social', models.JSONField(blank=True, null=True)),
                ('UDID', models.CharField(blank=True, max_length=200, null=True)),
                ('isverified', models.BooleanField(default=False)),
                ('User', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='Person',
        ),
    ]
