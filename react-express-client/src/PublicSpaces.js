
import { QueryClientProvider, useQuery } from 'react-query'

// This example uses React Query. 
// To use this you must create a query client 
// and add a QueryClientProvider. 
// See index.js

function PublicSpaces() {
  // Load /sfpopos using react-query
  const { isLoading, error, data } = useQuery('data', () => {
    return fetch('/sfpopos').then(res => res.json())
  });

  return (
      <div className="App">
        <h2>Public Spaces</h2>
        { isLoading ? "Loading..." : data.map(item => item.title) }
      </div>
  );
}

export default PublicSpaces;
