import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import Boton from '../../../components/shared/Boton';
import {
	// getFecha,
	getDia,
	getMes3Letras,
	getDuracionFecha,
	CheckEventoFinalizado,
} from '../../../helpers/getFecha';
import Cargando from '../../../components/resultados/Cargando';
import CompartirIcon from '../../../components/icons/CompartirIcon';
import FechaEvento from '../../../components/icons/FechaEvento';
import LugarEvento from '../../../components/icons/LugarEvento';
import OrganizadorEvento from '../../../components/icons/OrganizadorEvento';
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import SharedComponent from '../../../components/shared/SharedComponent';
import HorarioIcon from '../../../components/icons/HorarioIcon';
import EventoFinalizadoIcon from '../../../components/icons/EventoFinalizadoIcon';
import VerMasIcon from '../../../components/icons/VerMasIcon';
import { BACKEND } from '../../../config/consts';

const Evento = ({ evento, ultimosEventos }) => {
	const ogUrl = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/eventos/${evento.slug}`;
	const metaTags = {
		title: evento.titulo,
		description: evento.organizador,
		ogUrl,
		ogType: 'website',
		ogTitle: evento.titulo,
		ogImage: evento.foto,
		ogDescription: evento.organizador,
	};
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<PrincipalLayout metaTags={metaTags}>
			{!evento ? (
				<div className="col-span-full mt-10 grid place-items-center h-[60vh]">
					<Cargando />
				</div>
			) : (
				<>
					<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
						<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
							<Link href="/">
								<a>Inicio</a>
							</Link>
						</li>
						<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
							Actualidad
						</li>
						<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
							<Link href="/actualidad/eventos">
								<a>Eventos</a>
							</Link>
						</li>
						<li className="text-textColorOne font-bold inline">
							{evento.titulo}
						</li>
					</ul>
					<div className="mx-4 md:mx-0 col-span-full title-page mb-1">
						<span>
							<span>{evento.titulo}</span>
							{CheckEventoFinalizado(evento.fecha_final) && (
								<span className="bg-secondary bg-opacity-10 rounded-lg py-1 px-2 ml-2">
									<span className="text-secondary text-xs inline-flex">
										<EventoFinalizadoIcon />
										Evento finalizado
									</span>
								</span>
							)}
						</span>
					</div>
					<div className="mx-4 md:mx-0 col-span-full mb-8">
						<div className="text-textColorTwo flex justify-start items-center font-bold">
							<p>{evento.tipo.valor}</p>
						</div>
					</div>
					<div className="mx-4 md:mx-0 col-span-full mb-5">
						<div className="flex flex-col-reverse md:flex-row justify-center md:gap-6">
							<div className="bg-complementaryTwo w-full md:max-w-[289px] px-10 py-7">
								<div className="mb-6">
									<p>
										<FechaEvento className="fill-tertiary inline relative bottom-[2px] mr-1" />
										<span className="text-tertiary font-bold">
											Fecha
										</span>
									</p>
									<p className="ml-7">
										{getDuracionFecha(
											evento.fecha_inicio,
											evento.fecha_final
										)}
									</p>
								</div>
								{evento.horario && (
									<div className="mb-6">
										<p>
											<HorarioIcon className="fill-tertiary inline relative bottom-[2px] mr-1" />
											<span className="text-tertiary font-bold pl-1">
												Horario
											</span>
										</p>
										<p className="ml-7">{evento.horario}</p>
									</div>
								)}
								<div className="mb-6">
									<p>
										<LugarEvento className="fill-tertiary inline relative bottom-[2px] mr-1" />
										<span className="text-tertiary font-bold">
											Lugar
										</span>
									</p>
									<p className="ml-7">{evento.lugar}</p>
								</div>
								<div className="">
									<p>
										<OrganizadorEvento className="inline relative bottom-[2px] mr-1" />
										<span className="text-tertiary font-bold">
											Organizador
										</span>
									</p>
									<p className="ml-7">{evento.organizador}</p>
								</div>
								{!CheckEventoFinalizado(evento.fecha_final) &&
								evento.calendario !== '' &&
								evento.calendario !== null &&
								evento.calendario !== undefined ? (
									<div className="mt-5">
										<Boton
											link={evento.calendario}
											primary
											text="Agregar al Google calendar"
										/>
									</div>
								) : (
									<div className="mt-5">
										<button
											disabled
											className="bg-blanco border border-blanco px-3 py-2 text-sm text-[#C7DBEA] rounded-lg hover:bg-blancoTransparente duration-300"
										>
											Agregar al Google calendar
										</button>
									</div>
								)}
							</div>
							<div className="relative w-full md:max-w-[499px] h-56 md:h-80">
								<Image
									layout="fill"
									objectFit="cover"
									quality={100}
									src={
										evento.foto
											? // ? `https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/${evento.foto}`
											  evento.foto
											: 'https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg'
									}
								/>
							</div>
						</div>
					</div>
					<div
						className="mx-4 md:mx-0 col-span-full mb-5 html-default"
						dangerouslySetInnerHTML={{ __html: evento.cuerpo }}
					/>
					<div className="col-span-full mb-5">
						<div className="flex justify-end">
							<Boton
								className="mr-4"
								secondary
								onClick={handleOpen}
							>
								<CompartirIcon className="fill-primary inline-block relative -top-[1px] mr-2" />
								<span className="font-semibold">Compartir</span>
							</Boton>
						</div>
					</div>
					{ultimosEventos && ultimosEventos.length > 0 && (
						<>
							<div className="col-span-full mx-4 md:mx-0">
								<div>
									<div className="flex items-center gap-x-3 mb-9">
										<h2 className="font-bold text-textColorOne">
											Próximos eventos
										</h2>
										<Link
											href="/actualidad/eventos/proximos-eventos"
											passHref
										>
											<a className="grid place-items-center rounded-lg w-9 h-9 border-[1.5px] border-primary bg-transparente hover:bg-primary/[0.12] transition-colors duration-300">
												<div className="w-3 inline-block">
													<VerMasIcon className="fill-primary group-hover:fill-blanco transition-colors duration-300 h-full" />
												</div>
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div
								className="col-span-full mb-14
						 "
							>
								<div className="mb-2 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-9 px-8 md:px-0">
									{ultimosEventos.map((evento) => (
										<Link
											key={evento.slug}
											// key={evento.titulo}
											href={`/actualidad/eventos/${evento.slug}`}
										>
											{/* href={`/eventos/${evento.titulo}`}> */}
											<a
												// key={evento.attributes.slug}
												key={evento.titulo}
												className="card !rounded-t-none"
											>
												<div className="relative w-full h-[200px]">
													<Image
														layout="fill"
														objectFit="cover"
														// width={290}
														// height={200}
														// src={
														// 	evento.attributes.banner.data[0]
														// 		.attributes.url
														// }
														src={
															evento.foto
																? // ? `https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/${evento.foto}`
																  evento.foto
																: 'https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg'
														}
													/>
													<div className="absolute top-4 left-4 bg-blanco px-[10px] py-[2px] rounded-[4px] font-bold">
														{evento.tipo_evento}
													</div>
												</div>
												<div className="text-content flex flex-col p-5">
													<div className="grid grid-cols-[45px_auto] gap-x-4 mb-[14px]">
														<div className="w-[45px] h-[45px] rounded-lg bg-tertiary text-blanco flex flex-col text-center justify-center">
															<span className="text-xl leading-none">
																{getDia(
																	evento.fecha_inicio
																)}
															</span>
															<span className="text-[13px] leading-none">
																{getMes3Letras(
																	evento.fecha_inicio
																)}
															</span>
														</div>
														<div className="font-bold line-clamp-3 title">
															{evento.titulo}
														</div>
													</div>
													<div className="text-sm">
														{evento.lugar}
													</div>
												</div>
											</a>
										</Link>
									))}
								</div>
							</div>
						</>
					)}
				</>
			)}
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
				}}
			>
				<Fade in={open}>
					<Box
						className="w-[90%] md:w-auto h-[90vh] md:h-auto overflow-auto rounded-lg"
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							bgcolor: 'transparent',
						}}
					>
						<SharedComponent
							handleClose={handleClose}
							ogUrl={ogUrl}
						/>
					</Box>
				</Fade>
			</Modal>
		</PrincipalLayout>
	);
};

export async function getServerSideProps({ params }) {
	const resEvento = await fetch(`${BACKEND}/eventos/url/${params.evento}`);
	const evento = (await resEvento.json())[0];

	let resUltimosEventos = await fetch(
		`${process.env.BACKEND_URL}/eventos/${evento.id}/ultimos`
	);

	const ultimosEventos = await resUltimosEventos.json();

	return {
		props: {
			evento,
			ultimosEventos,
		},
	};
}
export default Evento;
