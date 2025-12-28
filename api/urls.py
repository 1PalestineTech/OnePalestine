from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register(r'myths', views.MythViewSet) 
router.register(r'history', views.HistoryViewSet) 
router.register(r'articles', views.ArticlesViewSet) 
router.register(r'tags', views.TagsViewSet) 
router.register(r'categories', views.CategoriesViewSet) 
# The API URLs are now determined automatically by the router.
urlpatterns = router.urls

