from rest_framework import serializers

from .models import Match

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = [
            'id',
            'atack_team1',
            'winner_team1',
            'goals_team1',
            'goals_team2',
            'meeting_id'
        ]

