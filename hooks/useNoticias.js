import { useState, useEffect } from 'react';
import { BASE_URL, SLUG_CARRERA } from '../config/consts';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 8;

export default function useNoticias(
	entradaBusqueda,
	startDate,
	endDate,
	START_DATE,
	END_DATE
) {
	const [totalPaginas, setTotalPaginas] = useState(null);
	const [noticias, setNoticias] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);
	useEffect(() => {
		setNoticias(null);
		let url = `${BASE_URL}/noticias/${SLUG_CARRERA}?estado=true&limit=${PAGE_SIZE}&sort=fecha:DESC`;
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
		const fetchDataNoticias = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setTotalPaginas(res.meta.totalPages);
			setNoticias(res.items);
			window.scrollTo(0, 0);
		};
		fetchDataNoticias().catch(console.error);
		// }, [entradaBusqueda, page, startDate, endDate]);
	}, [page]);
	return {
		noticias,
		setPage,
		page,
		totalPaginas,
		INITIAL_PAGE,
	};
}
