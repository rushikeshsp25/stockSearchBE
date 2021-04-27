import requests
import zipfile
import io
import csv
from django.conf import settings
import redis
import json
import datetime

REDIS_HOST = 'localhost'
REDIS_PORT = 6379
BSE_ENDPOINT = "https://www.bseindia.com/download/BhavCopy/Equity/"

BSE_REQUEST_HEADERS = {
    'User-Agent': 'Chrome/90.0.4430.72',
}
ENCODING_FORMAT = "utf-8"

def get_file_name():
    todays_date_string = (datetime.datetime.today() - datetime.timedelta(days=1) ).strftime("%d/%m/%y")
    file_name = "EQ"+ todays_date_string.replace('/','')
    return file_name

def fetch_and_parse_csv():
    try:
        # Redis Connection for cron job
        redis_instance = redis.StrictRedis(host=REDIS_HOST,
                                        port=REDIS_PORT, db=0)
        # Delete Previous day data from redis
        redis_instance.flushall()

        filename = get_file_name()
        print("Fetching file: "+ filename+"...")
        
        response = requests.get(BSE_ENDPOINT+filename+"_CSV.zip", headers=BSE_REQUEST_HEADERS)
        print("Response from BSE API: ", response)
        response_content = io.BytesIO(response.content)

        if zipfile.is_zipfile(response_content):
            zipFile = zipfile.ZipFile(response_content)
            data = zipFile.read(filename.upper()+".CSV")
            csv_reader = csv.reader(io.StringIO(
                data.decode(ENCODING_FORMAT)), delimiter=',')

            #skip the header of the csv file from pushing to redis
            next(csv_reader)

            for row in csv_reader:
                value = {
                    "code": row[0],
                    "name": row[1],
                    "open": row[4],
                    "high": row[5],
                    "low": row[6],
                    "close": row[7]
                }
                redis_instance.set(row[0]+"-"+row[1], json.dumps(value, separators=(',', ':')))
            print("Operation Successfull")
        else:
            raise Exception("Invalid zip format")
    except Exception as e:
        print("Exception Occured: ",e)

fetch_and_parse_csv()