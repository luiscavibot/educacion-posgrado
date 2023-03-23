import { useState, useEffect } from 'react';
import { BASE_URL, SLUG_CARRERA } from '../config/consts';

export default function useEventosProximosUltimos() {
	const [eventosProxUlt, setEventosProxUlt] = useState(null);
	useEffect(() => {
		setEventosProxUlt(null);
		let url = `${BASE_URL}/eventos/${SLUG_CARRERA}?estado=true&vigentes=true&limit=6`;
		const fetchDataEventos = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setEventosProxUlt(res);
			window.scrollTo(0, 0);
		};
		fetchDataEventos().catch(console.error);
	}, []);
	return {
		eventosProxUlt,
	};
}
