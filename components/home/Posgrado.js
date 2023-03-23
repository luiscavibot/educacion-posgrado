import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiTimeFive, BiMailSend, BiMap } from 'react-icons/bi';
import { getFecha } from '../../helpers/getFecha';
import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperButtonNext from './swiper/SwiperButtonNext';
import SwiperButtonPrev from './swiper/SwiperButtonPrev';

const Posgrado = () => {
	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			className="bg-blanco py-6 md:py-14 animate__animated animate__fadeInUp">
			<motion.div
				variants={entradaCardScroll}
				className="container mx-auto px-3 grid-cols-12 gap-x-4 grid">
				<div className="col-start-2 col-span-10 flex mb-9">
					<h1 className="text-4xl font-bold text-negro">Posgrado</h1>
					<Link href="/formacion-academica/posgrado" passHref>
						<a className="text-lg text-primary font-bold flex items-end hover:text-negro cursor-pointer">
							<span className="ml-2">|</span>
							<p className="ml-2">Ver más</p>
						</a>
					</Link>
				</div>
				<div className="col-start-2 col-span-10 relative">
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
						}}
						pagination={false}
						loop={false}
						modules={[]}
						className="">
						<SwiperButtonPrev />
						<SwiperButtonNext />
						<SwiperSlide>
							<Link href="/formacion-academica/posgrado/educacion-y-docencia-universitaria">
								<a className="group block relative h-[262px] rounded-lg overflow-hidden">
									<Image
										src={
											'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-educacion/doctorado-docencia-universitaria-minihome-d.png'
										}
										// width={330}
										// height={262}
										objectFit="cover"
										layout="fill"
										quality={100}
										alt="vocacion1"
									/>
									{/* <div className="absolute inset-0 bg-primary/10"></div> */}
									<div className="absolute inset-0 bg-gradient-to-t from-secondary to-primary/10 group-hover:to-primary/60 transition-all duration-300"></div>
									<div className="absolute bottom-6 inset-x-8 text-blanco font-bold text-xl">
										Doctorado en Educación y Docencia
										Universitaria
									</div>
								</a>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/formacion-academica/posgrado/educacion-con-mencion-en-gestion-de-la-educacion">
								<a className="group block relative h-[262px] rounded-lg overflow-hidden">
									<Image
										src={
											'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-educacion/maestria-gestion-educacion-minihome-d.png'
										}
										// width={330}
										// height={262}
										objectFit="cover"
										layout="fill"
										quality={100}
										alt="vocacion1"
									/>
									{/* <div className="absolute inset-0 bg-primary/10"></div> */}
									<div className="absolute inset-0 bg-gradient-to-t from-secondary to-primary/10 group-hover:to-primary/60 transition-all duration-300"></div>
									<div className="absolute bottom-6 inset-x-8 text-blanco font-bold text-xl">
										Maestría en Gestión de la Educación
									</div>
								</a>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/formacion-academica/posgrado/educacion-con-mencion-en-docencia-universitaria">
								<a className="group block relative h-[262px] rounded-lg overflow-hidden">
									<Image
										src={
											'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-educacion/maestria-docencia-universitaria-minihome-d.png'
										}
										// width={330}
										// height={262}
										objectFit="cover"
										layout="fill"
										quality={100}
										alt="vocacion1"
									/>
									{/* <div className="absolute inset-0 bg-primary/10"></div> */}
									<div className="absolute inset-0 bg-gradient-to-t from-secondary to-primary/10 group-hover:to-primary/60 transition-all duration-300"></div>
									<div className="absolute bottom-6 inset-x-8 text-blanco font-bold text-xl">
										Maestría en Docencia universitaria
									</div>
								</a>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/formacion-academica/posgrado/educacion-con-mencion-en-evaluacion-y-acreditacion-de-la-calidad-de-la-educacion">
								<a className="group block relative h-[262px] rounded-lg overflow-hidden">
									<Image
										src={
											'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-educacion/maestria-evaluacion-acreditacion-educacion-home.png'
										}
										// width={330}
										// height={262}
										objectFit="cover"
										layout="fill"
										quality={100}
										alt="vocacion1"
									/>
									{/* <div className="absolute inset-0 bg-primary/10"></div> */}
									<div className="absolute inset-0 bg-gradient-to-t from-secondary to-primary/10 group-hover:to-primary/60 transition-all duration-300"></div>
									<div className="absolute bottom-6 inset-x-8 text-blanco font-bold text-xl">
										Maestría en Evaluación y Acreditación de
										la Calidad de la Educación
									</div>
								</a>
							</Link>
						</SwiperSlide>
					</Swiper>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Posgrado;
