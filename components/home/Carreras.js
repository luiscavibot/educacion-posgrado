import React from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';
import Boton from '../shared/Boton';

const Carreras = () => {
	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			id="carreras"
			className="mb-14 md:mb-18">
			<motion.div
				variants={entradaCardScroll}
				className="md:container mx-4 md:mx-auto px-6 lg:px-3 lg:grid-cols-12 gap-x-4 lg:grid bg-complementaryOne shadow-sm text-secondary py-[72px]">
				<div className="lg:col-start-2 lg:col-span-11">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-10">
						<div className="grid items-center">
							<div>
								<p className="text-3xl font-bold mb-3 relative before:block before:absolute before:-top-3 before:rounded-lg before:w-16 before:h-1 before:bg-secondary">
									¿Quieres saber más sobre nuestras carreras?
									Descubre lo que tenemos para ti.
								</p>
								<p className="mb-5 text-textColorTwo">
									Te ofrecemos una formación integral de 3
									carreras profesionales de alta demanda
									acorde a tus habilidades e intereses.
								</p>
								<Link
									href="/formacion-academica/pregrado"
									passHref>
									<Boton text="Ver más" />
								</Link>
							</div>
						</div>
						<div className="col-span-2 hidden lg:block">
							<div className="h-[22rem] xl:h-[400px] max-w-[800px] relative">
								<Link
									href="/formacion-academica/pregrado/quimica-e-ingenieria-quimica"
									passHref>
									<a className="absolute left-0 top-0 w-72 xl:w-[330px] h-[220px] rounded-lg overflow-hidden group hover:z-10">
										<Image
											src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/home-ciencia-alimentos-pregrado.jpg"
											alt="Ciencia de los Alimentos"
											width={330}
											height={220}
											layout="responsive"
											className="rounded-lg w-72 xl:w-[330px]"
										/>
										<div className="absolute inset-0 w-full bg-secondary/60 text-xl text-center font-bold text-blanco grid place-items-center py-12 px-16 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
											<p>Farmacia y Bioquímica</p>
										</div>
									</a>
								</Link>
								<Link
									href="/formacion-academica/pregrado/ciencias-de-los-alimentos"
									passHref>
									<a className="absolute top-5 right-0 w-72 xl:w-[330px] h-[220px] rounded-lg overflow-hidden group hover:z-10">
										<Image
											src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/home-farmacia-bioquimica-pregrado.jpg"
											alt="Farmacia y Bioquímica"
											width={330}
											height={220}
											layout="responsive"
											className="rounded-lg w-72 xl:w-[330px]"
										/>
										<div className="absolute inset-0 w-full bg-secondary/60 text-xl text-center font-bold text-blanco grid place-items-center py-12 px-16 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
											<p>Ciencias de los alimentos</p>
										</div>
									</a>
								</Link>
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 xl:w-[330px] h-[220px]">
									<Link
										href="/formacion-academica/pregrado/toxicologia"
										passHref>
										<a className="absolute rounded-lg overflow-hidden group">
											<Image
												src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/home-toxicologia.jpg"
												alt="Toxicología"
												width={330}
												height={220}
												layout="responsive"
												className="rounded-lg w-72 xl:w-[330px]"
											/>
											<div className="absolute inset-0 w-full bg-secondary/60 text-xl text-center font-bold text-blanco grid place-items-center py-12 px-16 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
												<p>Toxicología</p>
											</div>
										</a>
									</Link>
									<div className="block absolute rounded-full bg-secondary w-[137px] h-[137px] left-[44px] -top-[45px] -z-10"></div>
									<div className="block absolute rounded-full bg-primary w-[64px] h-[64px] -right-[24px] -bottom-[20px] -z-10"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Carreras;
