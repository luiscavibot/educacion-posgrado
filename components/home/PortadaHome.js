import React from 'react';
import Image from 'next/future/image';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

// import CountUp from 'react-countup';
// import numerosProgramasLicenciados from '../../data/home/numerosProgramasLicenciados.json';
// import RedesSocialesHome from './RedesSocialesHome';
// import FlechaAbajo from '../icons/FlechaAbajo';
import VerMasIcon from '../icons/VerMasIcon';
import { getFecha, getDia, getMes } from '../../helpers/getFecha';
import { getTipoEvento } from '../../helpers/getTipoEvento';
import { Autoplay } from 'swiper';
// import Numeros from './Numeros';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Logo from '../icons/Logo';
import AsideSocialNetworks from '../shared/AsideSocialNetworks';

const PortadaHome = ({ eventos }) => {
	// console.log(eventos);
	return (
		// <section className="relative w-full flex flex-col md:h-screen">
		// 	<div className="relative md:static h-96 md:h-full">
		<section className="relative w-full flex flex-col">
			<div className="relative h-screen sm:h-96 md:h-auto">
				<AsideSocialNetworks />

				{/* carrusel fotos */}
				<div id="initial-carousel" className="relative">
					<Splide
						aria-label="initial carousel"
						options={{
							type: 'fade',
							rewind: true,
							arrows: false,
							pagination: false,
							autoplay: true,
							pauseOnHover: false,
							pauseOnFocus: false,
							speed: 1000,
							interval: 6000,
							breakpoints: {
								767: {
									height: '24rem',
									cover: true,
								},
								639: {
									height: '100vh',
									cover: true,
								},
							},
						}}
					>
						<SplideSlide>
							<Image
								src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/posgrado-administracion/home/carousel/fondo-portada-01.jpg"
								alt="img carrusel 1"
								layout="responsive"
								width={2459}
								height={1096}
								// objectFit="cover"
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							<Image
								src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/posgrado-administracion/home/carousel/fondo-portada-02.jpg"
								alt="img carrusel 2"
								layout="responsive"
								width={2459}
								height={1096}
								// objectFit="cover"
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							<Image
								src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/posgrado-administracion/home/carousel/fondo-portada-03.jpg"
								alt="img carrusel 3"
								layout="responsive"
								width={2459}
								height={1096}
								// objectFit="cover"
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							<Image
								src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/posgrado-administracion/home/carousel/fondo-portada-04.jpg"
								alt="img carrusel 4"
								layout="responsive"
								width={2459}
								height={1096}
								// objectFit="cover"
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							<Image
								src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/posgrado-administracion/home/carousel/fondo-portada-05.jpg"
								alt="img carrusel 5"
								layout="responsive"
								width={2459}
								height={1096}
								// objectFit="cover"
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
					</Splide>
				</div>

				{/* filtro oscuro para el carrusel */}
				<div className="bg-bgGradienteCarruselPortada opacity-80 absolute w-full h-full inset-0"></div>

				{/* menu */}
				<div className="absolute w-full top-8">
					<div className="container mx-auto flex justify-between">
						<div className="md:flex hidden text-blanco">
							<nav>
								<ul className="flex items-center gap-7 text-xs font-bold">
									<li>
										<Link href={`/admision`}>
											<a>
												<span>Admisión</span>
											</a>
										</Link>
									</li>
									<li>
										<span>Programas</span>
									</li>
									<li>
										<span>Investigación</span>
									</li>
									<li>
										<span>Comunidad</span>
									</li>
									<li>
										<span>Actualidad</span>
									</li>
									<li>
										<span>Nosotros</span>
									</li>
									<li>
										<Link href={`/blog-gestion-publica`}>
											<a>
												<span>
													Blog de Gestión pública
												</span>
											</a>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className="text-blanco">
							<nav>
								<ul className="flex items-center gap-7 text-xs font-bold">
									<li>Trámites</li>
									<li>Intranet</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="animate__animated animate__fadeInUp text-blanco top-1/2 !-translate-y-1/2 md:max-lg:!-translate-y-[28%] absolute z-10 text-5xl w-full">
					<div className="container mx-auto px-4">
						<Logo className="w-[505px] h-[151px] mx-auto" />
					</div>
				</div>
			</div>

			{/* <Numeros /> */}
			{/* if eventos exist and isnt empty */}
			{eventos && eventos.length > 0 && (
				<>
					<div className="group h-auto w-full bg-bgEventos bg-cover bg-center row-span-1 hidden md:flex justify-center items-center flex-col text-blanco">
						<div className="container mx-auto px-3 grid-cols-12 gap-x-4 grid">
							<div className="col-start-2 col-span-10 flex">
								<div className="relative w-full grid grid-cols-3 space-x-6 sm:grid-cols-3 animate__fadeIn animate__animated">
									{eventos.map((evento) => (
										<Link
											key={evento.slug}
											href={`/eventos/${evento.slug}`}
										>
											<a
												key={evento.id}
												className="grid grid-flow-col grid-cols-[min-content_auto] gap-4 h-60 py-12 px-8 hover:bg-[#252525]/[0.16] transition-colors duration-300"
											>
												<div className="flex flex-col items-center">
													<div className="font-bold text-[40px] leading-none mb-2 text-center">
														{getDia(
															evento.fecha_inicio
														)}
													</div>
													<div className="font-bold text-base text-center">
														{getMes(
															evento.fecha_inicio
														)}
													</div>
													<div>3 p.m.</div>
												</div>
												<div className="flex flex-col">
													<p className="mb-[2px] font-bold">
														{evento.tipo.valor}
													</p>
													<p className="text-sm font-normal mb-6 line-clamp-3">
														{evento.titulo}
													</p>
													<p className="text-xs font-semibold line-clamp-2">
														{evento.lugar}
													</p>
												</div>
											</a>
										</Link>
									))}
									<div className="absolute top-1/2 -translate-y-1/2 -right-4 translate-x-full">
										<Link href="/eventos">
											<a className="grid place-items-center rounded-lg w-9 h-9 border-[1.5px] border-primary bg-transparente group-hover:bg-primary transition-colors duration-300">
												<div className="w-3 inline-block">
													<VerMasIcon className="fill-primary group-hover:fill-blanco transition-colors duration-300 h-full" />
												</div>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full text-blanco absolute bottom-0 block md:hidden">
						<Swiper
							modules={[Autoplay]}
							spaceBetween={0}
							slidesPerView={1}
							loop={true}
							autoplay={{
								delay: 1500,
							}}
						>
							{eventos.map((evento, index) => (
								<SwiperSlide key={evento.slug + index}>
									<div className="bg-tertiary">
										<Link
											key={evento.slug}
											href={`/eventos/${evento.slug}`}
										>
											<a
												key={evento.id}
												className="grid grid-flow-col grid-cols-[min-content_auto] gap-4 h-44 py-8 px-8 "
											>
												<div>
													<div className="font-bold text-[40px] leading-none mb-2 text-center">
														{getDia(
															evento.fecha_inicio
														)}
													</div>
													<div className="font-bold text-base text-center">
														{getMes(
															evento.fecha_inicio
														)}
													</div>
												</div>
												<div className="flex flex-col space-y-3 line-clamp-6">
													<p className="text-sm font-semibold">
														{evento.titulo}
													</p>
													<p className="text-xs ">
														{evento.lugar}
													</p>
												</div>
											</a>
										</Link>
									</div>
								</SwiperSlide>
								// <div key={evento.slug + 'n'}>
								// </div>
							))}
						</Swiper>
					</div>
				</>
			)}
		</section>
	);
};

export default PortadaHome;
