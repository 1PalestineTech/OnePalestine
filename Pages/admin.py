from django.contrib import admin

from .models import History,Tags,ZionistMyth,Categories,OrganizationInfo

class CategoriesAdmin(admin.ModelAdmin):
    list_display = ('name',) 
    search_fields = ('name',) 

class TagsAdmin(admin.ModelAdmin):
    list_display = ('name',) 
    search_fields = ('name',)

class HistoryAdmin(admin.ModelAdmin):
    list_display = ('date','title','link') 
    search_fields = ('name','title')

class ZionistMythAdmin(admin.ModelAdmin):
    list_display = ('title','content') 
    search_fields = ('title','content')

admin.site.register(History,HistoryAdmin)
admin.site.register(Tags,TagsAdmin)

admin.site.register(ZionistMyth,ZionistMythAdmin)
admin.site.register(Categories, CategoriesAdmin)
admin.site.register(OrganizationInfo)
