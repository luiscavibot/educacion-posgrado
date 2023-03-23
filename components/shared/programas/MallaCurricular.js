import React, { useState, useRef } from 'react';

import CompartirIcon from '../../icons/CompartirIcon';

import {
	getAsignaturasXSemestre,
	getAsignaturasXAnio,
	getElectivos,
} from '../../../helpers/getAsignaturas';

import { Tab } from 'semantic-ui-react';
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import SharedComponent from '../SharedComponent';
import Boton from '../Boton';
export const MallaCurricular = ({
	asignaturas,
	creditos,
	tipo,
	carreraSlug,
	ogUrl,
}) => {
	const [semestre, setSemestre] = useState('primero');
	const asignaturasXAnio = getAsignaturasXAnio(semestre, asignaturas);

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const asignaturasElectivo = getElectivos(asignaturas);

	const totalCreditos = (asignaturas, semestre) => {
		let total = 0;
		asignaturas
			.filter(
				(asignatura) =>
					asignatura.semestre === semestre &&
					asignatura.electivo === false
			)
			.forEach((asignatura) => {
				total += asignatura.credito;
			});
		return total;
	};

	const totalCreditosElectivos = (asignaturas) => {
		let total = 0;
		asignaturas
			.filter((asignatura) => asignatura.electivo === true)
			.forEach((asignatura) => {
				total += asignatura.credito;
			});
		return total;
	};
	const tabs_anios = [
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
										className="!bg-tertiary text-blanco text-center">
										I ciclo
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
								{asignaturasXAnio
									.filter(
										(asignatura) =>
											asignatura.semestre === 'I'
									)
									.map((asignatura) => {
										// totalCreditos1 += asignatura.credito;
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
										{totalCreditos(asignaturasXAnio, 'I')}
									</td>
								</tr>
							</tbody>
						</table>
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center">
										II ciclo
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
								{asignaturasXAnio
									.filter(
										(asignatura) =>
											asignatura.semestre === 'II'
									)
									.map((asignatura) => {
										// totalCreditos2 += asignatura.credito;
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
										{totalCreditos(asignaturasXAnio, 'II')}
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
										className="!bg-tertiary text-blanco text-center">
										III ciclo
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
								{asignaturasXAnio
									.filter(
										(asignatura) =>
											asignatura.semestre === 'III'
									)
									.map((asignatura) => {
										// totalCreditos1 += asignatura.credito;
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
										{totalCreditos(asignaturasXAnio, 'III')}
									</td>
								</tr>
							</tbody>
						</table>
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center">
										IV ciclo
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
								{asignaturasXAnio
									.filter(
										(asignatura) =>
											asignatura.semestre === 'IV'
									)
									.map((asignatura) => {
										// totalCreditos2 += asignatura.credito;
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
										{totalCreditos(asignaturasXAnio, 'IV')}
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
										className="!bg-tertiary text-blanco text-center">
										V ciclo
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
								{asignaturasXAnio
									.filter(
										(asignatura) =>
											asignatura.semestre === 'V'
									)
									.map((asignatura) => {
										// totalCreditos1 += asignatura.credito;
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
										{totalCreditos(asignaturasXAnio, 'V')}
									</td>
								</tr>
							</tbody>
						</table>
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center">
										VI ciclo
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
								{asignaturasXAnio
									.filter(
										(asignatura) =>
											asignatura.semestre === 'VI'
									)
									.map((asignatura) => {
										// totalCreditos2 += asignatura.credito;
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
										{totalCreditos(asignaturasXAnio, 'VI')}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Cuarto año',
			nombre: 'cuarto',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-4 mb-8">
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center">
										VII ciclo
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
								{asignaturasXAnio
									.filter(
										(asignatura) =>
											asignatura.semestre === 'VII'
									)
									.map((asignatura) => {
										// totalCreditos1 += asignatura.credito;
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
										{totalCreditos(asignaturasXAnio, 'VII')}
									</td>
								</tr>
							</tbody>
						</table>
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center">
										VIII ciclo
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
								{asignaturasXAnio
									.filter(
										(asignatura) =>
											asignatura.semestre === 'VIII'
									)
									.map((asignatura) => {
										// totalCreditos2 += asignatura.credito;
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
										{totalCreditos(
											asignaturasXAnio,
											'VIII'
										)}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Quinto año',
			nombre: 'quinto',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-4 mb-8">
						{carreraSlug === 'quimica-e-ingenieria-quimica' && (
							<table className="table table-striped-even mb-0">
								<thead>
									<tr>
										<th
											colSpan="2"
											className="!bg-tertiary text-blanco text-center">
											Ciclo 0
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
									{asignaturasXAnio
										.filter(
											(asignatura) =>
												asignatura.semestre === '0'
										)
										.map((asignatura) => {
											// totalCreditos1 += asignatura.credito;
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
											{totalCreditos(
												asignaturasXAnio,
												'0'
											)}
										</td>
									</tr>
								</tbody>
							</table>
						)}
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center">
										IX ciclo
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
								{asignaturasXAnio
									.filter(
										(asignatura) =>
											asignatura.semestre === 'IX'
									)
									.map((asignatura) => {
										// totalCreditos1 += asignatura.credito;
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
										{totalCreditos(asignaturasXAnio, 'IX')}
									</td>
								</tr>
							</tbody>
						</table>
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center">
										X ciclo
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
								{asignaturasXAnio
									.filter(
										(asignatura) =>
											asignatura.semestre === 'X'
									)
									.map((asignatura) => {
										// totalCreditos2 += asignatura.credito;
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
										{totalCreditos(asignaturasXAnio, 'X')}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Sexto año',
			nombre: 'sexto',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-4 mb-8">
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center">
										XI ciclo
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
								{asignaturasXAnio
									.filter(
										(asignatura) =>
											asignatura.semestre === 'XI'
									)
									.map((asignatura) => {
										// totalCreditos1 += asignatura.credito;
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
										{totalCreditos(asignaturasXAnio, 'XI')}
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
			nombre: '',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-4 mb-8">
						<table className="table table-striped-even mb-0">
							<thead>
								<tr>
									<th
										colSpan="2"
										className="!bg-tertiary text-blanco text-center">
										Electivos
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
								{asignaturasElectivo.map((asignatura) => {
									// totalCreditos1 += asignatura.credito;
									return (
										<tr key={asignatura.nombre}>
											<td>{asignatura.nombre}</td>
											<td className="text-center">
												{asignatura.credito}
											</td>
										</tr>
									);
								})}
								{/* <tr key="total" className="font-bold">
									<td>Total de créditos</td>
									<td className="text-center">
										{totalCreditosElectivos(
											asignaturasElectivo
										)}
									</td>
								</tr> */}
							</tbody>
						</table>
					</div>
				</Tab.Pane>
			),
		},
	];
	return (
		<div className="grid grid-cols-8">
			<div className="col-span-10 md:col-span-7">
				<Tab
					menu={{ secondary: true, pointing: true }}
					panes={tabs_anios}
					onTabChange={(e, data) => {
						let activeIndex = data.activeIndex;
						setSemestre(data.panes[activeIndex].nombre);
					}}
				/>
				<div className="mt-2 md:mt-0 flex justify-end">
					<div className="inline-block">
						<Boton className="" onClick={handleOpen}>
							<CompartirIcon className="fill-textColorOne inline-block relative -top-[1px] mr-2" />
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
					}}>
					<Fade in={open}>
						<Box
							className="w-[90%] md:w-auto h-[90vh] md:h-auto overflow-auto rounded-lg"
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								bgcolor: 'transparent',
							}}>
							<SharedComponent
								handleClose={handleClose}
								ogUrl={ogUrl + '?tab=malla-curricular'}
							/>
						</Box>
					</Fade>
				</Modal>
			</div>
		</div>
	);
};
