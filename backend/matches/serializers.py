from rest_framework import serializers

from .models import Match

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = [
            'id',
            'position_team1',
            'result',
            'meeting_id'
        ]

