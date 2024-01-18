import React from 'react';
import Link from 'next/link';
import Observacion from '../Observacion';
import { getPathTipoPrograma } from '../../../helpers/getPathTipoPrograma';

export const InversionEconomica = ({
	inversion,
	tipoPrograma = 'MAESTRIA',
}) => {
	const duracion = inversion?.duracion;
	const costos = inversion?.costos;
	const admisiones = inversion?.admisiones;
	const matricula = inversion?.matricula;
	const costos_credito = inversion?.costos_credito;

	return (
		// <div className="grid grid-cols-8">
		// 	<div className="col-span-full md:col-span-7">
		// 		<Observacion className="mb-8">
		// 			<ul className="list-disc list-inside pl-1">
		// 				<li>
		// 					La duración total del programa es de {duracion}.
		// 				</li>
		// 				<li>Montos referenciales, sujetos a variaciones.</li>
		// 			</ul>
		// 		</Observacion>
		// 		<div className="mb-8">
		// 			<div className="mb-[18px]">
		// 				<p className="subtitle mb-4">
		// 					&gt; Presupuesto de estudios por ciclo académico
		// 					{tipoPrograma !== 'MAESTRIA' && '*'}
		// 				</p>
		// 				<ul className="list-disc list-inside mb-4">
		// 					{costos.map((costo) => {
		// 						return (
		// 							<li key={costo.texto} className="mb-1">
		// 								{costo.texto}{' '}
		// 								<span className="font-bold">
		// 									{costo.precio}
		// 								</span>
		// 							</li>
		// 						);
		// 					})}
		// 				</ul>
		// 				{(tipoPrograma === 'DIPLOMATURA' ||
		// 					tipoPrograma === 'DIPLOMATURA') && (
		// 					<i className="font">
		// 						*Los costos señalados como pagos para
		// 						mensualidad o ciclo académico completo
		// 						corresponden a una matrícula regular de 4 cursos
		// 						(18 créditos)
		// 					</i>
		// 				)}
		// 				{(tipoPrograma === 'DOCTORADO' ||
		// 					tipoPrograma === 'DOCTORADO') && (
		// 					<i className="font">
		// 						*Los costos señalados como montos de mensualidad
		// 						o ciclo completo corresponden a una matrícula
		// 						regular de 15 créditos (I Ciclo), 14 créditos
		// 						(II Ciclo), 17 créditos (III Ciclo), 16 créditos
		// 						(IV Ciclo), 14 créditos (V Ciclo) o 20 créditos
		// 						(VI Ciclo).
		// 					</i>
		// 				)}
		// 			</div>
		// 		</div>
		// 		{admisiones?.length > 0 && (
		// 			<div className="mb-8">
		// 				<div className="mb-[18px]">
		// 					<p className="subtitle mb-4">&gt; Admisión:</p>
		// 					<ul className="list-disc list-inside mb-4">
		// 						{admisiones.map((admision) => {
		// 							return (
		// 								<li
		// 									key={admision.texto}
		// 									className="mb-1"
		// 								>
		// 									{admision.texto}{' '}
		// 									<span className="font-bold">
		// 										{admision.precio}
		// 									</span>
		// 								</li>
		// 							);
		// 						})}
		// 					</ul>
		// 					<div className="bg-complementaryOne/[0.5] px-6 py-4 rounded-lg">
		// 						Más información sobre los conceptos y lugares de
		// 						pago{' '}
		// 						<Link
		// 							href={`/admision?programa=${getPathTipoPrograma(
		// 								tipoPrograma
		// 							)}&tab=inversion`}
		// 						>
		// 							<a className="font-bold text-secondary">
		// 								aquí.
		// 							</a>
		// 						</Link>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		)}
		// 		{matricula?.length > 0 && (
		// 			<div className="mb-8">
		// 				<div className="mb-[18px]">
		// 					<p className="subtitle mb-4">&gt; Matrícula:</p>
		// 					<ul className="list-disc list-inside mb-4">
		// 						{matricula.map((admision) => {
		// 							return (
		// 								<li
		// 									key={admision.texto}
		// 									className="mb-1"
		// 								>
		// 									{admision.texto}{' '}
		// 									<span className="font-bold">
		// 										{admision.precio}
		// 									</span>
		// 								</li>
		// 							);
		// 						})}
		// 					</ul>
		// 					<div className="bg-complementaryOne/[0.5] px-6 py-4 rounded-lg">
		// 						Más información sobre los conceptos y lugares de
		// 						pago{' '}
		// 						<Link
		// 							href={`/admision?programa=${getPathTipoPrograma(
		// 								tipoPrograma
		// 							)}&tab=inversion`}
		// 						>
		// 							<a className="font-bold text-secondary">
		// 								aquí.
		// 							</a>
		// 						</Link>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		)}
		// 		{costos_credito?.length > 0 && (
		// 			<div className="mb-8">
		// 				<p className="subtitle mb-4">
		// 					&gt; Costo por crédito académico:
		// 				</p>
		// 				<p className="mb-4">
		// 					Los cursos del programa tienen un valor en créditos.
		// 					Sobre la base del número de créditos matriculados,
		// 					se determina el pago de un alumno por ciclo.
		// 				</p>
		// 				<ul className="list-disc list-inside">
		// 					{costos_credito.map((costo_credito) => {
		// 						return (
		// 							<li
		// 								key={costo_credito.texto}
		// 								className="mb-1"
		// 							>
		// 								{costo_credito.texto}{' '}
		// 								<span className="font-bold">
		// 									{costo_credito.precio}
		// 								</span>
		// 							</li>
		// 						);
		// 					})}
		// 				</ul>
		// 				{/* <p className="font-medium text-sm mt-4">
		// 					<em>
		// 						* Los costos corresponden al proceso de admisión
		// 						2023, sujetos a variaciones.
		// 					</em>
		// 				</p> */}
		// 			</div>
		// 		)}
		// 		{tipoPrograma == 'DIPLOMATURA' && (
		// 			<div className="mb-8">
		// 				<p className="subtitle mb-4">&gt; Fraccionamiento:</p>
		// 				<p className="mb-4">
		// 					Los cursos del programa tienen un valor en créditos.
		// 					Sobre la base del número de créditos matriculados,
		// 					se determina el pago de un alumno por ciclo.
		// 				</p>
		// 				<ul className="list-disc list-inside">
		// 					<li className="mb-1">
		// 						<span>
		// 							Inversión económica de S/ 4 860.00
		// 							fraccionado en las siguientes cuotas:
		// 						</span>
		// 						<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
		// 							<table className="table table-striped mb-6">
		// 								<thead>
		// 									<tr className="!bg-tertiary text-blanco text-center">
		// 										<th>Cuotas</th>
		// 										<th className="w-32 md:w-60 text-center">
		// 											Monto
		// 										</th>
		// 									</tr>
		// 								</thead>
		// 								<tbody>
		// 									<tr>
		// 										<td>Cuota 1</td>
		// 										<td className="text-center">
		// 											S/ 810.00
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 2</td>
		// 										<td className="text-center">
		// 											S/ 810.00
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 3</td>
		// 										<td className="text-center">
		// 											S/ 810.00
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 4</td>
		// 										<td className="text-center">
		// 											S/ 810.00
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 5</td>
		// 										<td className="text-center">
		// 											S/ 810.00
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 6</td>
		// 										<td className="text-center">
		// 											S/ 810.00
		// 										</td>
		// 									</tr>
		// 									<tr className="font-bold">
		// 										<td>Total</td>
		// 										<td className="md:w-60 text-center">
		// 											S/ 4 860.00
		// 										</td>
		// 									</tr>
		// 								</tbody>
		// 							</table>
		// 						</div>
		// 					</li>
		// 					<li className="mb-1">
		// 						<span>
		// 							Inversión económica de S/ 4 374.00, con
		// 							descuento corporativo de 10% (3
		// 							participantes), fraccionado en las
		// 							siguientes cuotas:
		// 						</span>
		// 						<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
		// 							<table className="table table-striped mb-6">
		// 								<thead>
		// 									<tr className="!bg-tertiary text-blanco text-center">
		// 										<th>Cuotas</th>
		// 										<th className="w-32 md:w-60 text-center">
		// 											Monto
		// 										</th>
		// 									</tr>
		// 								</thead>
		// 								<tbody>
		// 									<tr>
		// 										<td>Cuota 1</td>
		// 										<td className="text-center">
		// 											S/ 729.00
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 2</td>
		// 										<td className="text-center">
		// 											S/ 729.00
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 3</td>
		// 										<td className="text-center">
		// 											S/ 729.00
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 4</td>
		// 										<td className="text-center">
		// 											S/ 729.00
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 5</td>
		// 										<td className="text-center">
		// 											S/ 729.00
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 6</td>
		// 										<td className="text-center">
		// 											S/ 729.00
		// 										</td>
		// 									</tr>
		// 									<tr className="font-bold">
		// 										<td>Total</td>
		// 										<td className="md:w-60 text-center">
		// 											S/ 4 374.00
		// 										</td>
		// 									</tr>
		// 								</tbody>
		// 							</table>
		// 						</div>
		// 					</li>
		// 					<li className="mb-1">
		// 						<span>
		// 							Inversión económica de S/ 4 131.00, con
		// 							descuento corporativo del 15% (20
		// 							participantes), fraccionado en las
		// 							siguientes cuotas:
		// 						</span>
		// 						<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
		// 							<table className="table table-striped mb-6">
		// 								<thead>
		// 									<tr className="!bg-tertiary text-blanco text-center">
		// 										<th>Cuotas</th>
		// 										<th className="w-32 md:w-60 text-center">
		// 											Monto
		// 										</th>
		// 									</tr>
		// 								</thead>
		// 								<tbody>
		// 									<tr>
		// 										<td>Cuota 1</td>
		// 										<td className="text-center">
		// 											S/ 688.50
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 2</td>
		// 										<td className="text-center">
		// 											S/ 688.50
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 3</td>
		// 										<td className="text-center">
		// 											S/ 688.50
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 4</td>
		// 										<td className="text-center">
		// 											S/ 688.50
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 5</td>
		// 										<td className="text-center">
		// 											S/ 688.50
		// 										</td>
		// 									</tr>
		// 									<tr>
		// 										<td>Cuota 6</td>
		// 										<td className="text-center">
		// 											S/ 688.50
		// 										</td>
		// 									</tr>
		// 									<tr className="font-bold">
		// 										<td>Total</td>
		// 										<td className="md:w-60 text-center">
		// 											S/ 4 131.00
		// 										</td>
		// 									</tr>
		// 								</tbody>
		// 							</table>
		// 						</div>
		// 					</li>
		// 				</ul>
		// 				{/* <ul
		// 				className="list-disc list-inside default-programa"
		// 				dangerouslySetInnerHTML={{
		// 					__html: `${programa[0].attributes.fraccionamiento}`,
		// 				}}
		// 			></ul> */}
		// 			</div>
		// 		)}
		// 	</div>
		// </div>

		<div className="grid grid-cols-8">
			<div className="col-span-full md:col-span-7">
				<div>
					<div className="mb-5">
						<p className="subtitle mb-4">&gt; Matrícula</p>
						{tipoPrograma === 'MAESTRIA' && (
							<>
								<ol>
									<li>
										Pagar S/ 348.00 al Banco de la Nación
										(Código Transacción 9650, código 03510 )
										o Transferencia Banco de Crédito del
										Perú (código 061-010)
									</li>
									<li>
										Pagar S/ 52.00 al Banco Pichincha
										(código 207 - 010)
									</li>
								</ol>
							</>
						)}
						{tipoPrograma === 'DOCTORADO' && (
							<>
								<ol>
									<li>
										Pagar S/ 448.00 al Banco de la Nación
										(Código Transacción 9650, código 03512 )
										o Transferencia Banco de Crédito del
										Perú (código 061-011)
									</li>
									<li>
										Pagar S/ 52.00 al Banco Pichincha
										(código 207 - 010)
									</li>
								</ol>
							</>
						)}
					</div>
					<div className="mb-5">
						<p className="subtitle mb-4">&gt; Pensiones</p>
						{tipoPrograma === 'MAESTRIA' && (
							<>
								<p>
									Pagar S/ 600.00 al Banco de la Nación
									(Código Transacción 9650, código 03511) o
									Transferencia Banco de Crédito del Perú
									(código 061-423)
								</p>
							</>
						)}
						{tipoPrograma === 'DOCTORADO' && (
							<>
								<p>
									Pagar S/ 750.00 al Banco de la Nación
									(Código Transacción 9650, código 03513 ) o
									Transferencia Banco de Crédito del Perú
									(código 061-426)
								</p>
							</>
						)}
					</div>
					<div className="mb-5">
						<p className="subtitle mb-4">&gt; Proceso</p>

						<ol>
							<li>
								Realizar los pagos respectivos de matrícula y
								pensión (de acuerdo al cronograma establecido).
							</li>
							<li>
								Enviar los comprobantes de pago con sus datos
								respecticos al correo:{' '}
								<a
									className="link"
									href="mailto:controldepagosupg.fe@unmsm.edu.pe"
								>
									controldepagosupg.fe@unmsm.edu.pe
								</a>{' '}
								y al correo{' '}
								<a
									className="link"
									href="mailto:upgmatriculaynotas.fe@unmsm.edu.pe"
								>
									upgmatriculaynotas.fe@unmsm.edu.pe
								</a>
							</li>
						</ol>
					</div>
					<div className="mb-5">
						<p className="subtitle mb-4">&gt; Adjuntos</p>

						<p>
							<a
								href="https://unmsmmail-my.sharepoint.com/:b:/g/personal/coordinacionaulavirtual_educacion_unmsm_edu_pe/EWugqDu2AglNpb9JJqRtVPEBjSDlEXbJxB9xlWOQUJfghQ?e=rqrvOD"
								target="_blank"
								rel="noopener noreferrer"
								className="link"
							>
								CRONOGRAMA DE PAGOS 2024 - CICLOS DE INGRESANTES
								2022-2 AL 2023-2.pdf
							</a>
						</p>

						<p>
							<a
								href="https://unmsmmail-my.sharepoint.com/:b:/g/personal/coordinacionaulavirtual_educacion_unmsm_edu_pe/EcZDrwhxeQ5PiyTOUVJLfcIBMgaGFN28cKBRLZj2rug02w?e=SFl9p5"
								target="_blank"
								rel="noopener noreferrer"
								className="link"
							>
								PAGOS PENSIONES Y MATRICULA (1).pdf
							</a>
						</p>
					</div>
					<div className="mb-5">
						<p className="subtitle mb-4">&gt; Más información</p>

						<p>
							<span className="font-bold">Correo:</span>{' '}
							upg.educacion@unmsm.edu.pe
						</p>

						<p>
							<span className="font-bold">Teléfono:</span> (+51)
							619 7000 anexo 320
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
