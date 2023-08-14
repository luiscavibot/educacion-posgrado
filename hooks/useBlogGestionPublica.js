import { useState, useEffect } from 'react';
import { BACKEND, SLUG_CARRERA } from '../config/consts';

const INITIAL_PAGE = 0;
const PAGE_SIZE = 8;

export default function useBlogGestionPublica(searchParams) {
	console.log(searchParams);
	const [blogGestionPublica, setBlogGestionPublica] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setBlogGestionPublica(null);
		const { keyWords } = searchParams;
		let url = `${BACKEND}/blog-gestion-publica?publicado=true`;
		if (keyWords !== '') {
			url += `&busqueda=${keyWords}`;
		}
		console.log(url);
		// let url = `${BACKEND}/blog-gestion-publica?publicado=true`;
		setIsLoading(true);
		const fetchDataBlogGestionPublica = async () => {
			let response = await fetch(url);
			let res = await response.json();
			setBlogGestionPublica(res.items);
			setIsLoading(false);
		};
		fetchDataBlogGestionPublica().catch(console.error);
	}, [searchParams]);
	return {
		blogGestionPublica,
		isLoading,
	};
}
