import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import { BiTimeFive } from 'react-icons/bi';
import Boton from '../../../components/shared/Boton';
import { getFecha } from '../../../helpers/getFecha';
import Cargando from '../../../components/resultados/Cargando';
import CompartirIcon from '../../../components/icons/CompartirIcon';
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import SharedComponent from '../../../components/shared/SharedComponent';
import VerMasIcon from '../../../components/icons/VerMasIcon';
import EntradaFijaIcon from '../../../components/icons/EntradaFijaIcon';
import { BACKEND } from '../../../config/consts';

const Comunicado = ({ comunicado, noticiasRelacionadas }) => {
	const ogUrl = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/comunicados/${comunicado.id}`;
	const metaTags = {
		title: comunicado.nombre,
		description: comunicado.resumen,
		ogUrl,
		ogType: 'website',
		ogTitle: comunicado.nombre,
		ogImage: comunicado.foto,
		ogDescription: comunicado.resumen,
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<PrincipalLayout metaTags={metaTags}>
			{!comunicado ? (
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
							<Link href="/actualidad/comunicados">
								<a>Comunicados</a>
							</Link>
						</li>
						<li className="text-textColorOne font-bold inline">
							{comunicado.nombre}
						</li>
					</ul>
					<div className="mx-4 md:mx-0 col-span-full title-page mb-4">
						{comunicado.nombre}
					</div>
					<div className="mx-4 md:mx-0 col-span-full mb-4">
						<div className="text-grisTenue text-xs flex justify-start items-center">
							<BiTimeFive />
							<p className="ml-1">{getFecha(comunicado.fecha)}</p>
						</div>
					</div>
					{comunicado.foto && (
						<div className="mx-4 md:mx-0 col-span-full">
							<div className="relative max-w-full w-[502px] h-56 md:h-[335px] m-auto">
								<Image
									quality={100}
									src={`${comunicado.foto}`}
									width={502}
									height={335}
									className="object-cover w-full h-full"
								/>
							</div>
							{comunicado.pie_foto && (
								<div className="mt-3 text-center text-textColorTwo text-xs max-w-full w-[502px] m-auto">
									{comunicado.pie_foto}
								</div>
							)}
						</div>
					)}
					<div
						className="mx-4 md:mx-0 col-start-2 col-span-10 mt-5 mb-5 html-default"
						dangerouslySetInnerHTML={{
							__html: comunicado.cuerpoComunicado,
						}}
					/>
					<div className="col-span-full mb-28 mx-4 md:mx-0">
						<div className="flex justify-end">
							<Boton onClick={handleOpen}>
								<CompartirIcon className="fill-blanco inline-block relative -top-[1px] mr-2" />
								<span className="font-semibold">Compartir</span>
							</Boton>
						</div>
					</div>
					<div className="col-span-full mx-4 md:mx-0">
						<div>
							<div className="flex items-center gap-x-3 mb-9">
								<h2 className="font-bold text-textColorOne">
									Más comunicados
								</h2>
								<Link href="/comunicados" passHref>
									<a className="grid place-items-center rounded-lg w-9 h-9 border-[1.5px] border-primary bg-transparente hover:bg-primary/[0.12] transition-colors duration-300">
										<div className="w-3 inline-block">
											<VerMasIcon className="fill-primary group-hover:fill-blanco transition-colors duration-300 h-full" />
										</div>
									</a>
								</Link>
							</div>
						</div>
					</div>
					{/* <div className="col-span-full mb-14 mx-4 md:mx-0">
						<div>
							<Link key="1" href={`/actualidad/comunicados/118`}>
								<a
									key="1"
									className="group animate__animated animate__fadeIn mb-6 h-[113px] bg-blanco block cursor-pointer shadow-[0px_1px_5px_rgba(0,_0,_0,_0.1)] hover:shadow-md hover:-translate-y-1 duration-300 hover:brightness-105"
								>
									<div className="px-5 py-3 w-full">
										<div className="mt-[6px] md:mt-0 text-xs relative mb-[2px]">
											<div className="text-textColorTwo/50 flex justify-start items-center">
												<BiTimeFive />
												<p className="ml-1">
													01 de marzo de 2023
												</p>
											</div>
											<p className="inline-block absolute top-0 right-0">
												<span className="text-xs text-textColorTwo/80 mr-1 max-md:hidden">
													Entrada fijada
												</span>
												<span>
													<EntradaFijaIcon className="fill-textColorTwo inline" />
												</span>
											</p>
										</div>
										<div className="mt-[6px] md:mt-0">
											<p className="text-base mb-[2px] font-bold leading-6 text-negro group-hover:text-secondary transition duration-300">
												Comunicado: Curso por segunda
												repitencia ciclo 2023-1
											</p>

											<div className="hidden md:block">
												<p className="line-clamp-2">
													La primera edición de
													Crítica y Acción, revista
													nacional e internacional de
													reflexión, debate y
													propuestas del campo de la
													sociología y áreas afines,
													fue presentada públicamente.
												</p>
											</div>
										</div>
									</div>
								</a>
							</Link>
						</div>
					</div> */}
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
	const resComunicado = await fetch(
		`${BACKEND}/comunicados/id/${params.comunicado}?publicado=true`
	);
	const comunicado = await resComunicado.json();
	// const resNoticiasRelacionadas = await fetch(
	// 	`${process.env.BACKEND_URL}/noticias/${process.env.NEXT_PUBLIC_FACULTAD_SLUG}/ultimas?id=${comunicado[0].id}`
	// );
	// const noticiasRelacionadas = await resNoticiasRelacionadas.json();

	return {
		props: {
			comunicado: comunicado.data,
			// noticiasRelacionadas,
		},
	};
}

export default Comunicado;
