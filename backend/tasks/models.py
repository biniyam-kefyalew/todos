import uuid
from django.db import models
from django.core.exceptions import ValidationError
from django.utils.timezone import now

class Task(models.Model):
    PRIORITY_CHOICES = ['Low', 'Medium', 'High']

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    priority = models.CharField(max_length=10, choices=[(p, p) for p in PRIORITY_CHOICES], default='Medium')
    due_date = models.DateField(null=True, blank=True)
    category = models.CharField(max_length=100, null=True, blank=True)  # e.g., Work, Personal, Shopping
    created_at = models.DateTimeField(auto_now_add=True)

    def clean(self):
        """Ensure the due date is today or in the future and priority is valid."""
        if self.due_date and self.due_date < now().date():
            raise ValidationError("Due date cannot be in the past.")

        if self.priority not in self.PRIORITY_CHOICES:
            raise ValidationError(f"Invalid priority. Choose from: {', '.join(self.PRIORITY_CHOICES)}")

    def save(self, *args, **kwargs):
        """Run validation before saving and check if UUID is unique only on creation."""
        self.clean()

        if not self.pk and Task.objects.filter(id=self.id).exists():
            raise ValidationError("UUID already exists. Please generate a new UUID.")

        super().save(*args, **kwargs)


    def __str__(self):
        return f"{self.title} ({self.priority})"
