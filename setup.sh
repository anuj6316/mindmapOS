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
cp -rf "agentos/*" "$AGENTOS_DIR" || { echo "Failed to copy the files."; exit 1; }
echo "Files copied to '$AGENTOS_DIR'."

# systemd dir
SYSTEMD_DIR="/lib/systemd/system"
cp -rf "system/*" "$SYSTEMD_DIR" || { echo "Failed to copy the directory."; exit 1; }