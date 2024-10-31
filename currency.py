from dotenv import load_dotenv
from flask import jsonify  # Import jsonify here
import requests
import os

load_dotenv()

# Load the API key from environment variables
API_KEY = os.getenv('API_KEY')  # Ensure 'API_KEY' is defined in your .env file

def get_currency_data():
    url = 'https://api.apilayer.com/fixer/latest'
    headers = {'apikey': API_KEY}

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raise an error for bad responses
        data = response.json()
        return jsonify(data['rates'])
    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500
