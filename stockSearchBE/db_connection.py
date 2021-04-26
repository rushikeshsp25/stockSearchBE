import redis
from django.conf import settings

class Redis:
   __instance = None
   @staticmethod 
   def getInstance():
      if Redis.__instance == None:
         Redis()
      return Redis.__instance
   def __init__(self):
       Redis.__instance = redis.StrictRedis(host=settings.REDIS_HOST,
                                  port=settings.REDIS_PORT, db=0)