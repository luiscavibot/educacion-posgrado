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
				programa de doctorado del ciclo 2023-I
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
									'Entrevista personal presencial o virtual'
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
							<td>
								Del 02 de enero al 28 de febrero de agosto del
								2023
							</td>
						</tr>
						<tr>
							<td>Inscripción extemporánea</td>
							<td>Del 01 al 07 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Examen de aptitud virtual</td>
							<td>11 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Sustentación del proyecto de investigación</td>
							<td>12 y 13 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Evaluación del expediente</td>
							<td>14 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Entrevista personal virtual</td>
							<td>15 y 16 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Publicación de resultados</td>
							<td>20 de marzo del 2023</td>
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
							<td>Hasta el 17 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Matrícula regular</td>
							<td>Del 06 al 31 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Matrícula de ingresantes</td>
							<td>Del 27 al 31 de marzo del 2023</td>
						</tr>
						<tr>
							<td>
								Matrícula extemporánea y rectificación de
								matrícula
							</td>
							<td>Del 17 al 24 de abril del 2023</td>
						</tr>
						<tr>
							<td>Reserva de matrícula</td>
							<td>Hasta el 23 de junio del 2023</td>
						</tr>
						<tr>
							<td>Anulación de matrícula</td>
							<td>Del 19 al 23 de junio del 2023</td>
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
							<td>19 de marzo del 2023</td>
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
							<td>03 de abril del 2023</td>
						</tr>
						<tr>
							<td>Fin de clases</td>
							<td>22 de julio del 2023</td>
						</tr>
						<tr>
							<td>Ingreso de notas</td>
							<td>Del 24 al 27 de julio del 2023</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
