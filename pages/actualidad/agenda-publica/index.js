import React, { useState, useRef } from 'react';
import Link from 'next/link';

import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import InputText from '../../../components/shared/InputText';
import CardsNoticiasResultados from '../../../components/noticias/CardsNoticiasResultados';
import SelectorIntervalosFechas from '../../../components/noticias/SelectorIntervalosFechas';
import PaginadorNoticias from '../../../components/noticias/PaginadorNoticias';
import useNoticias from '../../../hooks/useNoticias';
import useAgendaPublica from '../../../hooks/useAgendaPublica';
const INITIAL_INPUTS = {
	keyWords: '',
};
const Noticias = () => {
	const debounceRef = useRef(null);
	const [inputs, setInputs] = useState(INITIAL_INPUTS);
	const [searchParams, setSearchParams] = useState(INITIAL_INPUTS);
	const { agenda, setPage, page, totalPaginas } =
		useAgendaPublica(searchParams);

	const handleChange = (e) => {
		setPage(0);
		setInputs({
			...inputs,
			keyWords: e.target.value,
		});
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			setSearchParams({
				...searchParams,
				keyWords: e.target.value,
			});
		}, 500);
	};
	return (
		<PrincipalLayout>
			<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
				<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
					Actualidad
				</li>
				<li className="text-textColorOne font-bold inline">
					Agenda Pública
				</li>
			</ul>
			<div className="ml-4 md:ml-0 col-span-full title-page mb-4">
				Agenda Pública
			</div>
			<div className="col-span-full mb-8 md:mb-8 flex flex-col md:flex-row justify-between items-center">
				{/* NOTE: Extiendo el ancho del input+contenedor al 100% para la versión responsive */}
				{/* <div className="px-4 md:px-0 w-full md:w-auto flex items-center justify-start">
					<InputText
						value={input}
						onChange={handleKeyDown}
						placeholder="Buscar por palabra clave"
						onKeyDown={handleKeyDown}
						conIconoBuscador
						className="w-full md:w-[14rem]"
						backgroundClass="bg-gris"
					/>
					<SelectorIntervalosFechas
						controles={[
							endDate,
							setEndDate,
							startDate,
							setStartDate,
							setPage,
							INITIAL_PAGE,
						]}
					/>
				</div> */}
				<InputText
					value={inputs.keyWords}
					name="buscador"
					onChange={handleChange}
					placeholder="Buscar por palabra clave"
					conIconoBuscador
					className="w-full md:w-[14rem] inline-block mb-4"
					backgroundClass="bg-textColorTwo/5"
				/>
				{/* <SelectorIntervalosFechas
					controles={[
						endDate,
						setEndDate,
						startDate,
						setStartDate,
						setPage,
						INITIAL_PAGE,
					]}
				/> */}
				<div className="flex items-center mt-8 md:mt-0">
					<PaginadorNoticias
						controles={[page, setPage, totalPaginas]}
					/>
				</div>
				{/* {noticias?.length > 0 && (
				)} */}
			</div>
			<div className="col-span-full mb-2 min-h-0 md:min-h-[554px]">
				<CardsNoticiasResultados agendas={agenda} />
			</div>
		</PrincipalLayout>
	);
};

export default Noticias;
