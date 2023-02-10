import { useEffect, useState } from 'react'

// This is a minimal example loading data from a server. 
// This example expects that you have a server running 
// on port 4000 with a route '/about' that returns json

function SimpleFetch() {
  const [data, setData] = useState(null)

  // Load /about route when the page loads
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('/about')
      const json = await res.json()
      // Map (transform) your data into "components"
      // and set it on your data variable to get it to display below
      setData(json.data.map(item => <li key={item}>{item}</li>))
    }

    loadData()
  }, [])

  return (
    <div className="App">
      <h2>Simple Fetch</h2>
      {/* The data is displayed here */}
      <ul>
        { data }
      </ul>
    </div>
  )
}

export default SimpleFetch;
