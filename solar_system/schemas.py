from ninja import Schema

class Weight_schema(Schema):
   planet : str
   weight: float

class Planet_Weight_schema(Schema):
   weight:float