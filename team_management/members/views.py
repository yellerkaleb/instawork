from rest_framework import generics
from .models import TeamMember
from .serializers import TeamMemberSerializer

class TeamMemberListCreate(generics.ListCreateAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer

class TeamMemberRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
