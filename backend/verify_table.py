from database import get_database_connection

def get_tables():
    connection= get_database_connection()
    cursor=connection.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = cursor.fetchall()
    return tables

if __name__ == "__main__":
    tables=get_tables()
    print("Tables in the database:")
    for table in tables:
        print(table)