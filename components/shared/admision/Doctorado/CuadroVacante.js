import React from 'react';

export const CuadroVacante = ({ facultad }) => {
	return (
		<>
			<p>
				Recuerda que la siguiente cantidad de vacantes corresponden al
				proceso de admisión 2023-I
			</p>
			<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
				<table className="table table-striped mb-6">
					<thead>
						<tr className="!bg-tertiary text-blanco text-center">
							<th>Programas</th>
							<th className="w-32 md:w-60 text-center">
								Vacantes
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								Doctorado en Educación y Docencia Universitaria
							</td>
							<td className="text-center">-</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
