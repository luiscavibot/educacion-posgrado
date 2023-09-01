import React, { useState } from 'react';

import CompartirIcon from '../../../icons/CompartirIcon';

import { getElectivosPosgrado } from '../../../../helpers/getAsignaturas';

import { Tab } from 'semantic-ui-react';

import { Backdrop, Box, Fade, Modal } from '@mui/material';
import SharedComponent from '../../SharedComponent';
import Boton from '../../Boton';

export const MallaCurricular = ({ asignaturas, tipo, electivos }) => {
	// console.log(tipo);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const totalCreditos = (asignaturas, semestre) => {
		let total = 0;
		asignaturas
			.filter((asignatura) => asignatura.semestre === semestre)
			.forEach((asignatura) => {
				total += asignatura.credito;
			});
		return total;
	};

	const totalCreditosElectivos = (electivos) => {
		let total = 0;
		electivos.forEach((asignatura) => {
			total += asignatura.credito;
		});
		return total;
	};

	const tabs_dos_anios = [
		{
			menuItem: 'Primer año',
			nombre: 'primero',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-4 mb-8">
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center"
									>
										I semestre
									</th>
								</tr>
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturas
									.filter(
										(asignatura) =>
											asignatura.semestre === 'primero'
									)
									.map((asignatura) => {
										// totalCreditos1 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{/* {totalCreditos1} */}
										{totalCreditos(asignaturas, 'primero')}
									</td>
								</tr>
							</tbody>
						</table>
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center"
									>
										II semestre
									</th>
								</tr>
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturas
									.filter(
										(asignatura) =>
											asignatura.semestre === 'segundo'
									)
									.map((asignatura) => {
										// totalCreditos2 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{/* {totalCreditos2} */}
										{totalCreditos(asignaturas, 'segundo')}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Segundo año',
			nombre: 'segundo',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-4 mb-8">
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center"
									>
										III semestre
									</th>
								</tr>
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturas
									.filter(
										(asignatura) =>
											asignatura.semestre === 'tercero'
									)
									.map((asignatura) => {
										// totalCreditos1 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{/* {totalCreditos1} */}
										{totalCreditos(asignaturas, 'tercero')}
									</td>
								</tr>
							</tbody>
						</table>
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center"
									>
										IV semestre
									</th>
								</tr>
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturas
									.filter(
										(asignatura) =>
											asignatura.semestre === 'cuarto'
									)
									.map((asignatura) => {
										// totalCreditos2 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{/* {totalCreditos2} */}
										{totalCreditos(asignaturas, 'cuarto')}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Electivos',
			nombre: 'electivo',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mb-2">
						{electivos?.length > 0 ? (
							<table className="table table-striped mb-4">
								<thead>
									<tr>
										<th>Asignatura</th>
										<th className="md:w-60 text-center">
											Créditos
										</th>
									</tr>
								</thead>
								<tbody>
									{electivos.map((asignatura) => {
										// totalCreditos3 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
									<tr key="total">
										<td>Total de créditos</td>
										<td className="text-center">
											{totalCreditosElectivos(electivos)}
										</td>
									</tr>
								</tbody>
							</table>
						) : (
							<p className="my-4 mx-7">
								No se registran electivos para este programa
								académico.
							</p>
						)}
					</div>
				</Tab.Pane>
			),
		},
	];

	const tabs_tres_anios = [
		{
			menuItem: 'Primer año',
			nombre: 'primero',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-4 mb-8">
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center"
									>
										I semestre
									</th>
								</tr>
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturas
									.filter(
										(asignatura) =>
											asignatura.semestre === 'primero'
									)
									.map((asignatura) => {
										// totalCreditos1 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{/* {totalCreditos1} */}
										{totalCreditos(asignaturas, 'primero')}
									</td>
								</tr>
							</tbody>
						</table>
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center"
									>
										II semestre
									</th>
								</tr>
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturas
									.filter(
										(asignatura) =>
											asignatura.semestre === 'segundo'
									)
									.map((asignatura) => {
										// totalCreditos2 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{/* {totalCreditos2} */}
										{totalCreditos(asignaturas, 'segundo')}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Segundo año',
			nombre: 'segundo',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-4 mb-8">
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center"
									>
										III semestre
									</th>
								</tr>
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturas
									.filter(
										(asignatura) =>
											asignatura.semestre === 'tercero'
									)
									.map((asignatura) => {
										// totalCreditos1 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{/* {totalCreditos1} */}
										{totalCreditos(asignaturas, 'tercero')}
									</td>
								</tr>
							</tbody>
						</table>
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center"
									>
										IV semestre
									</th>
								</tr>
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturas
									.filter(
										(asignatura) =>
											asignatura.semestre === 'cuarto'
									)
									.map((asignatura) => {
										// totalCreditos2 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{/* {totalCreditos2} */}
										{totalCreditos(asignaturas, 'cuarto')}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Tercer año',
			nombre: 'tercero',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-4 mb-8">
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center"
									>
										V semestre
									</th>
								</tr>
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturas
									.filter(
										(asignatura) =>
											asignatura.semestre === 'quinto'
									)
									.map((asignatura) => {
										// totalCreditos1 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{/* {totalCreditos1} */}
										{totalCreditos(asignaturas, 'quinto')}
									</td>
								</tr>
							</tbody>
						</table>
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center"
									>
										VI semestre
									</th>
								</tr>
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturas
									.filter(
										(asignatura) =>
											asignatura.semestre === 'sexto'
									)
									.map((asignatura) => {
										// totalCreditos2 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{/* {totalCreditos2} */}
										{totalCreditos(asignaturas, 'sexto')}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Electivos',
			nombre: 'electivo',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mb-2">
						{electivos?.length > 0 ? (
							<table className="table table-striped mb-4">
								<thead>
									<tr>
										<th>Asignatura</th>
										<th className="md:w-60 text-center">
											Créditos
										</th>
									</tr>
								</thead>
								<tbody>
									{electivos.map((asignatura) => {
										// totalCreditos3 +=
										// 	asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
									<tr key="total">
										<td>Total de créditos</td>
										<td className="text-center">
											{totalCreditosElectivos(electivos)}
										</td>
									</tr>
								</tbody>
							</table>
						) : (
							<p className="my-4 mx-7">
								No se registran electivos para este programa
								académico.
							</p>
						)}
					</div>
				</Tab.Pane>
			),
		},
	];
	const tabs_semestres = [
		{
			menuItem: 'Primer semestre',
			nombre: 'primer',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-4 mb-8">
						<table className="table table-striped-even mb-0">
							<thead>
								{/* <tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center">
										I semestre
									</th>
								</tr> */}
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturasXSemestre
									.filter(
										(asignatura) =>
											asignatura.semestre === 'I'
									)
									.map((asignatura) => {
										totalCreditos1 += asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{totalCreditos1}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Segundo semestre',
			nombre: 'segundo',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-4 mb-8">
						<table className="table table-striped-even mb-0">
							<thead>
								{/* <tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center">
										I semestre
									</th>
								</tr> */}
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturasXSemestre
									.filter(
										(asignatura) =>
											asignatura.semestre === 'II'
									)
									.map((asignatura) => {
										totalCreditos1 += asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{totalCreditos1}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Electivos',
			nombre: 'electivo',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mb-2">
						{asignaturasElectivo.length > 0 ? (
							<table className="table table-striped mb-4">
								<thead>
									<tr>
										<th>Asignatura</th>
										<th className="md:w-60 text-center">
											Créditos
										</th>
									</tr>
								</thead>
								<tbody>
									{asignaturasElectivo.map((asignatura) => {
										totalCreditos += asignatura.credito;
										return (
											<tr key={asignatura.nombre}>
												<td>{asignatura.nombre}</td>
												<td className="text-center">
													{asignatura.credito}
												</td>
											</tr>
										);
									})}
									<tr key="total">
										<td>Total de créditos</td>
										<td className="text-center">
											{totalCreditos}
										</td>
									</tr>
								</tbody>
							</table>
						) : (
							<p className="my-4 mx-7">
								No se registran electivos para este programa
								académico.
							</p>
						)}
					</div>
				</Tab.Pane>
			),
		},
	];

	return (
		<div className="grid grid-cols-8">
			<div className="col-span-10 md:col-span-7">
				{tipo !== 'DIPLOMATURA' ? (
					<Tab
						menu={{ secondary: true, pointing: true }}
						panes={
							tipo !== 'DOCTORADO'
								? tabs_dos_anios
								: tabs_tres_anios
						}
						onTabChange={(e, data) => {
							let activeIndex = data.activeIndex;

							// setSemestre(data.panes[activeIndex].nombre);
						}}
					/>
				) : (
					<div className="overflow-x-auto mt-4 mb-8">
						<table className="table table-striped-even mb-0">
							<thead>
								<tr className="!bg-tertiary/50 text-blanco text-center">
									<th>Asignatura</th>
									<th className="md:w-60 text-center">
										Créditos
									</th>
								</tr>
							</thead>
							<tbody>
								{asignaturas.map((asignatura) => {
									// totalCreditos1 +=
									// 	asignatura.credito;
									return (
										<tr key={asignatura.nombre}>
											<td>{asignatura.nombre}</td>
											<td className="text-center">
												{asignatura.credito}
											</td>
										</tr>
									);
								})}
								<tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{/* {totalCreditos1} */}
										{totalCreditos(asignaturas, 'primero')}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
				{/* <Malla tipo={tipo} carreraSlug={carreraSlug} /> */}

				{/* <div className="mt-2 md:mt-0 flex justify-end">
					<div className="inline-block">
						<Boton className="" onClick={handleOpen}>
							<CompartirIcon className="fill-blanco inline-block relative -top-[1px] mr-2" />
							<span className="font-semibold">Compartir</span>
						</Boton>
					</div>
				</div>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 300,
					}}
					sx={{
						bgcolor: 'rgba(0, 0, 0, 0.5)',
					}}
				>
					<Fade in={open}>
						<Box
							className="w-[90%] md:w-auto h-[90vh] md:h-auto overflow-auto rounded-lg"
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								bgcolor: 'transparent',
							}}
						>
							<SharedComponent
								handleClose={handleClose}
								// ogUrl={ogUrl + '?tab=malla-curricular'}
							/>
						</Box>
					</Fade>
				</Modal> */}
			</div>
		</div>
	);
};
