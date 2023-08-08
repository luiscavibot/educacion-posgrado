import React, { useEffect, useState, useContext, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtonPrev from './swiper/SwiperButtonPrev';
import SwiperButtonNext from './swiper/SwiperButtonNext';
import Link from 'next/link';
import Image from 'next/future/image';

import testimoniosData from '../../data/home/testimonios';

import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper';

import useWidth from '../../hooks/useWidth';
import VerMasIcon from '../icons/VerMasIcon';
import { ComillasTestimoniosIcon } from '../icons/ComillasTestimoniosIcon';

const Testimonios = () => {
	const { isReadyWidth, width } = useWidth(1024);
	const [testimonioElegido, setTestimonioElegido] = useState(
		testimoniosData[0]
	);

	return (
		<motion.section
			id="testimonios"
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			className="bg-blanco mb-14 md:mb-18 animate__animated animate__fadeInUp"
		>
			<motion.div
				variants={entradaCardScroll}
				className="container mx-auto px-4 md:grid-cols-12 gap-x-4 md:grid"
			>
				<div className="col-start-2 col-span-10 flex items-center justify-center gap-x-3 md:mb-2">
					<h2 className="text-[2rem] font-bold text-tertiary leading-9">
						Conoce a nuestros estudiantes
					</h2>
					<Link href="/comunidad/seguimineto-egresados" passHref>
						<a className="grid place-items-center rounded-lg w-9 h-9 border-[1.5px] border-primary bg-transparente hover:bg-primary/[0.12] transition-colors duration-300">
							<div className="w-3 inline-block">
								<VerMasIcon className="fill-primary group-hover:fill-blanco transition-colors duration-300 h-full" />
							</div>
						</a>
					</Link>
				</div>
				<div className="col-start-2 col-span-10 mb-9">
					<p className="text-center">
						Nuestros alumnos nos dejan sus testimonio.
					</p>
				</div>
				<div className="col-start-2 col-span-10">
					<div className="relative">
						{isReadyWidth && (
							<Swiper
								autoplay={{
									delay: 22500,
									disableOnInteraction: false,
								}}
								//   pagination={{
								// 	clickable: true,
								//   }}
								// navigation={true}
								modules={[Autoplay]}
								centeredSlides={false}
								pagination={false}
								loop={true}
								className="swiper-testimonios"
								spaceBetween={width > 1023 ? 20 : 0}
								slidesPerView={width > 1023 ? 2 : 1}
								slidesPerGroup={width > 1023 ? 2 : 1}
								onSwiper={(swiper) => {
									swiper.on('slideChange', () => {
										setTestimonioElegido(
											testimoniosData[swiper.realIndex]
										);
									});
								}}
							>
								<SwiperButtonPrev />
								<SwiperButtonNext />
								{testimoniosData.map((testimonio) => (
									<SwiperSlide key={testimonio.nombre}>
										<div className="flex justify-center">
											<div className="max-w-[290px] wrapper-testimonio">
												<ComillasTestimoniosIcon className="fill-textColorOne mb-4" />
												<p className="text-textColorTwo mb-4">
													{testimonio.frase}
												</p>
												<div className="grid grid-cols-[85px_auto] gap-5">
													<div className="rounded-full w-20 h-20 overflow-hidden">
														<Image
															src={
																testimonio.foto
															}
															alt={
																testimonio.nombre
															}
															className="rounded-lg"
															width={295}
															height={330}
															priority
															quality={100}
														/>
													</div>
													<div className="flex flex-col content-center justify-center">
														<p className="font-bold text-xl text-textColorOne mb-1">
															{testimonio.nombre}
														</p>
														<p className="text-xs text-secondary">
															{testimonio.cargo}
														</p>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						)}
						{/* <div className="static lg:absolute lg:w-1/2 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 rounded-lg overflow-hidden">
							<div className="relative">
								<div className="bg-complementaryOne px-6 lg:pl-[32%] pt-8 pb-9 lg:pr-11">
									<p className="text-xl text-tertiary font-bold mb-2">
										{testimonioElegido.nombre}
									</p>
									<p className="text-tertiary text-[15px]">
										{testimonioElegido.frase}
									</p>
								</div>
								<div className="absolute left-0 bottom-0 bg-secondary w-1/3 lg:w-1/2 h-[10px]"></div>
								<div className="absolute right-0 bottom-0 bg-primary w-2/3 lg:w-1/2 h-[10px]"></div>
							</div>
						</div> */}
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Testimonios;
