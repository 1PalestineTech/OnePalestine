
from Pages.models import ZionistMyth, Articles, History,Tags,Categories
from rest_framework import viewsets
from .serializers import MythsSerializer,HistorySerializer,ArticlesSerializer,CategoriesSerializer,TagsSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from django.db.models import Q, Case, When, IntegerField
import django_filters
class ArticleFilter(django_filters.FilterSet):
    tags = django_filters.CharFilter(method='filter_tags')
    class Meta:
        model = Articles
        fields = ['tags']
    def filter_tags(self, queryset, name, value):
        if not value:
            return queryset

        tag_list = [v.strip() for v in value.split(',') if v.strip()]

        if not tag_list:
            return queryset

        return queryset.filter(tags__name__in=tag_list).order_by('id')
class MythViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ZionistMyth.objects.all()
    serializer_class = MythsSerializer
    pagination_class = None

class TagsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tags.objects.all()
    serializer_class = TagsSerializer
    pagination_class = None


class CategoriesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer
    pagination_class = None


class HistoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = History.objects.all()
    serializer_class = HistorySerializer
    pagination_class = None

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
