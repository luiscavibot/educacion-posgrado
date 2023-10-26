import { useState, useEffect } from 'react';
import { BACKEND } from '../config/consts';

export default function useEventosPasadosUltimos(isMiniHome = true) {
	const [eventosPasUlt, setEventosPasUlt] = useState(null);
	useEffect(() => {
		setEventosPasUlt(null);
		let url = `${BACKEND}/eventos/ultimos-no-vigentes`;
		if (!isMiniHome) {
			url += '?isMiniHome=false';
		}
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
