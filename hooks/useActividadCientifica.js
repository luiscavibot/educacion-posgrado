import useSWR from 'swr';
import { BACKEND } from '../config/consts';
import { useEffect, useState } from 'react';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 10;

const checkValues = {
	articulosCientificosCheck: 'ARTICULOSCIENTIFI',
	articulosDeRevisionCheck: 'ARTICULOSREVISION',
	tesisCheck: 'TESIS',
	sustentacionesVirtualesCheck: 'SUSTENTACIONESVIRTUALES',
	librosCheck: 'LIBROS',
	investigacionesDeDoctoradoCheck: 'INVESTIGACIONESDEDOCTORADO',
	gestionEnElTercerMilenioCheck: 'GESTIONENELTERCERMILENIO',
};

const fetcher = async (url) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Error al obtener datos');
	}
	return response.json();
};

export default function useActividadCientifica(searchParams) {
	const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
	const { keyWords, ...checks } = searchParams;
	let baseUrl = `${BACKEND}/produccion-cientifica?publicado=true&limit=${PAGE_SIZE}`;
	if (keyWords !== '') {
		baseUrl += `&query=${keyWords}`;
	}
	const checksArray = Object.keys(checks)
		.filter((key) => checks[key])
		.map((key) => checkValues[key]);

	if (checksArray.length > 0) {
		checksArray.forEach((check, index) => {
			baseUrl += `&tipos[${index}]=${check}`;
		});
	}
	const urlWithPage = (page) => `${baseUrl}&page=${page}`;

	const { data, error, mutate } = useSWR(urlWithPage(currentPage), fetcher);
	const [lastTotalPages, setLastTotalPages] = useState(null);
	useEffect(() => {
		if (data && data.meta && data.meta.totalPages !== undefined) {
			setLastTotalPages(data.meta.totalPages);
		}
	}, [data]);
	return {
		actividades: data ? data.items : null,
		setPage: (newPage) => {
			setCurrentPage(newPage);
			mutate(urlWithPage(newPage));
		},
		page: currentPage,
		totalPages: lastTotalPages,
		isLoading: !error && !data,
		isError: error,
	};
}
