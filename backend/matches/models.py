from django.utils.translation import gettext_lazy as _
from django.db.models import (
    CASCADE,
    Model,
    BooleanField,
    PositiveIntegerField,
    ForeignKey
)

from meetings.models import Meeting

class Match(Model):
    attack_team1 = BooleanField(
        _('Was Team 1 attacking?')
    )
    winner_team1 = BooleanField(
        _('Did Team 1 win?')
    )
    goals_team1 = PositiveIntegerField(
        _('Goals scored by Team 1')
    )
    goals_team2 = PositiveIntegerField(
        _('Goals scored by Team 2')
    )
    meeting_id = ForeignKey(
        Meeting,
        on_delete=CASCADE,
        related_name='matches'
    )

    def __str__(self):
        return 'Team 1 {} x {} Team 2'.format(self.goals_team1, self.goals_team2)

