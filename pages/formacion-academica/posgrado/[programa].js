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

const Escuela = ({ programa, coordinadores, ultimasNoticias, asignaturas }) => {
	const ogUrl = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/formacion-academica/posgrado/${programa[0].attributes.slug}`;
	const metaTags = {
		title: programa[0].nombre,
		description: programa[0].presentacion,
		ogUrl,
		ogType: 'website',
		ogTitle: programa[0].nombre,
		ogImage: programa[0].foto,
		ogDescription: programa[0].presentacion,
	};
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	function TipoPosgrado(props) {
		const tipo = props.tipo;
		switch (tipo) {
			case 'maestria':
				return <span>Maestría en</span>;
			case 'doctorado':
				return <span>Doctorado en</span>;
			default:
		}
	}

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
					<Link href="/formacion-academica/posgrado">
						<a>Posgrado</a>
					</Link>
				</li>
				<li className="inline text-negro">
					<TipoPosgrado tipo={programa[1].tipo} />{' '}
					<span>{programa[0].attributes.nombre}</span>
				</li>
			</ul>
			<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
				<TipoPosgrado tipo={programa[1].tipo} />{' '}
				<span>{programa[0].attributes.nombre}</span>
			</div>
			<div className="col-span-full mb-5 ">
				<div className="relative md:h-banner xl:h-auto">
					<Image
						src={
							programa[0].attributes.imagen.data[0].attributes.url
								? programa[0].attributes.imagen.data[0]
										.attributes.url
								: 'https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg'
						}
						layout="responsive"
						width={1343}
						height={397}
						priority={true}
						alt="Banner Maestría"
						className="w-full h-bannerMobile md:h-full object-cover"
					/>
					{/* {programa[0].attributes.en_proceso ? (
						<div className="bg-tertiary text-blanco md:absolute md:rounded-l-lg md:top-1/2 right-0 pt-6 pb-5 md:-translate-y-1/2 w-full md:w-52">
							<div className="grid grid-cols-[20px_auto] gap-[14px] mb-4 pl-4 pr-10">
								<DocumentCheckIcon className="fill-blanco" />
								<div>
									<p className="font-bold text-sm">
										Cierre de inscripciones:
									</p>
									<p className="text-xs">
										{
											programa[0].attributes
												.cierre_inscripcion
										}
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
										{programa[0].attributes.Inicio_clase}
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
					) : null} */}
					{/* temporal este bloque de abajo solo funciona visualmente, más no se puede mostrar condicionadamente */}
					{/* <div className="bg-tertiary text-blanco md:absolute md:rounded-l-lg md:top-1/2 right-0 pt-6 pb-5 md:-translate-y-1/2 w-full md:w-52">
						<p className="mb-4 px-4 text-center font-bold">
							Proceso de Admisión
							<br />
							2023-I
						</p>
						<p className="mb-4 px-4 text-sm text-center">
							¡Muy pronto!
						</p>
						<div className="grid mx-4 md:mx-0 place-content-center">
							<Link href="/formacion-academica/admision">
								<a>
									<Boton
										className="m-auto"
										text="Más información"
										bold
										mauto
									/>
								</a>
							</Link>
						</div>
					</div> */}
					{/* <div className="bg-tertiary text-blanco md:absolute md:rounded-l-lg md:top-1/2 right-0 pt-6 pb-5 md:-translate-y-1/2 w-full md:w-52">
						<div className="font-bold pl-4 pr-10 mb-3">
							<p>Postula al proceso de Admisión 2023 - I</p>
						</div>
						<div className="grid grid-cols-[20px_auto] gap-[14px] mb-4 pl-4 pr-10">
							<DocumentCheckIcon className="fill-blanco" />
							<div>
								<p className="font-bold text-sm mb-1">
									Cierre de inscripciones:
								</p>
								<p className="text-xs">
									{programa[0].attributes.cierre_inscripcion}
								</p>
							</div>
						</div>
						<div className="grid place-content-start mx-4 md:mx-0 md:place-content-center">
							<Link href="/formacion-academica/admision?nivel=posgrado">
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
					</div> */}
					<div className="bg-tertiary/90 text-blanco md:absolute bottom-0 inset-x-0 py-4 w-full flex flex-col md:flex-row justify-center items-center gap-2 px-4">
						<div>
							<p className="font-bold text-center">
								Admisión Posgrado 2023-I
							</p>
						</div>
						<div className="mb-2 md:mb-0">
							<p className="text-center">
								<span className="font-bold">
									Inscripción de rezagados:
								</span>{' '}
								<span>
									hasta el{' '}
									{programa[0].attributes.cierre_inscripcion}
								</span>
							</p>
						</div>
						<a
							className="shadow-[0px_1px_4px_rgba(0,0,0,0.25)] font-semibold text-center rounded-lg py-2 px-3 text-sm duration-100 bg-primary text-textColorOne hover:bg-complementaryThree hover:shadow-md"
							href={programa[0].attributes.brochure}
							target="_blank"
							rel="noopener noreferrer">
							Ver brochure
						</a>
					</div>
				</div>
			</div>
			<div className="col-span-full mb-14">
				<Tabs nombre="posgrado">
					<div label="Presentación">
						<div className="grid grid-cols-8 gap-7">
							<div className="col-span-10 md:col-span-6">
								<div className="bg-complementaryOne rounded-lg px-5 pt-5 pb-1 mb-5">
									<p className="pb-4">
										<span className="font-bold">
											Grado:
										</span>{' '}
										<span>
											{programa[0].attributes.grado}
										</span>
									</p>
									<p className="pb-4">
										<span className="font-bold">
											Duración:
										</span>{' '}
										<span>
											{programa[0].attributes.duracion}
										</span>
									</p>
								</div>

								{programa[0].attributes.descripcion && (
									<>
										<div className="mb-6">
											<p>
												{
													programa[0].attributes
														.descripcion
												}
											</p>
										</div>
									</>
								)}

								{programa[0].attributes.perfil_ingresante && (
									<>
										<div className="mb-6">
											<div className="subtitle mb-2">
												Perfil del ingresante:
											</div>
											<p>
												{
													programa[0].attributes
														.perfil_ingresante
												}
											</p>
										</div>
									</>
								)}

								{programa[0].attributes.perfil_egresado && (
									<>
										<div className="mb-6">
											<div className="subtitle mb-2">
												Perfil del graduado:
											</div>
											<p>
												{
													programa[0].attributes
														.perfil_egresado
												}
											</p>
										</div>
									</>
								)}

								{programa[0].attributes.campo_laboral &&
									programa[0].attributes.campo_laboral
										.length > 0 && (
										<>
											<div className="mb-6">
												<div className="subtitle mb-2">
													Campo laboral:
												</div>
												<ul className="list-disc list-inside">
													{programa[0].attributes.campo_laboral.map(
														(item, index) => (
															<li
																key={index}
																className="mb-2"
																dangerouslySetInnerHTML={{
																	__html: `${item.texto}`,
																}}></li>
														)
													)}
												</ul>
											</div>
										</>
									)}

								{programa[0].attributes
									.porqueEstudiarConNosotros && (
									<>
										<div className="mb-6">
											<div className="subtitle mb-2">
												¿Por qué estudiar con nosotros?
											</div>
											<p>
												{
													programa[0].attributes
														.porqueEstudiarConNosotros
												}
											</p>
										</div>
									</>
								)}

								{programa[0].attributes.objetivos && (
									<>
										<div className="mb-6">
											<div className="subtitle mb-2">
												Objetivos:
											</div>
											<p>
												{
													programa[0].attributes
														.objetivos
												}
											</p>
										</div>
									</>
								)}
							</div>
							<div className="col-span-full md:col-span-2">
								<div className="mb-5">
									<p className="mb-1 text-tertiary">
										<span className="font-bold">
											Más información
										</span>
									</p>
									<p className="mb-3">
										Si tienes alguna consulta, descuida,
										nuestro equipo estará encantado de
										ayudarte.
									</p>
									<div>
										<button
											className="flex gap-x-1 shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-lg py-2 px-3 text-sm duration-100 bg-transparent border  border-secondary text-secondary hover:bg-secondary/20"
											onClick={() => handleOpen()}>
											Contáctanos
										</button>
									</div>
								</div>
								{coordinadores && coordinadores.length > 0 && (
									<>
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
												{coordinadores.map(
													(coordinador, index) => (
														<p
															className="mb-1"
															key={index}>
															{
																coordinador
																	.docente
																	.data
																	.attributes
																	.nombre
															}
														</p>
													)
												)}
											</p>
										</div>
										{/* <div className="w-full h-[2px] bg-tertiary/50 rounded-lg mb-5"></div> */}
									</>
								)}

								{/* <div>
									{coordinadores &&
										coordinadores.length > 0 && (
											<>
												<p className="font-black mb-[10px]">
													Informes de admisión
												</p>
												<div>
													<p className="mb-1 text-tertiary">
														<span>
															<CorreoIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
														</span>
														<span className="font-bold">
															Correo
														</span>
													</p>
													<p className="mb-3 break-words">
														{coordinadores.map(
															(
																coordinador,
																index
															) => (
																<p
																	className="mb-1"
																	key={index}>
																	{
																		coordinador.correo
																	}
																</p>
															)
														)}
													</p>
												</div>
											</>
										)}
								</div> */}
							</div>
						</div>
					</div>
					<div label="Malla curricular">
						<MallaCurricular
							asignaturas={asignaturas}
							tipo={programa[1].tipo}
							ogUrl={ogUrl}
						/>
					</div>
					<div label="Inversión económica">
						<InversionEconomica programa={programa} ogUrl={ogUrl} />
					</div>
					<div
						label="Admisión"
						link="/formacion-academica/admision?nivel=posgrado"></div>
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
								¿Te gustaría saber más sobre este programa?
							</p>
							<p className="text-sm mb-5 md:mt-0 md:max-w-xs m-auto">
								¡Nuestro equipo se encuentra listo para
								ayudarte! Nos comunicaremos contigo
								lo antes posible.
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
						responsableEmail={coordinadores[0].correo}
						telefono="(+51) 619 7000 anexo 4812"
					/>
				</Box>
			</Modal>
		</PrincipalLayout>
	);
};

export async function getStaticPaths() {
	const paths = [
		{
			params: {
				programa: 'doctor-en-farmacia-y-bioquimica',
			},
		},
		{
			params: {
				programa: 'productos-naturales-y-biocomercio',
			},
		},
		{
			params: {
				programa:
					'farmacologia-con-mencion-en-farmacologia-experimental',
			},
		},
		{
			params: {
				programa: 'atencion-farmaceutica',
			},
		},
		{
			params: {
				programa: 'ciencia-de-los-alimentos',
			},
		},
		{
			params: {
				programa: 'microbiologia',
			},
		},
		{
			params: {
				programa: 'toxicologia',
			},
		},
		{
			params: {
				programa: 'biotecnologia',
			},
		},
		{
			params: {
				programa:
					'ciencias-farmaceuticas-con-mencion-en-ciencia-y-tecnologia-cosmetica',
			},
		},
		{
			params: {
				programa: 'quimica-clinica',
			},
		},
	];

	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps({ params }) {
	const resMaestria = await fetch(
		`${POSGRADO_URL}/maestrias?populate=*&filters[slug][$eq]=${params.programa}`
	);
	const maestria = (await resMaestria.json()).data;
	maestria.push({
		tipo: 'maestria',
	});
	// console.log(maestria);

	const resDoctorado = await fetch(
		`${POSGRADO_URL}/doctorados?populate=*&filters[slug][$eq]=${params.programa}`
	);
	const doctorado = (await resDoctorado.json()).data;
	doctorado.push({
		tipo: 'doctorado',
	});
	// console.log(doctorado);

	const programa = [];
	function pushProgramaIfAtLeastTwoExist() {
		if (maestria.length > 1) {
			programa.push(...maestria);
		} else if (doctorado.length > 1) {
			programa.push(...doctorado);
		}
	}
	pushProgramaIfAtLeastTwoExist();
	// console.log(programa);

	const resCoordinadoresMaestria = await fetch(
		`${POSGRADO_URL}/maestrias?populate[lista_coordinadores][populate]=*&filters[slug]=${params.programa}`
	);
	const preCoordinadoresMaestria = await resCoordinadoresMaestria.json();

	const resCoordinadoresDoctorado = await fetch(
		`${POSGRADO_URL}/doctorados?populate[lista_coordinadores][populate]=*&filters[slug]=${params.programa}`
	);
	const preCoordinadoresDoctorado = await resCoordinadoresDoctorado.json();

	const preCoordinadores = [];
	function pushCoordinadorIfAtLeastOneExist() {
		if (preCoordinadoresMaestria.data.length > 0) {
			preCoordinadores.push(...preCoordinadoresMaestria.data);
		} else if (preCoordinadoresDoctorado.data.length > 0) {
			preCoordinadores.push(...preCoordinadoresDoctorado.data);
		}
	}
	pushCoordinadorIfAtLeastOneExist();

	const coordinadores = preCoordinadores[0].attributes.lista_coordinadores;

	const resDocentesMaestria = await fetch(
		`${POSGRADO_URL}/docentes?filters[maestrias][slug]=${params.programa}&populate=facultad,foto,libro,articulo`
	);
	const docentesMaestria = await resDocentesMaestria.json();

	const resDocentesDoctorado = await fetch(
		`${POSGRADO_URL}/docentes?filters[doctorados][slug]=${params.programa}&populate=facultad,foto,libro,articulo`
	);
	const docentesDoctorado = await resDocentesDoctorado.json();

	const docentes = [];
	function pushDocenteIfAtLeastOneExist() {
		if (docentesMaestria.data.length > 0) {
			docentes.push(...docentesMaestria.data);
		} else if (docentesDoctorado.data.length > 0) {
			docentes.push(...docentesDoctorado.data);
		}
	}
	pushDocenteIfAtLeastOneExist();

	const resNoticias = await fetch(
		`${BASE_URL}/noticias/${SLUG_CARRERA}/ultimas`
	);
	const ultimasNoticias = await resNoticias.json();

	const resAsignaturasMaestria = await fetch(
		`${POSGRADO_URL}/asignaturas?filters[maestrias][slug]=${params.programa}`
	);

	const asignaturasMaestria = await resAsignaturasMaestria.json();

	const resAsignaturasDoctorado = await fetch(
		`${POSGRADO_URL}/asignaturas?filters[doctorados][slug]=${params.programa}`
	);

	const asignaturasDoctorado = await resAsignaturasDoctorado.json();

	const asignaturas = [];
	function pushAsignaturaIfAtLeastOneExist() {
		if (asignaturasMaestria.data.length > 0) {
			asignaturas.push(...asignaturasMaestria.data);
		} else if (asignaturasDoctorado.data.length > 0) {
			asignaturas.push(...asignaturasDoctorado.data);
		}
	}
	pushAsignaturaIfAtLeastOneExist();

	return {
		props: {
			programa,
			coordinadores,
			ultimasNoticias,
			asignaturas,
		},
	};
}

export default Escuela;
