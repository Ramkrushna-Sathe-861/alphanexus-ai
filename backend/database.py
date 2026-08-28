import sqlite3


DATABASE_PATH = "data/market.db"


def get_database_connection():
    """Create and return a database connection."""
    connection = sqlite3.connect(DATABASE_PATH)
    return connection

    
if __name__ == "__main__":
    connection = get_database_connection()
    print("Database connected successfully")
    connection.close()