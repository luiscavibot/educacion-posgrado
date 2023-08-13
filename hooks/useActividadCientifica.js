import { useState, useEffect } from 'react';
import { BACKEND, BASE_URL, SLUG_CARRERA } from '../config/consts';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 8;

export default function useActividadCientifica(selectedOption) {
	const [actividadesCientificas, setActividadesCientificas] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setActividadesCientificas([]);
		let url = `${BACKEND}/produccion-cientifica`;
		setIsLoading(true);
		const fetchDataActividadCientifica = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setIsLoading(false);
			if (selectedOption) {
				setActividadesCientificas(
					res.filter(
						(actividad) =>
							actividad.tipo_produccion_academica ===
							selectedOption
					)
				);
				return;
			}
			setActividadesCientificas(res);
		};
		fetchDataActividadCientifica().catch(console.error);
		// }, [entradaBusqueda, page, startDate, endDate]);
	}, [selectedOption]);
	return {
		actividadesCientificas,
		isLoading,
	};
}
