from typing import Literal

from pydantic import AwareDatetime, BaseModel, Field


class PortfolioResponse(BaseModel):
    id: int = Field(gt=0)
    name: str = Field(min_length=1, max_length=64)


class PositionResponse(BaseModel):
    id: int = Field(gt=0)
    portfolio_id: int = Field(gt=0)
    portfolio_name: str = Field(min_length=1, max_length=64)
    resource_key: str = Field(min_length=1, max_length=64)
    resource_type: Literal["cpu", "gpu", "storage"]
    quantity: int = Field(ge=0)
    utilization_pct: float = Field(ge=0, le=100)
    observed_at: AwareDatetime


class PositionsResponse(BaseModel):
    items: list[PositionResponse]
    total: int = Field(ge=0)
    page: int = Field(ge=1)
    page_size: int = Field(ge=1, le=100)