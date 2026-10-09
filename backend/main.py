from datetime import UTC

from fastapi import FastAPI, Query
from sqlalchemy import text

from database import engine

from typing import Literal

from schema import PortfolioResponse, PositionsResponse

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173",
        "http://localhost:5173",],
    allow_methods=["GET"],
)


@app.get("/health")
def get_health():
    return {"status": "ok"}


@app.get("/portfolios", response_model=list[PortfolioResponse])
def get_portfolios():
    statement = text("SELECT id, name FROM portfolios ORDER BY id")

    with engine.connect() as connection:
        result = connection.execute(statement)
        rows = result.mappings().all()

    return [dict(row) for row in rows]

@app.get("/positions", response_model=PositionsResponse)
def get_positions(
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=10, ge=1, le=100),
    resource_type: Literal["cpu", "gpu", "storage"] | None = None,
    portfolio_id: int | None = Query(default=None, ge=1),
    sort_order: Literal["asc", "desc"] = "desc",
):
    offset = (page - 1) * page_size
    parameters = {
        "resource_type": resource_type,
        "portfolio_id": portfolio_id,
    }

    count_statement = text("""
        SELECT COUNT(*)
        FROM positions
        WHERE resource_type = COALESCE(:resource_type, resource_type)
          AND portfolio_id = COALESCE(:portfolio_id, portfolio_id)
    """)

    statement = text("""
        SELECT
            positions.id,
            positions.portfolio_id,
            portfolios.name AS portfolio_name,
            positions.resource_key,
            positions.resource_type,
            positions.quantity,
            positions.utilization_pct,
            positions.observed_at
        FROM positions
        JOIN portfolios ON positions.portfolio_id = portfolios.id
        WHERE positions.resource_type = COALESCE(:resource_type, positions.resource_type)
          AND positions.portfolio_id = COALESCE(:portfolio_id, positions.portfolio_id)
        ORDER BY
            CASE WHEN :sort_order = 'asc'
                THEN positions.utilization_pct END ASC,
            CASE WHEN :sort_order = 'desc'
                THEN positions.utilization_pct END DESC,
            positions.id ASC
        LIMIT :page_size OFFSET :offset
    """)

    with engine.connect() as connection:
        total = connection.execute(
            count_statement, parameters
        ).scalar_one()

        rows = connection.execute(
            statement,
            {
                **parameters,
                "page_size": page_size,
                "offset": offset,
                "sort_order": sort_order,
            },
        ).mappings().all()

    items = [
        {
            **dict(row),
            "observed_at": row["observed_at"].astimezone(UTC),
        }
        for row in rows
    ]

    return {
        "items": items,
        "total": total,
        "page": page,
        "page_size": page_size,
    }
