import os

from sqlalchemy import URL, create_engine

database_host = os.environ.get("DB_HOST")
database_password = os.environ.get("DB_PASSWORD")

if not database_host or not database_password:
    raise RuntimeError("启动前需要设置 DB_HOST 和 DB_PASSWORD 环境变量")

database_url = URL.create(
    "postgresql+psycopg",
    username="dashboard_app",
    password=database_password,
    host=database_host,
    port=5432,
    database="fund_dashboard",
)

engine = create_engine(
    database_url,
    pool_pre_ping=True,
    connect_args={"connect_timeout": 5},
)