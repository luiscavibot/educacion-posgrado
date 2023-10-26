import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import InputText from '../../../components/shared/InputText';
// import CardsEventosResultados from '../../../components/eventos/CardsEventosResultados';
import CardsEventosProximos from '../../../components/eventos/CardsEventosProximos';
import CardsEventosPasados from '../../../components/eventos/CardsEventosPasados';
// import SelectorIntervalosFechas from '../../components/eventos/SelectorIntervalosFechas';
import PaginadorEventos from '../../../components/eventos/PaginadorEventos';
import useEventos from '../../../hooks/useEventos';
import useEventosProximosUltimos from '../../../hooks/useEventosProximosUltimos';
import useEventosPasadosUltimos from '../../../hooks/useEventosPasadosUltimos';

const START_DATE = new Date();
START_DATE.setMonth(START_DATE.getMonth() - 12);
START_DATE.setHours(0, 0, 0, 0);
const END_DATE = new Date();
END_DATE.setHours(23, 59, 59, 999);

const EventosPasados = () => {
	// const eventosRef = useRef(null);
	// const [input, setInput] = useState('');
	// const [entradaBusqueda, setEntradaBusqueda] = useState('');
	// const [startDate, setStartDate] = useState(START_DATE);
	// const [endDate, setEndDate] = useState(END_DATE);
	// const [eventosPasadosUltimos, setEventosPasadosUltimos] = useState(
	// 	useEventosPasadosUltimos()
	// );
	// const [eventos, setEventos] = useState(useEventosProximosUltimos());

	// const { eventos, setPage, page, totalPaginas, INITIAL_PAGE } = useEventos(
	// 	entradaBusqueda,
	// 	startDate,
	// 	endDate,
	// 	START_DATE,
	// 	END_DATE
	// );

	// const { eventosProxUlt } = useEventosProximosUltimos();
	const { eventosPasUlt } = useEventosPasadosUltimos(false);

	// const handleKeyDown = (e) => {
	// 	setInput(e.target.value);
	// 	if (e.target.value === '') {
	// 		setEntradaBusqueda('');
	// 	}
	// 	if (e.key === 'Enter') {
	// 		setEntradaBusqueda(e.target.value);
	// 		setPage(INITIAL_PAGE);
	// 	}
	// };
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
				<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
					<Link href="/actualidad/eventos">
						<a>Eventos</a>
					</Link>
				</li>
				<li className="text-textColorOne font-bold inline">
					Eventos pasados
				</li>
			</ul>
			<div className="ml-4 md:ml-0 col-span-full title-page mb-8">
				Eventos pasados
			</div>
			{/* <div
				className="col-start-3 col-span-9 mb-8 md:mb-8 flex flex-col md:flex-row justify-between items-center"
				ref={eventosRef}> */}
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
			{/* <div className="flex items-center mt-8 md:mt-0">
					<PaginadorEventos
						controles={[page, setPage, totalPaginas]}
					/>
				</div> */}
			{/* {eventos?.length > 0 && (
				)} */}
			{/* </div> */}
			{/* <div className="col-start-3 col-span-9 mb-2 grid grid-cols-3 gap-x-6 gap-y-9">
				<CardsEventosResultados eventos={eventos} />
			</div> */}
			{/* {eventosProxUlt && eventosProxUlt.length > 0 && (
				<div className="col-start-3 col-span-9 mb-2">
					<div className="text-secondary font-bold text-xl mb-6">
						Próximos eventos
					</div>
					<div className="mb-2 grid grid-cols-3 gap-x-6 gap-y-9">
						<CardsEventosProximos eventos={eventosProxUlt} />
					</div>
					<div className="flex justify-center">
						<Link href="/eventos/proximos-eventos">
							<a
								className={`cursor-pointer border-[1px] border-primary rounded-lg py-2 px-3 font-medium text-sm text-primary duration-300 bg-blanco hover:-translate-y-1 mb-14`}>
								<span className="font-semibold">
									Ver todos los eventos
								</span>
							</a>
						</Link>
					</div>
				</div>
			)} */}

			{eventosPasUlt && eventosPasUlt.length > 0 && (
				<div className="col-span-full mb-2">
					{/* <div className="text-secondary font-bold text-xl mb-6">
						Eventos pasados
					</div> */}
					<div className="mb-2 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-9 px-8 md:px-0">
						<CardsEventosPasados eventos={eventosPasUlt} />
					</div>
					{/* <div className="flex justify-center">
						<Link href="/eventos/eventos-pasados">
							<a
								className={`cursor-pointer border-[1px] border-primary rounded-lg py-2 px-3 font-medium text-sm text-primary duration-300 bg-blanco hover:-translate-y-1 mb-14`}>
								<span className="font-semibold">
									Ver todos los eventos
								</span>
							</a>
						</Link>
					</div> */}
				</div>
			)}
		</PrincipalLayout>
	);
};

export default EventosPasados;
