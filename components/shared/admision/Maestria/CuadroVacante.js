import React from 'react';

export const CuadroVacante = ({ facultad }) => {
	return (
		<>
			<p>
				Recuerda que la siguiente cantidad de vacantes corresponden al
				proceso de admisión 2025-I
			</p>
			<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
				<table className="table table-striped mb-6">
					<thead>
						<tr className="!bg-tertiary text-blanco text-center">
							<th>Maestría</th>
							<th className="w-4 text-center">
								Vacantes presenciales
							</th>
							<th className="w-4 text-center">
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
							<td className="text-center">40</td>
							<td className="text-center">60</td>
						</tr>
						<tr>
							<td>
								Maestría en Educación con mención en Docencia
								Universitaria
							</td>
							<td className="text-center">40</td>
							<td className="text-center">60</td>
						</tr>
						<tr>
							<td>
								Maestría en Educación con mención en Evaluación
								y Acreditación de la Calidad de la Educación
							</td>
							<td className="text-center">25</td>
							<td className="text-center">30</td>
						</tr>
						<tr>
							<td>
								Maestría Profesional en Didáctica de la Matemática
							</td>
							<td className="text-center">-</td>
							<td className="text-center">50</td>
						</tr>
						<tr>
							<td>
								Maestría Profesional en Didáctica de la Comunicación e Innovación
							</td>
							<td className="text-center">-</td>
							<td className="text-center">50</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
