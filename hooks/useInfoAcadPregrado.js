import { useState, useEffect } from 'react';
import { BASE_URL, SLUG_CARRERA } from '../config/consts';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 10;

const RECURSOS_CHECK_VALUES = {
	syllabusCheck: 'SYLLABUS',
	horariosCheck: 'HORARIOS',
	planesEstudiosCheck: 'PLANESESTUDIOS',
	planesCurricularesCheck: 'PLANESCURRICULARES',
	mallasCurricularesCheck: 'MALLASCURRICULARES',
	otrosCheck: 'OTROS',
};

export default function useInfoAcadPregrado(searchParams) {
	const [totalPages, setTotalPages] = useState(null);
	const [infoAcadPregrado, setInfoAcadPregrado] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);
	useEffect(() => {
		setInfoAcadPregrado(null);
		if (!searchParams) return;

		const { keyWords, recursos, escuelas } = searchParams;

		// if (escuelas?.length < 0 || Object?.keys(recursos).length < 0) {
		// 	return;
		// }

		let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/pregrado/${process.env.NEXT_PUBLIC_FACULTAD_SLUG}?estado=true&limit=${PAGE_SIZE}&page=${page}`;
		if (keyWords !== '') {
			url += `&query=${keyWords}`;
		}
		// const escuelasChecksArray = Object.keys(checks.escuela)
		// 	.filter((key) => checks.escuela[key])
		// 	.map((key) => checkValues[key]);

		const escuelasChecksArray = escuelas
			?.filter((escuela) => escuela.check)
			.map((escuela) => escuela.path);

		if (escuelasChecksArray?.length > 0) {
			escuelasChecksArray.forEach((check, index) => {
				url += `&escuelas[${index}]=${check}`;
			});
		}
		const recursosChecksArray = Object.keys(recursos)
			.filter((key) => recursos[key])
			.map((key) => RECURSOS_CHECK_VALUES[key]);

		if (recursosChecksArray?.length > 0) {
			recursosChecksArray.forEach((check, index) => {
				url += `&recursos[${index}]=${check}`;
			});
		}
		const fetchDataInfoAcadPregrado = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setTotalPages(res.meta.totalPages);
			setInfoAcadPregrado(res.items);
		};
		fetchDataInfoAcadPregrado().catch(console.error);
	}, [searchParams, page]);
	return {
		infoAcadPregrado,
		setPage,
		page,
		totalPages,
	};
}
