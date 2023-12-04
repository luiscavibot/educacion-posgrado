// useParallelQueries.js
import useSWR from 'swr';
import { BACKEND } from '../config/consts';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useHome = () => {
	// const { data: eventosVigentes, error: errorEventos } = useSWR(
	// 	`${BACKEND}/eventos/ultimos-vigentes`,
	// 	fetcher
	// );

	const { data: agendaDestacadas, error: errorAgendaDestacadas } = useSWR(
		`${BACKEND}/noticias/educacion/destacadas`,
		fetcher
	);

	const { data: ultimasHome, error: errorUltimasHome } = useSWR(
		`${BACKEND}/noticias/educacion/ultimas-home`,
		fetcher
	);

	return {
		// eventosVigentes,
		agendaDestacadas,
		ultimasHome,
		isLoading: !agendaDestacadas && !ultimasHome,
		isError: errorAgendaDestacadas || errorUltimasHome,
	};
};
