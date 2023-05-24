import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';
import { BiTimeFive } from 'react-icons/bi';
import Boton from '../../components/shared/Boton';
import { getFecha } from '../../helpers/getFecha';
import Cargando from '../../components/resultados/Cargando';
import CompartirIcon from '../../components/icons/CompartirIcon';
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import SharedComponent from '../../components/shared/SharedComponent';

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
					<ul className="px-4 md:px-0 col-span-full text-tertiary text-sm mb-5">
						<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
							<Link href="/">
								<a>Inicio</a>
							</Link>
						</li>
						<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
							<Link href="/comunicados">
								<a>Comunicados</a>
							</Link>
						</li>
						<li className="inline text-negro">
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
						className="mx-4 md:mx-0 col-span-full mt-5 mb-5 html-default"
						dangerouslySetInnerHTML={{
							__html: comunicado.cuerpoComunicado,
						}}
					/>
					<div className="col-span-full mb-28">
						<div className="flex justify-end">
							<Boton onClick={handleOpen}>
								<CompartirIcon className="fill-blanco inline-block relative -top-[1px] mr-2" />
								<span className="font-semibold">Compartir</span>
							</Boton>
						</div>
					</div>
					{/* <div className="mx-4 md:mx-0 col-span-full">
						<div className="flex mb-6 font-bold">
							<p className="text-textColorOne">
								Últimas noticias
							</p>
							<Link href="/noticias" passHref>
								<a className="text-secondary flex items-end hover:text-textColorOne">
									<span className="ml-2">|</span>
									<p className="ml-2">ver más</p>
								</a>
							</Link>
						</div>
					</div>
					<div
						className="col-span-full mb-14
						 ">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
							{noticiasRelacionadas &&
								noticiasRelacionadas.map((comunicado) => (
									<Link
										key={comunicado.id}
										href={`/noticias/${comunicado.slug}`}>
										<a
											href="#"
											className="card !rounded-t-none">
											<div className="h-[220px] hidden md:block relative w-full">
												<Image
													alt={comunicado.nombre}
													src={`${comunicado.foto}`}
													width={502}
													height={335}
													className="object-cover h-full w-full"
												/>
											</div>
											<div className="text-content">
												<p className="title break-words line-clamp-2">
													{comunicado.nombre}
												</p>
												<div className="text-textColorTwo/50 text-xs mt-2 flex justify-start items-center">
													<BiTimeFive />
													<p className="ml-1">
														{getFecha(
															comunicado.fecha
														)}
													</p>
												</div>
											</div>
										</a>
									</Link>
								))}
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
				}}>
				<Fade in={open}>
					<Box
						className="w-[90%] md:w-auto h-[90vh] md:h-auto overflow-auto rounded-lg"
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							bgcolor: 'transparent',
						}}>
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
		`${process.env.BACKEND_URL}/comunicados/id/${params.comunicado}?estado=true`
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
