from langchain_ollama import ChatOllama
from 
class ChatManager:
    def __init__(self, model_id: str = "gemma4:31b-cloud"):
        self.llm = ChatOllama(model=model_id)