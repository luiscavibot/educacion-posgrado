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
	const getUrl = (tipo, slug) => {
		switch (tipo) {
			case 'MAESTRIA':
				return `/programas/maestrias/${slug}`;
			case 'DOCTORADO':
				return `/programas/doctorado`;
			case 'DIPLOMATURA':
				return `/programas/diplomaturas/${slug}`;
			default:
				return '#';
		}
	};

	return (
		<>
			<Swiper
				autoplay
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				// slidesPerView={8}
				coverflowEffect={{
					rotate: 0,
					stretch: 50,
					depth: 80,
					modifier: 2,
					slideShadows: false,
				}}
				pagination={false}
				loop={true}
				modules={[EffectCoverflow]}
				className="carousel-programas"
			>
				{programas.map((programa) => (
					<SwiperSlide key={programa.slug}>
						<Link href={getUrl(programa.tipo, programa.slug)}>
							<a className="card program-box hover:-translate-y-2">
								<div className="relative">
									<Image
										alt={programa.titulo}
										width={290}
										height={168}
										layout="responsive"
										objectFit="cover"
										src={programa.miniHomeImg}
									/>
								</div>
								<div className="text-content h-32">
									{/* <p className="text-rojoBase text-xs font-bold">
										{programa.tipo}
									</p> */}
									<p className="title font-bold line-clamp-2">
										{programa.titulo}
									</p>
									<p className="line-clamp-2">
										{programa.subtitulo}
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
