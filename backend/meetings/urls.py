from django.urls import path

from .views import (
    MeetingsList,
    MeetingDetails
)

urlpatterns = [
    path('', MeetingsList.as_view()),
    path('<int:pk>/', MeetingDetails.as_view())
]

