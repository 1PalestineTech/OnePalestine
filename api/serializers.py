from rest_framework import serializers
from Pages.models import ZionistMyth,History

class MythsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ZionistMyth
        fields = ['id', 'title', 'content']


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ['id', 'date', 'title', 'description', 'link']