import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import { useState } from 'react'
import { useQuery } from 'react-query';

function POPOSList() {
  const [ query, setQuery ] = useState('')
  const { isLoading, error, data } = useQuery('data', () => {
    return fetch('/sfpopos').then(res => res.json())
  });

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {error.message}</h1>
  }

  console.log(isLoading, error, data)

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
  // const spaces = data.map(({ title, address, images, hours }, i) => {
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