from rest_framework import serializers

from .models import Meeting

class MeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = [
            'id',
            'date_time',
            'local',
            'mode',
            'team1',
            'team2'
        ]

