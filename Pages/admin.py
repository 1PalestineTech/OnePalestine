from django.contrib import admin

from .models import History,Tags,Pages,NavBar,ZionistMyth,Categories,OrganizationInfo,SlideShow

class CategoriesAdmin(admin.ModelAdmin):
    list_display = ('name',) 
    search_fields = ('name',) 

class TagsAdmin(admin.ModelAdmin):
    list_display = ('name',) 
    search_fields = ('name',)

class HistoryAdmin(admin.ModelAdmin):
    list_display = ('date','title','link') 
    search_fields = ('name','title')

class NavBarAdmin(admin.ModelAdmin):
    list_display = ('label','url') 
    search_fields = ('label',)

class ZionistMythAdmin(admin.ModelAdmin):
    list_display = ('title','content') 
    search_fields = ('title','content')

class PagesAdmin(admin.ModelAdmin):
    list_display = ('name','description') 
    search_fields = ('name','description')

class SlideShowAdmin(admin.ModelAdmin):
    list_display = ('page','title','date') 
    search_fields = ('title',)

admin.site.register(History,HistoryAdmin)
admin.site.register(Tags,TagsAdmin)

admin.site.register(Pages,PagesAdmin)
admin.site.register(NavBar,NavBarAdmin)
admin.site.register(ZionistMyth,ZionistMythAdmin)
admin.site.register(Categories, CategoriesAdmin)
admin.site.register(OrganizationInfo)
admin.site.register(SlideShow, SlideShowAdmin)