import React from 'react';

const CuadroVacantesDiplomatura = () => {
	return (
		<>
			<p>
				Recuerda que la siguiente cantidad de vacantes corresponden al
				periodo 2023-II.
			</p>
			<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
				<table className="table table-striped mb-6">
					<thead>
						<tr className="!bg-tertiary text-blanco text-center">
							<th>Diplomaturas</th>
							<th className="w-32 md:w-60 text-center">
								Vacantes
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								Diplomatura en Gestión de Universidades Públicas
							</td>
							<td className="text-center">35</td>
						</tr>
						<tr>
							<td>Diplomatura en Gestión Pública</td>
							<td className="text-center">35</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default CuadroVacantesDiplomatura;
