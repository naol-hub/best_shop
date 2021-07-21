from django.urls import path
from base.views import user_views as views


urlpatterns = [
   
    path('profile/' , views.getUserProfile, name="users-profile"),
    path('register/' , views.registerUser, name="register"),
    path('' , views.getUsers, name="users"),
   
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

]
