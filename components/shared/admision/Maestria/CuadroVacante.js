import React from 'react';

export const CuadroVacante = ({ facultad }) => {
	return (
		<>
			<p>
				Recuerda que la siguiente cantidad de vacantes corresponden al
				proceso de admisión 2023-I
			</p>
			<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
				{/* <table className="table table-striped mb-0">
					<thead>
						<tr className="!bg-tertiary text-blanco text-center">
							<th>Programa</th>
							<th className="w-32 md:w-60 text-center">
								Vacantes
							</th>
						</tr>
					</thead>
					<tbody>
						<tr key="1">
							<td>Maestría en Atención farmaceútica</td>
							<td className="text-center">10</td>
						</tr>
						<tr key="2">
							<td>Maestría en Biotecnología</td>
							<td className="text-center">10</td>
						</tr>
						<tr key="3">
							<td>Maestría en Ciencias de los alimentos</td>
							<td className="text-center">10</td>
						</tr>
						<tr key="4">
							<td>Maestría en Ciencias Farmacéuticas</td>
							<td className="text-center">10</td>
						</tr>
						<tr key="5">
							<td>Maestría en Toxicología</td>
							<td className="text-center">10</td>
						</tr>
						<tr key="6">
							<td>Maestría en Microbiología</td>
							<td className="text-center">10</td>
						</tr>
						<tr key="7">
							<td>
								Maestría en Farmacología con mención en
								Farmacología experimental
							</td>
							<td className="text-center">10</td>
						</tr>
						<tr key="8">
							<td>
								Maestría en Productos naturales y Biocomercio
							</td>
							<td className="text-center">10</td>
						</tr>
						<tr key="9">
							<td>Maestría en Química clínica</td>
							<td className="text-center">10</td>
						</tr>
						<tr key="10">
							<td>
								Segunda especialidad en Industria farmacéutica
							</td>
							<td className="text-center">10</td>
						</tr>
						<tr key="11">
							<td>
								Segunda especialidad en Políticas y regulación
								farmacéutica
							</td>
							<td className="text-center">10</td>
						</tr>
						<tr key="12">
							<td>
								Segunda especialidad en Productos sanitarios,
								materiales biomédicos y dispositivos médicos
							</td>
							<td className="text-center">10</td>
						</tr>
					</tbody>
				</table> */}

				<table className="table table-striped mb-6">
					<thead>
						<tr className="!bg-tertiary text-blanco text-center">
							<th>Maestría</th>
							<th className="w-32 md:w-60 text-center">
								Vacantes
							</th>
						</tr>
					</thead>
					<tbody>
						{facultad.maestrias.data
							// .filter(
							// 	(maestria) => maestria.attributes.en_proceso
							// )
							.map((maestria, index) => {
								return (
									<>
										<tr key={maestria.attributes.nombre}>
											<td>
												Maestría en {maestria.attributes.nombre}
											</td>
											<td className="text-center">
												{maestria.attributes.vacante}
											</td>
										</tr>
									</>
								);
							})}
						{/* {facultad.maestrias.data
							.filter(
								(maestria) => !maestria.attributes.en_proceso
							)
							.map((maestria, index) => {
								return (
									<>
										<tr key={maestria.attributes.nombre}>
											<td>
												{maestria.attributes.nombre}
											</td>

											<td className="text-center">
												No se encuentra en el proceso
											</td>
										</tr>
									</>
								);
							})} */}
					</tbody>
				</table>

				{/* <table className="table table-striped mb-6">
					<thead>
						<tr className="!bg-tertiary text-blanco text-center">
							<th>Doctorado</th>
							<th className="w-32 md:w-60 text-center">
								Vacantes
							</th>
						</tr>
					</thead>
					<tbody>
						{facultad.doctorados.data
							.filter(
								(doctorado) => doctorado.attributes.en_proceso
							)
							.map((doctorado, index) => {
								return (
									<>
										<tr key={doctorado.attributes.nombre}>
											<td>
												{doctorado.attributes.nombre}
											</td>
											<td className="text-center">
												{doctorado.attributes.vacante}
											</td>
										</tr>
									</>
								);
							})}
						{facultad.doctorados.data
							.filter(
								(doctorado) => !doctorado.attributes.en_proceso
							)
							.map((doctorado, index) => {
								return (
									<>
										<tr key={doctorado.attributes.nombre}>
											<td>
												{doctorado.attributes.nombre}
											</td>

											<td className="text-center">
												No se encuentra en el proceso
											</td>
										</tr>
									</>
								);
							})}
					</tbody>
				</table> */}
			</div>
		</>
	);
};
