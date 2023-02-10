# Express server

Each of the projects is contained in its folder with its package json. You should run each from its terminal. 

**Start the server**

From the _express-server_ directory install dependencies and launch the server: 

```
npm install
npm start
```

Leave the server running in the terminal. Open a new terminal window and start one of the clients. The server needs to be running for the client apps to communicate with it. 

Test the server, open: [http://localhost:4000/about](http://localhost:4000/about)

This should display a message. Open `express-server/server.js` and find the `/about` route. Here you can see where the data comes from.

Try this route: [http://localhost:4000/sfpopos](http://localhost:4000/sfpopos) it should display the sfpopos JSON data.