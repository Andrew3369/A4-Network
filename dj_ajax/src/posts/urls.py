from django.urls import path
from .views import (
    post_list_and_create,
    # post_detail,
    # post_update,
    # post_delete,
)

app_name = 'posts'

urlpatterns = [
    path('', post_list_and_create, name='main-board'),
]