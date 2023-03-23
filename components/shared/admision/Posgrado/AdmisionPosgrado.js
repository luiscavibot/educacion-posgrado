import React from 'react';
import { Tabs } from '../../Tabs';
import { CuadroVacante } from './CuadroVacante';
import { Inversion } from './Inversion';
import { Requisitos } from './Requisitos';

import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import CorreoEnviado from '../../../icons/CorreoEnviado';

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

export const AdmisionPosgrado = ({
	cronograma,
	proceso,
	// programas,
	facultad,
}) => {
	return (
		<>
			<Tabs
				nombre="admision_posgrado"
				onClick={(e) => {
					handleClick(e);
				}}>
				<div label="Guía para el proceso de admisión">
					<div>
						<div className="mb-6">
							¿Listo/a para postular? Sigue, por favor,
							detenidamente los siguientes pasos del proceso de
							admisión 2023-I:
						</div>
						<div className="relative">
							<div className="grid grid-cols-[88px_auto] mb-10">
								<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
									{/* <img
										className="w-[40px]"
										src="/img/icons/admision/paso 1 - icon.svg"
										alt=""
									/> */}
									<Paso1 className="w-10 fill-tertiary" />
								</div>
								<div className="ml-12">
									<p className="font-bold">Paso 1:</p>
									<p>
										Te recomendamos
										<Link href="/formacion-academica/admision?nivel=posgrado&tab=cronograma-academico">
											<a className="link">
												{' '}
												visualizar el cronograma
												académico{' '}
											</a>
										</Link>
										con la finalidad de tener conocimiento
										de la programación del proceso de
										admisión.
									</p>
								</div>
							</div>
							<div className="grid grid-cols-[88px_auto] mb-10">
								<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
									{/* <img
										className="w-[40px]"
										src="/img/icons/admision/paso 2 - icon.svg"
										alt=""
									/> */}
									<Paso2 className="w-10 fill-tertiary" />
								</div>
								<div className="ml-12">
									<p className="font-bold">Paso 2:</p>
									<p>
										Luego, debes{' '}
										<span className="font-bold">
											verificar que el programa de interés
											cuente con vacantes
										</span>{' '}
										para el proceso de admisión respectivo.
									</p>
								</div>
							</div>
							<div className="grid grid-cols-[88px_auto] mb-10">
								<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
									{/* <img
										className="w-[40px]"
										src="/img/icons/admision/paso 3 - icon.svg"
										alt=""
									/> */}
									<Paso3 className="w-10" />
								</div>
								<div className="ml-12">
									<p className="font-bold">Paso 3:</p>
									<p>
										Verifica que
										<Link href="/formacion-academica/admision?nivel=posgrado&tab=requisitos-para-postular">
											<a className="link">
												{' '}
												cumplas con los requisitos
												establecidos{' '}
											</a>
										</Link>
										por la Dirección General de Estudios de
										Posgrado (DGEP) para postular a los
										programas de maestrías y doctorados.
									</p>
								</div>
							</div>
							<div className="grid grid-cols-[88px_auto] mb-10">
								<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
									{/* <img
										className="w-[40px]"
										src="/img/icons/admision/paso 4 - icon.svg"
										alt=""
									/> */}
									<Paso4 className="w-10 fill-tertiary" />
								</div>
								<div className="ml-12">
									<p className="font-bold">Paso 4:</p>
									<p>
										Si cumples con los requisitos, descarga
										y{' '}
										<a
											className="link"
											target="_blank"
											href="https://posgrado.unmsm.edu.pe/documentos/resumen-hv-postulante.pdf"
											rel="noreferrer noopener">
											llena la hoja de vida
										</a>
									</p>
								</div>
							</div>
							<div className="grid grid-cols-[88px_auto] mb-10">
								<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
									{/* <img
										className="w-[40px]"
										src="/img/icons/admision/paso 4 - icon.svg"
										alt=""
									/> */}
									<Paso5 className="w-10 fill-tertiary" />
								</div>
								<div className="ml-12">
									<p className="font-bold">Paso 5:</p>
									<p>
										<Link href="/formacion-academica/admision?nivel=pregrado&tab=inversion">
											<a className="link">
												{' '}
												Realiza el pago de inscripción{' '}
											</a>
										</Link>
										en el Banco de Crédito del Perú o en el
										Banco de la Nación, indicando el n.° de
										documento de identidad del postulante
										(DNI, carné de extranjería o pasaporte).
									</p>
								</div>
							</div>
							<div className="grid grid-cols-[88px_auto] mb-10">
								<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
									{/* <img
										className="w-[40px]"
										src="/img/icons/admision/paso 5 - icon.svg"
										alt=""
									/> */}
									<Paso6 className="w-10 fill-tertiary" />
								</div>
								<div className="ml-12">
									<p className="font-bold">Paso 6:</p>
									<p>
										Una vez efectuado el pago por derecho de
										inscripción al número de cuenta de la
										Universidad Nacional Mayor de San
										Marcos, deberás{' '}
										<span className="font-bold">
											habilitar tu comprobante de pago en
											la
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
										Una vez que finalices el registro de
										datos, se generará tu código de
										postulante.
									</p>
								</div>
							</div>
							<div className="grid grid-cols-[88px_auto] mb-10">
								<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
									{/* <img
										className="w-[40px]"
										src="/img/icons/admision/paso 6 - icon.svg"
										alt=""
									/> */}
									{/* <CorreoEnviado className="fill-tertiary" /> */}
									<Paso7 className="w-10 fill-tertiary" />
								</div>
								<div className="ml-12">
									<p className="font-bold">Paso 7:</p>
									<p>
										Envía al correo electrónico de la Unidad
										de Posgrado de la Facultad de Farmacia y
										Bioquímica{' '}
										<a
											className="link"
											target="_blank"
											href="mailto:upg.farmacia@unmsm.edu.pe"
											rel="noreferrer noopener">
											(upg.farmacia@unmsm.edu.pe)
										</a>
										<span>
											{' '}el expediente completo con los
											requisitos para postular.
										</span>
									</p>
								</div>
							</div>
							<div className="grid grid-cols-[88px_auto] mb-10">
								<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
									{/* <img
										className="w-[40px]"
										src="/img/icons/admision/paso 7 - icon.svg"
										alt=""
									/> */}
									<Paso8 className="w-10 fill-tertiary" />
								</div>
								<div className="ml-12">
									<p className="font-bold">Paso 8:</p>
									<p>
										Tendrás que rendir las evaluaciones para
										el programa de maestría:{' '}
										<span className="font-bold">
											examen de aptitud virtual,
											evaluación de expediente y
											entrevista personal.
										</span>{' '}
										Programa de doctorado:{' '}
										<span className="font-bold">
											sustentación de un proyecto de
											investigación y la evaluación de
											expediente.
										</span>
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
									<Paso9 className="w-10 fill-tertiary" />
								</div>
								<div className="ml-12">
									<p className="font-bold">Paso 9:</p>
									<p>
										Finalmente, revisa la{' '}
										<span className="font-bold">
											relación de postulantes admitidos
											que será publicada en el portal web
										</span>{' '}
										de la Unidad de Posgrado de la Facultad
										de Farmacia y Bioquímica y enviada al
										correo electrónico de cada ingresante.
									</p>
								</div>
							</div>
						</div>
						<div>
							<p className="font-bold mb-2">Más información</p>
							<p className="text-[15px]">
								<span className="font-bold mr-2">
									Sitio web:
								</span>
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
								<span className="font-bold mr-2">
									Correo electrónico:
								</span>
								<a
									className="link"
									target="_blank"
									href="mailto:upg.farmacia@unmsm.edu.pe"
									rel="noreferrer noopener">
									upg.farmacia@unmsm.edu.pe
								</a>
							</p>
							<p className="text-[15px]">
								<span className="font-bold mr-2">
									Dirección:
								</span>
								<span>
									Sede central, Ciudad Universitaria, Lima -
									Escuela de Posgrado
								</span>
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
				<div label="Cronograma académico">
					<>
						<p className="mb-6">
							Entérate aquí cuáles son todas nuestras actividades
							para los programas de maestría y doctorado del ciclo
							2023-I
						</p>
						<div className="overflow-x-auto mt-4 mb-8">
							<table className="table table-striped-even mb-0">
								<thead>
									<tr>
										<th
											colSpan="2"
											className="!bg-tertiary text-blanco text-center">
											Admisión general {proceso}
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
									{cronograma.proceso_admision.map(
										(proceso_adm) => {
											return (
												<tr
													key={
														proceso_adm.actividad +
														proceso_adm.fecha
													}>
													<td>
														{proceso_adm.actividad}
													</td>
													<td>{proceso_adm.fecha}</td>
												</tr>
											);
										}
									)}
								</tbody>
							</table>
						</div>
						<div className="overflow-x-auto mt-4 mb-8">
							<table className="table table-striped-even mb-0">
								<thead>
									<tr>
										<th
											colSpan="2"
											className="!bg-tertiary text-blanco text-center">
											Proceso de matrícula
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
									{cronograma.proceso_matricula.map(
										(proceso_mat) => {
											return (
												<tr
													key={
														proceso_mat.actividad +
														proceso_mat.fecha
													}>
													<td>
														{proceso_mat.actividad}
													</td>
													<td>{proceso_mat.fecha}</td>
												</tr>
											);
										}
									)}
								</tbody>
							</table>
						</div>
						<div className="overflow-x-auto mt-4 mb-8">
							<table className="table table-striped-even mb-0">
								<thead>
									<tr>
										<th
											colSpan="2"
											className="!bg-tertiary text-blanco text-center">
											Programa de inducción académica
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
									{cronograma.induccion_academica.map(
										(induccion_acad) => {
											return (
												<tr
													key={
														induccion_acad.actividad +
														induccion_acad.fecha
													}>
													<td>
														{
															induccion_acad.actividad
														}
													</td>
													<td>
														{induccion_acad.fecha}
													</td>
												</tr>
											);
										}
									)}
								</tbody>
							</table>
						</div>
						<div className="overflow-x-auto mt-4 mb-8">
							<table className="table table-striped-even mb-0">
								<thead>
									<tr>
										<th
											colSpan="2"
											className="!bg-tertiary text-blanco text-center">
											Actividades académicas
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
									{cronograma.actividades_academicas.map(
										(actividades_acad) => {
											return (
												<tr
													key={
														actividades_acad.actividad +
														actividades_acad.fecha
													}>
													<td>
														{
															actividades_acad.actividad
														}
													</td>
													<td>
														{actividades_acad.fecha}
													</td>
												</tr>
											);
										}
									)}
								</tbody>
							</table>
						</div>
					</>
				</div>
				<div label="Cuadro de vacantes">
					<CuadroVacante facultad={facultad} />
				</div>
				<div label="Requisitos para postular">
					<Requisitos />
				</div>
				<div label="Inversión">
					<Inversion />
				</div>
			</Tabs>
		</>
	);
};
