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

const TallerTesis = ({ ultimasNoticias }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<PrincipalLayout>
			<ul className="px-4 md:px-0 col-span-full text-tertiary text-sm mb-5">
				<li className="text-textColorTwo font-bold inline after:content-['\003e'] after:ml-1 mr-1">
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li className="text-textColorTwo font-bold inline after:content-['\003e'] after:ml-1 mr-1">
					Investigación
				</li>
				{/* <li className="text-textColorTwo font-bold inline after:content-['\003e'] after:ml-1 mr-1">
					<Link href="/formacion-academica/posgrado">
						<a>Taller de Tesis</a>
					</Link>
				</li> */}
				<li className="inline text-textColorOne">Taller de Tesis</li>
			</ul>
			<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
				Taller de Tesis
			</div>
			<div className="col-span-full mb-5 ">
				<div className="relative md:h-banner xl:h-auto">
					<Image
						src={`https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/formacion-academica/admision/admision-banner-facultad-quimica.jpg`}
						layout="responsive"
						width={1343}
						height={397}
						priority={true}
						alt="Banner Maestría"
						className="w-full h-bannerMobile md:h-full object-cover"
					/>
				</div>
			</div>
			<div className="col-span-full mb-14">
				<Tabs nombre="taller-tesis">
					<div label="Presentación">
						<div className="grid grid-cols-8 gap-7">
							<div className="col-span-10 md:col-span-6">
								<div className="bg-complementaryOne rounded-lg px-5 pt-5 pb-1 mb-5">
									<p className="pb-4">
										<span className="font-bold">
											Duración:
										</span>{' '}
										<span>Tres meses</span>
									</p>
									<p className="pb-4">
										<span className="font-bold">
											Modalidad:
										</span>{' '}
										<span>Semipresencial</span>
									</p>
								</div>

								<div className="mb-6">
									<p>
										Brindamos una formación académica de
										calidad para el desempeño profesional
										competente de nuestros egresados en las
										distintas etapas, niveles y modalidades
										de la educación, como también en el
										ámbito deportivo y en programas de
										recreación. Contamos con 90 años de una
										amplia y notable experiencia en la
										formación de profesionales de Educación
										Física, con un sólido enfoque pedagógico
										y humanístico sobre la base de la
										investigación científica y
										responsabilidad social, contribuyendo a
										la calidad de vida de la sociedad.
										Nuestra Institución es considerada como
										“Alma Máter de la Educación Física
										peruana”, debido a que por nuestras
										aulas han estudiado los más destacados
										maestros y entrenadores peruanos.{' '}
									</p>
								</div>

								<div className="mb-6">
									<div className="subtitle mb-2">
										Perfil del ingresante:
									</div>
									<p>
										Dirigido a profesionales con grado de
										Bachiller en Administración o
										equivalente con formación profesional y
										filosófica básica, y superar un nivel de
										suficiencia en pruebas psicotécnicas.
										Tener un elevado interés que le permita
										adquirir las habilidades y destrezas
										necesarias para el desarrollo de la
										Atención Farmacéutica en los diferentes
										niveles asistenciales.
									</p>
								</div>

								<div className="mb-6">
									<div className="subtitle mb-2">
										Perfil del graduado:
									</div>
									<p>
										El graduado realizará investigaciones en
										el ámbito de la Administración en
										diferentes patologías e investigación en
										Salud. Manejo y utilizar de forma
										racional fuentes de información y
										documentación. Desarrollar sistemas de
										control de calidad de los servicios
										farmacéuticos.
									</p>
								</div>

								<div className="mb-6">
									<div className="subtitle mb-2">
										Campo laboral:
									</div>
									<p>
										El Magister tiene una amplia demanda
										laboral y se puede desempeñar en:
									</p>
									<ul className="list-disc list-inside">
										<li className="mb-2">
											Docencia en los niveles de
											educación: Inicial, Primaria,
											Secundaria y Superior.
										</li>
									</ul>
								</div>

								<div className="mb-6">
									<div className="subtitle mb-2">
										¿Por qué estudiar con nosotros?
									</div>
									<p>
										Somos una institución acreditada,
										pionera y referente nacional en la
										formación de educadores de excelencia,
										que brinda oportunidad de cambio e
										innovación en el conocimiento integral
										de la educación física, de acuerdo a un
										enfoque pedagógico humanístico y
										tecnológico, en base a la investigación
										científica, contribuyendo a la calidad
										de vida de la sociedad.
									</p>
									<br />
									<p>
										Buscamos, junto a nuestros alumnos y
										egresados, promover una sociedad
										consciente de la práctica de la
										actividad física continua para mejorar
										la calidad de vida de todos los
										peruanos.
									</p>
								</div>

								<div className="mb-6">
									<div className="subtitle mb-2">
										Lugar de realización
									</div>
									<ul className="list-disc list-inside">
										<li className="mb-2">
											<span className="font-bold">
												Virtual: (70%):
											</span>{' '}
											Lunes -Miércoles -Viernes 6:00 p.m.
											a 10:30 p.m.
										</li>
									</ul>
								</div>
								<Observacion>
									Se requiere mínimo 25 alumnos para la
									apertura de la maestría.
								</Observacion>
							</div>
							<div className="col-span-full md:col-span-2">
								<div className="mb-5">
									<p className="mb-1 text-tertiary">
										<span>
											<UserCardIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
										</span>
										<span className="font-bold">
											Coordinador/a
										</span>
									</p>
									<p className="mb-3">
										Dr. Julio Cesar Santiago Contreras
									</p>
								</div>
								<div className="h-[2px] bg-tertiary/20 mb-5" />
								<div className="mb-5">
									<p className="mb-1 text-tertiary">
										<span className="font-black">
											Más información
										</span>
									</p>
									<p className="mb-3">
										Si tienes alguna consulta, descuida,
										nuestro equipo estará encantado de
										ayudarte.
									</p>
									<Boton
										text="Contáctanos"
										secondary
										bold
										onClick={() => handleOpen()}
									/>
								</div>
							</div>
						</div>
					</div>
					<div label="Admisión" link="/admision/posgrado"></div>
					<div label="Inversión económica">
						<div className="grid grid-cols-8">
							<div className="col-span-full md:col-span-7">
								<Observacion className="mb-8">
									<ul className="list-disc list-inside pl-1">
										<li>
											La duración total del programa es de
										</li>
										<li>
											Montos referenciales, sujetos a
											variaciones.
										</li>
									</ul>
								</Observacion>
								<div className="mb-8">
									<div className="mb-[18px]">
										<p className="subtitle mb-4">
											1. Presupuesto de estudios
										</p>
										<ul className="list-disc list-inside mb-4">
											<li className="mb-1">
												costo texto{' '}
												<span className="font-bold">
													costo precio
												</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="mb-8">
									<div className="mb-[18px]">
										<p className="subtitle mb-4">
											2. Admisión:
										</p>
										<ul className="list-disc list-inside mb-4">
											<li className="mb-1">
												admision texto{' '}
												<span className="font-bold">
													admision precio
												</span>
											</li>
										</ul>
										<div className="bg-complementaryTwo/[0.5] px-6 py-4 rounded-lg">
											Más información sobre los conceptos
											y lugares de pago{' '}
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
										<p className="subtitle mb-4">
											3. Matrícula
										</p>

										<ul className="list-disc list-inside default-programa">
											jhdf hjsdgfhjgs fgsdjhgfj
										</ul>

										<p className="font-medium text-sm mt-4">
											<em>
												* Los costos corresponden al
												proceso de admisión 2020,
												sujetos a variaciones.
											</em>
										</p>
									</div>
								</div>

								<div className="mb-8">
									<p className="subtitle mb-4">
										4. Costo por crédito académico:
									</p>
									<p className="mb-4">
										Los cursos del programa tienen un valor
										en créditos. Sobre la base del número de
										créditos matriculados, se determina el
										pago de un alumno por ciclo.
									</p>
									<ul className="list-disc list-inside">
										<li className="mb-1">
											costo_credito texto{' '}
											<span className="font-bold">
												costo_credito precio
											</span>
										</li>
									</ul>
									<p className="font-medium text-sm mt-4">
										<em>
											* Los costos corresponden al proceso
											de admisión 2020, sujetos a
											variaciones.
										</em>
									</p>
								</div>

								<div className="mb-8">
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
												El semestre está conformado por
												cuatro meses académicoss
											</li>
											<li className="mb-1">
												El número total de créditos por
												semestre podría variar de
												acuerdo a la cantidad de cursos
												que el alumno se matricule.
											</li>
											<li>
												Monto referencial, sujeto a
												variaciones.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Tabs>
			</div>
			<div className="col-span-full mb-14">
				<div className="relative md:rounded-lg overflow-hidden mb-10">
					<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/80 -z-10"></div>
					<div className="absolute h-full w-full -z-10">
						<Image
							src={
								'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/banner-contacto.png'
							}
							className="object-cover h-full w-full"
							layout="fill"
							quality={100}
							alt="vocacion1"
							width={1022}
							height={224}
						/>
					</div>
					<div className="text-blanco mx-4 pt-6 pb-9">
						<div className="flex flex-col text-center">
							<span className="hidden md:block mr-4">
								<img
									className="m-auto"
									src="/img/icons/correo-mas-informacion-icon.svg"
									alt=""
								/>
							</span>
							<p className="text-xl font-bold mb-1">
								¿Quieres conocer más sobre este taller?
							</p>
							<p className="text-sm mb-5 md:mt-0 md:max-w-xs m-auto">
								¡No dudes en contactarnos! Nuestro equipo te
								responderá lo más pronto posible.
							</p>
							<div>
								<Boton
									className="m-auto"
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
				aria-describedby="modal-modal-description">
				<Box
					className="w-[90%] md:w-[60%] h-[90vh] md:h-auto overflow-auto rounded-lg"
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						bgcolor: 'transparent',
					}}>
					<FormacionContentModal
						handleClose={handleClose}
						responsableEmail="postgrado.quimica@unmsm.edu.pe"
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
