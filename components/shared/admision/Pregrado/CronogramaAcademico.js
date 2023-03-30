import React from 'react';

export const CronogramaAcademico = () => {
	return (
		<>
			<p className="mb-6">
				Entérate aquí hasta cuándo te puedes inscribir y cuáles son las
				fechas del examen de admisión 2023-II, según el área que
				postules:
			</p>
			<div className="overflow-x-auto mt-4 mb-8">
				<table className="table table-striped-even mb-0">
					<thead>
						<tr>
							<th
								colSpan="2"
								className="!bg-tertiary text-blanco text-center">
								Admisión general 2023 - II
							</th>
						</tr>
						<tr className="!bg-tertiary/50 text-blanco text-center">
							<th>Actividades</th>
							<th className="md:w-60 text-center">Fechas</th>
						</tr>
					</thead>
					<tbody>
						<tr key="1">
							<td>Venta de prospectos - Reglamento</td>
							<td className="text-center">
								hasta antes de la fecha de inscripción
							</td>
						</tr>
						<tr key="2">
							<td className="text-center font-bold" colSpan="2">
								Inscripción de postulantes en general
								<br />
								(Letra inicial del primer apellido)
							</td>
							<td className="text-center"></td>
						</tr>
						<tr key="3">
							<td colSpan="2" className="!p-0">
								<table className="table mb-0">
									<tbody>
										<tr key="1">
											<td>
												<p className="pl-7">
													A, B, C, D, E, F
												</p>
											</td>
											<td className="text-center md:w-60">
												hasta el 12 de febrero de 2023
											</td>
										</tr>
										<tr key="2">
											<td>
												<p className="pl-7">
													G, H, I, J, K, L, M, N, Ñ,
													O,
												</p>
											</td>
											<td className="text-center">
												del 13 al 19 de febrero de 2023
											</td>
										</tr>
										<tr key="3">
											<td>
												<p className="pl-7">
													P, Q, R, S, T, U, V, W, X,
													Y, Z
												</p>
											</td>
											<td className="text-center">
												del 20 al 26 de febrero de 2023
											</td>
										</tr>
										<tr key="4">
											<td>
												<p className="pl-7">
													Rezagados (todas las letras)
												</p>
											</td>
											<td className="text-center">
												del 27 de febrero al 15 de marzo
												de 2023
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr key="4">
							<td className="text-center font-bold" colSpan="2">
								Examen de admisión
							</td>
							<td className="text-center"></td>
						</tr>
						<tr key="5">
							<td colSpan="2" className="!p-0">
								<table className="table mb-0">
									<tbody>
										<tr key="1">
											<td>
												<p className="pl-7">
													Área D: Ciencias Económicas
													y de la gestión
													<br />
													Área E: Humanidades y
													Ciencias jurídicas y
													Sociales
												</p>
											</td>
											<td className="text-center md:w-60">
												Sábado 25 de marzo de 2023
											</td>
										</tr>
										<tr key="2">
											<td>
												<p className="pl-7">
													Área B: Ciencias básicas
													<br />
													Área C: Ingenierías
												</p>
											</td>
											<td className="text-center">
												Domingo 26 de marzo de 2023
											</td>
										</tr>
										<tr key="3">
											<td>
												<p className="pl-7">
													Área A: Ciencias de la salud
												</p>
											</td>
											<td className="text-center">
												Sábado 1 de abril de 2023
											</td>
										</tr>
										<tr key="3">
											<td>
												<p className="pl-7">
													Examen especial (todas las
													áreas)*
												</p>
											</td>
											<td className="text-center">
												Sábado 1 de abril de 2023
											</td>
										</tr>
										<tr key="4">
											<td>
												<p className="pl-7">
													Área A: Solo Medicina Humana
												</p>
											</td>
											<td className="text-center">
												Domingo 2 de abril de 2023
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>

						<tr key="6">
							<td>
								Entrega de constancias de ingreso (todas las
								áreas)
							</td>
							<td className="text-center">
								del 10 al 14 de abril del 2023
							</td>
						</tr>
						<tr key="7">
							<td>Inicio de clases</td>
							<td className="text-center">
								lunes 17 de abril del 2023
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p className="p-4 bg-complementaryTwo/[0.5] rounded-lg py-4 px-8">
				*Aplica para las siguientes
				<span className="font-bold"> modalidades de admisión</span>:
				Graduados y licenciados/as, traslado externo nacional e
				internacional, traslado interno y deportistas calificados de
				alto nivel y deportistas calificados.
			</p>
		</>
	);
};
