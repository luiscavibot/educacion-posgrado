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
		<div className="grid grid-cols-8">
			<div className="col-span-full md:col-span-7">
				<Observacion className="mb-8">
					<ul className="list-disc list-inside pl-1">
						<li>
							{/* La duración total del programa es de dos años,
							conformado por cuatro meses. */}
							La duración total del programa es de {duracion}.
						</li>
						<li>Montos referenciales, sujetos a variaciones.</li>
					</ul>
				</Observacion>
				<div className="mb-8">
					<div className="mb-[18px]">
						<p className="subtitle mb-4">
							&gt; Presupuesto de estudios por ciclo académico
							{tipoPrograma !== 'MAESTRIA' && '*'}
						</p>
						<ul className="list-disc list-inside mb-4">
							{costos.map((costo) => {
								return (
									<li key={costo.texto} className="mb-1">
										{costo.texto}{' '}
										<span className="font-bold">
											{costo.precio}
										</span>
									</li>
								);
							})}
						</ul>
						{(tipoPrograma === 'DIPLOMATURA' ||
							tipoPrograma === 'DIPLOMATURA') && (
							<i className="font">
								*Los costos señalados como pagos para
								mensualidad o ciclo académico completo
								corresponden a una matrícula regular de 4 cursos
								(18 créditos)
							</i>
						)}
						{(tipoPrograma === 'DOCTORADO' ||
							tipoPrograma === 'DOCTORADO') && (
							<i className="font">
								*Los costos señalados como montos de mensualidad
								o ciclo completo corresponden a una matrícula
								regular de 15 créditos (I Ciclo), 14 créditos
								(II Ciclo), 17 créditos (III Ciclo), 16 créditos
								(IV Ciclo), 14 créditos (V Ciclo) o 20 créditos
								(VI Ciclo).
							</i>
						)}
						{/* <div className="bg-gris px-6 py-4 rounded-lg">
							Más información sobre los conceptos y lugares de
							pago{' '}
							<Link href="/formacion-academica/admision?posgrado&tab=inversion">
								<a
									className="font-bold text-secondary"
									href="#">
									aquí.
								</a>
							</Link>
						</div> */}
					</div>
				</div>
				{admisiones?.length > 0 && (
					<div className="mb-8">
						<div className="mb-[18px]">
							<p className="subtitle mb-4">&gt; Admisión:</p>
							<ul className="list-disc list-inside mb-4">
								{admisiones.map((admision) => {
									return (
										<li
											key={admision.texto}
											className="mb-1"
										>
											{admision.texto}{' '}
											<span className="font-bold">
												{admision.precio}
											</span>
										</li>
									);
								})}
							</ul>
							<div className="bg-complementaryOne/[0.5] px-6 py-4 rounded-lg">
								Más información sobre los conceptos y lugares de
								pago{' '}
								<Link
									href={`/admision?programa=${getPathTipoPrograma(
										tipoPrograma
									)}&tab=inversion`}
								>
									<a className="font-bold text-secondary">
										aquí.
									</a>
								</Link>
							</div>
						</div>
					</div>
				)}
				{matricula?.length > 0 && (
					<div className="mb-8">
						<div className="mb-[18px]">
							<p className="subtitle mb-4">&gt; Matrícula:</p>
							<ul className="list-disc list-inside mb-4">
								{matricula.map((admision) => {
									return (
										<li
											key={admision.texto}
											className="mb-1"
										>
											{admision.texto}{' '}
											<span className="font-bold">
												{admision.precio}
											</span>
										</li>
									);
								})}
							</ul>
							<div className="bg-complementaryOne/[0.5] px-6 py-4 rounded-lg">
								Más información sobre los conceptos y lugares de
								pago{' '}
								<Link
									href={`/admision?programa=${getPathTipoPrograma(
										tipoPrograma
									)}&tab=inversion`}
								>
									<a className="font-bold text-secondary">
										aquí.
									</a>
								</Link>
							</div>
						</div>
					</div>
				)}
				{/* <div className="mb-8">
					<div className="mb-[18px]">
						<p className="subtitle mb-4">3. Matrícula</p>
						{matricula ? (
							<ul
								className="list-disc list-inside default-programa"
								dangerouslySetInnerHTML={{
									__html: `${programa[0].attributes.matricula}`,
								}}
							></ul>
						) : null}
						<p className="font-medium text-sm mt-4">
							<em>
								* Los costos corresponden al proceso de admisión
								2020, sujetos a variaciones.
							</em>
						</p>
					</div>
				</div> */}
				{costos_credito?.length > 0 && (
					<div className="mb-8">
						<p className="subtitle mb-4">
							&gt; Costo por crédito académico:
						</p>
						<p className="mb-4">
							Los cursos del programa tienen un valor en créditos.
							Sobre la base del número de créditos matriculados,
							se determina el pago de un alumno por ciclo.
						</p>
						<ul className="list-disc list-inside">
							{costos_credito.map((costo_credito) => {
								return (
									<li
										key={costo_credito.texto}
										className="mb-1"
									>
										{costo_credito.texto}{' '}
										<span className="font-bold">
											{costo_credito.precio}
										</span>
									</li>
								);
							})}
						</ul>
						{/* <p className="font-medium text-sm mt-4">
							<em>
								* Los costos corresponden al proceso de admisión
								2023, sujetos a variaciones.
							</em>
						</p> */}
					</div>
				)}

				{tipoPrograma == 'DIPLOMATURA' && (
					<div className="mb-8">
						<p className="subtitle mb-4">&gt; Fraccionamiento:</p>
						<p className="mb-4">
							Los cursos del programa tienen un valor en créditos.
							Sobre la base del número de créditos matriculados,
							se determina el pago de un alumno por ciclo.
						</p>
						<ul className="list-disc list-inside">
							<li className="mb-1">
								<span>
									Inversión económica de S/ 4 860.00
									fraccionado en las siguientes cuotas:
								</span>
								<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
									<table className="table table-striped mb-6">
										<thead>
											<tr className="!bg-tertiary text-blanco text-center">
												<th>Cuotas</th>
												<th className="w-32 md:w-60 text-center">
													Monto
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Cuota 1</td>
												<td className="text-center">
													S/ 810.00
												</td>
											</tr>
											<tr>
												<td>Cuota 2</td>
												<td className="text-center">
													S/ 810.00
												</td>
											</tr>
											<tr>
												<td>Cuota 3</td>
												<td className="text-center">
													S/ 810.00
												</td>
											</tr>
											<tr>
												<td>Cuota 4</td>
												<td className="text-center">
													S/ 810.00
												</td>
											</tr>
											<tr>
												<td>Cuota 5</td>
												<td className="text-center">
													S/ 810.00
												</td>
											</tr>
											<tr>
												<td>Cuota 6</td>
												<td className="text-center">
													S/ 810.00
												</td>
											</tr>
											<tr className="font-bold">
												<td>Total</td>
												<td className="md:w-60 text-center">
													S/ 4 860.00
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</li>
							<li className="mb-1">
								<span>
									Inversión económica de S/ 4 374.00, con
									descuento corporativo de 10% (3
									participantes), fraccionado en las
									siguientes cuotas:
								</span>
								<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
									<table className="table table-striped mb-6">
										<thead>
											<tr className="!bg-tertiary text-blanco text-center">
												<th>Cuotas</th>
												<th className="w-32 md:w-60 text-center">
													Monto
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Cuota 1</td>
												<td className="text-center">
													S/ 729.00
												</td>
											</tr>
											<tr>
												<td>Cuota 2</td>
												<td className="text-center">
													S/ 729.00
												</td>
											</tr>
											<tr>
												<td>Cuota 3</td>
												<td className="text-center">
													S/ 729.00
												</td>
											</tr>
											<tr>
												<td>Cuota 4</td>
												<td className="text-center">
													S/ 729.00
												</td>
											</tr>
											<tr>
												<td>Cuota 5</td>
												<td className="text-center">
													S/ 729.00
												</td>
											</tr>
											<tr>
												<td>Cuota 6</td>
												<td className="text-center">
													S/ 729.00
												</td>
											</tr>
											<tr className="font-bold">
												<td>Total</td>
												<td className="md:w-60 text-center">
													S/ 4 374.00
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</li>
							<li className="mb-1">
								<span>
									Inversión económica de S/ 4 131.00, con
									descuento corporativo del 15% (20
									participantes), fraccionado en las
									siguientes cuotas:
								</span>
								<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
									<table className="table table-striped mb-6">
										<thead>
											<tr className="!bg-tertiary text-blanco text-center">
												<th>Cuotas</th>
												<th className="w-32 md:w-60 text-center">
													Monto
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Cuota 1</td>
												<td className="text-center">
													S/ 688.50
												</td>
											</tr>
											<tr>
												<td>Cuota 2</td>
												<td className="text-center">
													S/ 688.50
												</td>
											</tr>
											<tr>
												<td>Cuota 3</td>
												<td className="text-center">
													S/ 688.50
												</td>
											</tr>
											<tr>
												<td>Cuota 4</td>
												<td className="text-center">
													S/ 688.50
												</td>
											</tr>
											<tr>
												<td>Cuota 5</td>
												<td className="text-center">
													S/ 688.50
												</td>
											</tr>
											<tr>
												<td>Cuota 6</td>
												<td className="text-center">
													S/ 688.50
												</td>
											</tr>
											<tr className="font-bold">
												<td>Total</td>
												<td className="md:w-60 text-center">
													S/ 4 131.00
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</li>
						</ul>
						{/* <ul
						className="list-disc list-inside default-programa"
						dangerouslySetInnerHTML={{
							__html: `${programa[0].attributes.fraccionamiento}`,
						}}
					></ul> */}
					</div>
				)}
			</div>
		</div>
	);
};
