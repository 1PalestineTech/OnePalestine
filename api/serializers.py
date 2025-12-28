from rest_framework import serializers
from Pages.models import ZionistMyth,History,Articles,Tags,Categories

class MythsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ZionistMyth
        fields = ['id', 'title', 'content']


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ['id', 'date', 'title', 'description', 'link']

class ArticlesSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    tags = serializers.StringRelatedField(many=True)
    class Meta:
        model = Articles
        fields = ['id', 'title', 'description', 'content', 'image','category','tags']

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = '__all__'

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'
