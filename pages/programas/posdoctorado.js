import Link from 'next/link';
import Image from 'next/future/image';
import React from 'react';
import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';
import Modal from '@mui/material/Modal';

import { Tabs } from '../../components/shared/Tabs';
import Boton from '../../components/shared/Boton';

import UserCardIcon from '../../components/icons/UserCardIcon';
import CorreoIcon from '../../components/icons/CorreoIcon';
import DocumentCheckIcon from '../../components/icons/DocumentCheckIcon';

import { UltimasNoticias } from '../../components/shared/programas/UltimasNoticias';
import { BASE_URL, POSGRADO_URL, SLUG_CARRERA } from '../../config/consts';
import { MallaCurricular } from '../../components/shared/programas/posgrado-component/MallaCurricular';
import { InversionEconomica } from '../../components/shared/programas/InversionEconomica';

import { Box } from '@mui/material';
import FormacionContentModal from '../../components/formacion-academica/FormacionContentModal';
import VerMasIcon from '../../components/icons/VerMasIcon';
import GradoIcon from '../../components/icons/GradoIcon';
import DuracionIcon from '../../components/icons/DuracionIcon';
import { SiGoogleclassroom } from 'react-icons/si';
import Observacion from '../../components/shared/Observacion';

const Programa = ({
	programa,
	coordinadores,
	ultimasNoticias,
	asignaturas,
}) => {
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

	return (
		<PrincipalLayout metaTags={metaTags}>
			<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
				<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
					Programas
				</li>
				<li className="text-textColorOne font-bold inline">
					<span>Doctorado en Ciencias Administrativas</span>
				</li>
			</ul>
			<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
				<span>Doctorado en Ciencias Administrativas</span>
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
								Admisión Posgrado 2023-II
							</p>
						</div>
						<div className="mb-2 md:mb-0">
							<p className="text-center">
								<span className="font-bold">
									Cierre de inscripciones:
								</span>{' '}
								<span>14 de julio del 2023</span>
							</p>
						</div>
						<a
							className="shadow-[0px_1px_4px_rgba(0,0,0,0.25)] font-semibold text-center rounded-lg py-2 px-3 text-sm duration-100 bg-secondary text-blanco hover:bg-secondary-hover hover:shadow-md"
							href={`#`}
							target="_blank"
							rel="noopener noreferrer"
						>
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
								<div className="mb-6">
									<Observacion label="¿Qué es un posdoctorado?">
										<p>
											Un posdoctorado es una mención, no
											un grado académico, por tanto, no es
											un estudio superior al doctorado.
										</p>
									</Observacion>
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
																}}
															></li>
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
															key={index}
														>
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
										<div className="h-[2px] bg-tertiary/20 mb-5" />
									</>
								)}
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
					<div label="Admisión" link="/admision"></div>
					<div
						label="Plana docente"
						link="/comunidad/plana-docente"
					></div>
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
						label="Seguimiento de egresados"
						link="/comunidad/seguimiento-egresados"
					></div>
				</Tabs>
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

			<div className="col-span-full mx-4 md:mx-0">
				<div>
					<div className="flex items-center gap-x-3 mb-9">
						<h2 className="font-bold text-textColorOne">
							Más diplomaturas
						</h2>
						<Link href="/noticias" passHref>
							<a className="grid place-items-center rounded-lg w-9 h-9 border-[1.5px] border-primary bg-transparente hover:bg-primary/[0.12] transition-colors duration-300">
								<div className="w-3 inline-block">
									<VerMasIcon className="fill-primary group-hover:fill-blanco transition-colors duration-300 h-full" />
								</div>
							</a>
						</Link>
					</div>
				</div>
				<div className="px-4 md:px-0 col-span-full mb-14">
					<div className="grid place-items-center">
						<div className="inline-grid grid-cols-1 lg:grid-cols-[290px_290px_290px] gap-5 md:gap-11 w-full md:w-auto">
							<Link
								href={`/programas/diplomaturas/doctorado-ingenieria-quimica`}
							>
								<a className="card md:max-w-[290px]">
									<div className="relative h-[168px]">
										<Image
											alt={`Diplomatura en Gestión Pública`}
											width={290}
											height={168}
											className="object-cover h-full w-full"
											src={`https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg`}
										/>
										<div className="absolute top-5 left-0 bg-secondary rounded-r-lg text-blanco p-2 font-bold modalidad">
											Modalidad Presencial
										</div>
									</div>
									<div className="text-content">
										<p className="title font-bold line-clamp-2">
											Diplomatura en Gestión Pública
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={`/programas/diplomaturas/doctorado-ingenieria-quimica`}
							>
								<a className="card md:max-w-[290px]">
									<div className="relative h-[168px]">
										<Image
											alt={`Diplomatura en Gestión Pública`}
											width={290}
											height={168}
											className="object-cover h-full w-full"
											src={`https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg`}
										/>
										<div className="absolute top-5 left-0 bg-secondary rounded-r-lg text-blanco p-2 font-bold modalidad">
											Modalidad Presencial
										</div>
									</div>
									<div className="text-content">
										<p className="title font-bold line-clamp-2">
											Diplomatura en Gestión Pública
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={`/programas/diplomaturas/doctorado-ingenieria-quimica`}
							>
								<a className="card md:max-w-[290px]">
									<div className="relative h-[168px]">
										<Image
											alt={`Diplomatura en Gestión Pública`}
											width={290}
											height={168}
											className="object-cover h-full w-full"
											src={`https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg`}
										/>
										<div className="absolute top-5 left-0 bg-secondary rounded-r-lg text-blanco p-2 font-bold modalidad">
											Modalidad Presencial
										</div>
									</div>
									<div className="text-content">
										<p className="title font-bold line-clamp-2">
											Diplomatura en Gestión Pública
										</p>
									</div>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>

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
	const str = 'doctorado-ingenieria-quimica';
	const cadena = str.split('-');
	const primeraPalabra = cadena[0];
	const resto = cadena.slice(1).join('-');

	// la variable primeraPalabra segun el params puede tomar los valores de 'doctorado' o 'maestria'
	const resProgram = await fetch(
		`${POSGRADO_URL}/${primeraPalabra}s?populate=*&filters[slug][$eq]=${resto}`
	);
	const program = (await resProgram.json()).data;
	program.push({
		tipo: primeraPalabra,
	});

	const programa = [];

	programa.push(...program);
	const resCoordinadores = await fetch(
		`${POSGRADO_URL}/${primeraPalabra}s?populate[lista_coordinadores][populate]=*&filters[slug]=${resto}`
	);
	const preCoordinadoresProgram = await resCoordinadores.json();

	const preCoordinadores = [];
	preCoordinadores.push(...preCoordinadoresProgram.data);

	const coordinadores = preCoordinadores[0].attributes.lista_coordinadores;

	const resDocentes = await fetch(
		`${POSGRADO_URL}/docentes?filters[${primeraPalabra}s][slug]=${resto}&populate=facultad,foto,libro,articulo`
	);
	const docentesProgram = await resDocentes.json();

	const docentes = [];
	docentes.push(...docentesProgram.data);

	const resNoticias = await fetch(
		`${BASE_URL}/noticias/${SLUG_CARRERA}/ultimas`
	);
	const ultimasNoticias = await resNoticias.json();

	const resAsignaturas = await fetch(
		`${POSGRADO_URL}/asignaturas?filters[${primeraPalabra}s][slug]=${resto}`
	);

	const asignaturasProgram = await resAsignaturas.json();

	const asignaturas = [];
	asignaturas.push(...asignaturasProgram.data);

	return {
		props: {
			programa,
			coordinadores,
			ultimasNoticias,
			asignaturas,
		},
	};
}

export default Programa;
