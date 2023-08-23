// useBlogGestionPublica.js
import useSWR from 'swr';
import axios from 'axios';
import { BACKEND } from '../config/consts';

const fetcher = async (url) => {
	const response = await axios.get(url);
	return response.data;
};

const useBlogGestionPublica = (params = {}) => {
	const buildURL = () => {
		let baseURL = `${BACKEND}/blog-gestion-publica`;
		let queryParams = '?publicado=true';

		if (params.slug) {
			return `${baseURL}/url/${params.slug}${queryParams}`;
		} else if (params.keyWords) {
			queryParams += `&busqueda=${encodeURIComponent(params.keyWords)}`;
			return `${baseURL}${queryParams}`;
		}
		return `${baseURL}${queryParams}`;
	};

	const url = buildURL();
	const { data, error } = useSWR(url, fetcher);

	const otrosBlogUrl =
		params.slug && data
			? `${BACKEND}/blog-gestion-publica/ultimas?publicado=true&id=${data[0].id}`
			: null;

	const { data: otrosBlogData } = useSWR(otrosBlogUrl, fetcher);

	let blogGestionPublica = null;
	let otrosBlog = otrosBlogData;

	if (data) {
		if (params.slug) {
			blogGestionPublica = data[0];
		} else {
			blogGestionPublica = data.items;
		}
	}

	return {
		blogGestionPublica,
		otrosBlog,
		isLoading: !data && !error,
		error: error,
	};
};

export default useBlogGestionPublica;
