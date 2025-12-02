
from Pages.models import NavBar, OrganizationInfo, ZionistMyth, Projects, Categories, Articles, History, Tags, Pages, SlideShow
from rest_framework.permissions import IsAuthenticated
# Create your views here.

from rest_framework import viewsets
from .serializers import MythsSerializer,HistorySerializer

class MythViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows items to be viewed or edited.
    """
    queryset = ZionistMyth.objects.all()
    serializer_class = MythsSerializer
    
class HistoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows items to be viewed or edited.
    """
    queryset = History.objects.all()
    serializer_class = HistorySerializer