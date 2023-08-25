import React from 'react';

const CronogramaDiplomatura = () => {
	return (
		<>
			<p className="mb-6">
				Entérate aquí cuáles son todas nuestras actividades para
				nuestros programas de Diplomaturas del periodo 2023-II.
			</p>
			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center"
							>
								Inscripciones 2023-II
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Charla informativa</td>
							<td>Sábado 15 de julio del 2023</td>
						</tr>
						<tr>
							<td>Inscripción de postulantes</td>
							<td>Hasta el 19 de agosto del 2023</td>
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
							<td>Inicio de clases (sección única)</td>
							<td>4 de septiembre del 2023</td>
						</tr>
						<tr>
							<td>Fin de clases</td>
							<td>Febrero del 2024</td>
						</tr>
						<tr>
							<td>Entrega de notas y diploma</td>
							<td>Marzo de 2024</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default CronogramaDiplomatura;
