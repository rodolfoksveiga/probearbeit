from rest_framework import serializers

from .models import Match

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = [
            'id',
            'attack_team1',
            'winner_team1',
            'meeting_id'
        ]

