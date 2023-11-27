import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { BiTimeFive, BiMailSend, BiMap } from 'react-icons/bi';
import { getFecha } from '../../helpers/getFecha';
import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperButtonNext from './swiper/SwiperButtonNext';
import SwiperButtonPrev from './swiper/SwiperButtonPrev';
import VerMasIcon from '../icons/VerMasIcon';

function createMarkup(dom) {
	return { __html: dom };
}

const AgendaPublica = ({ noticiasDestacadas, noticias }) => {
	const [firstRender, setFirstRender] = useState(false);
	useEffect(() => {
		setFirstRender(true);
	}, []);
	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.05 }}
			id="noticias"
			className="bg-blanco mb-14 md:mb-18 animate__animated animate__fadeInUp"
		>
			<motion.div
				variants={entradaCardScroll}
				className="container mx-auto px-3 md:grid-cols-12 gap-x-4 md:grid"
			>
				<div className="col-start-2 col-span-10 flex items-center gap-x-3 mb-9">
					<h2 className="text-[2rem] font-bold text-tertiary">
						Noticias
					</h2>
					<Link href="/actualidad/agenda-publica" passHref>
						<a className="grid place-items-center rounded-lg w-9 h-9 border-[1.5px] border-primary bg-transparente hover:bg-primary/[0.12] transition-colors duration-300">
							<div className="w-3 inline-block">
								<VerMasIcon className="fill-primary group-hover:fill-blanco transition-colors duration-300 h-full" />
							</div>
						</a>
					</Link>
				</div>
				<div className="col-start-2 col-span-10 grid gap-10">
					{/* <div className="grid grid-cols-3 grid-rows-[403px_340px] gap-x-4 gap-y-11"> */}
					<div className="">
						{noticiasDestacadas &&
							noticiasDestacadas.length > 0 && (
								<div className="w-full h-full relative col-span-3">
									<Swiper
										grabCursor={true}
										centeredSlides={true}
										slidesPerView={'auto'}
										pagination={false}
										loop={true}
										modules={[]}
										className="h-auto md:h-[403px] card !rounded-l-none"
									>
										<SwiperButtonPrev />
										<SwiperButtonNext />
										{noticiasDestacadas.map(
											(noticiaDestacada) => (
												<SwiperSlide
													key={noticiaDestacada.slug}
												>
													<Link
														href={`/actualidad/agenda-publica/${noticiaDestacada.slug}`}
													>
														<a className="grid grid-cols-1 md:grid-cols-5 h-full group">
															<div className="h-48 md:h-auto col-span-3 relative cursor-pointer">
																<Image
																	alt={
																		noticiaDestacada.titulo
																	}
																	priority
																	src={
																		noticiaDestacada.foto
																	}
																	className="object-cover object-center"
																	fill
																	sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
																	quality={
																		100
																	}
																></Image>
																{/* <div className="absolute inset-0 bg-gradient-to-t from-negroPuro via-transparente to-transparente"></div> */}
															</div>
															<div className="col-span-2 bg-blanco px-5 pt-6 pb-14 md:pb-28">
																<div className="line-clamp-10">
																	<span className="font-bold text-base group-hover:text-secondary transition duration-300">
																		{
																			noticiaDestacada.titulo
																		}
																	</span>
																	<br className="hidden md:block" />
																	<br className="hidden md:block" />
																	{firstRender && (
																		<span
																			className="hidden md:block html-default"
																			dangerouslySetInnerHTML={createMarkup(
																				noticiaDestacada.cuerpo
																			)}
																		></span>
																	)}
																</div>
																<div className="absolute bottom-6 text-textColorTwo/50 text-xs mt-2 flex justify-start items-center">
																	<BiTimeFive />
																	<p className="ml-1">
																		{getFecha(
																			noticiaDestacada.fecha
																		)}
																	</p>
																</div>
															</div>
														</a>
													</Link>
												</SwiperSlide>
											)
										)}
									</Swiper>
								</div>
							)}
					</div>
					{noticias && noticias.length > 0 && (
						<div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
							{noticias.map((noticia) => (
								<Link
									key={noticia.id}
									href={`/actualidad/agenda-publica/${noticia.slug}`}
								>
									<a className="col-span-1 row-span-1 card bg-blanco hover:shadow-md hover:brightness-105 hover:-translate-y-1 cursor-pointer !rounded-t-none">
										<div className="h-[220px] relative w-full">
											<Image
												alt={noticia.titulo}
												src={`${noticia.foto}`}
												className="object-cover object-center"
												fill
												sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
												priority
											></Image>
										</div>
										<div className="text-content">
											<p className="title break-words line-clamp-2">
												{noticia.titulo}
											</p>
											<div className="text-textColorTwo/50 text-xs mt-2 flex justify-start items-center">
												<BiTimeFive />
												<p className="ml-1">
													{getFecha(noticia.fecha)}
												</p>
											</div>
										</div>
									</a>
								</Link>
							))}
						</div>
					)}
				</div>
			</motion.div>
		</motion.section>
	);
};

export default AgendaPublica;
