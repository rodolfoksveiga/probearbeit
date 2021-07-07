from django.urls import path

from .views import (
    MatchesList,
    MatchDetails
)

urlpatterns = [
    path('', MatchesList.as_view()),
    path('<int:pk>/', MatchDetails.as_view())
]

