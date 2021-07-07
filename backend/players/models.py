from django.utils.translation import gettext_lazy as _
from django.db.models import (
    CASCADE,
    Model,
    CharField
)

class Player(Model):
    last_name = CharField(
        _("Player's last name"),
        max_length=200,
        unique=True
    )
    office_choices = (
        ('munchen', 'Munschen'),
        ('wurzburg', 'Wurzburg'),
        ('berlin', 'Berlin')
    )
    office = CharField(
        _('Office'),
        choices=office_choices,
        max_length=50
    )

    def __str__(self):
        return self.last_name

