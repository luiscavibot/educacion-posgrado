import React from 'react';

const proceso = '2023-II';

export const CronogramaAcademico = (
	{
		// cronograma,
		// proceso
	}
) => {
	return (
		<>
			<p className="mb-6">
				Entérate aquí cuáles son todas nuestras actividades para el
				programa de maestría del ciclo 2023-II
			</p>
			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center"
							>
								Admisión general {proceso}
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						{/* {cronograma.proceso_admision
							.filter(
								(proceso_adm) =>
									proceso_adm.actividad !=
									'Sustentación del proyecto de investigación'
							)
							.map((proceso_adm) => {
								return (
									<tr
										key={
											proceso_adm.actividad +
											proceso_adm.fecha
										}
									>
										<td>{proceso_adm.actividad}</td>
										<td>{proceso_adm.fecha}</td>
									</tr>
								);
							})} */}
						<tr>
							<td>
								Inscripción de postulantes y envío de
								expedientes
							</td>
							<td>Del 8 de mayo al 14 de julio del 2023</td>
						</tr>
						<tr>
							<td>Inscripción extemporánea</td>
							<td>Del 15 de julio al 11 de agosto del 2023</td>
						</tr>
						<tr>
							<td>Examen de aptitud virtual o presencial</td>
							<td>12 de agosto del 2023</td>
						</tr>
						<tr>
							<td>Evaluación del expediente</td>
							<td>15 y 16 de agosto del 2023</td>
						</tr>
						<tr>
							<td>Entrevista personal virtual o presencial</td>
							<td>17 y 18 de agosto del 2023</td>
						</tr>
						<tr>
							<td>Publicación de resultados</td>
							<td>22 de agosto del 2023</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center"
							>
								Proceso de matrícula
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						{/* {cronograma.proceso_matricula.map((proceso_mat) => {
							return (
								<tr
									key={
										proceso_mat.actividad +
										proceso_mat.fecha
									}
								>
									<td>{proceso_mat.actividad}</td>
									<td>{proceso_mat.fecha}</td>
								</tr>
							);
						})} */}
						<tr>
							<td>Reactualización de matrícula</td>
							<td>Hasta el 11 de agosto del 2023</td>
						</tr>
						<tr>
							<td>Matrícula regular</td>
							<td>Del 7 al 31 de agosto del 2023</td>
						</tr>
						<tr>
							<td>Matrícula de ingresantes</td>
							<td>Del 28 al 31 de agosto del 2023</td>
						</tr>
						<tr>
							<td>
								Matrícula extemporánea y rectificación de
								matrícula
							</td>
							<td>Del 11 al 18 de setiembre del 2023</td>
						</tr>
						<tr>
							<td>Reserva de matrícula</td>
							<td>Hasta el 17 de setiembre del 2023</td>
						</tr>
						<tr>
							<td>Anulación de matrícula</td>
							<td>Del 13 al 17 de setiembre del 2023</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center"
							>
								Programa de inducción académica
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						{/* {cronograma.induccion_academica.map(
							(induccion_acad) => {
								return (
									<tr
										key={
											induccion_acad.actividad +
											induccion_acad.fecha
										}
									>
										<td>{induccion_acad.actividad}</td>
										<td>{induccion_acad.fecha}</td>
									</tr>
								);
							}
						)} */}
						<tr>
							<td>
								Capacitación en base de datos, aspectos de
								investigación y normativa de posgrado
							</td>
							<td>01 y 02 de setiembre del 2023</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center"
							>
								Actividades académicas
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						{/* {cronograma.actividades_academicas.map(
							(actividades_acad) => {
								return (
									<tr
										key={
											actividades_acad.actividad +
											actividades_acad.fecha
										}
									>
										<td>{actividades_acad.actividad}</td>
										<td>{actividades_acad.fecha}</td>
									</tr>
								);
							}
						)} */}
						<tr>
							<td>Inicio de clases</td>
							<td>04 de setiembre del 2023</td>
						</tr>
						<tr>
							<td>Fin de clases</td>
							<td>23 de diciembre del 2023</td>
						</tr>
						<tr>
							<td>Ingreso de notas</td>
							<td>Del 25 al 29 de diciembre del 2023</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
