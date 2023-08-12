import Link from 'next/link';
import Image from 'next/future/image';
import React from 'react';
import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import Modal from '@mui/material/Modal';

import { Tabs } from '../../../components/shared/Tabs';
import Boton from '../../../components/shared/Boton';

import UserCardIcon from '../../../components/icons/UserCardIcon';
import CorreoIcon from '../../../components/icons/CorreoIcon';
import DocumentCheckIcon from '../../../components/icons/DocumentCheckIcon';

import { UltimasNoticias } from '../../../components/shared/programas/UltimasNoticias';
import { BASE_URL, POSGRADO_URL, SLUG_CARRERA } from '../../../config/consts';
import { MallaCurricular } from '../../../components/shared/programas/posgrado-component/MallaCurricular';
import { InversionEconomica } from '../../../components/shared/programas/InversionEconomica';

import { Box } from '@mui/material';
import FormacionContentModal from '../../../components/formacion-academica/FormacionContentModal';
import Observacion from '../../../components/shared/Observacion';
import DuracionIcon from '../../../components/icons/DuracionIcon';
import { SiGoogleclassroom } from 'react-icons/si';
import LinkExtIcon from '../../../components/icons/LinkExtIcon';

const TallerTesis = ({ ultimasNoticias }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<PrincipalLayout>
			<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
				<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
					Investigación
				</li>
				<li className="text-textColorOne font-bold inline">
					<span>Taller de Tesis</span>
				</li>
			</ul>
			<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
				Taller de Tesis
			</div>
			<div className="col-span-full mb-5 ">
				<div className="relative md:h-banner xl:h-auto">
					<Image
						src={`https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/posgrado-administracion/investigacion/taller-tesis-ciencias-administrativa-posgrado.jpg`}
						layout="responsive"
						width={1343}
						height={397}
						priority={true}
						alt="Banner Maestría"
						className="w-full h-bannerMobile md:h-full object-cover"
					/>
				</div>
			</div>
			<div className="col-span-full md:col-span-10 mb-14">
				<Tabs nombre="taller-tesis">
					<div label="Presentación">
						<div>
							<div className="bg-complementaryTwo rounded-lg px-5 pt-5 pb-1 mb-5">
								<p className="pb-4 flex space-x-1 items-center">
									<DuracionIcon className="fill-textColorOne" />
									<span className="font-bold text-textColorOne">
										Duración:
									</span>{' '}
									<span>
										10 sesiones de 4 horas académicas (3
										horas cronológicas)
									</span>
								</p>
								<p className="pb-4 flex space-x-1 items-center">
									<span className="relative left-[2px] mr-[5px]">
										<SiGoogleclassroom />
									</span>
									<span className="font-bold text-textColorOne">
										Modalidad:
									</span>{' '}
									<span>semipresencial</span>
								</p>
							</div>

							<div className="mb-6">
								<p>
									Si estás buscando el apoyo necesario para
									alcanzar tu objetivo de graduación, tenemos
									la opción perfecta para ti: nuestro curso
									&#8220;Taller de Formulación de Proyecto de
									Tesis de Maestría&#8221;. Te brindamos las
									herramientas y el conocimiento práctico que
									necesitas para redactar un proyecto de tesis
									de maestría completo y de calidad. Con la
									guía experta de nuestros profesionales
									altamente calificados, aprenderás las
									estrategias y técnicas clave para
									desarrollar un proyecto sólido y
									convincente.
								</p>
							</div>

							<div className="mb-6">
								<div className="subtitle mb-2">Expositor</div>
								<p>Dr. Ivan Vivanco Aquino</p>
							</div>

							<div className="mb-6">
								<div className="subtitle mb-2">Dirigido a:</div>
								<p>
									egresados de los programas de maestría de la
									Unidad de Posgrado FCA
								</p>
							</div>

							<div className="mb-6">
								<div className="subtitle mb-2">Horario:</div>
								<p>
									todos los domingos de 8:00 a. m. a 11:00 a.
									m.
								</p>
							</div>

							<div className="mb-6">
								<div className="subtitle mb-2">Grupos:</div>
								<p>20 alumnos por grupo (mínimo)</p>
							</div>

							<div className="mb-6">
								<div className="subtitle mb-2">Fechas</div>
								<p>
									del 6 de agosto al 8 de octubre de 2023 (en
									función a completar grupos de 20)
								</p>
							</div>

							<div className="mb-6">
								<div className="subtitle mb-2">
									Clases presenciales:
								</div>
								<p>6 y 13 de agosto</p>
							</div>

							<div className="mb-6">
								<div className="subtitle mb-2">
									Clases virtuales (vía plataforma zoom):
								</div>
								<p>del 20 de agosto al 8 de octubre</p>
							</div>
						</div>
					</div>
					<div label="Inscripción">
						<div>
							<p className="mb-6">
								¿Estás listo/a para iniciar nuestro Taller de
								Tesis? Para inscribirte, simplemente completa
								nuestro formulario en línea haciendo clic en el
								siguiente enlace:{' '}
								<a
									href="https://forms.gle/DRWNkR9rnLLhjgcV6"
									target="_blank"
									rel="noopener noreferrer"
									className="text-secondary"
								>
									https://forms.gle/DRWNkR9rnLLhjgcV6
								</a>
							</p>
							<p className="subtitle mb-2">Inversión económica</p>
							<p className="mb-4">
								Realiza el pago único de S/ 1000.00 y asegura tu
								lugar en el curso.
							</p>
							<p className="mb-4">
								Podrás realizar el pago en los siguientes medios
								autorizados:
							</p>
							<ul className="list-disc mb-4 ml-5">
								<li className="mb-6">
									<div className="inline-flex items-center subtitle mb-2">
										<span className="mr-2">
											Banco Pichincha
										</span>
										<a
											href="https://www.pichincha.pe/servicio-al-cliente/nuestras-agencias"
											target="_blank"
											rel="noopener noreferrer"
										>
											<LinkExtIcon className="fill-primary" />
										</a>
									</div>
									<p>
										Acércate presencialmente a una de sus
										agencias más cercanas a ti e indica que
										realizarás un depósito a la cuenta
										recaudadora UNMSM (Cta. Cte. n.°
										000270016684). Finalmente, brinda el
										siguiente concepto de pago{' '}
										<span className="font-bold">
											094-030
										</span>
										, y ¡listo!
									</p>
								</li>
								<li>
									<div className="inline-flex items-center subtitle mb-2">
										<span className="mr-2">
											Banco de Crédito del Perú
										</span>
										<a
											href="https://www.viabcp.com/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<LinkExtIcon className="fill-primary" />
										</a>
									</div>
									<p>
										¡Paga seguro en línea! Ingresa a{' '}
										<a
											href="https://www.viabcp.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-secondary"
										>
											Vía BCP
										</a>{' '}
										y selecciona Banca por internet. Luego,
										da clic en pago de servicio;
										posteriormente, registra el código de
										identificación 094030+DNI (14 dígitos,
										sin espacios ni guiones), y eso es todo.
									</p>
								</li>
							</ul>
							<p>
								No dejes que el punto de partida te detenga.
								¡Inscríbete ahora en nuestro curso y toma acción
								hacia tu graduación!
							</p>
						</div>
					</div>
					<div label="Temario">
						<div>
							<p className="mb-6">
								Entérate aquí qué contenidos académicos
								abordaremos en el Taller de Tesis:
							</p>
						</div>
						<div className="overflow-x-auto mt-4 mb-8">
							<table className="table table-striped-even mb-0">
								<thead>
									<tr>
										<th
											colSpan="2"
											className="!bg-tertiary text-blanco text-center"
										>
											Asignaturas
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											Líneas de investigación, ODS,
											esquema del proyecto de
											investigación, redacción APA
										</td>
									</tr>
									<tr>
										<td>
											Situación problemática,
											planteamiento del problema,
											objetivos de la investigación
										</td>
									</tr>
									<tr>
										<td>
											Marco Teórico (antecedentes y bases
											teóricas)
										</td>
									</tr>
									<tr>
										<td>
											Hipótesis y Variables (si la
											investigación lo requiere)
										</td>
									</tr>
									<tr>
										<td>Metodología</td>
									</tr>
									<tr>
										<td>
											Instrumentos de recolección de datos
										</td>
									</tr>
									<tr>
										<td>
											Revisión del borrador del proyecto
										</td>
									</tr>
									<tr>
										<td>
											Presentación y registro del proyecto
											de investigación
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</Tabs>
			</div>
			<div className="col-span-full md:col-span-2 mt-8 md:pl-6 mx-4 md:mx-0">
				<div className="mb-5">
					<p className="mb-1 text-tertiary">
						<span className="font-black">Más información</span>
					</p>
					<p className="mb-3">
						Si tienes alguna consulta, descuida, nuestro equipo
						estará encantado de ayudarte.
					</p>
					<Boton
						text="Contáctanos"
						secondary
						bold
						onClick={() => handleOpen()}
					/>
				</div>
			</div>
			<div className="col-span-full mb-14 max-md:px-4">
				<div className="rounded-lg bg-Contacto bg-cover bg-center overflow-hidden w-full mb-10">
					<div className="bg-Gradient px-6 lg:px-24 py-8 text-blanco h-full flex items-center">
						<div className="flex flex-col md:flex-row w-full justify-between gap-y-4">
							<div>
								<div className="grid grid-cols-[48px_auto] gap-x-1 sm:gap-x-4 text-center md:text-left max-md:mb-3">
									<img
										className="m-auto"
										src="/img/icons/correo-mas-informacion-icon.svg"
										alt=""
									/>
									<div className="max-md:flex max-md:items-center">
										<p className="text-xl font-bold">
											¿Quieres conocer más sobre este
											programa?
										</p>
										<p className="hidden md:block text-sm md:mt-0 m-auto">
											¡No dudes en contactarnos! Nuestro
											equipo te responderá lo más pronto
											posible.
										</p>
									</div>
								</div>
								<p className="md:hidden block text-sm md:mt-0 m-auto">
									¡No dudes en contactarnos! Nuestro equipo te
									responderá lo más pronto posible.
								</p>
							</div>
							<div className="flex items-center">
								<Boton
									className="md:m-auto"
									text="Contáctanos"
									primary
									onClick={() => handleOpen()}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<UltimasNoticias ultimasNoticias={ultimasNoticias} />

			{/* {coordinadores && coordinadores.length > 0 && ( */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					className="w-[90%] md:w-[60%] h-[90vh] md:h-auto overflow-auto rounded-lg"
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						bgcolor: 'transparent',
					}}
				>
					<FormacionContentModal
						handleClose={handleClose}
						responsableEmail="admisionupg.administracion@unmsm.edu.pe"
						telefono="(+51) 619 7000 anexo 4812"
					/>
				</Box>
			</Modal>
		</PrincipalLayout>
	);
};

export async function getStaticProps({ params }) {
	const resNoticias = await fetch(
		`${BASE_URL}/noticias/${SLUG_CARRERA}/ultimas`
	);
	const ultimasNoticias = await resNoticias.json();

	return {
		props: {
			ultimasNoticias,
		},
	};
}

export default TallerTesis;
