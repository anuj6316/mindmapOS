import logging
import signal
import os
import sys
import time

logging.basicConfig(
    stream=sys.stdout,
    level=logging.INFO,
    format="%(asctime)s - [agentd] - %(levelname)s - %(message)s",
)

log = logging.getLogger("agentd")

running = True

def handle_sigterm(signum, frame):
    global running
    log.info("SIGTERM received — shutting down cleanly")
    running = False

signal.signal(signal.SIGTERM, handle_sigterm)
signal.signal(signal.SIGINT, handle_sigterm)

log.info("agentd starting up")

from langchain_openai import ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

def test_llm():
    try:
        llm = ChatOpenAI(
            base_url = "https://openrouter.ai/api/v1",
            api_key = os.getenv("OPENROUTER_API_KEY"),
            model = "google/gemma-4-26b-a4b-it"
        )
        response = llm.invoke("Echo the 'Gemma 4 26b Live...'")
        log.info("Response generated")
        return response
    except Exception as e:
        log.error(f"Found some error: {e}")

while running:
    log.info("Agentd is running...")
    # time.sleep(5)
    
    log.info(test_llm())

log.info("agentd exited cleanly")
sys.exit(0)