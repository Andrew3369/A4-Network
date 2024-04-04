from django.urls import path
from django.conf.urls.static import static
from .views import (
    post_list_and_create,
    hello_world_view,
    load_posts_data_view,
    like_unlike_post,
    post_detail,

)

app_name = 'posts'

urlpatterns = [
    path('', post_list_and_create, name='main-board'),
    path('like-unlike/', like_unlike_post, name='like-unlike'),
    path('<pk>/', post_detail, name='post-detail'),
    
    path('data/<int:num_posts>/', load_posts_data_view, name='post-data'),
]