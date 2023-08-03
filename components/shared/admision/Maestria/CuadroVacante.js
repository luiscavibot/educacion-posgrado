import React from 'react';

export const CuadroVacante = ({ facultad }) => {
	return (
		<>
			<p>
				Recuerda que la siguiente cantidad de vacantes corresponden al
				proceso de admisión 2023-II
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
								Maestría en Administración con mención en
								Gestión Empresarial
							</td>
							<td className="text-center">105</td>
						</tr>
						<tr>
							<td>Maestría en Marketing</td>
							<td className="text-center">-</td>
						</tr>
						<tr>
							<td>Maestría en Finanzas y Valores</td>
							<td className="text-center">35</td>
						</tr>
						<tr>
							<td>
								Maestría en Gestión de Negocios Internacionales
							</td>
							<td className="text-center">-</td>
						</tr>
						<tr>
							<td>Maestría en Dirección de Recursos Humanos</td>
							<td className="text-center">70</td>
						</tr>
						<tr>
							<td>Maestría en Gestión Pública</td>
							<td className="text-center">210</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
