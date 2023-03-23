import { useState, useEffect, useRef } from 'react';
import { BASE_URL } from '../config/consts';

const INITIAL_PAGE = 0;

export const useBuscadorGeneral = (entradaBusqueda = '') => {
	const isMounted = useRef(true);

	const initialState = {
		resultados: [],
		loadingResultados: true,
		error: null,
		cantidadResultados: 0,
	};

	const [state, setState] = useState(initialState);

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		if (entradaBusqueda === '') {
			setState({
				...initialState,
				loadingResultados: false,
			});
			return;
		}
		setState(initialState);
		const fetchData = async () => {
			let resultadoTemp = [];
			let cantidadResultadosTemp = 0;
			//MAESTRÍAS
			let dataFetch = await fetch(
				`${BASE_URL}/maestrias?fields=nombre,slug,descripcion&populate=&filters[$or][0][nombre][$containsi]=${entradaBusqueda}&filters[$or][1][descripcion][$containsi]=${entradaBusqueda}`
			);
			let response = await dataFetch.json();
			cantidadResultadosTemp += response.meta.pagination.total;
			resultadoTemp = [
				...resultadoTemp,
				...response.data.map((resultado) => ({
					titulo: `Maestría en ${resultado.attributes.nombre}`,
					url: resultado.attributes.slug,
					descripcion: resultado.attributes.descripcion,
					tipo: 'maestrias',
				})),
			];
			// DOCTORADOS
			dataFetch = await fetch(
				`${BASE_URL}/doctorados?fields=nombre,slug,descripcion&populate=&filters[$or][0][nombre][$containsi]=${entradaBusqueda}&filters[$or][1][descripcion][$containsi]=${entradaBusqueda}`
			);
			response = await dataFetch.json();
			cantidadResultadosTemp += response.meta.pagination.total;
			resultadoTemp = [
				...resultadoTemp,
				...response.data.map((resultado) => ({
					titulo: `Doctorado en ${resultado.attributes.nombre}`,
					url: resultado.attributes.slug,
					descripcion: resultado.attributes.descripcion,
					tipo: 'doctorados',
				})),
			];
			// DIPLOMATURAS
			// dataFetch = await fetch(
			// 	`${BASE_URL}/diplomaturas?fields=nombre,slug,descripcion&populate=&filters[$or][0][nombre][$containsi]=${entradaBusqueda}&filters[$or][1][descripcion][$containsi]=${entradaBusqueda}`
			// );
			// response = await dataFetch.json();
			// resultadoTemp = [
			// 	...resultadoTemp,
			// 	...response.data.map((resultado) => ({
			// 		titulo: resultado.attributes.nombre,
			// 		url: resultado.attributes.slug,
			// 		descripcion: resultado.attributes.descripcion,
			// 		tipo: 'diplomaturas',
			// 	})),
			// ];
			// ESPECIALIDADES
			dataFetch = await fetch(
				`${BASE_URL}/especialidades?fields=nombre,slug,descripcion&populate=&filters[$or][0][nombre][$containsi]=${entradaBusqueda}&filters[$or][1][descripcion][$containsi]=${entradaBusqueda}`
			);
			response = await dataFetch.json();
			cantidadResultadosTemp += response.meta.pagination.total;
			resultadoTemp = [
				...resultadoTemp,
				...response.data.map((resultado) => ({
					titulo: resultado.attributes.nombre,
					url: resultado.attributes.slug,
					descripcion: resultado.attributes.descripcion,
					tipo: 'especialidades',
				})),
			];

			setState({
				resultados: resultadoTemp,
				loadingResultados: false,
				error: null,
				cantidadResultados: cantidadResultadosTemp,
			});
		};

		fetchData().catch(console.log);
	}, [entradaBusqueda]);

	return state;
};

// const solicitarRecursosEnProgramas = async (entradaBusqueda, tipo) => {
// 	let resultadoTemp = [];
// 	let dataFetch = await fetch(
// 		`${BASE_URL}/${tipo}?fields=nombre,slug,descripcion&populate=&filters[$or][0][nombre][$containsi]=${entradaBusqueda}&filters[$or][1][descripcion][$containsi]=${entradaBusqueda}`
// 	);
// 	let response = await dataFetch.json();
// 	resultadoTemp = [
// 		...resultadoTemp,
// 		...response.data.map((resultado) => ({
// 			titulo: resultado.attributes.nombre,
// 			url: resultado.attributes.slug,
// 			descripcion: resultado.attributes.descripcion,
// 			tipo,
// 		})),
// 	];
// 	return resultadoTemp;
// };
