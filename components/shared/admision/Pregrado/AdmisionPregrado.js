import React from 'react';
import Link from 'next/link';
import { Tabs } from '../../Tabs';

import Observacion from '../../Observacion';

import { CuadroVacante } from './CuadroVacante';
import { Inversion } from './Inversion';
import { ModalidadAdmision } from './ModalidadAdmision';

import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import UserCheck from '../../../icons/UserCheck';

export const AdmisionPregrado = ({
	cronograma,
	proceso,
	programas,
	vacante,
}) => {
	return (
		<>
			<Tabs nombre="admision_pregrado">
				<div label="Guía para el proceso de admisión">
					<div>
						<div className="mb-6">
							<div className="mb-6">
								¿Listo/a para postular? Sigue, por favor,
								detenidamente los siguientes pasos del proceso
								de admisión 2023-II:
							</div>

							<div className="relative">
								<div className="grid grid-cols-[88px_auto] mb-10">
									<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
										<img
											className="w-[40px]"
											src="/img/icons/admision/paso 1 - icon.svg"
											alt=""
										/>
									</div>
									<div className="ml-12">
										<p className="font-bold">Paso 1:</p>
										<p>
											Te recomendamos{' '}
											<span className="font-bold">
												revisar el
											</span>{' '}
											<Link href="/formacion-academica/admision?nivel=pregrado&tab=cronograma-academico">
												<a className="link">
													cronograma académico
												</a>
											</Link>{' '}
											con la finalidad de tener
											conocimiento de la programación del
											proceso de admisión.
										</p>
									</div>
								</div>
								<div className="grid grid-cols-[88px_auto] mb-10">
									<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
										<img
											className="w-[40px]"
											src="/img/icons/admision/paso 2 - icon.svg"
											alt=""
										/>
									</div>
									<div className="ml-12">
										<p className="font-bold">Paso 2:</p>
										<p>
											Adquiere el{' '}
											<span className="font-bold">
												reglamento de admisión
											</span>{' '}
											realizando el pago presencialmente
											en la{' '}
											<a
												href="https://www.bn.com.pe/canales-atencion/agencia-lima-metropolitana.asp"
												target="_blank"
												rel="noopener noreferrer"
												className="link">
												agencia del Banco de la Nación
											</a>{' '}
											más cercana a ti.
										</p>
									</div>
								</div>
								<div className="grid grid-cols-[88px_auto] mb-10">
									<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
										<img
											className="w-[40px]"
											src="/img/icons/admision/paso 3 - icon.svg"
											alt=""
										/>
									</div>
									<div className="ml-12">
										<p className="font-bold">Paso 3:</p>
										<p>
											Entra a la página web de la{' '}
											<a
												href="https://admision.unmsm.edu.pe/portal/"
												target="_blank"
												rel="noopener noreferrer"
												className="link">
												Oficina Central de Admisión
											</a>{' '}
											(OCA) e ingresa los datos
											solicitados del voucher de pago.
											Luego, el sistema enviará al correo
											electrónico que hayas registrado un
											enlace para la descarga del{' '}
											<span className="font-bold">
												reglamento de admisión.
											</span>
										</p>
									</div>
								</div>
								<div className="grid grid-cols-[88px_auto] mb-10">
									<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
										<img
											className="w-[40px]"
											src="/img/icons/admision/paso 4 - icon.svg"
											alt=""
										/>
									</div>
									<div className="ml-12">
										<p className="font-bold">Paso 4:</p>
										<p>
											Para el{' '}
											<span className="font-bold">
												pago de derecho de inscripción
											</span>{' '}
											existen dos formas: presencialmente
											en una agencia del Banco de la
											Nación o virtualmente por la
											plataforma{' '}
											<a
												href="https://pagalo.pe/"
												target="_blank"
												rel="noopener noreferrer"
												className="link">
												Págalo.pe
											</a>
											. Ten listo el número de prospecto y
											DNI del postulante para el
											procedimiento.
										</p>
									</div>
								</div>
								<div className="grid grid-cols-[88px_auto] mb-10">
									<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
										<img
											className="w-[40px]"
											src="/img/icons/admision/paso 5 - icon.svg"
											alt=""
										/>
									</div>
									<div className="ml-12">
										<p className="font-bold">Paso 5:</p>
										<p>
											Ingresa a la página web de la{' '}
											<a
												href="https://admision.unmsm.edu.pe/portal/"
												target="_blank"
												rel="noopener noreferrer"
												className="link">
												OCA
											</a>{' '}
											y registra los datos solicitados
											para generar el código del
											postulante y, finalizar con la
											inscripción.
										</p>
									</div>
								</div>
								<div className="grid grid-cols-[88px_auto] mb-10">
									<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center before:block before:absolute before:top-0 before:bg-azulGris before:w-[2px] before:h-[calc(100%-88px)] before:-z-10">
										{/* <img
												className="w-[40px]"
												src="/img/icons/admision/paso 8 - icon.svg"
												alt=""
											/> */}
										<UserCheck className="fill-tertiary" />
									</div>
									<div className="ml-12">
										<p className="font-bold">Paso 6:</p>
										<p>
											Verifica tus datos ingresando en la
											opción{' '}
											<span className="font-bold">
												&quot;Registrar
												inscripción&quot;
											</span>{' '}
											de la página web de la{' '}
											<a
												href="https://admision.unmsm.edu.pe/portal/"
												target="_blank"
												rel="noopener noreferrer"
												className="link">
												OCA
											</a>
											.
										</p>
									</div>
								</div>
							</div>

							<div className="bg-complementaryTwo/[0.5] py-4 px-8 mb-8">
								<p>
									Se recomienda esperar 6 horas luego de haber
									realizado cualquier pago, para que figure en
									el sistema.
								</p>
							</div>
							<div>
								<p className="font-bold mb-2">
									Más información
								</p>
								<p className="text-[15px]">
									<span className="font-bold mr-2">
										Sitio web:
									</span>
									<a
										className="link"
										onClick={() => {
											window.open(
												'https://admision.unmsm.edu.pe/portal/',
												'_blank'
											);
										}}>
										admision.unmsm.edu.pe
									</a>
								</p>
								<p className="text-[15px]">
									<span className="font-bold mr-2">
										Dirección:
									</span>
									<span>Av. Oscar R. Benavides 5737</span>
								</p>
								<p className="text-[15px] mb-4">
									<span className="font-bold mr-2">
										Teléfono:
									</span>
									<span>
										(+51) 619 7000 anexo 5608, 5617 y 5622
									</span>
								</p>
								<div>
									<div
										onClick={() => {
											window.open(
												'https://www.facebook.com/admision.sanmarcos/',
												'_blank'
											);
										}}
										className="inline-block mr-4">
										<button className="w-[36px] h-[36px] flex items-center justify-center mb-2 text-secondary bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
											<FaFacebookF />
										</button>
									</div>
									<div
										onClick={() => {
											window.open(
												'https://www.instagram.com/admision_unmsm/',
												'_blank'
											);
										}}
										className="inline-block">
										<button className="w-[36px] h-[36px] flex items-center justify-center mb-2 text-secondary bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
											<AiFillInstagram />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div label="Cronograma académico">
					<>
						<p className="mb-6">
							Entérate aquí hasta cuándo te puedes inscribir y
							cuáles son las fechas del examen de admisión
							2023-II, según el área que postules.
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
										<th className="md:w-60 text-center">
											Fechas
										</th>
									</tr>
								</thead>
								<tbody>
									<tr key="1">
										<td>
											Venta de prospectos - Reglamento
										</td>
										<td className="text-center">
											hasta antes de la fecha de
											inscripción
										</td>
									</tr>
									<tr key="2">
										<td>
											Inscripción de postulantes en
											general
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
															hasta el 12 de
															febrero de 2023
														</td>
													</tr>
													<tr key="2">
														<td>
															<p className="pl-7">
																G, H, I, J, K,
																L, M, N, Ñ, O,
															</p>
														</td>
														<td className="text-center">
															del 13 al 19 de
															febrero de 2023
														</td>
													</tr>
													<tr key="3">
														<td>
															<p className="pl-7">
																P, Q, R, S, T,
																U, V, W, X, Y, Z
															</p>
														</td>
														<td className="text-center">
															del 20 al 26 de
															febrero de 2023
														</td>
													</tr>
													<tr key="4">
														<td>
															<p className="pl-7">
																Rezagados (todas
																las letras)
															</p>
														</td>
														<td className="text-center">
															del 27 de febrero al
															15 de marzo de 2023
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
									<tr key="4">
										<td>Examen de admisión</td>
										<td className="text-center"></td>
									</tr>
									<tr key="5">
										<td colSpan="2" className="!p-0">
											<table className="table mb-0">
												<tbody>
													<tr key="1">
														<td>
															<p className="pl-7">
																Área D: Ciencias
																Económicas y de
																la gestión
																<br />
																Área E:
																Humanidades y
																Ciencias
																jurídicas y
																Sociales
															</p>
														</td>
														<td className="text-center md:w-60">
															Sábado 25 de marzo
															de 2023
														</td>
													</tr>
													<tr key="2">
														<td>
															<p className="pl-7">
																Área B: Ciencias
																básicas
																<br />
																Área C:
																Ingenierías
															</p>
														</td>
														<td className="text-center">
															Domingo 26 de marzo
															de 2023
														</td>
													</tr>
													<tr key="3">
														<td>
															<p className="pl-7">
																Área A:{' '}
																<b>
																	Ciencias de
																	la salud
																</b>
																<br />
																Prueba especial
																a deportistas
																calificados,
																graduados o
																titulados,
																traslado interno
																y externo
															</p>
														</td>
														<td className="text-center">
															Sábado 1 de abril de
															2023
														</td>
													</tr>
													<tr key="4">
														<td>
															<p className="pl-7">
																Área A: Solo
																Medicina Humana
															</p>
														</td>
														<td className="text-center">
															Domingo 2 de abril
															de 2023
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>

									<tr key="6">
										<td>
											Entrega de constancias de ingreso
											<br />
											(Todas las áreas)
										</td>
										<td className="text-center">
											Del 27 de octubre al 15 de noviembre
											del 2022
										</td>
									</tr>
									<tr key="7">
										<td>Inicio de clases</td>
										<td className="text-center">
											Lunes 17 de abril del 2023
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</>
				</div>
				<div label="Cuadro de vacantes">
					<CuadroVacante />
				</div>
				<div label="Modalidades de admisión">
					<ModalidadAdmision />
				</div>
				<div label="Inversión">
					<Inversion />
				</div>
			</Tabs>
		</>
	);
};
