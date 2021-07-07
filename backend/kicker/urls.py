from django.contrib import admin
from django.urls import (
    include,
    path
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/meetings/', include('meetings.urls')),
    path('api/matches/', include('matches.urls')),
    path('api/players/', include('players.urls'))
]
