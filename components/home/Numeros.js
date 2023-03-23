import React from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';
import CountUp from 'react-countup';

import numerosProgramasLicenciados from '../../data/home/numerosProgramasLicenciados.json';
import User from '../icons/User';
import Birrete from '../icons/Birrete';
import RenacytIcon from '../icons/RenacytIcon';
import Lupa from '../icons/Lupa';
import LibrosFillEtiqueta from '../icons/LibrosFillEtiqueta';
import HomeTesisPregradoIcon from '../icons/HomeTesisPregradoIcon';

const Numeros = () => {
	const IconEstadistica = ({ icono, className }) => {
		switch (icono) {
			case 'User':
				return <User className={`${className}`} />;
			case 'Birrete':
				return <Birrete className={`${className}`} />;
			case 'RenacytIcon':
				return <RenacytIcon className={`${className}`} />;
			case 'HomeTesisPregradoIcon':
				return <HomeTesisPregradoIcon className={`${className}`} />;
			case 'LibrosFillEtiqueta':
				return <LibrosFillEtiqueta className={`${className}`} />;
			case 'Lupa':
				return <Lupa className={`${className}`} />;
			default:
				return <User className={`${className}`} />;
		}
	};

	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			id="numeros"
			className="mb-14 md:mb-18">
			<motion.div variants={entradaCardScroll} className="">
				<div className="h-auto pt-[60px] pb-20 bg-secondary row-span-1 flex justify-center items-center flex-col text-blanco relative">
					<Image
						alt="adn"
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/home-estadisticas-adn.png"
						className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
						fill
						quality={100}
						sizes="(max-width: 768px) 100vw,(max-width: 1200px) 1776px,1776px"
					/>
					<Image
						alt="adn"
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/home-estadisticas-adn-responsive.png"
						className="absolute inset-0 w-full h-full object-cover object-center block md:hidden"
						fill
						quality={100}
						sizes="(max-width: 768px) 100vw,(max-width: 1200px) 1776px,1776px"
					/>
					<div className="text-center max-w-[44.875rem] relative mb-10">
						<p className="text-[28px] font-bold leading-9 mb-2 px-4">
							Somos una institución pionera y referente en la
							formación de profesionales farmacéuticos a nivel
							nacional.
						</p>
					</div>
					<div className="grid gap-y-16 gap-x-5 grid-cols-2 sm:grid-cols-5 animate__fadeIn animate__animated">
						{numerosProgramasLicenciados.map((item) => {
							return (
								<div
									key={item.nombre}
									className="flex justify-center items-center flex-col mx-10 self-start">
									<IconEstadistica
										icono={item.icono}
										className="fill-blanco mb-3"
									/>
									<h1 className="text-3xl">
										<CountUp
											end={item.numero}
											duration={2}
										/>
									</h1>
									<h1 className="font-medium text-center max-w-[100px]">
										{item.nombre}
									</h1>
								</div>
							);
						})}
					</div>
					{/* <p className="absolute bottom-3 text-sm px-4 text-center">
						Datos estadísticos de la facultad desde el periodo
						2021-I hasta la actualidad.
					</p> */}
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Numeros;
