from django.urls import path
from . import views

urlpatterns = [
    path("", views.url_test, name="url_test")
]
