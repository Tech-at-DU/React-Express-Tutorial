from flask import Flask, request, jsonify
import os
from flask import url_for, json


# Setup the virtual environment

# python3 -m venv venv
# . venv/bin/activate
# pip install -r requirements.txt

# Run the app
# pip install -r requirements.txt


app = Flask(__name__)

@app.route('/')
def displayHome():
	return '<h1>Hello World: Flask</h1>'
 

@app.route('/about')
def displayBar():
	return '<h1>This is a simple flask server!</h1>'


@app.route('/sfpopos')
def profile():
	SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
	json_url = os.path.join(SITE_ROOT, "static/", "sfpopos-data.json")
	data = json.load(open(json_url))
	for i, item in enumerate(data): 
		item["id"] = i

	return jsonify(data)

if __name__ == '__main__':
	# The server runs on port 4000
	app.run(debug=True, port=4000)
