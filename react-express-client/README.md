# Test the React Client

See the root readme for information on starting the server. 

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