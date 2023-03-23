import React from 'react';
export const CuadroVacante = () => {
	return (
		<>
			<p>
				Recuerda que la siguiente cantidad de vacantes corresponden al
				proceso general de admisión 2023-II.
			</p>
			<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
				<table className="table table-striped mb-0">
					<thead>
						<tr className="!bg-tertiary text-blanco text-center">
							<th>Carrera</th>
							<th className="w-32 md:w-60 text-center">
								Vacantes
							</th>
						</tr>
					</thead>
					<tbody>
						<tr key="1">
							<td>Farmacia y Bioquímica</td>
							<td className="text-center">81</td>
						</tr>
						<tr key="2">
							<td>Ciencias de los alimentos</td>
							<td className="text-center">32</td>
						</tr>
						<tr key="3">
							<td>Toxicología</td>
							<td className="text-center">30</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
