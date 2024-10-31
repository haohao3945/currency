# Currency Rates Flask Application

This is a Flask application that fetches and displays current currency exchange rates. The application uses the Fixer API to retrieve the latest rates, applies a simple adjustment, and presents the data in a user-friendly table format.

## Features

- Fetches real-time currency rates from the Fixer API.
- Adjusts the rates by adding a fixed value.
- Displays the original and adjusted rates in a responsive table.
- Highlights rows with even values and specific currency codes (e.g., HKD).

## Technologies Used

- **Flask**: A lightweight WSGI web application framework for Python.
- **HTML/CSS**: For front-end structure and styling.
- **JavaScript**: For dynamic data handling and DOM manipulation.
- **Requests**: A simple, yet elegant HTTP library for Python.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/haohao3945/currency.git
   cd currency
   ```
   
2. Set up a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a .env file in the root directory and add your API key:
  ```bash
  API_KEY=your_api_key_here
  ```


###Usage

1.Start the Flask application:
  ```bash
  python server.py
  ```

2. Open your web browser and go to http://127.0.0.1:5000/ to view the application.





