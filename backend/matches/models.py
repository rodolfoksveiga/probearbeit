from django.utils.translation import gettext_lazy as _
from django.db.models import (
    CASCADE,
    Model,
    DateTimeField,
    CharField,
    ForeignKey,
    BooleanField
)

from meetings.models import Meeting

class Match(Model):
    position_team1 = CharField(
        _('Position of Team 1'),
        max_length=200
    )
    result = CharField(
        _('Result'),
        max_length=200
    )
    meeting_id = ForeignKey(
        Meeting,
        on_delete=CASCADE,
        related_name='matches'
    )

    def __str__(self):
        return self.result

