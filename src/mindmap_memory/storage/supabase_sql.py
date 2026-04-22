import psycopg2
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Fetch variables
DATABASE_URL = os.getenv("DATABASE_URL")

# Connect to the database
conn = psycopg2.connect(DATABASE_URL)

curr = conn.cursor()
curr.execute("""
CREATE TABLE Employee
(
    ID INT   PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    EMAI TEXT NOT NULL
)
""")

# commit the changes
conn.commit()
print("Table Created successfully")