from fastapi import APIRouter , HTTPException
from models.market import LatestPriceResponse , MarketSummaryResponse , PriceHistoryResponse

from services.market_data_service import (
    get_latest_price,
    get_market_summary,
    get_price_history
)

router = APIRouter(
    prefix="/market",
    tags=["Market Data"]
)


@router.get("/latest/{symbol}",
            response_model=LatestPriceResponse)
def get_latest_market_price(symbol: str):
    """Get the latest market price."""

    result = get_latest_price(symbol.upper())

    if result is None:
        raise HTTPException(
            status_code=404, 
            detail=f"No market data found for symbol {symbol.upper()}")

    return {
        "symbol": result[0],
        "date": result[1],
        "close": result[2]
    }

@router.get("/summary/{symbol}",
            response_model=MarketSummaryResponse)
def get_market_data_summary(symbol: str):
    """Get market data summary for a stock."""

    result = get_market_summary(symbol.upper())

    if result is None:
        raise HTTPException(
            status_code=404,
            detail=f"No market data found for symbol {symbol.upper()}")
        

    return {
        "symbol": result[0],
        "total_days": result[1],
        "lowest_close": result[2],
        "highest_close": result[3],
        "average_close": result[4]
    }

@router.get("/history/{symbol}",
            response_model=PriceHistoryResponse)
def get_market_price_history(
    symbol: str,
    limit: int = 10
):
    """Get recent market price history."""

    results = get_price_history(
        symbol.upper(),
        limit
    )

    if not results:
        raise HTTPException(
            status_code=404,
            detail=f"No market data found for symbol {symbol.upper()}"
        )

    history = []

    for row in results:
        history.append({
            "date": row[0],
            "open": row[1],
            "high": row[2],
            "low": row[3],
            "close": row[4],
            "volume": row[5]
        })

    return {
        "symbol": symbol.upper(),
        "data": history
    }