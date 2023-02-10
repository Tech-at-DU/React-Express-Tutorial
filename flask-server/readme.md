# Flask Server

Alternately you can use the Flask server. This is the folder: _flask-server_. 

> You can't run both servers at the same time. One or the other needs to be using port 4000. 

Setup a virtual environment and install dependencies: 

```
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
```

Launch the server. 

```
pip install -r requirements.txt
```

Test the server, open: [http://localhost:4000/about](http://localhost:4000/about)

This should display a message. Open `main.py` and find the `/about` route. Here you can see where the data comes from.

Try this route: [http://localhost:4000/sfpopos](http://localhost:4000/sfpopos) it should display the sfpopos JSON data.