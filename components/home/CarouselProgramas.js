import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import required modules
import { EffectCoverflow } from 'swiper';
import { data } from 'autoprefixer';
import Link from 'next/link';
import SwiperButtonNext from './swiper/SwiperButtonNext';
import SwiperButtonPrev from './swiper/SwiperButtonPrev';

export default function CarouselProgramas({ programas }) {
	return (
		<>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				// slidesPerView={8}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2,
					slideShadows: false,
				}}
				pagination={false}
				loop={true}
				modules={[EffectCoverflow]}
				className="mySwiper">
				<SwiperButtonPrev />
				<SwiperButtonNext />
				{programas.map((programa) => (
					<SwiperSlide
						key={`${programa.attributes.nombre}-${programa.tipo}`}>
						<Link
							href={
								programa.tipo === 'Maestrías'
									? `/maestrias/${programa.attributes.slug}`
									: `/doctorados/${programa.attributes.slug}`
							}>
							<a className="card program-box hover:-translate-y-2">
								<Image
									alt={programa.attributes.nombre}
									width={290}
									height={168}
									layout="responsive"
									objectFit="cover"
									src={
										programa.attributes.imagen.data
											? programa.attributes.imagen.data[0]
													.attributes.url
											: 'https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg'
									}></Image>
								<div className="text-content h-32">
									<p className="text-secondary text-xs font-bold">
										{programa.tipo}
									</p>
									<p className="title line-clamp-2">
										{programa.attributes.nombre}
									</p>
									<p className="line-clamp-2 text-sm">
										{
											programa.attributes.facultad.data
												.attributes.nombre
										}
									</p>
								</div>
							</a>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
