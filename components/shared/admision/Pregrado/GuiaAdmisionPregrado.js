import React from 'react';
import Link from 'next/link';

import Observacion from '../../Observacion';

import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import UserCheck from '../../../icons/UserCheck';

export const GuiaAdmisionPregrado = () => {
	return (
		<>
			<div className="mb-6">
				<div className="mb-6">
					<p>¿Listo/a para postular? </p>
					Sigue, por favor, detenidamente los siguientes pasos para el
					proceso de admisión 2023-II:
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
								<span className="font-bold">revisar el</span>{' '}
								<Link href="/admision/pregrado?tab=cronograma-academico">
									<a className="link">cronograma académico</a>
								</Link>{' '}
								con la finalidad de tener conocimiento de la
								programación del proceso de admisión.
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
								realizando el pago presencialmente en la{' '}
								<a
									href="https://www.bn.com.pe/canales-atencion/agencia-lima-metropolitana.asp"
									target="_blank"
									rel="noopener noreferrer"
									className="link"
								>
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
									className="link"
								>
									Oficina Central de Admisión
								</a>{' '}
								(OCA) e ingresa los datos solicitados del
								voucher de pago. Luego, el sistema enviará al
								correo electrónico que hayas registrado un
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
								existen dos formas: presencialmente en una{' '}
								<a
									href="https://www.bn.com.pe/canales-atencion/agencia-lima-metropolitana.asp"
									target="_blank"
									rel="noopener noreferrer"
									className="link"
								>
									agencia del Banco de la Nación
								</a>{' '}
								o virtualmente por la plataforma{' '}
								<a
									href="https://pagalo.pe/"
									target="_blank"
									rel="noopener noreferrer"
									className="link"
								>
									Págalo.pe
								</a>
								. Ten listo el número de prospecto y DNI del
								postulante para el procedimiento.
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
									className="link"
								>
									OCA
								</a>{' '}
								y registra los datos solicitados para generar el
								código del postulante y, finalizar con la
								inscripción
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
								Verifica tus datos ingresando en la opción{' '}
								<span className="font-bold">
									&quot;Registrar inscripción&quot;
								</span>{' '}
								de la página web de la{' '}
								<a
									href="https://admision.unmsm.edu.pe/portal/"
									target="_blank"
									rel="noopener noreferrer"
									className="link"
								>
									OCA
								</a>
								.
							</p>
						</div>
					</div>
				</div>

				<Observacion className="mb-6">
					<p>
						Se recomienda esperar 6 horas luego de haber realizado
						cualquier pago, para que figure en el sistema.
					</p>
				</Observacion>

				<div>
					<p className="font-bold mb-2">
						¿Quieres saber más de este proceso de admisión?
					</p>
					<p className="mb-2">
						¡No te preocupes! Estamos aquí para ayudarte.
						Contáctanos a través de los siguientes datos:
					</p>
					<p className="text-[15px]">
						<span className="font-bold mr-2">Sitio web:</span>
						<a
							href="https://admision.unmsm.edu.pe/portal/',
												'_blank"
							target="_blank"
							rel="noopener noreferrer"
							className="link"
						>
							admision.unmsm.edu.pe
						</a>
					</p>
					<p className="text-[15px]">
						<span className="font-bold mr-2">Dirección:</span>
						<span>Av. Oscar R. Benavides 5737</span>
					</p>
					<p className="text-[15px] mb-4">
						<span className="font-bold mr-2">Teléfono:</span>
						<span>(+51) 619 7000 anexo 5608, 5617 y 5622</span>
					</p>
					<div>
						<div
							onClick={() => {
								window.open(
									'https://www.facebook.com/admision.sanmarcos/',
									'_blank'
								);
							}}
							className="inline-block mr-4"
						>
							<button className="w-[36px] h-[36px] flex items-center justify-center mb-2 text-primary bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
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
							className="inline-block"
						>
							<button className="w-[36px] h-[36px] flex items-center justify-center mb-2 text-primary bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
								<AiFillInstagram />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
