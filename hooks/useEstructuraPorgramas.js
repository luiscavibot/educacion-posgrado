import { useState, useEffect, useRef } from 'react';
import { BASE_URL } from '../config/consts';

export const useEstructuraPorgramas = () => {
	const isMounted = useRef(true);
	const [state, setState] = useState({
		estructura: [],
		loadingEstructura: true,
		error: null,
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState({
			estructura: [],
			loadingEstructura: true,
			error: null,
		});

		fetch(
			`${BASE_URL}/facultades?fields[0]=nombre&populate[maestrias][fields][0]=nombre&populate[doctorados][fields][0]=nombre`
		)
			.then((resp) => resp.json())
			.then(({ data }) => {
				if (isMounted.current) {
					let estructura = data.map(({ attributes }) => ({
						...attributes,
						maestrias: attributes.maestrias.data.map(
							({ attributes: { nombre } }) => ({ nombre })
						),
						doctorados: attributes.doctorados.data.map(
							({ attributes: { nombre } }) => ({ nombre })
						),
					}));
					setState({
						estructura,
						loadingEstructura: false,
						error: null,
					});
				}
			});
	}, []);

	return state;
};
