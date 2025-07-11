
import { useQuery } from '@tanstack/react-query';

function POPOSCount() {
	const { isLoading, error, data } = useQuery({
    queryKey: ['/sfpopos'],
    queryFn: () => {
      return fetch('/sfpopos').then(res => res.json())
    }
  });

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {error.message}</h1>
  }

	return (
		<div>Currently displaying {data.length} public open spaces.</div>
	)
}

export default POPOSCount