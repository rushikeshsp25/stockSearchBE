# Stock Search Python-Django Backend 

simple & fast stock search 


## Local Setup

Install Redis on your machine.
* Follow the installations steps from [redis-docs](https://redis.io/topics/quickstart) to complete the local setup
* Make sure that the redis is running on it's default port, ie: 6379

Setup project environment with [python3](https://www.python.org/download/releases/3.0/), [virtualenv](https://virtualenv.pypa.io) and [pip](https://pip.pypa.io).

```bash
$ cd stockSearchBE/
$ virtualenv env
$ source env/bin/activate
$ pip install -r requirements.txt
$ python manage.py runserver
```
The local server will start running on http://localhost:8000/