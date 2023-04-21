import React from 'react';

import Paso1 from '../../../icons/Paso1';
import Paso2 from '../../../icons/Paso2';
import Paso3 from '../../../icons/Paso3';
import Paso4 from '../../../icons/Paso4';
import Paso5 from '../../../icons/Paso5';
import Paso6 from '../../../icons/Paso6';
import Paso7 from '../../../icons/Paso7';
import Paso8 from '../../../icons/Paso8';
import Paso9 from '../../../icons/Paso9';
import Link from 'next/link';

import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export const GuiaAdmisionMaestria = () => {
	return (
		<div>
			<div className="mb-6">
				¿Estás listo/a para postular a una maestría? Sigue, por favor,
				detenidamente los siguientes pasos del proceso de admisión
				2023-I:
			</div>
			<div className="relative">
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso1 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 1:</p>
						<p>
							Te recomendamos{' '}
							<span className="font-bold">visualizar el </span>
							<Link href="/admision/posgrado?programa=maestria&tab=cronograma-academico">
								<a className="link"> cronograma académico </a>
							</Link>
							con la finalidad de tener conocimiento de la
							programación del proceso de admisión.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso2 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 2:</p>
						<p>
							Luego, debes{' '}
							<span className="font-bold">
								verificar que el programa de interés cuente con
								vacantes
							</span>{' '}
							para el proceso de admisión respectivo.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso3 className="w-10" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 3:</p>
						<p>
							Verifica que{' '}
							<span className="font-bold">
								cumplas con los{' '}
								<Link href="/admision/posgrado?programa=maestria&tab=requisitos-para-postular">
									<a className="link"> requisitos </a>
								</Link>
								establecidos
							</span>{' '}
							por la Dirección General de Estudios de Posgrado
							(DGEP) para postular a los programas de maestrías.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso4 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 4:</p>
						<p>
							Si cumples con los requisitos, descarga y{' '}
							<a
								className="link"
								target="_blank"
								href="https://posgrado.unmsm.edu.pe/documentos/resumen-hv-postulante.pdf"
								rel="noreferrer noopener">
								llena la hoja de vida.
							</a>
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso5 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 5:</p>
						<p>
							<Link href="/admision/posgrado?programa=maestria&tab=inversion">
								<a className="link">
									{' '}
									Realiza el pago de inscripción{' '}
								</a>
							</Link>
							en el Banco de Crédito del Perú o en el Banco de la
							Nación, indicando el n.° de documento de identidad
							del postulante (DNI, carné de extranjería o
							pasaporte).
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso6 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 6:</p>
						<p>
							Una vez efectuado el pago por derecho de inscripción
							al número de cuenta de la Universidad Nacional Mayor
							de San Marcos, deberás{' '}
							<span className="font-bold">
								habilitar tu comprobante de pago en la
							</span>{' '}
							<a
								className="link"
								target="_blank"
								href="https://posgrado.unmsm.edu.pe/admision/inscripcion/"
								rel="noreferrer noopener">
								plataforma virtual
							</a>{' '}
							<span className="font-bold">
								y registrar tus datos.
							</span>{' '}
							Finalizado el registro de datos, se generará tu
							código de postulante.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso7 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 7:</p>
						<p>
							Envía{' '}
							<span className="font-bold">
								al correo electrónico de la Unidad de Posgrado
								de la Facultad de Química e Ingeniería Química
							</span>{' '}
							<a
								className="link"
								target="_blank"
								href="mailto:postgrado.quimica@unmsm.edu.pe"
								rel="noreferrer noopener">
								(postgrado.quimica@unmsm.edu.pe)
							</a>
							<span>
								{' '}
								el expediente completo con los requisitos para
								postular.
							</span>
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso8 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 8:</p>
						<p>
							Tendrás que rendir las evaluaciones para el programa
							de maestría:{' '}
							<span className="font-bold">
								examen de aptitud virtual, evaluación de
								expediente y entrevista personal.
							</span>{' '}
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center before:block before:absolute before:top-0 before:bg-azulGris before:w-[2px] before:h-[calc(100%-88px)] before:-z-10">
						<Paso9 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 9:</p>
						<p>
							Finalmente, revisa la{' '}
							<span className="font-bold">
								relación de postulantes admitidos que será
								publicada en el portal web
							</span>{' '}
							de la Unidad de Posgrado de la Facultad de Química e
							Ingeniería Química y enviada al correo electrónico
							de cada ingresante.
						</p>
					</div>
				</div>
			</div>
			<div>
				<p className="font-bold mb-2">
					¿Quieres saber más de este proceso de admisión?
				</p>
				<p className="mb-2">
					¡No te preocupes! Estamos aquí para ayudarte{' '}
				</p>
				<p className="text-[15px]">
					<span className="font-bold mr-2">Sitio web:</span>
					<a
						className="link"
						onClick={() => {
							window.open(
								'https://posgrado.unmsm.edu.pe/',
								'_blank'
							);
						}}>
						https://posgrado.unmsm.edu.pe/
					</a>
				</p>
				<p className="text-[15px]">
					<span className="font-bold mr-2">Correo electrónico:</span>
					<a
						className="link"
						target="_blank"
						href="mailto:postgrado.quimica@unmsm.edu.pe"
						rel="noreferrer noopener">
						postgrado.quimica@unmsm.edu.pe
					</a>
				</p>
				<p className="text-[15px]">
					<span className="font-bold mr-2">Dirección:</span>
					<span>
						Sede central, Ciudad Universitaria, Lima - Escuela de
						Posgrado
					</span>
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
						className="inline-block mr-4">
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
						className="inline-block">
						<button className="w-[36px] h-[36px] flex items-center justify-center mb-2 text-primary bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
							<AiFillInstagram />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
