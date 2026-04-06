## 1. setting up the agentos
AGENTOS_DIR="/opt/agentos"

# Check if directory exists
if [ -d "$AGENTOS_DIR" ]; then
    echo "Directory '$AGENTOS_DIR' exists. Deleting the Directory"
    rm -rf "$AGENTOS_DIR" || { echo "Failed to delete the directory."; exit 1; }
    echo "Directory '$AGENTOS_DIR' deleted."
fi
echo "Directory '$AGENTOS_DIR' does not exist."
mkdir -p "$AGENTOS_DIR" || { echo "Failed to create the directory."; exit 1; }
echo "Directory '$AGENTOS_DIR' created."
cp -rf agentos/* "$AGENTOS_DIR" || { echo "Failed to copy the files."; exit 1; }
echo "Files copied to '$AGENTOS_DIR'."


## 2. setting up systemd script
SYSTEMD_DIR="/lib/systemd/system"
cp -rf system/* "$SYSTEMD_DIR" || { echo "Failed to copy the directory."; exit 1; }

## 3. making files executable
sudo chmod +x "$AGENTOS_DIR"/*

## 4. tell systemd to reload - it needs to see the new files
sudo systemctl daemon-reload

## 5. start the service
sudo systemctl start agentd

## 6. check the status of the service
sudo systemctl status agentd

## 7. watch the live logs
sudo journalctl -f -u agentd -f

## 8. enable to start on everyboot
sudo systemctl enable agentd

##