from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Task
from .serializers import TaskSerializer

@api_view(["GET"])
def get_tasks(request):
    """Retrieve all tasks."""
    tasks = Task.objects.all().order_by("-id")  # Newest first
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def add_task(request):
    """Add a new task."""
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(["DELETE"])
def delete_task(request, task_id):
    """Delete a task by ID."""
    try:
        task = Task.objects.get(id=task_id)
        task.delete()
        return Response({"message": "Task deleted"}, status=status.HTTP_204_NO_CONTENT)
    except Task.DoesNotExist:
        return Response({"error": "Task not found"}, status=status.HTTP_404_NOT_FOUND)

@api_view(["PATCH"])
def toggle_task_completion(request, task_id):
    """Toggle task completion status."""
    try:
        task = Task.objects.get(id=task_id)
        task.completed = not task.completed
        task.save()
        return Response(TaskSerializer(task).data)
    except Task.DoesNotExist:
        return Response({"error": "Task not found"}, status=status.HTTP_404_NOT_FOUND)
