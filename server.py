from flask import Flask, render_template
from currency import get_currency_data
from waitress import serve

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/currency', methods=['GET'])
def currency_route():
    return get_currency_data()

if __name__ == '__main__':
    serve(app,host="127.0.0.1",port=8000)
