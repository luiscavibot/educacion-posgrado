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

const GuiaAdmisionDiplomatura = () => {
	return (
		<div>
			<div className="mb-6">
				¿Estás listo/a para llevar una diplomatura? Sigue, por favor,
				detenidamente los siguientes pasos del proceso de inscripción
				2023-II:
			</div>
			<div className="relative">
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso1 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 1:</p>
						<p>
							Te recomendamos revisar el brochure de la{' '}
							<a
								href="https://bit.ly/GP-FCA"
								target="_blank"
								rel="noreferrer noopener"
								className="link"
							>
								Diplomatura Gestión Pública
							</a>{' '}
							y la de{' '}
							<a
								href="https://bit.ly/GUP"
								target="_blank"
								rel="noreferrer noopener"
								className="link"
							>
								Diplomatura Gestión de Universidades Públicas
							</a>
							, así como del{' '}
							<Link href="/admision?programa=diplomatura&tab=cronograma-academico">
								<a className="link">cronograma académico</a>
							</Link>
							, con la finalidad de tener conocimiento para la
							inscripción a nuestras diplomaturas.
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
								verificar que el programa de interés cuente con{' '}
								<Link href="/admision?programa=diplomatura&tab=cuadro-de-vacantes">
									<a className="link">vacantes</a>
								</Link>
							</span>{' '}
							para el proceso de inscripción respectivo.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso4 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 3:</p>
						<p>
							Realiza la consulta respectiva a tu asesor comercial
							de la diplomatura de tu interés en caso tengas
							dudas.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso3 className="w-10" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 4:</p>
						<p>
							Verifica si{' '}
							<span className="font-bold">
								cumples con los{' '}
								<Link href="/admision?programa=diplomatura&tab=requisitos-para-la-inscripcion">
									<a className="link">requisitos</a>
								</Link>
							</span>{' '}
							para una exitosa inscripción.
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
							<Link href="/admision?programa=diplomatura&tab=inversion">
								<a className="link">
									Realiza el pago de inscripción
								</a>
							</Link>{' '}
							en el Banco de Crédito del Perú o Banco Pichincha,
							indicando el concepto de pago 094012 y su número de
							documento de identidad del postulante (DNI, carné de
							extranjería o pasaporte).
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
								habilitar tu comprobante de pago en el
							</span>{' '}
							<a
								className="link"
								target="_blank"
								href="https://bit.ly/inscripcion23d"
								rel="noreferrer noopener"
							>
								formulario virtual
							</a>{' '}
							<span className="font-bold">
								y registrar tus datos.
							</span>
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center before:block before:absolute before:top-0 before:bg-azulGris before:w-[2px] before:h-[calc(100%-88px)] before:-z-10">
						<Paso7 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 7:</p>
						<p>
							Finalmente,{' '}
							<span className="font-bold">
								te enviaremos un correo electrónico de
								confirmación de la Unidad de Posgrado de la
								Facultad de Ciencias Administrativas
							</span>{' '}
							(
							<a
								className="link"
								target="_blank"
								href="mailto:capacitacion.upgfca@unmsm.edu.pe"
								rel="noreferrer noopener"
							>
								capacitacion.upgfca@unmsm.edu.pe
							</a>
							,{' '}
							<a
								className="link"
								target="_blank"
								href="mailto:diplomaturasupgfca@unmsm.edu.pe"
								rel="noreferrer noopener"
							>
								diplomaturasupgfca@unmsm.edu.pe
							</a>
							)
							<span>
								{' '}
								o comunícate con tu asesor comercial para
								verificar tu inscripción al programa.
							</span>
						</p>
					</div>
				</div>
				{/* <div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso8 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 8:</p>
						<p>
							Tendrás que rendir las evaluaciones para el programa
							de maestría:{' '}
							<span className="font-bold">
								examen virtual, evaluación de la hoja de vida y
								entrevista virtual.
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
							de la Unidad de Posgrado de la Facultad de Ciencias
							Administrativas y enviada al correo electrónico de
							cada ingresante.
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default GuiaAdmisionDiplomatura;
