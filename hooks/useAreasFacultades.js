import { useState, useEffect, useRef } from 'react';
import { BASE_URL } from '../config/consts';

export const useAreasFacultades = () => {
	const isMounted = useRef(true);
	const [state, setState] = useState({
		areas: [],
		facultades: [],
		loadingAreas: true,
		error: null,
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState({
			areas: [],
			facultades: [],
			loadingAreas: true,
			error: null,
		});

		fetch(`${BASE_URL}/areas?populate=facultades`)
			.then((resp) => resp.json())
			.then(({ data }) => {
				if (isMounted.current) {
					let areas = [];
					let facultades = [];
					data.forEach(
						({
							attributes: {
								nombre,
								facultades: { data },
							},
						}) => {
							areas = [
								...areas,
								{
									nombre: nombre,
									facultades: data.map(
										({ attributes: { nombre } }) => ({
											nombre,
										})
									),
								},
							];
							facultades = [
								...facultades,
								...data.map(({ attributes: { nombre } }) => ({
									nombre,
								})),
							];
						}
					);
					setState({
						loadingAreas: false,
						error: null,
						facultades,
						areas,
					});
				}
			});
	}, []);

	return state;
};
