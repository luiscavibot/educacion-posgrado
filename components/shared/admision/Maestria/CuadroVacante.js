import React from 'react';

export const CuadroVacante = ({ facultad }) => {
	return (
		<>
			<p>
				Recuerda que la siguiente cantidad de vacantes corresponden al
				proceso de admisión 2024-I
			</p>
			<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
				<table className="table table-striped mb-6">
					<thead>
						<tr className="!bg-tertiary text-blanco text-center">
							<th>Maestría</th>
							<th className="w-32 md:w-60 text-center">
								Vacantes semipresenciales
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								Maestría en Educación con mención en Gestión de
								la Educación
							</td>
							<td className="text-center">-</td>
						</tr>
						<tr>
							<td>
								Maestría en Educación con mención en Docencia
								Universitaria
							</td>
							<td className="text-center">-</td>
						</tr>
						<tr>
							<td>
								Maestría en Educación con mención en Evaluación
								y Acreditación de la Calidad de la Educación
							</td>
							<td className="text-center">-</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
