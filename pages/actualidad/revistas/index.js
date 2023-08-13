import React, { useState, useRef } from 'react';
import Link from 'next/link';

import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import InputText from '../../../components/shared/InputText';
import CardsRevistasResultados from '../../../components/revistas/CardsRevistasResultados';
import SelectorIntervalosFechas from '../../../components/noticias/SelectorIntervalosFechas';
import PaginadorNoticias from '../../../components/noticias/PaginadorNoticias';
import useNoticias from '../../../hooks/useNoticias';

const START_DATE = new Date();
START_DATE.setMonth(START_DATE.getMonth() - 12);
START_DATE.setHours(0, 0, 0, 0);
const END_DATE = new Date();
END_DATE.setHours(23, 59, 59, 999);

const Revistas = () => {
	// const noticiasRef = useRef(null);
	const [input, setInput] = useState('');
	const [entradaBusqueda, setEntradaBusqueda] = useState('');
	const [startDate, setStartDate] = useState(START_DATE);
	const [endDate, setEndDate] = useState(END_DATE);

	const { noticias, setPage, page, totalPaginas, INITIAL_PAGE } = useNoticias(
		entradaBusqueda,
		startDate,
		endDate,
		START_DATE,
		END_DATE
	);

	const handleKeyDown = (e) => {
		setInput(e.target.value);
		if (e.target.value === '') {
			setEntradaBusqueda('');
		}
		if (e.key === 'Enter') {
			setEntradaBusqueda(e.target.value);
			setPage(INITIAL_PAGE);
		}
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
				<li className="text-textColorOne font-bold inline">Revistas</li>
			</ul>
			<div className="ml-4 md:ml-0 col-span-full title-page mb-4">
				Revistas
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
					value={input}
					onChange={handleKeyDown}
					placeholder="Buscar por palabra clave"
					onKeyDown={handleKeyDown}
					conIconoBuscador
					className="w-full md:w-[14rem] inline-block mb-4 md:mb-0"
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
				<div className="flex items-center mt-8 md:mt-0">
					<PaginadorNoticias
						controles={[page, setPage, totalPaginas]}
					/>
				</div>
				{/* {noticias?.length > 0 && (
				)} */}
			</div>
			<div className="col-span-full mb-2 min-h-0 md:min-h-[554px]">
				<CardsRevistasResultados revistas={noticias} />
			</div>
		</PrincipalLayout>
	);
};

export default Revistas;
