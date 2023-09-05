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
import { BACKEND } from '../../../config/consts';
import { replaceUrlPrefix } from '../../../helpers/transformS3ToCdn';

const Noticia = ({ noticia, noticiasRelacionadas }) => {
	console.log(noticia);
	const ogUrl = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/actualidad/agenda-publica/${noticia.slug}`;
	const metaTags = {
		title: noticia.titulo,
		description: noticia.resumen,
		ogUrl,
		ogType: 'website',
		ogTitle: noticia.titulo,
		ogImage: noticia.foto,
		ogDescription: noticia.resumen,
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<PrincipalLayout metaTags={metaTags}>
			{!noticia ? (
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
							<Link href="/actualidad/agenda-publica">
								<a>Agenda Pública</a>
							</Link>
						</li>
						<li className="text-textColorOne font-bold inline">
							{noticia.titulo}
						</li>
					</ul>
					<div className="mx-4 md:mx-0 col-span-full title-page mb-4">
						{noticia.titulo}
					</div>
					<div className="mx-4 md:mx-0 col-span-full mb-4">
						<div className="text-grisTenue text-xs flex justify-start items-center">
							<BiTimeFive />
							<p className="ml-1">{getFecha(noticia.fecha)}</p>
						</div>
					</div>
					<div className="mx-4 md:mx-0 col-span-full">
						<div className="relative max-w-full w-[502px] h-56 md:h-[335px] m-auto">
							<Image
								quality={100}
								src={replaceUrlPrefix(noticia.foto)}
								width={502}
								height={335}
								className="object-cover w-full h-full"
								alt={noticia.titulo}
							/>
						</div>
						{noticia.pie_foto && (
							<div className="mt-3 text-center text-textColorTwo text-xs max-w-full w-[502px] m-auto">
								{noticia.pie_foto}
							</div>
						)}
					</div>
					<div
						className="mx-4 md:mx-0 col-span-full mt-5 mb-5 html-default"
						dangerouslySetInnerHTML={{ __html: noticia.cuerpo }}
					/>
					<div className="col-span-full mb-5">
						<div className="flex justify-end">
							<Boton onClick={handleOpen}>
								<CompartirIcon className="fill-blanco inline-block relative -top-[1px] mr-2" />
								<span className="font-semibold">Compartir</span>
							</Boton>
						</div>
					</div>
					{noticiasRelacionadas && (
						<>
							<div className="col-span-full mx-4 md:mx-0">
								<div>
									<div className="flex items-center gap-x-3 mb-9">
										<h2 className="font-bold text-textColorOne">
											Últimas entradas en la Agenda
											Pública
										</h2>
										<Link
											href="/actualidad/agenda-publica"
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
							<div className="col-span-full mb-14">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
									{noticiasRelacionadas.map((noticia) => (
										<Link
											key={noticia.id}
											href={`/actualidad/agenda-publica/${noticia.slug}`}
										>
											<a
												href="#"
												className="card !rounded-t-none"
											>
												<div className="h-[220px] hidden md:block relative w-full">
													<Image
														alt={noticia.titulo}
														src={`${noticia.foto}`}
														width={502}
														height={335}
														className="object-cover h-full w-full"
													/>
												</div>
												<div className="text-content">
													<p className="title break-words line-clamp-2">
														{noticia.titulo}
													</p>
													<div className="text-textColorTwo/50 text-xs mt-2 flex justify-start items-center">
														<BiTimeFive />
														<p className="ml-1">
															{getFecha(
																noticia.fecha
															)}
														</p>
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
	const resNoticia = await fetch(
		`${BACKEND}/agenda-publica/url/${params.noticia}`
	);
	const noticia = await resNoticia.json();
	// console.log('noticias->', noticia);
	const resNoticiasRelacionadas = await fetch(
		`${BACKEND}/agenda-publica/ultimas?id=${noticia[0].id}`
	);
	const noticiasRelacionadas = await resNoticiasRelacionadas.json();

	return {
		props: {
			noticia: noticia[0],
			noticiasRelacionadas,
		},
	};
}

export default Noticia;
