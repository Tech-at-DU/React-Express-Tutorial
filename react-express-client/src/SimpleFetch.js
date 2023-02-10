import { useEffect, useState } from 'react'

// This is a minimal example loading data from a server. 
// This example expects that you have a server running 
// on port 4000 with a route '/about' that returns json

function SimpleFetch() {
  // This variable will hold the data after it is fetched
  // Set the default value to null
  const [data, setData] = useState(null)

  // Load /about route when the page loads
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('/about')
      const json = await res.json()
      // Map (transform) your data into "components"
      // and set it on your data variable to get it to display below
      setData(json)
      // Challenge: Try changing the data at the server
      // Challenge: Try adding a new property at the server and render
      // it below  
    }

    loadData()
  }, [])

  return (
    <div className="SimpleFetch">
      <h2>Simple Fetch</h2>
      {/* Render the data here */}
      { data ? data.message : null }
      {/* If there is no data we have to be careful not try and redner it! */}
    </div>
  )
}

export default SimpleFetch;
