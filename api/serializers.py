from rest_framework import serializers
from Pages.models import ZionistMyth,History,Articles

class MythsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ZionistMyth
        fields = ['id', 'title', 'content']


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ['id', 'date', 'title', 'description', 'link']

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ['id', 'title', 'description', 'content', 'image','category','tags']
