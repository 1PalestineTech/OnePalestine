from django.urls import path
from . import views

app_name = 'Pages'

urlpatterns = [
    path('', views.index, name='index'),
]