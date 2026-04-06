import logging
import signal
import os
import sys

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

from langchain_ollama import ChatOllama

def call_llm(query: str):
    llm = ChatOllama(model="gemma4:31b-cloud")
    response = llm.invoke(query)
    return response.content

while running:
    log.info("Agentd is running...")
    time.sleep(5)

log.info("agentd exited cleanly")
sys.exit(0)