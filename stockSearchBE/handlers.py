from django.http import JsonResponse, HttpResponse
import datetime
import json
from .db_connection import Redis

REDIS_ENCODING_FORMAT = "utf-8"
redis_instance = Redis.getInstance()


def stock_search(request):
    if request.method == 'GET':
        try:
            key = request.GET.get("search_key", "").upper()
            value = redis_instance.get(key)
            response_data = []
            for key in redis_instance.scan_iter("*"+key+"*"):
                response_data.append(json.loads(
                    redis_instance.get(key).decode(REDIS_ENCODING_FORMAT)))
            if value:
                response_data = value.decode(REDIS_ENCODING_FORMAT)
            return JsonResponse({
                'data': response_data,
                'status': 200,
                'message': 'Stock data'
            })
        except Exception:
            return HttpResponse(status=500)

    else:
        return HttpResponse(status=404)
