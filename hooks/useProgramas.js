import { useState, useEffect, useRef } from 'react';
import { BASE_URL } from '../config/consts';

const INITIAL_PAGE = 0;

export const useProgramas = (inputs, areas, tipo) => {
	let url = `/${tipo}?fields=nombre,slug&populate=*`;
	if (inputs.areaInteres !== '' && inputs.facultadInteres === '') {
		const facultades = areas.filter(
			(area) => area.nombre === inputs.areaInteres
		)[0].facultades;
		facultades.forEach((facultad, index) => {
			url += `&filters[facultad][nombre][$in][${index}]=${facultad.nombre}`;
		});
	}
	if (inputs.facultadInteres !== '') {
		url = `/${tipo}?fields=nombre,slug&populate=*&filters[facultad][nombre][$eq]=${inputs.facultadInteres}`;
	}
	if (inputs.buscador !== '') {
		url = `/${tipo}?fields=nombre,slug&populate=*&filters[nombre][$containsi]=${inputs.buscador}`;
	}
	const isMounted = useRef(true);

	// const [loadingNextPage, setLoadingNextPage] = useState(false)

	// const [page, setPage] = useState(INITIAL_PAGE)

	const [state, setState] = useState({
		programas: [],
		loadingProgramas: true,
		error: null,
		// loadingNextPage: false,
		page: INITIAL_PAGE,
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState({
			programas: [],
			loadingProgramas: true,
			error: null,
			page: 0,
		});

		fetch(`${BASE_URL}${url}`)
			.then((resp) => resp.json())
			.then(
				({
					data,
					meta: {
						pagination: { page },
					},
				}) => {
					let programas = [];
					data.forEach(
						({
							attributes: {
								nombre,
								slug,
								facultad: {
									data: { attributes },
								},
							},
						}) =>
							(programas = [
								...programas,
								{
									nombre: nombre,
									url: slug,
									facultad: attributes,
								},
							])
					);
					if (isMounted.current) {
						setState({
							loadingProgramas: false,
							error: null,
							programas,
							page,
						});
					}
				}
			);
	}, [url]);

	return state;
};
