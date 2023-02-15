import { useNavigate } from 'react-router-dom'
import './POPOSRandomSpace.css';
// 1) Import useQuery
import { useQuery } from 'react-query';

function POPOSRandomSpace() {
	const navigate = useNavigate()

	// 2) Setup a query
	const { isLoading, error, data } = useQuery('sfpopos', () => {
    return fetch('/sfpopos').then(res => res.json())
  });

	// 3) When loading display this
	if (isLoading) {
    return <h1>Loading...</h1>
  }

	// 4) Display this on an error
  if (error) {
    return <h1>Error: {error.message}</h1>
  }

	// 5) From here you can work with data
  return (
		<button 
		className="RandomSpace"
		onClick={(e) => {
			const id = Math.floor(Math.random() * data.length)
			navigate(`/details/${id}`)
		}}>Show me a random space</button>
  )
}

export default POPOSRandomSpace