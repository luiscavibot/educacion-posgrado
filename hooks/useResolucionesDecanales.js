import { useState, useEffect } from 'react';
import { BASE_URL, SLUG_CARRERA } from '../config/consts';
import { formatDate } from '../helpers/formatDate';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 10;

export default function useResolucionesDecanales(
	entradaBusqueda,
	startDate,
	endDate,
	START_DATE,
	END_DATE
) {
	const [totalPaginas, setTotalPaginas] = useState(null);
	const [resolucionesDecanales, setResolucionesDecanales] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);
	useEffect(() => {
		setResolucionesDecanales(null);
		let url = `${BASE_URL}/resoluciones-decanales/${SLUG_CARRERA}?estado=true&limit=${PAGE_SIZE}`;

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
		const fetchDataResolucionesDecanales = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setTotalPaginas(res.meta.totalPages);
			setResolucionesDecanales(res.items);
			window.scrollTo(0, 0);
		};
		fetchDataResolucionesDecanales().catch(console.error);
	}, [entradaBusqueda, page, startDate, endDate]);
	// }, [page]);
	return {
		resolucionesDecanales,
		setPage,
		page,
		totalPaginas,
		INITIAL_PAGE,
	};
}
