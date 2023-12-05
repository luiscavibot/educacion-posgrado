import React from 'react';
import Image from 'next/future/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Numeros from './Numeros';
import PrincipalMenu from './PrincipalMenu';

const PortadaHome = () => {
	return (
		<section className="relative w-full flex flex-col">
			<div className="relative h-[calc(100vh_-_170px)] sm:h-96 md:h-auto">
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
								src="https://unmsm-static-files.s3.us-east-2.amazonaws.com/educacion/backgroundinicio/frontis-educacion.jpg"
								alt="ceremonia-posdoctorado"
								layout="responsive"
								width={1198}
								height={528}
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							<Image
								src="https://unmsm-static-files.s3.us-east-2.amazonaws.com/educacion/backgroundinicio/sustentacion-posgrado-educacion+(1).jpg"
								alt="ceremonia-posdoctorado"
								layout="responsive"
								width={1198}
								height={528}
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							<Image
								src="https://unmsm-static-files.s3.us-east-2.amazonaws.com/educacion/backgroundinicio/juramentacion-posgrado-educacion-2.jpg"
								alt="ceremonia-posdoctorado"
								layout="responsive"
								width={1198}
								height={528}
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
						<SplideSlide>
							<Image
								src="https://unmsm-static-files.s3.us-east-2.amazonaws.com/educacion/backgroundinicio/sustentacion-posgrado-educacion-3.jpg"
								alt="ceremonia-posdoctorado"
								layout="responsive"
								width={1198}
								height={528}
								quality={100}
								className="w-auto h-full md:w-full md:h-auto object-cover"
							/>
						</SplideSlide>
					</Splide>
				</div>

				{/* filtro oscuro para el carrusel */}
				<div className="bg-bgGradienteCarruselPortada opacity-80 absolute w-full h-full inset-0"></div>

				{/* menu */}
				<PrincipalMenu />

				{/* logo */}
				<div className="animate__animated animate__fadeInUp text-blanco top-1/2 !-translate-y-1/2 md:max-lg:!-translate-y-[28%] absolute z-10 text-5xl w-full">
					<div className="container mx-auto px-4">
						<div className="flex items-center flex-col">
							<div className="w-24 mb-2">
								<Image
									src="https://unmsm-static-files.s3.us-east-2.amazonaws.com/general/escudo-unmsm.png"
									alt="escudo-unmsm"
									width={130.94}
									height={158}
								/>
							</div>
							<h1 className="text-4xl text-center font-semibold">
								Posgrado Educación
							</h1>
							<h2 className="mt-2 text-2xl text-center">
								Universidad Nacional Mayor de San Marcos
							</h2>
						</div>
					</div>
				</div>
			</div>

			{/* estadísticas */}
			<>
				<div className="group h-auto w-full bg-bgEventos bg-cover bg-center row-span-1 hidden md:flex justify-center items-center flex-col text-blanco">
					<div className="container mx-auto px-3 grid-cols-12 gap-x-4 grid">
						<div className="col-start-2 col-span-10 flex">
							<div className="relative w-full animate__fadeIn animate__animated">
								<Numeros />
							</div>
						</div>
					</div>
				</div>
			</>
		</section>
	);
};

export default PortadaHome;
