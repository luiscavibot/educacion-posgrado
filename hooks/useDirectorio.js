import { useState, useEffect } from 'react';
import { BACKEND } from '../config/consts';

export default function useDirectorio() {
	const [directorio, setDirectorio] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setDirectorio(null);
		let url = `${BACKEND}/directorios`;
		setIsLoading(true);
		const fetchDirectorio = async () => {
			let response = await fetch(url);
			let res = await response.json();
			console.log(res);
			setDirectorio(res);
			setIsLoading(false);
		};
		fetchDirectorio().catch(console.error);
	}, []);
	return {
		directorio,
		isLoading,
	};
}
