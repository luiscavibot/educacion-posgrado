import Link from 'next/link';
import Image from 'next/future/image';
import React, { useState } from 'react';
import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import Modal from '@mui/material/Modal';
import { Tabs } from '../../../components/shared/Tabs';
import Boton from '../../../components/shared/Boton';
import CalendarioIcon from '../../../components/icons/CalendarioIcon';
import DocumentCheckIcon from '../../../components/icons/DocumentCheckIcon';
import { UltimasNoticias } from '../../../components/shared/programas/UltimasNoticias';
import { BASE_URL, SLUG_CARRERA } from '../../../config/consts';
import { MallaCurricular } from '../../../components/shared/programas/MallaCurricular';
import GradoIcon from '../../../components/icons/GradoIcon';
import TituloIcon from '../../../components/icons/TituloIcon';
import DuracionIcon from '../../../components/icons/DuracionIcon';
import HojaVidaIcon from '../../../components/shared/HojaVidaIcon';
import HorarioIcon from '../../../components/icons/HorarioIcon';
import { Backdrop, Box, Fade } from '@mui/material';
import FormacionContentModal from '../../../components/formacion-academica/FormacionContentModal';
import CorreoSmallIcon from '../../../components/icons/CorreoSmallIcon';
import TelefonoSmallIcon from '../../../components/icons/TelefonoSmallIcon';
import DireccionSmallIcon from '../../../components/icons/DireccionSmallIcon';

const Escuela = ({ carrera, directores, ultimasNoticias, asignaturas }) => {
	const ogUrl = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/formacion-academica/pregrado/${carrera[0].slug}`;
	const metaTags = {
		title: carrera[0].nombre,
		description: carrera[0].presentacion,
		ogUrl,
		ogType: 'website',
		ogTitle: carrera[0].nombre,
		ogImage: carrera[0].foto,
		ogDescription: carrera[0].presentacion,
	};
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<PrincipalLayout metaTags={metaTags}>
			<ul className="px-4 md:px-0 col-span-full text-tertiary text-sm mb-5">
				<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
					Formación académica
				</li>
				<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
					<Link href="/formacion-academica/pregrado">
						<a>Pregrado</a>
					</Link>
				</li>
				<li className="inline text-negro">
					Escuela Profesional de {carrera[0].nombre}
				</li>
			</ul>
			<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
				Escuela Profesional de {carrera[0].nombre}
			</div>
			<div className="col-span-full mb-5 ">
				<div className="relative md:h-banner xl:h-auto">
					<Image
						src={carrera[0].foto}
						layout="responsive"
						width={1329}
						height={393}
						quality={100}
						priority={true}
						alt="Banner Maestría"
						className="w-full h-bannerMobile md:h-full object-cover"
						sizes="(max-width: 768px) 100vw, 650px"
					/>
					{carrera[0].en_proceso ? (
						<div className="bg-tertiary text-blanco md:absolute md:rounded-l-lg md:top-1/2 right-0 pt-6 pb-5 md:-translate-y-1/2 w-full md:w-52">
							<div className="grid grid-cols-[20px_auto] gap-[14px] mb-4 pl-4 pr-10">
								<DocumentCheckIcon className="fill-blanco" />
								<div>
									<p className="font-bold text-sm">
										Cierre de inscripciones:
									</p>
									<p className="text-xs">
										{carrera[0].cierre_inscripciones}
									</p>
								</div>
							</div>
							<div className="grid grid-cols-[20px_auto] gap-[14px] mb-4 pl-4 pr-10">
								<CalendarioIcon className="fill-blanco" />
								<div>
									<p className="font-bold text-sm">
										Inicio de clases:
									</p>
									<p className="text-xs">
										{carrera[0].fecha_inicio}
									</p>
								</div>
							</div>
							<div className="grid place-content-start mx-4 md:mx-0 md:place-content-center">
								<Link href="/formacion-academica/admision">
									<a>
										<Boton
											className="m-auto"
											text="Admisión"
											bold
											mauto
										/>
									</a>
								</Link>
							</div>
						</div>
					) : // (
					// 	<div className="bg-tertiary text-blanco md:absolute md:rounded-l-lg md:top-1/2 right-0 pt-6 pb-5 md:-translate-y-1/2 w-full md:w-52">
					// 		<p className="mb-4 px-4 text-center font-bold">
					// 			Proceso de Admisión
					// 			<br />
					// 			2023-I
					// 		</p>
					// 		<p className="mb-4 px-4 text-sm text-center">
					// 			¡Muy pronto!
					// 		</p>
					// 		<div className="grid mx-4 md:mx-0 place-content-center">
					// 			<Link href="/formacion-academica/admision">
					// 				<a>
					// 					<Boton
					// 						className="m-auto"
					// 						text="Más información"
					// 						bold
					// 						mauto
					// 					/>
					// 				</a>
					// 			</Link>
					// 		</div>
					// 	</div>
					// )
					null}
				</div>
			</div>
			<div className="col-span-full mb-14">
				<Tabs nombre="pregrado" carrera={carrera[0]}>
					<div label="Presentación">
						<div className="grid grid-cols-8 gap-7">
							<div className="col-span-10 md:col-span-6">
								<div className="bg-complementaryOne rounded-lg px-5 pt-5 pb-1 mb-5">
									<p className="pb-4 flex space-x-1 items-center">
										<span className="w-5">
											<GradoIcon className="fill-textColorOne" />
										</span>
										<span className="font-bold text-textColorOne">
											Grado:
										</span>{' '}
										<span>{carrera[0].grado}</span>
									</p>
									<p className="pb-4 flex space-x-1 items-center">
										<span className="w-5">
											<TituloIcon className="fill-textColorOne" />
										</span>
										<span className="font-bold text-textColorOne">
											Título:
										</span>{' '}
										<span>{carrera[0].titulo}</span>
									</p>
									<p className="pb-4 flex space-x-1 items-center">
										<DuracionIcon className="fill-textColorOne" />
										<span className="font-bold  text-textColorOne">
											Duración:
										</span>{' '}
										<span>{carrera[0].duracion}</span>
									</p>
								</div>
								{carrera[0].presentacion && (
									<>
										<div className="mb-6">
											<p
												dangerouslySetInnerHTML={{
													__html: carrera[0]
														.presentacion,
												}}></p>
										</div>
									</>
								)}

								{carrera[0].objetivos && (
									<>
										<div className="mb-6">
											<div className="subtitle mb-2">
												Objetivos educacionales:
											</div>
											<p
												dangerouslySetInnerHTML={{
													__html: carrera[0]
														.objetivos,
												}}></p>
										</div>
									</>
								)}

								{carrera[0].perfil_ingresante && (
									<>
										<div className="mb-6">
											<div className="subtitle mb-2">
												Perfil del ingresante:
											</div>
											<p
												dangerouslySetInnerHTML={{
													__html: carrera[0]
														.perfil_ingresante,
												}}
												className="desc-resoluciones"></p>
										</div>
									</>
								)}

								{carrera[0].perfil_graduado && (
									<>
										<div className="mb-6">
											<div className="subtitle mb-2">
												Perfil del graduado:
											</div>
											<p
												dangerouslySetInnerHTML={{
													__html: carrera[0]
														.perfil_graduado,
												}}
												className="desc-resoluciones"></p>
										</div>
									</>
								)}

								{carrera[0].campo_laboral && (
									<>
										<div className="mb-6">
											<div className="subtitle mb-2">
												Campo laboral:
											</div>
											<div
												dangerouslySetInnerHTML={{
													__html: carrera[0]
														.campo_laboral,
												}}
												className="html-default"></div>
										</div>
									</>
								)}

								{carrera[0].porQueEstudiarConNosotros && (
									<>
										<div className="mb-6">
											<div className="subtitle mb-2">
												¿Por qué estudiar con nosotros?
											</div>
											<p
												dangerouslySetInnerHTML={{
													__html: carrera[0]
														.porQueEstudiarConNosotros,
												}}></p>
										</div>
									</>
								)}
							</div>
							<div className="col-span-10 md:col-span-2">
								{directores &&
									directores.length > 0 &&
									directores[0].docentes.foto && (
										<div className="mb-6">
											<Image
												src={
													directores[0].docentes.foto
												}
												width={256}
												height={274}
												alt={
													directores[0].docentes
														.nombre
												}
												quality={100}
												className="w-full object-cover"
											/>
										</div>
									)}

								{directores &&
									directores.length > 0 &&
									directores[0].docentes.grado &&
									directores[0].docentes.nombre && (
										<div>
											<p className="mb-1 text-tertiary">
												<span className="font-black">
													Director/a
												</span>
											</p>
											<p className="mb-3">
												<span>
													{
														directores[0].docentes
															.grado
													}
													.
												</span>{' '}
												<span>
													{
														directores[0].docentes
															.nombre
													}
												</span>
											</p>
										</div>
									)}
								<Boton
									text="Hoja de vida"
									className="mb-5"
									bold
									onClick={() => {
										window.open(
											directores[0].docentes?.hojaDeVida,
											'_blank'
										);
									}}>
									<HojaVidaIcon className="fill-textColorOne" />
								</Boton>
								<div className="h-[2px] bg-tertiary/20 mb-5" />
								<h1 className="text-tertiary font-black mb-2">
									Informes
								</h1>
								<div className="text-sm font">
									<p className="mb-1 text-tertiary">
										<span>
											<CorreoSmallIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
										</span>
										<span className="font-bold">
											Correo
										</span>
									</p>
									<div className="mb-3 break-words">
										<p className="mb-1">
											{carrera[0].correo || ''}
										</p>
									</div>
									<p className="mb-1 text-tertiary">
										<span>
											<TelefonoSmallIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
										</span>
										<span className="font-bold">
											Teléfono
										</span>
									</p>
									<div className="mb-3 break-words">
										<p className="mb-1">
											{carrera[0].telefono || ''}
										</p>
									</div>
									{/* <p className="mb-1 text-tertiary">
										<span>
											<DireccionSmallIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
										</span>
										<span className="font-bold">
											Dirección
										</span>
									</p>
									<div className="mb-3 break-words">
										<p className="mb-1">
											{carrera[0].direccion || ''}
										</p>
									</div>
									<p className="mb-1 text-tertiary">
										<span>
											<HorarioIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
										</span>
										<span className="font-bold">
											Atención presencial
										</span>
									</p>
									<div className="mb-3 break-words">
										<p className="mb-1">
											{carrera[0].horario || ''}
										</p>
									</div> */}
								</div>
							</div>
						</div>
					</div>
					<div label="Malla curricular">
						<MallaCurricular
							asignaturas={asignaturas}
							carreraSlug={carrera[0].slug}
							tipo="anios"
							ogUrl={ogUrl}
						/>
					</div>
					<div
						label="Admisión"
						link="/formacion-academica/admision"></div>
				</Tabs>
			</div>
			<div className="col-span-full mb-14">
				<div className="relative md:rounded-lg overflow-hidden mb-10">
					<div className="absolute h-full w-full -z-10">
						<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/80 -z-10"></div>
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
								¿Te gustaría saber más sobre esta carrera?
							</p>
							<p className="text-sm mb-5 md:mt-0 md:max-w-xs m-auto">
								¡Nuestro equipo se encuentra listo para
								ayudarte! Nos comunicaremos contigo lo antes
								posible.
							</p>
							<div className="flex justify-center">
								<Boton
									text="Contáctanos"
									primary
									bold
									onClick={() => handleOpen()}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<UltimasNoticias ultimasNoticias={ultimasNoticias} />

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 300,
				}}
				sx={{
					bgcolor: 'rgba(0, 0, 0, 0.5)',
				}}>
				<Fade in={open}>
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
							responsableEmail={carrera[0].correo}
							facultad={carrera[0].facultad.nombre}
							escuela={carrera[0].nombre}
							templateType="formacion-academica"
							telefono={carrera[0].telefono}
						/>
					</Box>
				</Fade>
			</Modal>
		</PrincipalLayout>
	);
};

export async function getStaticPaths() {
	const resCarrerasPregrado = await fetch(
		`${BASE_URL}/carreras/${SLUG_CARRERA}`
	);
	const carrerasPregrado = await resCarrerasPregrado.json();

	const paths = carrerasPregrado.map((carrera) => ({
		params: {
			carrera: carrera.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps({ params }) {
	const rescarrera = await fetch(
		`${BASE_URL}/carreras/quimica-e-ingenieria-quimica?nombre=${params.carrera}`
	);
	const carrera = await rescarrera.json();
	// console.log('carrera:', carrera);

	const resDirectores = await fetch(
		`${BASE_URL}/carreras-docentes/directores/${carrera[0].id}`
	);
	const directores = await resDirectores.json();

	const resNoticias = await fetch(
		`${BASE_URL}/noticias/${SLUG_CARRERA}/ultimas`
	);
	const ultimasNoticias = await resNoticias.json();

	const resEgresados = await fetch(`${BASE_URL}/egresados/${params.carrera}`);

	const egresados = await resEgresados.json();

	const resAsignaturas = await fetch(
		`${BASE_URL}/asignaturas/${params.carrera}`
	);

	const asignaturas = await resAsignaturas.json();

	return {
		props: {
			carrera,
			directores,
			ultimasNoticias,
			asignaturas,
			egresados,
		},
	};
}

export default Escuela;
