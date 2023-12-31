import React from 'react';
import { motion } from 'framer-motion';
// import { entradaCardScroll } from '../../consts/animaciones';
import CountUp from 'react-countup';

import numerosProgramasLicenciados from '../../data/home/numerosProgramasLicenciados.json';
import User from '../icons/User';
import Birrete from '../icons/Birrete';
import Lupa from '../icons/Lupa';
import LibrosFillEtiqueta from '../icons/LibrosFillEtiqueta';

const Numeros = () => {
	const IconEstadistica = ({ icono, className }) => {
		switch (icono) {
			case 'User':
				return <User className={`${className}`} />;
			case 'Birrete':
				return <Birrete className={`${className}`} />;
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
			className="relative w-full"
		>
			<motion.div
				// variants={entradaCardScroll}
				className="relative w-full"
			>
				{/* <div className="h-auto py-[72px] md:h-[272px] bg-secondary row-span-1 flex justify-center items-center flex-col text-blanco relative"> */}
				{/* <Image
						alt=""
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-educacion/estadisticas-home-educacion.png"
						className="absolute inset-0 w-full h-full object-cover"
						objectFit="cover"
						layout="fill"
					></Image> */}
				<div className="h-auto pt-7 pb-14  md:pb-11 lg:pt-11 lg:pb-16 row-span-1 flex justify-center items-center flex-col text-blanco relative">
					<div className="grid gap-y-16 gap-x-5 grid-cols-2 sm:grid-cols-4 animate__fadeIn animate__animated">
						{numerosProgramasLicenciados.map((item) => {
							return (
								<div
									key={item.nombre}
									className="flex justify-center items-center flex-col mx-10 self-start"
								>
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
					<p className="absolute bottom-3 text-xs">
						Datos estadísticos de la Facultad de Educación (2022).
					</p>
				</div>
				{/* </div> */}
			</motion.div>
		</motion.section>
	);
};

export default Numeros;
