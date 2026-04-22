from config import PostgresConfig
from utils import load_config

if __name__ == "__main__":
    cfg = load_config("/home/anuj/mindmapOS/src/mindmap_memory/config.yml")

    db_cfg = PostgresConfig(**cfg['supabase'])
    print(db_cfg)
    from pprint import pprint
    pprint(cfg)