from django.utils.translation import gettext_lazy as _
from django.db.models import (
    CASCADE,
    Model,
    CharField
)

class Player(Model):
    last_name = CharField(
        _('Last Name'),
        max_length=200
    )
    office = CharField(
        _('Mayflower office'),
        max_length=200
    )

    def __str__(self):
        return self.last_name

