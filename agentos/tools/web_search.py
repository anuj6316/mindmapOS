from langchain.tools import tool

@tool
def web_search_tool(query: str, limit: int = 10) -> str:
    """Search the web for information."""