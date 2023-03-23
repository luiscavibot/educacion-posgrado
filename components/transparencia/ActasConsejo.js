import React, { useState } from 'react';
// import { Tab } from 'semantic-ui-react';
import DocumentosFillIcon from '../icons/DocumentosFillIcon';
import VideoIcon from '../icons/VideoIcon';

// import { Pagination } from 'semantic-ui-react';
// import FlechaIzquierdaIcon from '../icons/FlechaIzquierdaIcon';
// import FlechaDerechaIcon from '../icons/FlechaDerechaIcon';

// import { getPaginador } from '../../helpers/getPaginador';

import PaginacionActasConsejo from './Paginacion/PaginacionActasConsejo';
import useActasConsejo from '../../hooks/useActasConsejo';
import InputText from '../shared/InputText';
import SelectorIntervalosFechas from '../noticias/SelectorIntervalosFechas';

import { getFechaNumeros } from '../../helpers/getFecha';

import Cargando from '../resultados/Cargando';

const START_DATE = new Date();
START_DATE.setMonth(START_DATE.getMonth() - 12);
START_DATE.setHours(0, 0, 0, 0);
const END_DATE = new Date();
END_DATE.setHours(23, 59, 59, 999);

const ActasConsejo = () => {
	// const [valores, setValores] = useState({ pagina: 1, buscador: '' });
	// const limitePorPagina = 5;
	// const { data, total } = getPaginador(
	// 	actasConsejo,
	// 	valores.pagina,
	// 	limitePorPagina,
	// 	valores.buscador
	// );

	// const goToPage = (newPage) => {
	// 	setValores({
	// 		...valores,
	// 		pagina: newPage,
	// 	});
	// };

	// const noticiasRef = useRef(null);
	const [input, setInput] = useState('');
	const [entradaBusqueda, setEntradaBusqueda] = useState('');
	const [startDate, setStartDate] = useState(START_DATE);
	const [endDate, setEndDate] = useState(END_DATE);

	const { actasConsejo, setPage, page, totalPaginas, INITIAL_PAGE } =
		useActasConsejo(
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
		<>
			<p className="mb-6">
				Accede a todas nuestras Actas de Consejo de facultad y encuentra
				el acceso directo a las transmisiones en vivo de las mismas.
			</p>
			<div>
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
				<PaginacionActasConsejo
					controles={[page, setPage, totalPaginas]}
					className="float-right !my-3 md:!my-0"
				/>
			</div>
			{actasConsejo ? (
				actasConsejo.length > 0 ? (
					<div className="overflow-x-auto mt-6 w-full">
						<table className="table table-striped-even mb-6">
							<thead>
								<tr className="!bg-tertiary text-blanco text-center">
									<th className="w-40">Fecha</th>
									<th>Sesión</th>
									<th>Descripción</th>
									<th className="md:w-20 text-center">
										Documento
									</th>
									{/* <th className="md:w-20 text-center">
										Video
									</th> */}
								</tr>
							</thead>
							<tbody>
								{actasConsejo.map((acta, index) => {
									return (
										<>
											<tr key={index}>
												<td>
													{getFechaNumeros(
														acta.fecha
													)}
												</td>
												<td>{acta.sesion[0]}</td>
												<td>
													<p
														dangerouslySetInnerHTML={{
															__html: acta.descripcion,
														}}
														className="desc-actas"></p>
												</td>
												<td className="text-center">
													<a
														className="inline-grid place-items-center bg-blanco rounded-lg p-2 shadow-button"
														target="_blank"
														href={acta.documento}
														rel="noopener noreferrer"
														// onClick={() => {
														// 	window.open(
														// 		`${acta.documento}`,
														// 		'_blank'
														// 	);
														// }}
													>
														<DocumentosFillIcon className="fill-secondary" />
													</a>
												</td>
												{/* <td className="text-center">
													<a
														className="inline-grid place-items-center bg-blanco rounded-lg p-2 shadow-button"
														target="_blank"
														href={acta.video}
														rel="noopener noreferrer"
													>
														<VideoIcon className="fill-secondary" />
													</a>
												</td> */}
											</tr>
										</>
									);
								})}
							</tbody>
						</table>
					</div>
				) : (
					<p className="my-6">No hay resultados</p>
				)
			) : (
				<div className=" mt-10 flex justify-center items-center">
					<Cargando />
				</div>
			)}
		</>
	);
};

export default ActasConsejo;
