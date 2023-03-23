import React, { useEffect, useState } from 'react';
import { Tab } from 'semantic-ui-react';
import Link from 'next/link';

import Observacion from '../../Observacion';
import { useRouter } from 'next/router';

export const Requisitos = () => {
	const router = useRouter();
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		if (router.query.programa === 'maestria') {
			setActiveIndex(0);
			return;
		}
		if (router.query.programa === 'doctorado') {
			setActiveIndex(1);
			return;
		}
	}, [router]);

	const handleClick = (event, { activeIndex }) => {
		switch (activeIndex) {
			case 0:
				router.push(
					'/formacion-academica/admision?nivel=posgrado&tab=requisitos-para-postular&programa=maestria',
					undefined,
					{
						shallow: true,
					}
				);
				break;
			case 1:
				router.push(
					'/formacion-academica/admision?nivel=posgrado&tab=requisitos-para-postular&programa=doctorado',
					undefined,
					{
						shallow: true,
					}
				);
				break;
		}
		setActiveIndex(activeIndex);
	};
	const requisitos = [
		{
			menuItem: `Programa de Maestría`,
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-3">
						<p className="py-4">
							El postulante a los programas de maestrías deberá
							enviar un{' '}
							<span className="font-bold">
								correo electrónico
							</span>{' '}
							(
							<a
								className="link"
								target="_blank"
								href="mailto:upg.farmacia@unmsm.edu.pe"
								rel="noreferrer noopener">
								upg.farmacia@unmsm.edu.pe
							</a>
							), que corresponde a la Unidad de Posgrado de esta
							facultad, y adjuntar el expediente completo con los
							siguientes documentos:
						</p>
						<ol className="list-decimal list-inside">
							<li className="py-2">
								<span
									className="link"
									onClick={() => {
										window.open(
											'https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/resumen_hv_postulante_9c4d207cfe.pdf?updated_at=2022-06-13T21:07:58.885Z',
											'_blank'
										);
									}}>
									Resumen de la hoja de vida
								</span>{' '}
								del postulante (documentado, foliado y ordenado
								de acuerdo a los rubros del formato) en un solo
								archivo en PDF.
							</li>
							<li className="py-2">
								<span
									className="link"
									onClick={() => {
										window.open(
											'https://www.gob.pe/488-obtener-constancia-de-inscripcion-de-diplomas',
											'_blank'
										);
									}}>
									Constancia de inscripción en línea del grado
									de Bachiller emitido por SUNEDU
								</span>{' '}
								o la copia del diploma de grado de Bachiller
								fedateado por la universidad de procedencia (*).
							</li>
							<li className="py-2">
								Copia simple del documento de identidad (DNI,
								carné de extranjería o pasaporte).
							</li>
							<li className="py-2">
								Partida de nacimiento (opcional).
							</li>
							<li className="py-2">
								Recibo de{' '}
								<Link
									href={
										'/formacion-academica/admision?nivel=posgrado&tab=inversion&programa=doctorado'
									}>
									<a className="link">
										pago por derecho de inscripción
									</a>
								</Link>{' '}
								efectuado en el Banco de Crédito del Perú o en
								el Banco de la Nación.
							</li>
							<li className="py-2">
								Otro documento que la Unidad de Posgrado
								considere con relación al perfil de ingreso de
								acuerdo al programa de maestría que postulas.
							</li>
						</ol>
						<p className="py-2">
							(*) Los postulantes que obtuvieron el grado de
							bachiller en la Universidad Nacional Mayor de San
							Marcos solo presentarán copia simple.
						</p>
						<p className="py-2">
							En el caso de graduados en el extranjero, los grados
							y títulos deberán estar revalidados o reconocidos
							según las normas vigentes.
						</p>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: `Programa de Doctorado`,
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-3">
						<p className="py-4">
							El postulante a los programas de doctorado deberá
							enviar un{' '}
							<span className="font-bold">
								correo electrónico
							</span>{' '}
							(
							<a
								className="link"
								target="_blank"
								href="mailto:upg.farmacia@unmsm.edu.pe"
								rel="noreferrer noopener">
								upg.farmacia@unmsm.edu.pe
							</a>
							), que corresponde a la Unidad de Posgrado de esta
							facultad, y adjuntar el expediente completo con los
							siguientes documentos:
						</p>
						<ol className="list-decimal list-inside">
							<li className="py-2">
								<span
									className="link"
									onClick={() => {
										window.open(
											'https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/resumen_hv_postulante_9c4d207cfe.pdf?updated_at=2022-06-13T21:07:58.885Z',
											'_blank'
										);
									}}>
									Resumen de la hoja de vida
								</span>{' '}
								del postulante (documentado, foliado y ordenado
								de acuerdo a los rubros del formato) en un solo
								archivo en PDF.
							</li>
							<li className="py-2">
								<span
									className="link"
									onClick={() => {
										window.open(
											'https://www.gob.pe/488-obtener-constancia-de-inscripcion-de-diplomas',
											'_blank'
										);
									}}>
									Constancia de inscripción en línea del grado
									de Maestro o Doctor emitido por SUNEDU
								</span>{' '}
								o la copia del diploma de grado de Maestro o
								Doctor fedateado por la universidad de
								procedencia (*).
							</li>
							<li className="py-2">
								Copia simple del documento de identidad (DNI,
								carné de extranjería o pasaporte).
							</li>
							<li className="py-2">
								Partida de nacimiento (opcional).
							</li>
							<li className="py-2">
								Recibo de{' '}
								<Link href="/formacion-academica/admision?nivel=posgrado&tab=inversion">
									<a className="link">
										pago por derecho de inscripción{' '}
									</a>
								</Link>
								efectuado en el Banco de Crédito del Perú o en
								el Banco de la Nación.
							</li>
							<li className="py-2">
								Proyecto de Investigación: consultar detalles en
								la Unidad de Posgrado{' '}
								<a
									className="link"
									target="_blank"
									href="mailto:comunicadosupg.farmacia@unmsm.edu.pe"
									rel="noreferrer noopener">
									(comunicadosupg.farmacia@unmsm.edu.pe).
								</a>
							</li>
							<li className="py-2">
								Otro documento que la Unidad de Posgrado
								considere con relación al perfil de ingreso de
								acuerdo al programa de doctorado que postulas.
							</li>
						</ol>
						<p className="py-2">
							(*) Los postulantes que obtuvieron el grado de
							maestro o doctor en la Universidad Nacional Mayor de
							San Marcos solo presentarán copia simple.
						</p>
						<p className="py-2">
							En el caso de graduados en el extranjero, los grados
							y títulos deberán estar revalidados o reconocidos
							según las normas vigentes.
						</p>
					</div>
				</Tab.Pane>
			),
		},
	];
	return (
		<>
			<Observacion>
				<p>
					El envío del expediente completo se realiza luego de
					efectuar el pago por derecho de inscripción y registrarlo
					vía internet para finalmente obtener tu código de
					postulante.
				</p>
			</Observacion>
			<Tab
				menu={{ secondary: true, pointing: true }}
				panes={requisitos}
				activeIndex={activeIndex}
				onTabChange={handleClick}
			/>
		</>
	);
};
