from django.utils.translation import gettext_lazy as _
from django.db.models import (
    Model,
    DateTimeField,
    CharField,
    IntegerField,
    ManyToManyField
)

from players.models import Player

class Meeting(Model):
    date_time = DateTimeField(
        _('Date/Time')
    )
    local_choices = (
        ('munchen', 'Munschen'),
        ('wurzburg', 'Wurzburg'),
        ('berlin', 'Berlin')
    )
    local = CharField(
        _('Local'),
        choices=local_choices,
        max_length=50
    )
    mode_choices = (
        (1, 'One-Match'),
        (3, 'Best of 3'),
        (5, 'Best of 5')
    )
    mode = IntegerField(
        _('Game mode'),
        choices=mode_choices
    )
    team1 = ManyToManyField(
        Player,
        related_name='meetings_team1'
    )
    team2 = ManyToManyField(
        Player,
        related_name='meetings_team2'
    )

    def __str__(self):
        return 'Meeting at {} on {}'.format(self.local, self.date_time)

