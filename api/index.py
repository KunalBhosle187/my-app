from flask import Flask

app = Flask(__name__)


@app.route('/api/python')
def hello():
    return "Hello from Flask Backend!"


@app.route('/api/greet/<name>')
def greet(name):
    return f"Hello, {name}! Welcome to the Flask Backend."


@app.route('/api/square/<int:number>')
def square(number):
    result = number * number
    return f"The square of {number} is {result}."


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
