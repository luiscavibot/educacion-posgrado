import React, { useState } from 'react';
// import { Tab } from 'semantic-ui-react';
import DocumentosFillIcon from '../icons/DocumentosFillIcon';

// import { Pagination } from 'semantic-ui-react';
// import FlechaIzquierdaIcon from '../icons/FlechaIzquierdaIcon';
// import FlechaDerechaIcon from '../icons/FlechaDerechaIcon';

// import { getPaginador } from '../../helpers/getPaginador';

import PaginacionMemorias from './Paginacion/PaginacionMemorias';
import useMemorias from '../../hooks/useMemorias';
import InputText from '../shared/InputText';
import SelectorIntervalosFechas from '../noticias/SelectorIntervalosFechas';

import { getFechaNumeros } from '../../helpers/getFecha';

import Cargando from '../resultados/Cargando';

const START_DATE = new Date();
START_DATE.setMonth(START_DATE.getMonth() - 12);
START_DATE.setHours(0, 0, 0, 0);
const END_DATE = new Date();
END_DATE.setHours(23, 59, 59, 999);

const Memorias = () => {
	const [input, setInput] = useState('');
	const [entradaBusqueda, setEntradaBusqueda] = useState('');
	const [startDate, setStartDate] = useState(START_DATE);
	const [endDate, setEndDate] = useState(END_DATE);

	const { memorias, setPage, page, totalPaginas, INITIAL_PAGE } = useMemorias(
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
				Accede a los últimos balances de gestión de la facultad.
			</p>
			<div className="px-4 md:px-0 w-full md:w-auto flex items-center justify-start">
				<InputText
					value={input}
					onChange={handleKeyDown}
					placeholder="Buscar por palabra clave"
					onKeyDown={handleKeyDown}
					conIconoBuscador
					className="w-full md:w-[14rem] inline-block"
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
				<PaginacionMemorias
					controles={[page, setPage, totalPaginas]}
					className="float-right"
				/>
			</div>
			{memorias ? (
				memorias.length > 0 ? (
					<div className="overflow-x-auto mt-3 w-full">
						<table className="table table-striped-even mb-6">
							<thead>
								<tr className="!bg-secondary text-blanco text-center">
									<th>Fecha</th>
									<th>Nombre</th>
									{/* <th>Descripción</th> */}
									<th className="md:w-20 text-center">
										Documento
									</th>
								</tr>
							</thead>
							<tbody>
								{memorias.map((memoria, index) => {
									return (
										<>
											<tr key={index}>
												<td>{memoria.fecha}</td>
												<td>{memoria.nombre}</td>
												{/* <td
													dangerouslySetInnerHTML={{
														__html: memoria.descripcion,
													}}
													className="desc-memorias"></td> */}
												{/* <td>{memoria.descripcion}</td> */}
												<td className="text-center">
													<a
														className="inline-grid place-items-center bg-blanco rounded-lg p-2 shadow-button"
														href={
															memoria.documento
														}>
														<DocumentosFillIcon className="fill-secondary" />
													</a>
												</td>
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

export default Memorias;
