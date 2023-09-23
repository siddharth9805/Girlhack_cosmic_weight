from ninja import NinjaAPI
from solar_system.views import router as solar_system_router

api = NinjaAPI()

api.add_router("/",solar_system_router,tags=["solar_system_router"])