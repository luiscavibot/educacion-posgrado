import { useState, useEffect, useRef } from 'react';
import { BASE_URL } from '../config/consts';

export const usePlanaDocente = (tipo, slug, valores) => {
	const url = `/docentes?filters[${tipo}][slug]=${slug}${valores.buscador}&populate=facultad,foto&pagination[page]=${valores.pagina}&pagination[pageSize]=2`;
	const isMounted = useRef(true);
	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState({
			data: null,
			loading: true,
			error: null,
		});

		fetch(`${BASE_URL}${url}`)
			.then((resp) => resp.json())
			.then((data) => {
				if (isMounted.current) {
					setState({
						loading: false,
						error: null,
						data,
					});
				}
			});
	}, [url]);

	return state;
};
