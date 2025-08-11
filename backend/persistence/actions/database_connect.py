import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file
def connect_to_mysql():
    """
    Established a connection to MySQL Database
    """
    try:
        connection = mysql.connector.connect(
            host = os.getenv('DB_HOST'),
            port = os.getenv('DB_PORT'),
            user = os.getenv('DB_USER'),
            password = os.getenv('DB_PASSWORD'),
            database = os.getenv('DB_NAME')
        )
        if connection.is_connected():
            print("Connected to MySQL Database")
            return connection
    except Error as e:
        print(f"Error: {e}")
    return None

def close_connection(connection):
    """
    Close the database connection
    """
    if connection and connection.is_connected():
        connection.close()
        print("MySQL connection is closed")

