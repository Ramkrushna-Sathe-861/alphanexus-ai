from pydantic import BaseModel


class LatestPriceResponse(BaseModel):
    symbol: str
    date: str
    close: float


class MarketSummaryResponse(BaseModel):
    symbol: str
    total_days: int
    lowest_close: float
    highest_close: float
    average_close: float


class PriceHistoryItem(BaseModel):
    date: str
    open: float
    high: float
    low: float
    close: float
    volume: int


class PriceHistoryResponse(BaseModel):
    symbol: str
    data: list[PriceHistoryItem]