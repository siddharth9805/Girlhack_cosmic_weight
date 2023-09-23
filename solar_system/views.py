from django.shortcuts import render
from ninja import Router
from django.http import HttpResponse
# Create your views here.

router = Router()

@router.get('/hello/')
def login(request):
    print('Hello World!')

    return {"messgae": "Hello World"}