import { useState, useEffect } from 'react';
import { BACKEND, BASE_URL, SLUG_CARRERA } from '../config/consts';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 10;

export default function useAgendaPublica(searchParams) {
	const [totalPaginas, setTotalPaginas] = useState(null);
	const [agenda, setAgenda] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);
	useEffect(() => {
		setAgenda(null);
		const { keyWords } = searchParams;

		let url = `${BASE_URL}/noticias/educacion?estado=true&limit=${PAGE_SIZE}&sort=fecha:DESC`;
		if (keyWords !== '') {
			url += `&busqueda=${keyWords}`;
		}
		// url += `&pagination[pageSize]=${PAGE_SIZE}&sort=fecha%3Adesc`;

		// let filtroStartDate = `&filters[fecha][$gte]=${START_DATE.getTime()}`;
		// let filtroEndDate = `&filters[fecha][$lte]=${END_DATE.getTime()}`;
		// if (startDate !== START_DATE) {
		// 	filtroStartDate = `&filters[fecha][$gte]=${startDate.getTime()}`;
		// }
		// if (endDate !== END_DATE) {
		// 	filtroEndDate = `&filters[fecha][$lte]=${endDate.getTime()}`;
		// }
		// if (entradaBusqueda !== '') {
		// 	url += `&filters[$or][0][titulo][$contains]=${entradaBusqueda}`;
		// 	url += `&filters[$or][1][subtitulo][$contains]=${entradaBusqueda}`;
		// 	url += `&filters[$or][2][cuerpo][$contains]=${entradaBusqueda}`;
		// 	filtroStartDate = '';
		// 	filtroEndDate = '';
		// }
		// url += filtroStartDate + filtroEndDate;
		url += `&page=${page}`;
		const fetchData = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setTotalPaginas(res.meta.totalPages);
			setAgenda(res.items);
			window.scrollTo(0, 0);
		};
		fetchData().catch(console.error);
		// }, [entradaBusqueda, page, startDate, endDate]);
	}, [page, searchParams]);
	return {
		agenda,
		setPage,
		page,
		totalPaginas,
		INITIAL_PAGE,
	};
}
