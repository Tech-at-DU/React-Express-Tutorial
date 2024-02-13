import { useQuery } from 'react-query'

// This example uses React Query. 
// Rect Query requires a QueryClientProvider. 
// See index.js to see where this is setup. 

function PublicSpaces() {
  // Load /sfpopos using useQuery
  const { isLoading, error, data, isError } = useQuery('sfpopos', async () => {
    return fetch('/sfpopos').then(res => res.json())
  });

  // isLoading: a boolean true if loading
  if (isLoading) {
    return <div>...loading</div>
  }

  // isError: a bool true when there is an error!
  // error: an error object with a message property
  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // data: the data loaded from the server
  return (
      <div className="PublicSpaces">
        <h2>Public Spaces</h2>
        <ul>
          {/* If isLoading is false map the data to components */}
          { data.map(item => <li key={item.title}>{item.title}</li>) }
          {/* 
          The sfpopos data has more properties
          Challenge: try and render another property here like the address 
          Challenge: Create a component and render that in place of the li 
          */}
        </ul>
      </div>
  );
}

export default PublicSpaces;
