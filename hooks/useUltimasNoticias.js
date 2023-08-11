import { useState, useEffect } from 'react';
import { BASE_URL, SLUG_CARRERA } from '../config/consts';

export default function useUltimasNoticias() {
	const [ultimasNoticias, setUltimasNoticias] = useState(null);

	useEffect(() => {
		// setUltimasNoticias(null);
		let url = `${BASE_URL}/noticias/${SLUG_CARRERA}/ultimas`;

		const fetchDataUltimasNoticias = async () => {
			let response = await fetch(url);
			let ultimasNoticias = await response.json();
			setUltimasNoticias(ultimasNoticias);
			console.log(ultimasNoticias);
			// return ultimasNoticias;
			// window.scrollTo(0, 0);
		};
		fetchDataUltimasNoticias().catch(console.error);
	}, []);
	return {
		ultimasNoticias,
	};
}
