import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import CountUp from 'react-countup';
import numerosProgramasLicenciados from '../../data/home/numerosProgramasLicenciados.json';
import RedesSocialesHome from './RedesSocialesHome';
import FlechaAbajo from '../icons/FlechaAbajo';
import { getFecha, getDia, getMes } from '../../helpers/getFecha';
import { getTipoEvento } from '../../helpers/getTipoEvento';
import { Autoplay } from 'swiper';
import Numeros from './Numeros';

const PortadaHome = ({ eventos }) => {
	// console.log(eventos);
	return (
		<section className="relative w-full flex flex-col h-screen">
			<div className=" h-full">
				<div className="bg-negroPuro/30 bg-bgGradiente absolute w-full h-full inset-0"></div>
				<div id="bg-video-img">
					<video
						aria-describedby="hero-video-description"
						autoPlay="autoplay"
						loop="loop"
						preload="auto"
						poster="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/home/primer-fotograma-video.jpg"
						muted={true}
						className="fixed left-0 top-0 object-cover w-screen h-screen -z-10">
						<source
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/home/video-home.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="animate__animated animate__fadeInUp text-blanco top-1/3 absolute z-10 text-5xl w-full">
					<div className="container mx-auto px-4">
						<h1 className="text-4xl md:text-6xl font-semibold max-w-[37.313rem] text-shadow-1">
							Facultad de Química e Ingeniería Química
						</h1>
						<p className="text-lg mt-2">
							Universidad Nacional Mayor de San Marcos
						</p>
						{/* <RedesSocialesHome
							className="text-lg mt-5"
							facebook="https://www.facebook.com/fqiq.unmsm.1946"
							// youtube="https://www.youtube.com/@UNMSMFarmacia"
							// twitter="https://twitter.com/UNMSMFarmacia"
							// instagram="https://www.instagram.com/unmsmfarmacia/"
						/> */}
					</div>
				</div>
			</div>
			{/* <div className="group h-auto w-full bg-footerOne/90 bg-bgEstadistica bg-no-repeat bg-cover bg-center row-span-1 hidden md:flex justify-center items-center flex-col text-blanco absolute bottom-0">
				<div className="container mx-auto px-3 grid-cols-12 gap-x-4 grid">
					<div className="col-start-2 col-span-10 flex">
						<div className="relative w-full grid grid-cols-3 space-x-6 sm:grid-cols-3 animate__fadeIn animate__animated">
							<div>
								<div>
									<User className={`fill-blanco mb-3`} />
								</div>
								<div></div>
								<div></div>
							</div>
							<div>2</div>
							<div>3</div>
							<div>4</div>
						</div>
					</div>
				</div>
			</div> */}
			<Numeros />
			{/* if eventos exist and isnt empty */}
			{/* {eventos && eventos.length > 0 && (
				<>
					<div className="group h-auto w-full bg-tertiary/90 row-span-1 hidden md:flex justify-center items-center flex-col text-blanco absolute bottom-0">
						<div className="container mx-auto px-3 grid-cols-12 gap-x-4 grid">
							<div className="col-start-2 col-span-10 flex">
								<div className="relative w-full grid grid-cols-3 space-x-6 sm:grid-cols-3 animate__fadeIn animate__animated">
									{eventos.map((evento) => (
										<Link
											key={evento.slug}
											href={`/eventos/${evento.slug}`}>
											<a
												key={evento.id}
												className="grid grid-flow-col grid-cols-[min-content_auto] gap-4 h-48 py-8 px-8 hover:bg-secondary transition-colors duration-300">
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
									))}
									<div className="absolute top-1/2 -translate-y-1/2 -right-4 translate-x-full group-hover:opacity-100 opacity-10 duration-300 transition-opacity">
										<Link href="/eventos">
											<a className="flex h-9 bg-blanco place-items-center rounded-lg pl-3">
												<span className="text-textColorTwo leading-none -translate-y-[2px]">
													Más eventos
												</span>
												<div className="-rotate-90 w-7 inline-block">
													<FlechaAbajo className="fill-textColorTwo w-full h-full" />
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
							}}>
							{eventos.map((evento, index) => (
								<SwiperSlide key={evento.slug + index}>
									<div className="bg-tertiary">
										<Link
											key={evento.slug}
											href={`/eventos/${evento.slug}`}>
											<a
												key={evento.id}
												className="grid grid-flow-col grid-cols-[min-content_auto] gap-4 h-44 py-8 px-8 ">
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
							))}
						</Swiper>
					</div>
				</>
			)} */}
		</section>
	);
};

export default PortadaHome;
