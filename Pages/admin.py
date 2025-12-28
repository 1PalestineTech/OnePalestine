from django.contrib import admin

from .models import History,Tags,ZionistMyth,Categories,OrganizationInfo,Articles

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

class ArticlesAdmin(admin.ModelAdmin):
    list_display = ('title','description','category')
    search_fields = ('title','description','category__name')
    filter_horizontal = ('tags',) 
admin.site.register(History,HistoryAdmin)
admin.site.register(Tags,TagsAdmin)

admin.site.register(ZionistMyth,ZionistMythAdmin)
admin.site.register(Categories, CategoriesAdmin)
admin.site.register(OrganizationInfo)
admin.site.register(Articles,ArticlesAdmin)
