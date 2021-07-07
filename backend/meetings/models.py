from django.utils.translation import gettext_lazy as _
from django.db.models import (
    CASCADE,
    Model,
    DateTimeField,
    CharField,
    ForeignKey,
    BooleanField
)

class Meeting(Model):
    date_time = DateTimeField(
        _('Date/Time'),
        auto_now=True
    )
    local = CharField(
        _('Local'),
        max_length=100
    )
    mode = CharField(
        _('Game mode'),
        max_length=100
    )
    team1 = CharField(
        _('Members of Team 1'),
        max_length=100
    )
    team2 = CharField(
        _('Members of Team 2'),
        max_length=100
    )

    def __str__(self):
        return 'Meeting at {} on {}'.format(self.local, self.date_time)

