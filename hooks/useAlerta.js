// hooks/useAlertasInformativas.js
import useSWR from 'swr';
import axios from 'axios';
import { BACKEND } from '../config/consts';

const fetcher = async (url) => {
	const response = await axios.get(url);
	return response.data;
};

const useAlertasInformativas = () => {
	const { data, error, mutate } = useSWR(
		`${BACKEND}/alertas-informativas?publicado=true`,
		fetcher
	);

	// Devolver solo el primer elemento del array 'items' si existe.
	const primeraAlerta = data?.items?.[0];

	return {
		alerta: primeraAlerta,
		isLoading: !error && !data,
		isError: error,
		refresh: mutate,
	};
};

export default useAlertasInformativas;
