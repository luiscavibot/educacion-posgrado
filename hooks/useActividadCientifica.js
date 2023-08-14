import { useState, useEffect } from 'react';
import { BACKEND } from '../config/consts';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 10;

const checkValues = {
	articulosCientificosCheck: 'ARTICULOSCIENTIFI',
	articulosDeRevisionCheck: 'ARTICULOSREVISION',
	tesisCheck: 'TESIS',
	sustentacionesVirtualesCheck: 'SUSTENTACIONESVIRTUALES',
	librosCheck: 'LIBROS',
	investigacionesDeDoctoradoCheck: 'INVESTIGACIONESDEDOCTORADO',
};

export default function useActividadCientifica(searchParams) {
	const [totalPages, setTotalPages] = useState(null);
	const [actividades, setActividades] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);
	useEffect(() => {
		setActividades(null);
		const { keyWords, ...checks } = searchParams;
		let url = `${BACKEND}/produccion-cientifica?publicado=true&limit=${PAGE_SIZE}&page=${page}`;
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
		const fetchDataActividades = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setTotalPages(res.meta.totalPages);
			setActividades(res.items);
		};
		fetchDataActividades().catch(console.error);
	}, [searchParams, page]);
	return {
		actividades,
		setPage,
		page,
		totalPages,
	};
}
