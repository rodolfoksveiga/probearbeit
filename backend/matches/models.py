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
    meeting_id = ForeignKey(
        Meeting,
        on_delete=CASCADE,
        related_name='matches'
    )

    def __str__(self):
        if self.winner_team1:
            winner = 'Team 1'
        else:
            winner = 'Team 2'

        return 'Winner: {}'.format(winner)

