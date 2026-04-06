# 1. Create / ensure directory exists
sudo install -d -m 0755 /opt/agentos

# 2. Overwrite script atomically with correct perms
sudo install -m 0755 agentos/agentd.py /opt/agentos/agentd.py

# 3. Overwrite systemd unit file
sudo install -m 0644 agentos/agentd.service /etc/systemd/system/agentd.service

# 4. Reload systemd (pick up changes)
sudo systemctl daemon-reload

# 5. Restart service (handles already-running case)
sudo systemctl restart agentd

# 6. Verify status
sudo systemctl status agentd

# 7. Tail logs
journalctl -u agentos/agentd -f

# 8. Ensure enabled on boot
sudo systemctl enable agentd