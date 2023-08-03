import React, { useEffect, useState, useContext, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtonNext from './swiper/SwiperButtonNext';
import Image from 'next/future/image';

import testimoniosData from '../../data/home/testimonios';

import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper';

import useWidth from '../../hooks/useWidth';

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
				<div className="col-start-2 col-span-10 flex md:mb-6">
					<h2 className="text-4xl font-bold text-tertiary">
						Testimonios
					</h2>
				</div>
				<div className="col-start-2 col-span-10">
					<div className="relative">
						{isReadyWidth && (
							<Swiper
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								//   pagination={{
								// 	clickable: true,
								//   }}
								// navigation={true}
								modules={[Autoplay]}
								centeredSlides={true}
								pagination={false}
								loop={true}
								className="swiper-testimonios"
								spaceBetween={width > 1023 ? 50 : 0}
								slidesPerView={width > 1023 ? 4 : 1}
								onSwiper={(swiper) => {
									swiper.on('slideChange', () => {
										setTestimonioElegido(
											testimoniosData[swiper.realIndex]
										);
									});
								}}
							>
								<SwiperButtonNext />
								{testimoniosData.map((testimonio) => (
									<SwiperSlide key={testimonio.nombre}>
										<div className="img-swiper rounded-lg overflow-hidden">
											<Image
												src={testimonio.foto}
												alt={testimonio.nombre}
												className="rounded-lg"
												width={295}
												height={330}
												priority
												quality={100}
											/>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						)}
						<div className="static lg:absolute lg:w-1/2 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 rounded-lg overflow-hidden">
							<div className="relative">
								<div className="bg-complementaryOne px-6 lg:pl-[32%] pt-8 pb-9 lg:pr-11">
									{/* <div className="rounded-lg bg-tertiary w-16 h-1 mb-3"></div> */}
									<p className="text-xl text-tertiary font-bold mb-2">
										{testimonioElegido.nombre}
									</p>
									<p className="text-tertiary text-[15px]">
										{testimonioElegido.frase}
									</p>
								</div>
								{/* <div className="hidden lg:block absolute right-0 bottom-0 bg-secondary w-[4.271rem] h-[4.271rem] rounded-full translate-x-1/2 translate-y-1/2 -z-10"></div> */}
								<div className="absolute left-0 bottom-0 bg-secondary w-1/3 lg:w-1/2 h-[10px]"></div>
								<div className="absolute right-0 bottom-0 bg-primary w-2/3 lg:w-1/2 h-[10px]"></div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Testimonios;
