import React from 'react';

export const CronogramaAcademico = ({ cronograma, proceso }) => {
	return (
		<>
			<p className="mb-6">
				Entérate aquí cuáles son todas nuestras actividades para los
				programas de maestría y doctorado del ciclo 2023-I
			</p>
			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center">
								Admisión general {proceso}
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						{cronograma.proceso_admision.map((proceso_adm) => {
							return (
								<tr
									key={
										proceso_adm.actividad +
										proceso_adm.fecha
									}>
									<td>{proceso_adm.actividad}</td>
									<td>{proceso_adm.fecha}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center">
								Proceso de matrícula
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						{cronograma.proceso_matricula.map((proceso_mat) => {
							return (
								<tr
									key={
										proceso_mat.actividad +
										proceso_mat.fecha
									}>
									<td>{proceso_mat.actividad}</td>
									<td>{proceso_mat.fecha}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center">
								Programa de inducción académica
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						{cronograma.induccion_academica.map(
							(induccion_acad) => {
								return (
									<tr
										key={
											induccion_acad.actividad +
											induccion_acad.fecha
										}>
										<td>{induccion_acad.actividad}</td>
										<td>{induccion_acad.fecha}</td>
									</tr>
								);
							}
						)}
					</tbody>
				</table>
			</div>
			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center">
								Actividades académicas
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						{cronograma.actividades_academicas.map(
							(actividades_acad) => {
								return (
									<tr
										key={
											actividades_acad.actividad +
											actividades_acad.fecha
										}>
										<td>{actividades_acad.actividad}</td>
										<td>{actividades_acad.fecha}</td>
									</tr>
								);
							}
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};
