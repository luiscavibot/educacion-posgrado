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
				className="md:container mx-4 md:mx-auto px-6 lg:px-3 lg:grid-cols-12 gap-x-4 lg:grid text-secondary py-[72px]">
				<div className="col-start-2 col-span-10 flex mb-9">
					<h2 className="text-4xl font-bold text-tertiary">
						Carreras
					</h2>
					<Link href="/formacion-academica/pregrado" passHref>
						<a className="text-lg text-secondary font-bold flex items-end hover:text-textColorOne">
							<span className="ml-2">|</span>
							<p className="ml-2">ver más</p>
						</a>
					</Link>
				</div>
				<div className="col-start-2 col-span-10 flex mb-9">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] w-full">
						<Link href={'/formacion-academica/pregrado/quimica'}>
							<a className="relative h-28 md:h-[212px] rounded-lg overflow-hidden grid place-items-center group">
								<Image
									src={
										'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/home/carreras/home-eap-quimica-facultad-unmsm.jpg'
									}
									className="absolute inset-0 h-full w-full object-center object-cover grayscale"
									fill
									quality={100}
									alt="vocacion1"
									priority
									sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
								/>
								<div className="absolute inset-0 h-full w-full bg-secondary/30 group-hover:bg-primary/50 transition-colors duration-200"></div>
								<p className="relative text-blanco font-bold text-shadow-2">
									EP. Química
								</p>
							</a>
						</Link>
						<Link
							href={
								'/formacion-academica/pregrado/ingenieria-quimica'
							}>
							<a className="relative h-28 md:h-[212px] rounded-lg overflow-hidden grid place-items-center group">
								<Image
									src={
										'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/home/carreras/home-eap-ingenieria-quimica-facultad-unmsm.jpg'
									}
									className="absolute inset-0 h-full w-full object-center object-cover grayscale"
									fill
									quality={100}
									alt="vocacion1"
									priority
									sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
								/>
								<div className="absolute inset-0 h-full w-full bg-secondary/30 group-hover:bg-primary/50 transition-colors duration-200"></div>
								<p className="relative text-blanco font-bold text-shadow-2">
									EP. Ingeniería Química
								</p>
							</a>
						</Link>
						<Link
							href={
								'/formacion-academica/pregrado/ingenieria-agroindustrial'
							}>
							<a className="relative h-28 md:h-[212px] rounded-lg overflow-hidden grid place-items-center group">
								<Image
									src={
										'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/home/carreras/home-eap-ingenieria-agroindustrial-facultad-unmsm.jpg'
									}
									className="absolute inset-0 h-full w-full object-center object-cover grayscale"
									fill
									quality={100}
									alt="vocacion1"
									priority
									sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
								/>
								<div className="absolute inset-0 h-full w-full bg-secondary/30 group-hover:bg-primary/50 transition-colors duration-200"></div>
								<p className="relative text-blanco font-bold text-shadow-2">
									EP. Ingeniería Agroindustrial
								</p>
							</a>
						</Link>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Carreras;
