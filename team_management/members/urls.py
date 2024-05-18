from django.urls import path
from .views import TeamMemberListCreate, TeamMemberRetrieveUpdateDestroy

urlpatterns = [
    path('members/', TeamMemberListCreate.as_view(), name='member-list-create'),
    path('members/<int:pk>/', TeamMemberRetrieveUpdateDestroy.as_view(), name='member-detail'),
]
