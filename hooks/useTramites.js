import { useState, useEffect } from 'react';
import { BACKEND } from '../config/consts';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 10;

const checkValues = {
	estudiantesCheck: 'ESTUDIANTES',
	egresadosCheck: 'EGRESADOS',
	docentesCheck: 'DOCENTES',
	// egresadosCheck: 'EGRESADO',
	// docentesCheck: 'DOCENTE',
};

export default function useTramites(searchParams) {
	const [totalPages, setTotalPages] = useState(null);
	const [tramites, setTramites] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);
	useEffect(() => {
		setTramites(null);
		const { keyWords, ...checks } = searchParams;
		let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/tramites/${process.env.NEXT_PUBLIC_FACULTAD_SLUG}?estado=true&limit=${PAGE_SIZE}&page=${page}&sort=updated_at:DESC&targetProject=POSGRADO`;
		if (keyWords !== '') {
			url += `&query=${keyWords}`;
		}
		const checksArray = Object.keys(checks)
			.filter((key) => checks[key])
			.map((key) => checkValues[key]);

		if (checksArray.length > 0) {
			checksArray.forEach((check, index) => {
				url += `&tipos[${index}]=${check}`;
			});
		}
		const fetchDataTramites = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setTotalPages(res.meta.totalPages);
			setTramites(res.items);
		};
		fetchDataTramites().catch(console.error);
	}, [searchParams, page]);
	return {
		tramites,
		setPage,
		page,
		totalPages,
	};
}
