from database import get_database_connection


def get_latest_price(symbol):
    """Get the latest closing price for a stock."""

    connection = get_database_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT symbol, date, close
        FROM market_prices
        WHERE symbol = ?
        ORDER BY date DESC
        LIMIT 1
    """, (symbol,))

    result = cursor.fetchone()

    connection.close()

    return result


def get_market_summary(symbol):
    """Get a summary of market data for a stock."""

    connection = get_database_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            symbol,
            COUNT(*) AS total_days,
            MIN(close) AS lowest_close,
            MAX(close) AS highest_close,
            AVG(close) AS average_close
        FROM market_prices
        WHERE symbol = ?
        GROUP BY symbol
    """, (symbol,))

    result = cursor.fetchone()

    connection.close()

    return result


def get_price_history(symbol, limit=10):
    """Get recent market price history."""

    connection = get_database_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            date,
            open,
            high,
            low,
            close,
            volume
        FROM market_prices
        WHERE symbol = ?
        ORDER BY date DESC
        LIMIT ?
    """, (symbol, limit))

    results = cursor.fetchall()

    connection.close()

    return results