// import { useState, useEffect } from 'react';
// import { BACKEND, BASE_URL, SLUG_CARRERA } from '../config/consts';

// const INITIAL_PAGE = 0;
// const PAGE_SIZE = 10;

// export default function useDocumentosOficiales(entradaBusqueda, year) {
// 	const [totalPaginas, setTotalPaginas] = useState(null);
// 	const [documentosOficiales, setDocumentosOficiales] = useState(null);
// 	const [page, setPage] = useState(INITIAL_PAGE);
// 	useEffect(() => {
// 		setDocumentosOficiales(null);
// 		let url = `${BACKEND}/documentos-oficiales?estado=true&limit=${PAGE_SIZE}`;

// 		if (year != '') {
// 			url += `&anio=${year}`;
// 		}
// 		if (entradaBusqueda !== '') {
// 			url += `&query=${entradaBusqueda}`;
// 		}
// 		url += `&page=${page}`;
// 		const fetchDataDocumentosOficiales = async () => {
// 			let response = await fetch(url);
// 			let res = await response.json();
// 			setTotalPaginas(res.meta.totalPages);

// 			setDocumentosOficiales(res.items);
// 			window.scrollTo(0, 0);
// 		};
// 		fetchDataDocumentosOficiales().catch(console.error);
// 	}, [entradaBusqueda, page, year]);
// 	return {
// 		documentosOficiales,
// 		setPage,
// 		page,
// 		totalPaginas,
// 		INITIAL_PAGE,
// 	};
// }
import useSWR from 'swr';
import { BACKEND } from '../config/consts';
import { useState } from 'react';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 10;

const fetcher = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export default function useDocumentosOficiales(entradaBusqueda, year) {
	const [page, setPage] = useState(INITIAL_PAGE);

	let url = `${BACKEND}/documentos-oficiales?estado=true&limit=${PAGE_SIZE}`;

	if (year != '') {
		url += `&anio=${year}`;
	}
	if (entradaBusqueda !== '') {
		url += `&query=${entradaBusqueda}`;
	}
	url += `&page=${page}`;

	const { data, error } = useSWR(url, fetcher);

	const documentosOficiales = data?.items || null;
	const totalPaginas = data?.meta?.totalPages || null;

	return {
		documentosOficiales,
		setPage,
		page,
		totalPaginas,
		INITIAL_PAGE,
		isLoading: !data && !error,
		isError: error,
	};
}
