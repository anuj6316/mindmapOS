from pydantic_settings import BaseSettings
from pydantic import ConfigDict

class Test(BaseSettings):
    base_url: str
    api_key: str

    model_config = ConfigDict(env_file = '.env')

settings = Test()
print(settings.base_url, settings.api_key)