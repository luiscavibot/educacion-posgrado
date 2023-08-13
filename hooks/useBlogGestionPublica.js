import { useState, useEffect } from 'react';
import { BACKEND, SLUG_CARRERA } from '../config/consts';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 8;

export default function useBlogGestionPublica() {
	const [blogGestionPublica, setBlogGestionPublica] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setBlogGestionPublica(null);
		let url = `${BACKEND}/blog-gestion-publica?publicado=true`;
		setIsLoading(true);
		const fetchDataBlogGestionPublica = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setBlogGestionPublica(res.items);
			setIsLoading(false);
		};
		fetchDataBlogGestionPublica().catch(console.error);
	}, []);
	return {
		blogGestionPublica,
		isLoading,
	};
}
