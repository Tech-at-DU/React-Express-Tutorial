# React-Express-Tutorial
 
This repo contains three projects: 

- express-server: a simple express server that serves JSON to react projects
- react-express-client: a minimal react project that consumes json from the server
- react-fundamentals-solution-express: the react fundamentals tutorial project was modified to consume json from the server

## Getting started 

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

## Flask Server

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

## Test the React Client

Start the minimal react client. From the _react-express-client_ directory run: 

```
npm install 
npm start
```

This should start the client. Be sure the `express-server` is running or this react client will have nothing to communicate with! 

**Background**

The client runs on [http://localhost:3000](http://localhost:3000) while the server runs on [localhost:4000](localhost:4000). Take a look *package.json* in the `react-express-client` folder. Note line:3 

```
"proxy": "http://localhost:4000",
```

This react project runs at localhost:3000 but makes all requests as if were running at localhost:4000. Any requests from the client not preceded by a domain will run as if they were localhost 4000. 

> Important! This doesn't apply to the root `/` route, which will always run at the domain where the client is running! For example: `/example` is the same as `localhost:4000/example` and `/posts` is the same as `localhost:4000/posts`. In the case of `/` the route is `localhost:3000/`.

Open `src/App.js`. There are a couple of components rendered here. Take a look at `SimpleFecth.js`. This example uses `fetch`, `useState`, and `useEffect` to load data from the server and render it. Read the notes in the comments. 

### React Query

In `App.js` uncomment the `PublicSpaces` component and take a look at it. This example uses `reactQuery` in place of `fetch`, `useState`, and `useEffect`. 

React Query requires that you set up a `QueryProvider`. Read the comments in this component. 

## React Fundamentals with a server

This example modifies the [React Fundamentals tutorial](https://github.com/Tech-at-DU/React-Fundamentals-tutorial) to fetch data from a server. 

With the server running open `react-fundamentals-solution-express`. 

```
npm install
npm start
```

This project runs on [http://localhost:3000](http://localhost:3000) while the server runs on [localhost:4000](localhost:4000). Take a look *package.json* in the `react-express-client` folder. Note line:3 

```
"proxy": "http://localhost:4000",
```

This project uses `react-query`. Take a look at `src/index.js`. A lot is going on here because the property uses react-router and the router and routes are here. Look for these things: 

```JS
...
// Add React Query 
import { QueryClientProvider, QueryClient } from 'react-query';
// Create a QueryClient
const queryClient = new QueryClient()
// Wrap the App in the QueryClientProvider
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    ...
  </QueryClientProvider>,
 document.getElementById('root')
);
```

This sets up React Query. You need this in place to use `useQuery` to fetch data from within your components. 

### Fetching Data from a component

Next, take a look at the `src/components/SFPOPOSList/SFPOPOSList.js`. Read the comments here. This displays a list of SF publicly owned open spaces. 

Next look at `src/components/SFPOPOSDetails/SFPOPOSDetails.js`. This component uses the same code from the above to load the data when a detail page is shown. 

Take a look at `src/components/SFPOPOSRandomSpace/SFPOPOSRandomSpace.js`. Same thing again! 

## Conclusion

These examples show how to get react to talk to an express server. The process should be the same for other servers, Flask for example. 

Key concepts:

- The server is running on its own port
- React client is running on a different port
- React client uses proxy to "align" with the server
- The client is fetching data from the server, both need to be running at the same time


