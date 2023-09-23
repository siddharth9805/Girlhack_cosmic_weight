from django.contrib import admin
from django.urls import path
from cosmic_weight.Api import api
from cosmic_page import views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api.urls),
    path('cosmic/',views.hello_world,name='hello_world')
]