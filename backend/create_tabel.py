from database import get_database_connection


def create_market_prices_table():
    """Create the market prices table."""
    connection = get_database_connection()

    cursor = connection.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS market_prices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            symbol TEXT NOT NULL,
            date TEXT NOT NULL,
            open REAL NOT NULL,
            high REAL NOT NULL,
            low REAL NOT NULL,
            close REAL NOT NULL,
            volume INTEGER NOT NULL,
            UNIQUE(symbol, date)
        )
    """)

    connection.commit()
    connection.close()

    print("Market prices table created successfully")


if __name__ == "__main__":
    create_market_prices_table()