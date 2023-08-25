import useSWR from 'swr';
import { BACKEND } from '../config/consts';

const fetcher = async (url) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Error al obtener datos');
	}
	return response.json();
};

export default function useDirectorio() {
	const { data, error } = useSWR(`${BACKEND}/directorios`, fetcher);

	return {
		directorio: data,
		isLoading: !error && !data,
		isError: error,
	};
}
