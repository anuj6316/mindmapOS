import pydantic
from dataclasses import dataclass

@dataclass
class PostgresConfig:
    host: str
    port: int
    database: str
    user: str