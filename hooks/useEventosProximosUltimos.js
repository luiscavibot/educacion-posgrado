import { useState, useEffect } from 'react';
import { BACKEND } from '../config/consts';

export default function useEventosProximosUltimos() {
	const [eventosProxUlt, setEventosProxUlt] = useState(null);
	useEffect(() => {
		setEventosProxUlt(null);
		let url = `${BACKEND}/eventos/ultimos-vigentes`;
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
