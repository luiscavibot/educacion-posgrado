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
// import AsideSocialNetworks from '../shared/AsideSocialNetworks';
import LogoPosgradoAdministracionVertical from '../icons/LogoPosgradoAdministracionVertical';

import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import DocumentosIcon from '../icons/DocumentosIcon';
import UserIcon from '../icons/UserIcon';
import SideBar from '../shared/SideBar';
import TransmitiendoIcon from '../icons/TransmitiendoIcon';

const PortadaHome = ({ eventos }) => {
	// console.log(eventos);
	// const createHandleMenuClick = (menuItem) => {
	// 	return () => {
	// 		console.log(`Clicked on ${menuItem}`);
	// 	};
	// };

	return (
		// <section className="relative w-full flex flex-col md:h-screen">
		// 	<div className="relative md:static h-96 md:h-full">
		<section className="relative w-full flex flex-col">
			<div className="relative h-[calc(100vh_-_170px)] sm:h-96 md:h-auto">
				{/* <AsideSocialNetworks /> */}

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
									height: 'calc(100vh - 170px)',
									cover: true,
								},
							},
						}}
					>
						<SplideSlide>
							<Image
								src="https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/Home/Carrusel/ceremonia-posdoctorado.jpg"
								alt="ceremonia-posdoctorado"
								layout="responsive"
								width={2868}
								height={1265}
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							<Image
								src="https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/Home/Carrusel/docentes-posgrado.jpg"
								alt="docentes-posgrado"
								layout="responsive"
								width={2868}
								height={1265}
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							<Image
								src="https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/Home/Carrusel/fondo-portada-administracion-posgrado.jpg"
								alt="fondo-portada-administracion-posgrado"
								layout="responsive"
								width={2868}
								height={1265}
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							{' '}
							<Image
								src="https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/Home/Carrusel/alumnos-posgrado.jpg"
								alt="alumnos-posgrado"
								layout="responsive"
								width={2868}
								height={1265}
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							<Image
								src="https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/Home/Carrusel/alumnos-posgrado-aula.jpg"
								alt="alumnos-posgrado-aula"
								layout="responsive"
								width={2868}
								height={1265}
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							<Image
								src="https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/Home/Carrusel/exterior-fca.jpg"
								alt="exterior-fca"
								layout="responsive"
								width={2868}
								height={1265}
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
					<div className="lg:hidden block">
						<SideBar />
					</div>
					<div className="container mx-auto hidden lg:flex justify-between">
						<div className="flex text-blanco">
							<nav>
								<ul className="flex items-start gap-2 text-base font-bold">
									<li>
										<Link
											href={`/admision?programa=maestria`}
										>
											<a className="block px-4 py-2">
												<span>Admisión</span>
											</a>
										</Link>
									</li>
									<li>
										<Dropdown>
											<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente">
												Programas
											</MenuButton>

											<Menu
												slotProps={{
													root: {
														className: `z-20 max-w-[125px] relative before:block before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-8 before:border-solid before:border-transparente before:border-b-blanco`,
													},
													listbox: {
														className:
															'text-sm box-border p-1.5 my-2 mx-0 rounded-xl overflow-auto outline-0 bg-blanco text-textColorOne min-w-listbox shadow-md',
													},
												}}
											>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/programas/diplomaturas">
														<a className="hover:text-secondary py-2">
															Diplomaturas
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/programas/maestrias">
														<a className="hover:text-secondary py-2">
															Maestrías
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/programas/doctorado">
														<a className="hover:text-secondary py-2">
															Doctorado
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/programas/posdoctorado">
														<a className="hover:text-secondary py-2">
															Posdoctorado
														</a>
													</Link>
												</MenuItem>
											</Menu>
										</Dropdown>
									</li>
									<li>
										<Dropdown>
											<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente">
												Investigación
											</MenuButton>

											<Menu
												slotProps={{
													root: {
														className: `z-20 max-w-[125px] relative before:block before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-8 before:border-solid before:border-transparente before:border-b-blanco`,
													},
													listbox: {
														className:
															'text-sm box-border p-1.5 my-2 mx-0 rounded-xl overflow-auto outline-0 bg-blanco text-textColorOne min-w-listbox shadow-md',
													},
												}}
											>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/investigacion/actividad-cientifica">
														<a className="hover:text-secondary py-2">
															Actividad científica
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/investigacion/taller-tesis">
														<a className="hover:text-secondary py-2">
															Taller de tesis
															(Maestrías)
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<a
														rel="noopener noreferrer"
														target="_blank"
														href="https://revistasinvestigacion.unmsm.edu.pe/index.php/administrativas/index"
														className="hover:text-secondary py-2"
													>
														Gestión en el Tercer
														Milenio
													</a>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<a
														rel="noopener noreferrer"
														href="https://administracion.unmsm.edu.pe/grupos-de-investigaciones/"
														target="_blank"
														className="hover:text-secondary py-2"
													>
														Grupos de Investigación
													</a>
												</MenuItem>
											</Menu>
										</Dropdown>
									</li>
									<li>
										<Dropdown>
											<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente">
												Comunidad
											</MenuButton>

											<Menu
												slotProps={{
													root: {
														className: `z-20 max-w-[125px] relative before:block before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-8 before:border-solid before:border-transparente before:border-b-blanco`,
													},
													listbox: {
														className:
															'text-sm box-border p-1.5 my-2 mx-0 rounded-xl overflow-auto outline-0 bg-blanco text-textColorOne min-w-listbox shadow-md',
													},
												}}
											>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/comunidad/informacion-academica">
														<a className="hover:text-secondary py-2">
															Información
															académica
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/comunidad/plana-docente">
														<a className="hover:text-secondary py-2">
															Plana docente
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/comunidad/seguimiento-egresados">
														<a className="hover:text-secondary py-2">
															Seguimiento de
															egresados
														</a>
													</Link>
												</MenuItem>
											</Menu>
										</Dropdown>
									</li>
									<li>
										<Dropdown>
											<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente">
												Actualidad
											</MenuButton>

											<Menu
												slotProps={{
													root: {
														className: `z-20 max-w-[125px] relative before:block before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-8 before:border-solid before:border-transparente before:border-b-blanco`,
													},
													listbox: {
														className:
															'text-sm box-border p-1.5 my-2 mx-0 rounded-xl overflow-auto outline-0 bg-blanco text-textColorOne min-w-listbox shadow-md',
													},
												}}
											>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/actualidad/agenda-publica">
														<a className="hover:text-secondary py-2">
															Agenda pública
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/actualidad/eventos">
														<a className="hover:text-secondary py-2">
															Eventos
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/actualidad/revistas">
														<a className="hover:text-secondary py-2">
															Boletines
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/actualidad/comunicados">
														<a className="hover:text-secondary py-2">
															Comunicados
														</a>
													</Link>
												</MenuItem>
											</Menu>
										</Dropdown>
									</li>
									<li>
										<Dropdown>
											<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente">
												Nosotros
											</MenuButton>

											<Menu
												slotProps={{
													root: {
														className: `z-20 max-w-[125px] relative before:block before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-8 before:border-solid before:border-transparente before:border-b-blanco`,
													},
													listbox: {
														className:
															'text-sm box-border p-1.5 my-2 mx-0 rounded-xl overflow-auto outline-0 bg-blanco text-textColorOne min-w-listbox shadow-md',
													},
												}}
											>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/nosotros/director-y-coordinadores">
														<a className="hover:text-secondary py-2">
															Autoridades
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/nosotros/historia">
														<a className="hover:text-secondary py-2">
															Historia
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/nosotros/transparencia">
														<a className="hover:text-secondary py-2">
															Transparencia
														</a>
													</Link>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<Link href="/nosotros/directorio">
														<a className="hover:text-secondary py-2">
															Directorio
														</a>
													</Link>
												</MenuItem>
											</Menu>
										</Dropdown>
									</li>
									<li>
										<Link href={`/blog-gestion-publica`}>
											<a className="block px-4 py-2">
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
								<ul className="flex items-start gap-2 text-base font-bold">
									<li>
										<Link href="/tramites">
											<a className="px-4 py-2 flex items-center gap-[6px]">
												<DocumentosIcon className="w-5 h-5 fill-blanco" />
												<span>Trámites</span>
											</a>
										</Link>
									</li>
									<li>
										<Dropdown>
											<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente inline-flex items-center gap-[6px]">
												<UserIcon className="w-4 h-4 fill-blanco" />
												<span>Intranet</span>
											</MenuButton>

											<Menu
												slotProps={{
													root: {
														className: `z-20 max-w-[125px]`,
													},
													listbox: {
														className:
															'text-sm box-border p-1.5 my-2 mx-0 rounded-xl overflow-auto outline-0 bg-blanco text-textColorOne min-w-listbox shadow-md',
													},
												}}
											>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<a
														href="https://mail.google.com/mail/u/1/?pli=1#inbox"
														className="hover:text-secondary py-2"
													>
														Sistema único de
														matrícula (SUM)
													</a>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<a
														href="https://sum.unmsm.edu.pe/"
														className="hover:text-secondary py-2"
													>
														MAT
													</a>
												</MenuItem>
												<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
													<a
														href="https://forms.gle/6QHcRQ5gZQKxpZpn8"
														className="hover:text-secondary py-2"
													>
														Registro de pagos
													</a>
												</MenuItem>
											</Menu>
										</Dropdown>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				{/* logo */}
				<div className="animate__animated animate__fadeInUp text-blanco top-1/2 !-translate-y-1/2 md:max-lg:!-translate-y-[28%] absolute z-10 text-5xl w-full">
					<div className="container mx-auto px-4">
						<Logo className="md:w-[505px] md:h-[151px] mx-auto hidden md:block" />
						<LogoPosgradoAdministracionVertical className="md:hidden mx-auto" />
					</div>
				</div>
			</div>

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
											// href={`/actualidad/eventos/${evento.slug}`}
											href={`${
												evento.en_vivo
													? evento?.transmision_en_vivo
													: `/actualidad/eventos/${evento.slug}`
											}`}
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
													{/* <div>3 p.m.</div> */}
												</div>
												<div className="flex flex-col">
													<p
														className={`flex flex-row gap-x-1 ${
															evento.en_vivo
																? 'block'
																: 'hidden'
														}`}
													>
														<TransmitiendoIcon className="w-6 h-6 fill-primary relative -top-[1px]" />
														<span className="text-primary font-bold text-sm">
															Transmitiendo en
															vivo
														</span>
													</p>
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
										<Link href="/actualidad/eventos">
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
					<div className="w-full text-blanco bg-secondary block md:hidden">
						<div className="my-6 mx-4 flex justify-end">
							<Link href="/actualidad/eventos">
								<a className="grid place-items-center rounded-lg w-9 h-9 border-[1.5px] border-primary bg-transparente group-hover:bg-primary transition-colors duration-300">
									<div className="w-3 inline-block">
										<VerMasIcon className="fill-primary group-hover:fill-blanco transition-colors duration-300 h-full" />
									</div>
								</a>
							</Link>
						</div>
						<Swiper
							modules={[Autoplay]}
							spaceBetween={0}
							slidesPerView={1}
							loop={true}
							autoplay={{
								delay: 3500,
							}}
						>
							{eventos.map((evento, index) => (
								<SwiperSlide key={evento.slug + index}>
									<div className="bg-secondary">
										<Link
											key={evento.slug}
											href={`/actualidad/eventos/${evento.slug}`}
										>
											<a
												key={evento.id}
												className="grid grid-flow-col grid-cols-[min-content_auto] gap-4 h-44 pb-2 px-8"
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
													{/* <div>3 p.m.</div> */}
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
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</>
			)}
		</section>
	);
};

export default PortadaHome;
