from django.shortcuts import render, HttpResponse
from .models import ToDoItem

# Create your views here.
def home(request):
    return render(request, "base.html")
    
def todos(request):
    items = ToDoItem.objects.all()
    return render(request, "todos.html", {"todos":items})
