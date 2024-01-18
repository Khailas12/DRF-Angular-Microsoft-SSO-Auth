from django.urls import path
from . import views


urlpatterns = [
    path('microsoft_token', views.MicrosoftAuth.validate_microsoft_token, name='verify-microsoft-token'),
]