from django.db import models

class TeamMember(models.Model):
    ROLE_CHOICES = [
        ('regular', 'Regular'),
        ('admin', 'Admin'),
    ]

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    role = models.CharField(max_length=7, choices=ROLE_CHOICES, default='regular')

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.role}"
