import React from 'react';
import { Tab } from 'semantic-ui-react';
import Link from 'next/link';

export const Requisitos = ({ programas }) => {
	const requisitos = [
		{
			menuItem: `Programa de ${programas[0]}`,
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-3">
						<p className="py-4">
							El postulante a los programas de doctorado deberá
							enviar al{' '}
							<span className="font-bold">
								correo electrónico
							</span>{' '}
							(
							<span
								className="text-secondary cursor-pointer"
								onClick={() => {
									window.open(
										'https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/Relacion_correo_admision_59ff30bc19.pdf?updated_at=2022-06-13T16:46:07.995Z',
										'_blank'
									);
								}}>
								ingrese aquí
							</span>
							) de la Unidad de Posgrado de la Facultad que está
							postulando, el expediente completo con los
							siguientes documentos:
						</p>
						<ol className="list-decimal list-inside">
							<li className="py-2">
								<span
									className="text-secondary cursor-pointer font-bold"
									onClick={() => {
										window.open(
											'https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/resumen_hv_postulante_9c4d207cfe.pdf?updated_at=2022-06-13T21:07:58.885Z',
											'_blank'
										);
									}}>
									Resumen de la hoja de vida
								</span>{' '}
								del postulante (documentado, foliado y ordenado
								de acuerdo a los rubros del formato).
							</li>
							<li className="py-2">
								<span
									className="text-secondary cursor-pointer"
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
							<li className="py-1">
								Partida de nacimiento (opcional).
							</li>
							<li className="py-2">
								Recibo de{' '}
								<span
									className="text-secondary cursor-pointer font-bold"
									onClick={() => {
										window.open(
											'https://estudios-posgrado.vercel.app/admision?tab=pago-de-inscripcion',
											'_blank'
										);
									}}>
									pago por derecho de inscripción
								</span>
								efectuado en el Banco de Crédito del Perú o en
								el Banco de la Nación.
							</li>
							<li className="py-2">
								Otro documento que la Unidad de Posgrado
								considere con relación al perfil de ingreso al
								programa que postula. Revisar los requisitos a
								través de la página web de la Facultad –
								Posgrado
							</li>
						</ol>
						<p className="py-2">
							(*) Los postulantes que obtuvieron el grado de
							Maestro o Doctor en la Universidad Nacional Mayor de
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
		{
			menuItem: `Programa de ${programas[1]}`,
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-3">
						<p className="py-4">
							El postulante a los programas de doctorado deberá
							enviar al correo electrónico (
							<span
								className="text-secondary cursor-pointer font-bold"
								onClick={() => {
									window.open(
										'https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/Relacion_correo_admision_59ff30bc19.pdf?updated_at=2022-06-13T16:46:07.995Z',
										'_blank'
									);
								}}>
								ingrese aquí
							</span>{' '}
							) de la Unidad de Posgrado de la Facultad que está
							postulando, el expediente completo con los
							siguientes documentos:
						</p>
						<ol className="list-decimal list-inside">
							<li className="py-2">
								<span
									className="text-secondary cursor-pointer font-bold"
									onClick={() => {
										window.open(
											'https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/resumen_hv_postulante_9c4d207cfe.pdf?updated_at=2022-06-13T21:07:58.885Z',
											'_blank'
										);
									}}>
									Resumen de la hoja de vida
								</span>{' '}
								del postulante (documentado, foliado y ordenado
								de acuerdo a los rubros del formato).
							</li>
							<li className="py-2">
								<span
									className="text-secondary cursor-pointer font-bold"
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
								<Link href="admision?tab=pago-de-inscripcion">
									<a className="text-secondary font-bold">
										pago por derecho de inscripción{' '}
									</a>
								</Link>
								efectuado en el Banco de Crédito del Perú o en
								el Banco de la Nación.
							</li>
							<li className="py-2">
								Proyecto de Investigación. (para consultar
								detalles con la Unidad de Posgrado,{' '}
								<span
									className="text-secondary cursor-pointer font-bold"
									onClick={() => {
										window.open(
											'https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/consultas_proyecto_investigacion_doctorado_5ef4f7bfa7.pdf?updated_at=2022-06-13T21:11:13.952Z',
											'_blank'
										);
									}}>
									ingrese aquí
								</span>{' '}
								)
							</li>
							<li className="py-2">
								Otro documento que la Unidad de Posgrado
								considere con relación al perfil de ingreso al
								programa que postula. Revisar los requisitos a
								través de la página web de la Facultad –
								Posgrado
							</li>
						</ol>
						<p className="py-2">
							(*) Los postulantes que obtuvieron el grado de
							Maestro o Doctor en la Universidad Nacional Mayor de
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
		<div className="col-start-3 col-span-10 mb-14">
			<Tab
				menu={{ secondary: true, pointing: true }}
				panes={requisitos}
			/>
		</div>
	);
};
