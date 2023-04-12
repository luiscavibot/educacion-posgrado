import { useState, useEffect } from 'react';
import { BASE_URL, SLUG_CARRERA } from '../config/consts';

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
	const [totalPages, setTotalPages] = useState(null);
	const [infoAcadPosgrado, setInfoAcadPosgrado] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);
	useEffect(() => {
		setInfoAcadPosgrado(null);
		const { keyWords, ...checks } = searchParams;

		let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/posgrado/${process.env.NEXT_PUBLIC_FACULTAD_SLUG}?estado=true&limit=${PAGE_SIZE}&page=${page}`;
		if (keyWords !== '') {
			url += `&query=${keyWords}`;
		}
		const programasChecksArray = Object.keys(checks.programa)
			.filter((key) => checks.programa[key])
			.map((key) => checkValues[key]);

		if (programasChecksArray.length > 0) {
			programasChecksArray.forEach((check, index) => {
				url += `&programas[${index}]=${check}`;
			});
		}
		const recursosChecksArray = Object.keys(checks.recurso)
			.filter((key) => checks.recurso[key])
			.map((key) => checkValues[key]);

		if (recursosChecksArray.length > 0) {
			recursosChecksArray.forEach((check, index) => {
				url += `&recursos[${index}]=${check}`;
			});
		}
		const fetchDataInfoAcadPosgrado = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setTotalPages(res.meta.totalPages);
			setInfoAcadPosgrado(res.items);
		};
		fetchDataInfoAcadPosgrado().catch(console.error);
	}, [searchParams, page]);
	return {
		infoAcadPosgrado,
		setPage,
		page,
		totalPages,
	};
}
