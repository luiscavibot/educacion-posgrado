import { useEffect, useState } from 'react';
import { BACKEND } from '../config/consts';
import useSWR from 'swr';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 10;

const checkValues = {
	doctoradoCheck: 'DOCTORADO',
	maestriasCheck: 'MAESTRIA',
	segundasEspecialidadesCheck: 'SEGUNDASESPECIALIDADES',
	syllabusCheck: 'SYLLABUS',
	horariosCheck: 'HORARIOS',
	planesEstudiosCheck: 'PLANESESTUDIOS',
	planesCurricularesCheck: 'PLANESCURRICULARES',
	mallasCurricularesCheck: 'MALLASCURRICULARES',
	otrosCheck: 'OTROS',
};

export default function useInfoAcadPosgrado(searchParams) {
	const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

	const { keyWords, ...checks } = searchParams;
	let baseUrl = `${BACKEND}/informacion-academica?estado=true&limit=${PAGE_SIZE}`;

	if (keyWords !== '') {
		baseUrl += `&query=${keyWords}`;
	}

	const programasChecksArray = Object.keys(checks.programa)
		.filter((key) => checks.programa[key])
		.map((key) => checkValues[key]);

	if (programasChecksArray.length > 0) {
		programasChecksArray.forEach((check, index) => {
			baseUrl += `&programas[${index}]=${check}`;
		});
	}

	const recursosChecksArray = Object.keys(checks.recurso)
		.filter((key) => checks.recurso[key])
		.map((key) => checkValues[key]);

	if (recursosChecksArray.length > 0) {
		recursosChecksArray.forEach((check, index) => {
			baseUrl += `&recursos[${index}]=${check}`;
		});
	}

	const urlWithPage = (page) => `${baseUrl}&page=${page}`;

	const fetcher = async (url) => {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Error fetching data');
		}
		return response.json();
	};

	const { data, error, mutate } = useSWR(urlWithPage(currentPage), fetcher);
	const [lastTotalPages, setLastTotalPages] = useState(null);

	useEffect(() => {
		if (data && data.meta && data.meta.totalPages !== undefined) {
			setLastTotalPages(data.meta.totalPages);
		}
	}, [data]);

	return {
		infoAcadPosgrado: data ? data.items : null,
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
