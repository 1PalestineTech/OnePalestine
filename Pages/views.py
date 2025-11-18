from django.shortcuts import render
from .models import NavBar, OrganizationInfo, ZionistMyth, Projects, Categories, Articles, History, Tags, Pages, SlideShow


# Create your views here.


def index(request):
    slides = SlideShow.objects.filter(page__name="Index").order_by('id')
    first_slide = slides.first()
    rest_slides = slides[1:]
    slide_controller= [{"date":slide.date,"url":slide.image.url,"id":slide.id} for slide in slides]
    
    context = {
        'links': NavBar.objects.all(),
        'slides': slides,
        'slide_controller': slide_controller,
        'first_slide': first_slide,
        'rest_slides': rest_slides,
    }
    return render(request, 'Pages/index.html',context)

def history(request):
    history = History.objects.all().order_by('id')
    context = {
        'right': history[::2],
        'left': history[1::2],
        'page': Pages.objects.get(name="History"),
        'links': NavBar.objects.all()
    }
    return render(request, 'Pages/history.html',context)

def myths(request):
    myths = ZionistMyth.objects.all().order_by('id')
    context = {
        'myths': myths,
        'page': Pages.objects.get(name="Zionist Myths"),
        'links': NavBar.objects.all()
    }
    return render(request, 'Pages/myths.html',context)


def about(request):
    context = {
        'page': Pages.objects.get(name="About"),
        'links': NavBar.objects.all()
    }
    return render(request, 'Pages/about.html',context)


def action(request):
    orgs = OrganizationInfo.objects.all().order_by('id')
    context = {
        'orgs': orgs,
        'page': Pages.objects.get(name="Take Action"),
        'links': NavBar.objects.all()
    }
    return render(request, 'Pages/take_action.html',context)

def organizations(request):
    orgs = OrganizationInfo.objects.all().order_by('id')
    context = {
        'orgs': orgs,
        'page': Pages.objects.get(name="Organizations"),
        'links': NavBar.objects.all()
    }
    return render(request, 'Pages/organizations.html',context)