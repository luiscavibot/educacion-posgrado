import { useState, useEffect } from 'react';
import { BASE_URL, SLUG_CARRERA } from '../config/consts';
import { formatDate } from '../helpers/formatDate';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 10;

export default function useMemorias(
	entradaBusqueda,
	startDate,
	endDate,
	START_DATE,
	END_DATE
) {
	const [totalPaginas, setTotalPaginas] = useState(null);
	const [memorias, setMemorias] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);
	useEffect(() => {
		setMemorias(null);
		let url = `${BASE_URL}/memorias/${SLUG_CARRERA}?estado=true&limit=${PAGE_SIZE}`;

		let filtroStartDate = `&fecha_inicio=${formatDate(START_DATE)}`;
		let filtroEndDate = `&fecha_fin=${formatDate(END_DATE)}`;
		if (startDate !== START_DATE) {
			filtroStartDate = `&fecha_inicio=${formatDate(startDate)}`;
		}
		if (endDate !== END_DATE) {
			filtroEndDate = `&fecha_fin=${formatDate(endDate)}`;
		}
		if (entradaBusqueda !== '') {
			url += `&query=${entradaBusqueda}`;
		}
		url += filtroStartDate + filtroEndDate;
		url += `&page=${page}`;
		const fetchDataMemorias = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setTotalPaginas(res.meta.totalPages);
			setMemorias(res.items);
			window.scrollTo(0, 0);
		};
		fetchDataMemorias().catch(console.error);
	}, [entradaBusqueda, page, startDate, endDate]);
	// }, [page]);
	return {
		memorias,
		setPage,
		page,
		totalPaginas,
		INITIAL_PAGE,
	};
}
