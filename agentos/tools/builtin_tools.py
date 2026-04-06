from langchain_community.tools import ShellTool
from langchain.tools import tool
from langchain.agent import create_

shell_tool = ShellTool()

tools = [shell_tool]
agent = crea