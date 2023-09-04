import React, { useState } from 'react';
// import { Tab } from 'semantic-ui-react';
import DocumentosFillIcon from '../icons/DocumentosFillIcon';

// import { Pagination } from 'semantic-ui-react';
// import FlechaIzquierdaIcon from '../icons/FlechaIzquierdaIcon';
// import FlechaDerechaIcon from '../icons/FlechaDerechaIcon';

// import { getPaginador } from '../../helpers/getPaginador';

import PaginacionDocumentosOficiales from './Paginacion/PaginacionDocumentosOficiales';
import useDocumentosOficiales from '../../hooks/useDocumentosOficiales';
import InputText from '../shared/InputText';
import Select from '../shared/Select';

import Cargando from '../resultados/Cargando';

const START_DATE = new Date();
START_DATE.setMonth(START_DATE.getMonth() - 12);
START_DATE.setHours(0, 0, 0, 0);
const END_DATE = new Date();
END_DATE.setHours(23, 59, 59, 999);

const DocumentosOficiales = ({ years }) => {
	console.log(years);
	const initialInputs = {
		year: '',
		buscador: '',
	};
	const [inputs, setInputs] = useState(initialInputs);

	const [entradaBusqueda, setEntradaBusqueda] = useState('');
	const [optionsYear, setOptionsYear] = useState(years);

	const { documentosOficiales, setPage, page, totalPaginas, INITIAL_PAGE } =
		useDocumentosOficiales(inputs.buscador, inputs.year);

	const handleChange = (e) => {
		setInputs({
			...inputs,
			year: e.target.value,
		});
	};

	const handleKeyDown = (e) => {
		setEntradaBusqueda(e.target.value, 'valor');
		if (e.target.value === '') {
			setInputs({ ...inputs, buscador: '' });
			// setEntradaBusqueda('');
		}
		if (e.key === 'Enter') {
			setInputs({
				...inputs,
				year: '',
				[e.target.name]: e.target.value,
			});
			// setEntradaBusqueda(e.target.value);
			setPage(INITIAL_PAGE);
		}
		// setInputs({
		// 	...inputs,
		// 	[e.target.name]: e.target.value,
		// });
	};

	// var uniqueYears = [];

	// documentosOficiales.items.map((documento) => {
	// 	if (uniqueYears.indexOf(documento.anio) === -1) {
	// 		uniqueYears.push(documento.anio);
	// 	}
	// });

	// const years = uniqueYears.sort(function (a, b) {
	// 	return b - a;
	// });

	// const panes = years.map((year) => {
	// 	return {
	// 		menuItem: year,
	// 		render: () => (
	// 			<Tab.Pane attached={false}>
	// 				<div className="overflow-x-auto mt-3">
	// 					<table className="table table-striped-even mb-6">
	// 						<thead>
	// 							<tr className="!bg-secondary/50 text-blanco text-center">
	// 								<th>Nombre</th>
	// 								<th className="md:w-60 text-center">
	// 									Documento
	// 								</th>
	// 							</tr>
	// 						</thead>
	// 						<tbody>
	// 							{documentosOficiales.items
	// 								.filter(
	// 									(documento) => documento.anio === year
	// 								)
	// 								.map((documento, index) => {
	// 									return (
	// 										<>
	// 											<tr key={index}>
	// 												<td>{documento.nombre}</td>
	// 												<td className="text-center">
	// 													<a
	// 														className="inline-grid place-items-center bg-blanco rounded-lg p-2 shadow-button"
	// 														href={
	// 															documento.archivo
	// 														}>
	// 														<DocumentosFillIcon className="fill-primary" />
	// 													</a>
	// 												</td>
	// 											</tr>
	// 										</>
	// 									);
	// 								})}
	// 						</tbody>
	// 					</table>
	// 				</div>
	// 			</Tab.Pane>
	// 		),
	// 	};
	// });

	return (
		<>
			<p className="mb-6">
				Encuentra aquí todos nuestros informes, registros y
				documentación de la facultad, y entérate de las últimas
				novedades.
			</p>
			<div>
				<InputText
					value={entradaBusqueda}
					name="buscador"
					onChange={handleKeyDown}
					placeholder="Buscar por palabra clave"
					onKeyDown={handleKeyDown}
					conIconoBuscador
					className="w-full md:w-[14rem] inline-block mb-4 md:mb-0"
					backgroundClass="bg-textColorTwo/5"
				/>
				<Select
					name="optionYear"
					onChange={handleChange}
					value={inputs.year}
					arrayOpciones={optionsYear}
					primeraOpcion="Año"
					className="w-full md:w-[14rem] ml-0 md:ml-6 md:mr-6 mr-0"
				/>

				<PaginacionDocumentosOficiales
					controles={[page, setPage, totalPaginas]}
					className="float-right !my-3 md:!my-0"
				/>
			</div>
			{documentosOficiales ? (
				documentosOficiales.length > 0 ? (
					<div className="overflow-x-auto mt-6 w-full">
						<table className="table table-striped mb-6">
							<tbody>
								{documentosOficiales.map((documento, index) => {
									return (
										<>
											<tr key={index}>
												<td>{documento.nombre}</td>
												<td className="text-center">
													<a
														className="inline-grid place-items-center bg-blanco rounded-lg p-2 shadow-button"
														target="_blank"
														rel="noopener noreferrer"
														href={documento.archivo}
													>
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

export default DocumentosOficiales;
