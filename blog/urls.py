from django.urls import path
from . import views

urlpatterns = [
    path('',views.main ) ,
    path('gallery',views.gallery),
    path('skills',views.skills),
    path('projects',views.projects),
    path('hobbies',views.hobbies)
    ]