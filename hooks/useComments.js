import useSWR from 'swr';
import axios from 'axios';

// Un helper para realizar la solicitud HTTP con axios
const fetcher = async (url) => {
	const response = await axios.get(url);
	return response.data;
};

const useFetchComment = (id) => {
	// Utilice SWR para realizar la solicitud y manejar el estado
	const { data, error } = useSWR(
		`http://localhost:4000/comments/${id}`,
		fetcher
	);

	return {
		data,
		loading: !data && !error,
		error: error,
	};
};

export default useFetchComment;
