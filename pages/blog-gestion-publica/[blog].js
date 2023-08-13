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
import VerMasIcon from '../../components/icons/VerMasIcon';
import { BACKEND } from '../../config/consts';

const Blog = ({ blog }) => {
	// const ogUrl = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/blog-gestion-publica/${noticia.slug}`;
	// const metaTags = {
	// 	title: noticia.titulo,
	// 	description: noticia.resumen,
	// 	ogUrl,
	// 	ogType: 'website',
	// 	ogTitle: noticia.titulo,
	// 	ogImage: noticia.foto,
	// 	ogDescription: noticia.resumen,
	// };

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<PrincipalLayout>
			{!blog ? (
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
						{/* <li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
							Blog de Gestión Pública
						</li> */}
						<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
							<Link href="/blog-gestion-publica">
								<a>Blog de Gestión Pública</a>
							</Link>
						</li>
						<li className="text-textColorOne font-bold inline">
							{blog.titulo}
						</li>
					</ul>
					<div className="mx-4 md:mx-0 col-span-full title-page mb-4">
						{blog.titulo}
					</div>
					<div className="mx-4 md:mx-0 col-span-full mb-4">
						<div className="text-grisTenue text-xs flex justify-start items-center">
							<BiTimeFive />
							<p className="ml-1">{getFecha(blog.fecha)}</p>
						</div>
					</div>
					<div className="mx-4 md:mx-0 col-span-full">
						<div className="relative max-w-full w-[502px] h-56 md:h-[335px] m-auto">
							<Image
								quality={100}
								src={blog.foto}
								width={502}
								height={335}
								className="object-cover w-full h-full"
							/>
						</div>
						{blog.pie_foto && (
							<div className="mt-3 text-center text-textColorTwo text-xs max-w-full w-[502px] m-auto">
								{blog.pie_foto}
							</div>
						)}
					</div>
					<div
						className="mx-4 md:mx-0 col-span-10 col-start-2 mt-5 mb-5 html-default"
						dangerouslySetInnerHTML={{ __html: blog.cuerpo }}
					/>
					<div className="col-span-full mb-10 mx-4 md:mx-0">
						<div className="flex justify-end">
							<Boton onClick={handleOpen}>
								<CompartirIcon className="fill-blanco inline-block relative -top-[1px] mr-2" />
								<span className="font-semibold">Compartir</span>
							</Boton>
						</div>
					</div>
					{/* {noticiasRelacionadas && (
						<>
							<div className="col-span-full mx-4 md:mx-0">
								<div>
									<div className="flex items-center gap-x-3 mb-9">
										<h2 className="font-bold text-textColorOne">
											Últimas noticias
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
											href={`/noticias/${noticia.slug}`}
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
					)} */}
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
							// ogUrl={ogUrl}
						/>
					</Box>
				</Fade>
			</Modal>
		</PrincipalLayout>
	);
};
export async function getServerSideProps({ params }) {
	const resBlog = await fetch(
		`${BACKEND}/blog-gestion-publica/url/${params.blog}`
	);
	const blog = await resBlog.json();
	return {
		props: {
			blog: blog[0],
		},
	};
}

export default Blog;
