from django.shortcuts import render
from ninja import Router
from django.http import HttpResponse
from .schemas import Weight_schema,Planet_Weight_schema
import requests
import json
# Create your views here.

router = Router()

@router.get('/hello/')
def hello_world(request):
    print('Hello World!')

    return {"messgae": "Hello World"}

@router.post('/planet_weight/', response={200:Planet_Weight_schema})
def weight_calculator(request,payload:Weight_schema):
    planet=payload.planet
    earth_weight=payload.weight

    mass=earth_weight/9.81

    if planet == "mercury":
        planet_weight=mass*3.7
    elif planet == "venus":
        planet_weight=mass*8.87
    elif planet == "mars":
        planet_weight=mass*3.71
    elif planet == "jupiter":
        planet_weight=mass*24.79
    elif planet == "saturn":
        planet_weight=mass*10.44
    elif planet == "uranus":
        planet_weight=mass*8.69
    elif planet == "neptune":
        planet_weight=mass*11.15
    elif planet == "earth":
        planet_weight=earth_weight
    
    result={'weight':planet_weight}

    return result

@router.get('/{planet_name}/')
def get_planet_details(request,planet_name:str):
    print(planet_name)
    planet_data=requests.get(f"https://api.le-systeme-solaire.net/rest/bodies/{planet_name}")
    keys_to_collect=['name','perihelion','gravity','aphelion']
    planet_data=collect_items(planet_data.json(), keys_to_collect)

    return planet_data

def collect_items(data_dict, keys_to_collect):
    collected_items = {}
    for key in keys_to_collect:
        if key in data_dict:
            collected_items[key] = data_dict[key]
    return collected_items