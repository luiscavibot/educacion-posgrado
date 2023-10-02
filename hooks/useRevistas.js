import useSWR from 'swr';
import { BACKEND } from '../config/consts';
import { useState } from 'react';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 10;

async function fetcher(url) {
	const response = await fetch(url);
	return response.json();
}

export default function useRevistas(searchParams) {
	const { keyWords } = searchParams;
	const [page, setPage] = useState(INITIAL_PAGE);

	let url = `${BACKEND}/revistas?publicado=true&limit=${PAGE_SIZE}&page=${page}&sort=fecha%3Adesc`;
	if (keyWords !== '') {
		url += `&busqueda=${keyWords}`;
	}

	const { data, error } = useSWR(url, fetcher);

	const revistas = data ? data.items : null;
	const totalPaginas = data ? data.meta.totalPages : null;

	return {
		revistas,
		setPage,
		page,
		totalPaginas,
		INITIAL_PAGE,
		isLoading: !error && !data,
		isError: error,
	};
}
