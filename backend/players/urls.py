from django.urls import path

from .views import (
    PlayersList,
    PlayerDetails
)

urlpatterns = [
    path('', PlayersList.as_view()),
    path('<int:pk>/', PlayerDetails.as_view())
]

