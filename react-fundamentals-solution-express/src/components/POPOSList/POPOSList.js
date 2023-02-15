import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import { useState } from 'react'
// This component will fetch data from the server. 
// 1) Import useQuery
import { useQuery } from 'react-query';

function POPOSList() {
  const [ query, setQuery ] = useState('') // Ignore this it's used for the search form
  
  // 2) Set up a query
  const { isLoading, error, data } = useQuery('sfpopos', () => {
    console.log('loading sfpopos list')
    return fetch('/sfpopos').then(res => res.json())
  });

  // 3) Display this if the data is loading
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  // 4) Display this if there is an error message from the server
  if (error) {
    console.log(error)
    return <h1>Error: {error.message}</h1>
  }

  // 5) You can log the data from the serevr for testing
  // console.log(isLoading, error, data)

  // 6) From here everything is same as it was in the tutorial project! 
  const spaces = data
    .filter(obj => {
      // true if query is in title
      const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
      // true if query is in address
      const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
      // return true if either is true
      return inTitle || inAddress
    })
    .map(({ id, title, address, images, hours }, i) => {
    return (
      <POPOSSpace
        id={id}
        key={`${title}-${id}`}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })

  return (
    <div className="POPOSList">
			<form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
      <div className="POPOSList-grid">
        {spaces}
      </div>
    </div>
  )
}

export default POPOSList