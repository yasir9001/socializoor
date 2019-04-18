from django.conf.urls import url, include
from rest_framework import routers
from userauth.views import UserViewSets

router = routers.DefaultRouter()
router.register('users', UserViewSets)

urlpatterns = [
    url('', include(router.urls)),
    url(r'^auth/', include('rest_auth.urls')),
]