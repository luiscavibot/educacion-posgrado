import { useState, useEffect } from 'react';
import { BASE_URL, SLUG_CARRERA } from '../config/consts';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 10;

export default function Comunicados(searchParams) {
	const [totalPages, setTotalPages] = useState(null);
	const [comunicados, setComunicados] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);
	useEffect(() => {
		setComunicados(null);
		const { keyWords } = searchParams;

		let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/comunicados/${process.env.NEXT_PUBLIC_FACULTAD_SLUG}?estado=true&limit=${PAGE_SIZE}&page=${page}`;
		if (keyWords !== '') {
			url += `&busqueda=${keyWords}`;
		}

		const fetchDataInfoAcadPregrado = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setTotalPages(res.meta.totalPages);
			setComunicados(res.items);
		};
		fetchDataInfoAcadPregrado().catch(console.error);
	}, [searchParams, page]);
	return {
		comunicados,
		setPage,
		page,
		totalPages,
	};
}
