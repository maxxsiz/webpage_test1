
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.i18n import i18n_patterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
    path('i18/', include('django.conf.urls.i18n')),
    ]

urlpatterns += i18n_patterns(
    path('', include('blog.urls')),
)










