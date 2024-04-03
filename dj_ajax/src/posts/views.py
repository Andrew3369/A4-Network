from django.shortcuts import render
from .models import Post
from django.http import JsonResponse
from django.core import serializers

# Create your views here.

def post_list_and_create(request):
    qs = Post.objects.all()
    return render(request, 'posts/main.html', {'qs': qs})


def load_posts_data_view(request, num_posts):
    visible = 3
    upper = num_posts # 9   
    lower = upper - visible # 6
    size = Post.objects.all().count()

    qs = Post.objects.all()
    data = []
    for obj in qs:
        item = {
            'id': obj.id,
            'title': obj.title,
            'body': obj.body,
            'liked': True if request.user in obj.liked.all() else False,
            'author': obj.author.user.username
        }
        data.append(item)
    return JsonResponse({'data': data[lower:upper], 'size': size})


def hello_world_view(request):
    return JsonResponse({'text': ' hello world! x2'})