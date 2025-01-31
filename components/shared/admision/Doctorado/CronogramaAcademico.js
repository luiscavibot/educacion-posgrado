import React from 'react';

export const CronogramaAcademico = () => {
	return (
		<>
			<p className="mb-6">
				El proceso de admisión a los programas de maestrías de la Unidad
				de Posgrado de la facultad de Educación se desarrolla
				semestralmente, según cronograma aprobado por el VRIP.
			</p>
			{/* <p className="mb-6 text-center font-bold text-lg">
				SEMESTRE 2024-I
			</p> */}
			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center"
							>
								Admisión general 2025-I
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								Envío a DGEP Resolución de Decanato que aprueba el cuadro de vacantes para la admisión 2025-I y 2025-II
							</td>
							<td>9 al 13 de diciembre de 2024</td>
						</tr>
						<tr>
							<td>
								Aprobación de cuadro de vacantes para posgrado de la UNMSM con RR
							</td>
							<td>16 al 31 de diciembre del 2024</td>
						</tr>
						<tr>
							<td>
								Inscripción de postulantes y envío de expediente
							</td>
							<td>Del 02 de enero al 28 de marzo</td>
						</tr>
						<tr>
							<td>
								Examen de aptitud
							</td>
							<td>Hasta 29 de marzo</td>
						</tr>
						<tr>
							<td>
								Sustentación del proyecto de investigación (solo doctorado)
							</td>
							<td>Hasta el 30 de marzo</td>
						</tr>
						<tr>
							<td>
								Evaluación del expediente
							</td>
							<td>Hasta el 31 de marzo</td>
						</tr>
						<tr>
							<td>Ingreso de evaluación al SISEVA para generación de actas</td>
							<td>04 de abril</td>
						</tr>
						<tr>
							<td>
								Publicación de resultados
							</td>
							<td>05 de abril</td>
						</tr>
						<tr>
							<td>Resolución de Decanato de ingresantes, envío a la DGEP y la oficina del SUM</td>
							<td>07 de abril</td>
						</tr>
						<tr>
							<td>
								Consolidado de ingresantes, envío a la Oficina de Planificación
							</td>
							<td>08 de abril</td>
						</tr>
						<tr>
							<td>
								Oficina de Planificación envío a MINEDU - SUNEDU
							</td>
							<td>10 de abril</td>
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
						<tr>
							<td>Reactualización de matrícula</td>
							<td>Hasta el 03 de marzo</td>
						</tr>
						<tr>
							<td>Matrícula regular</td>
							<td>Del 10 de marzo al 11 de abril</td>
						</tr>
						<tr>
							<td>Matrícula de ingresantes</td>
							<td>Del 08 al 14 de abril</td>
						</tr>
						<tr>
							<td>
								Matrícula extemporánea y rectificación de
								matrícula
							</td>
							<td>Del 24 al 30 de abril</td>
						</tr>
						<tr>
							<td>Reserva de matrícula</td>
							<td>Hasta el 24 de junio</td>
						</tr>
						<tr>
							<td>Anulación de matrícula</td>
							<td>Del 19 al 24 de junio</td>
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
						<tr>
							<td>
								Capacitación en base de datos, aspectos de
								investigación y normativa de posgrado
							</td>
							<td>12 y/o 13 de abril</td>
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
						<tr>
							<td>Inicio de clases</td>
							<td>14 de abril</td>
						</tr>
						<tr>
							<td>Fin de clases</td>
							<td>03 de agosto</td>
						</tr>
						<tr>
							<td>Ingreso de notas</td>
							<td>Del 04 al 07 de agosto</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* <p className="mb-6 text-center font-bold text-lg">
				SEMESTRE 2024-II
			</p>

			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center"
							>
								Proceso de Admisión
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								Envío a DGEP de Resolución de Decanato que
								aprueba el cuadro de vacantes
							</td>
							<td>15 al 22 de abril</td>
						</tr>
						<tr>
							<td>
								Convocatoria, cuadro de vacantes para posgrado -
								RR
							</td>
							<td>23 de abril al 03 de mayo</td>
						</tr>
						<tr>
							<td>
								Inscripción de postulantes y envío de expediente
							</td>
							<td>06 de mayo al 09 de agosto</td>
						</tr>
						<tr>
							<td>
								Examen de aptitud para maestrías y doctorados
							</td>
							<td>Hasta el 10 de agosto</td>
						</tr>
						<tr>
							<td>
								Sustentación del proyecto de investigación (solo
								doctorado)
							</td>
							<td>Hasta el 11 de agosto</td>
						</tr>
						<tr>
							<td>Evaluación del expediente</td>
							<td>Hasta el 13 de agosto</td>
						</tr>
						<tr>
							<td>Entrevista personal (solo maestría)</td>
							<td>Hasta el 15 de agosto</td>
						</tr>
						<tr>
							<td>
								Ingreso de evaluación al SISEVA para generación
								de actas
							</td>
							<td>16 de agosto</td>
						</tr>
						<tr>
							<td>Publicación de resultados</td>
							<td>17 de agosto</td>
						</tr>
						<tr>
							<td>
								Resolución de Decanato de ingresantes. Envío a
								la DGEP y a la oficina del SUM
							</td>
							<td>19 de agosto</td>
						</tr>
						<tr>
							<td>
								Consolidado de ingresantes envío a la Oficina de
								Planificación
							</td>
							<td>20 de agosto</td>
						</tr>
						<tr>
							<td>
								Oficina de Planificación envío a MINEDU — SUNEDU
							</td>
							<td>21 de agosto</td>
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
						<tr>
							<td>Reactualización de matrícula</td>
							<td>Hasta el 09 de agosto</td>
						</tr>
						<tr>
							<td>Matrícula regular</td>
							<td>12 al 31 de agosto</td>
						</tr>
						<tr>
							<td>Matrícula de ingresantes</td>
							<td>27 al 31 de agosto</td>
						</tr>
						<tr>
							<td>
								Matrícula extemporánea y rectificación de
								matrícula
							</td>
							<td>11 al 18 de setiembre</td>
						</tr>
						<tr>
							<td>Reserva de matrícula</td>
							<td>Hasta el 05 de noviembre</td>
						</tr>
						<tr>
							<td>Anulación de matrícula</td>
							<td>11 al 15 de noviembre</td>
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
						<tr>
							<td>
								Capacitación en base de datos, aspectos de
								investigación y normativa de posgrado
							</td>
							<td>31 de agosto y 01 de setiembre</td>
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
						<tr>
							<td>Inicio de clases</td>
							<td>02 de setiembre</td>
						</tr>
						<tr>
							<td>Fin de clases</td>
							<td>22 de diciembre</td>
						</tr>
						<tr>
							<td>Ingreso de notas</td>
							<td>23 al 27 de diciembre</td>
						</tr>
					</tbody>
				</table>
			</div> */}

			<p>Fuente: <a href="https://posgrado.unmsm.edu.pe/wp-content/uploads/2024/12/RESOLUCION-RECTORAL-014629-2024-R.pdf" target="_blank" rel="noopener noreferrer" className="link">R.R. N° 014629-2024-R/UNMSM</a></p>
			<p><a href="https://posgrado.unmsm.edu.pe/cronograma/" target="_blank" rel="noopener noreferrer" className="link">https://posgrado.unmsm.edu.pe/cronograma/</a></p>
		</>
	);
};
