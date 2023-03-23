import { useState, useEffect } from 'react';
import { BASE_URL, SLUG_CARRERA } from '../config/consts';

export default function useEventosPasadosUltimos() {
	const [eventosPasUlt, setEventosPasUlt] = useState(null);
	useEffect(() => {
		setEventosPasUlt(null);
		let url = `${BASE_URL}/eventos/${SLUG_CARRERA}?estado=true&vigentes=false&limit=6`;
		const fetchDataEventosPasados = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setEventosPasUlt(res);
			window.scrollTo(0, 0);
		};
		fetchDataEventosPasados().catch(console.error);
	}, []);
	return {
		eventosPasUlt,
	};
}
