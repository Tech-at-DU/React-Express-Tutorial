import React from 'react'
import { useParams } from 'react-router'
// 1) Import useQuery
import { useQuery } from 'react-query';
import './POPOSDetails.css'
import POPOSFeatureList from '../POPOSFeatureList/POPOSFeatureList'

function POPOSDetails(props) {
  const params = useParams()

  // 2) setup a query
  const { isLoading, error, data } = useQuery('sfpopos', () => {
    return fetch('/sfpopos').then(res => res.json())
  });

  // 3) Display this when loading
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  // 4) Display this if there is an error
  if (error) {
    return <h1>Error: {error.message}</h1>
  }

  // 5) From here you can begin working with the data
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{ title }</h1>
        <p className="POPOSDetails-desc">{ desc }</p>
        <p className="POPOSDetails-hours">{ hours }</p>
        <POPOSFeatureList features={features}/>
        <p className="POPOSDetails-geo">{ geo.lat } { geo.lon }</p>
      </div>
    </div>
  )
}

export default POPOSDetails
