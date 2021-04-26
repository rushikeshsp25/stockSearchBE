from django.urls import path
from .handlers import stock_search

urlpatterns = [
    path('api/v1/stock-search/', stock_search),
]
