from . import views
from django.urls import path

urlpatterns = [
    path("", views.home, name="home"),
    path("generate_image", views.generate_image, name="generate_image"),
]
