import { useState, useEffect } from 'react';

const useEscuelasPregrado = () => {
	const [escuelasPregrado, setEscuelasPregrado] = useState([]);
	const [loadingEscuelasPregrado, setLoadingEscuelasPregrado] =
		useState(true);

	useEffect(() => {
		// Simular una llamada asincrónica a una API o un proceso que tome 2 segundos
		const fetchData = setTimeout(() => {
			const data = [
				{
					id: 1,
					label: 'Química',
					path: 'quimica',
				},
				{
					id: 2,
					label: 'Ingeniería Química',
					path: 'ingenieria-quimica',
				},

				{
					id: 3,
					label: 'Ingeniería Agroindustrial',
					path: 'ingenieria-agroindustrial',
				},
			];
			setEscuelasPregrado(data);
			setLoadingEscuelasPregrado(false);
		}, 1);

		// Limpieza del efecto en caso de desmontar el componente antes de que se complete la llamada asincrónica
		return () => {
			clearTimeout(fetchData);
		};
	}, []);

	return { escuelasPregrado, loadingEscuelasPregrado };
};

export default useEscuelasPregrado;
