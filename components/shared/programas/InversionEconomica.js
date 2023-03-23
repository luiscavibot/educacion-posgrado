import React from 'react';
import Link from 'next/link';
import Observacion from '../Observacion';

export const InversionEconomica = ({ programa }) => {
	const duracion = programa[0].attributes.duracion;
	const costos = programa[0].attributes.costo_total;
	const admisiones = programa[0].attributes.admision;
	const costos_credito = programa[0].attributes.costo_credito;

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
							1. Presupuesto de estudios
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
				<div className="mb-8">
					<div className="mb-[18px]">
						<p className="subtitle mb-4">2. Admisión:</p>
						<ul className="list-disc list-inside mb-4">
							{admisiones.map((admision) => {
								return (
									<li key={admision.texto} className="mb-1">
										{admision.texto}{' '}
										<span className="font-bold">
											{admision.precio}
										</span>
									</li>
								);
							})}
						</ul>
						<div className="bg-complementaryTwo/[0.5] px-6 py-4 rounded-lg">
							Más información sobre los conceptos y lugares de
							pago{' '}
							<Link href="/formacion-academica/admision?posgrado&tab=inversion">
								<a className="font-bold text-secondary">
									aquí.
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="mb-8">
					<div className="mb-[18px]">
						<p className="subtitle mb-4">3. Matrícula</p>
						{programa[0].attributes.matricula ? (
							<ul
								className="list-disc list-inside default-programa"
								dangerouslySetInnerHTML={{
									__html: `${programa[0].attributes.matricula}`,
								}}></ul>
						) : null}
						<p className="font-medium text-sm mt-4">
							<em>
								* Los costos corresponden al proceso de admisión
								2020, sujetos a variaciones.
							</em>
						</p>
					</div>
				</div>

				<div className="mb-8">
					<p className="subtitle mb-4">
						4. Costo por crédito académico:
					</p>
					<p className="mb-4">
						Los cursos del programa tienen un valor en créditos.
						Sobre la base del número de créditos matriculados, se
						determina el pago de un alumno por ciclo.
					</p>
					<ul className="list-disc list-inside">
						{costos_credito.map((costo_credito) => {
							return (
								<li key={costo_credito.texto} className="mb-1">
									{costo_credito.texto}{' '}
									<span className="font-bold">
										{costo_credito.precio}
									</span>
								</li>
							);
						})}
					</ul>
					<p className="font-medium text-sm mt-4">
						<em>
							* Los costos corresponden al proceso de admisión
							2020, sujetos a variaciones.
						</em>
					</p>
				</div>

				<div className="mb-8">
					{programa[0].attributes.costo_semestre ? (
						<>
							<p className="subtitle mb-6">
								4. Costo por semestre:
							</p>
							<div className="bg-gris px-6 py-4 mb-6">
								<p className="mb-[6px] font-bold">
									<img
										className="w-[19px] mb-[1px] mr-1 inline-block"
										src="/img/icons/observacion-white-icon.svg"
										alt=""
									/>
									<span>Observación</span>
								</p>
								<ul className="list-disc list-inside">
									<li className="mb-1">
										El semestre está conformado por cuatro
										meses académicoss
									</li>
									<li className="mb-1">
										El número total de créditos por semestre
										podría variar de acuerdo a la cantidad
										de cursos que el alumno se matricule.
									</li>
									<li>
										Monto referencial, sujeto a variaciones.
									</li>
								</ul>
							</div>
						</>
					) : null}

					{programa[0].attributes.costo_semestre ? (
						<ul
							className="list-disc list-inside default-programa"
							dangerouslySetInnerHTML={{
								__html: `${programa[0].attributes.fraccionamiento}`,
							}}></ul>
					) : null}
				</div>
			</div>
		</div>
	);
};
