from django.urls import path
from .handlers import stock_search, index

urlpatterns = [
    path("", index, name="index"),
    path('api/v1/stock-search/', stock_search),
]
