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
