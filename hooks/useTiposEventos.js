import { useState, useEffect } from 'react';
import { BASE_URL } from '../config/consts';

export default function useTiposEventos() {
	const [tiposEventos, setTiposEventos] = useState(null);
	useEffect(() => {
		setTiposEventos(null);
		let url = `${BASE_URL}/eventos/tipos/tipos-eventos`;
		const fetchDataTiposEventos = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setTiposEventos(res.tipos);
		};
		fetchDataTiposEventos().catch(console.error);
	}, []);
	return {
		tiposEventos,
	};
}
