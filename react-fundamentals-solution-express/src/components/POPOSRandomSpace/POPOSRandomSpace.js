import { useNavigate } from 'react-router-dom'
import './POPOSRandomSpace.css';
import { useQuery } from 'react-query';

function POPOSRandomSpace() {
	const navigate = useNavigate()
	const { isLoading, error, data } = useQuery('data', () => {
    return fetch('/sfpopos').then(res => res.json())
  });

	if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {error.message}</h1>
  }

	
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