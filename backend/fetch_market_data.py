import pandas as pd
import yfinance as yf

from database import get_database_connection

def fetch_market_data(symbol, period="1mo"):
    """Fetch historical market data for a stock."""
    stock_data = yf.download(
        symbol,
        period=period,
        progress=False
    )

    return stock_data


def transform_market_data(data, symbol):
    """Transform market data into the database format."""

    if isinstance(data.columns, pd.MultiIndex):
        data.columns = data.columns.get_level_values(0)

    data = data.reset_index()
    data["Date"] = data["Date"].dt.strftime("%Y-%m-%d")

    data = data.rename(columns={
        "Date": "date",
        "Open": "open",
        "High": "high",
        "Low": "low",
        "Close": "close",
        "Volume": "volume"
    })

    data["symbol"] = symbol

    data = data[
        [
            "date",
            "symbol",
            "open",
            "high",
            "low",
            "close",
            "volume"
        ]
    ]

    return data


def validate_market_data(data):
    """Validate market data before loading."""

    if data.empty:
        print("Validation failed: Data is empty")
        return False

    required_columns = [
        "date",
        "symbol",
        "open",
        "high",
        "low",
        "close",
        "volume"
    ]

    missing_columns = [
        column for column in required_columns
        if column not in data.columns
    ]

    if missing_columns:
        print(f"Validation failed: Missing columns {missing_columns}")
        return False

    if data[required_columns].isnull().any().any():
        print("Validation failed: Missing values found")
        return False

    price_columns = ["open", "high", "low", "close"]

    if (data[price_columns] <= 0).any().any():
        print("Validation failed: Invalid price found")
        return False

    if (data["volume"] < 0).any():
        print("Validation failed: Invalid volume found")
        return False

    if (data["high"] < data["low"]).any():
        print("Validation failed: High price is lower than low price")
        return False

    print("Market data validation successful")
    return True

def load_market_data(data):
    """Load validated market data into SQLite."""

    connection = get_database_connection()

    cursor = connection.cursor()

    for _, row in data.iterrows():
        cursor.execute("""
            INSERT OR REPLACE INTO market_prices (
                symbol,
                date,
                open,
                high,
                low,
                close,
                volume
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (
            row["symbol"],
            row["date"],
            row["open"],
            row["high"],
            row["low"],
            row["close"],
            row["volume"]
        ))

    connection.commit()
    connection.close()

    print("Market data loaded successfully")

if __name__ == "__main__":
    data = fetch_market_data("NVDA")

    transformed_data = transform_market_data(data, "NVDA")

    is_valid = validate_market_data(transformed_data)

    if is_valid:
        load_market_data(transformed_data)