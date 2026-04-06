# 1. Create the directory for your project
sudo mkdir -p /opt/agentos

# 2. Copy your script there
sudo cp agentd.py /opt/agentos/agentd.py

# 3. Make it executable
sudo chmod +x /opt/agentos/agentd.py

# 4. Copy the service file to where systemd looks for unit files
sudo cp agentd.service /etc/systemd/system/agentd.service

# 5. Tell systemd to reload — it needs to see the new file
sudo systemctl daemon-reload

# 6. Start the service
sudo systemctl start agentd

# 7. Check it's running
sudo systemctl status agentd

# 8. Watch the live logs
journalctl -u agentd -f

# 9. Enable it to start on every boot
sudo systemctl enable agentd