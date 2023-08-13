import { useState, useEffect } from 'react';
import { BACKEND, SLUG_CARRERA } from '../config/consts';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 8;

export default function useBlogGestionPublica() {
	const [blogGestionPublica, setBlogGestionPublica] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setNoticias(null);
		let url = `${BACKEND}/blog-gestion-publica`;
		setIsLoading(true);
		const fetchDataBlogGestionPublica = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setBlogGestionPublica(res.meta.totalPages);
			setIsLoading(false);
		};
		fetchDataBlogGestionPublica().catch(console.error);
	}, []);
	return {
		blogGestionPublica,
		isLoading,
	};
}
