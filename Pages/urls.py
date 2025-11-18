from django.urls import path
from . import views

app_name = 'Pages'

urlpatterns = [
    path('', views.index, name='index'),
    path('history', views.history, name='history'),
    path('myths', views.myths, name='myths'),
    path('take_action', views.action, name='actions'),
    path('articles', views.index, name='articles'),
    path('projects', views.index, name='projects'),
    path('resources', views.index, name='resources'),
    path('about', views.about, name='about'),
    path('organizations', views.organizations, name='organizations')
    
]