import django_filters
from Pages.models import ZionistMyth, Articles, History
from rest_framework import viewsets
from .serializers import MythsSerializer,HistorySerializer,ArticlesSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from django.db.models import Q, Case, When, IntegerField
class ArticleFilter(django_filters.FilterSet):
    tags = django_filters.CharFilter(method='filter_tags')
    class Meta:
        model = Articles
        fields = ['tags']

    def filter_tags(self, queryset, name, value):
        tag_list = value.split(',')
        return queryset.filter(tags__name__in=tag_list).distinct()

class MythViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows items to be viewed or edited.
    """
    queryset = ZionistMyth.objects.all()
    serializer_class = MythsSerializer

class HistoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows items to be viewed or edited.
    """
    queryset = History.objects.all()
    serializer_class = HistorySerializer
class ArticlesViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ArticlesSerializer
    queryset = Articles.objects.all()

    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = ArticleFilter

    ordering_fields = ['published_date']
    ordering = ['-published_date']

    def get_queryset(self):
        queryset = super().get_queryset()
        search = self.request.query_params.get('search')

        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) |
                Q(description__icontains=search)
            ).annotate(
                priority=Case(
                    When(title__icontains=search, then=0),
                    When(description__icontains=search, then=1),
                    default=2,
                    output_field=IntegerField()
                )
            ).order_by('priority', '-published_date')

        return queryset
