import React from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';
import Boton from '../shared/Boton';

const Cenprofarma = () => {
	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			id="cenprofarma"
			className="">
			<motion.div
				variants={entradaCardScroll}
				className="container mx-auto px-3 grid-cols-12 gap-x-4 grid text-textColorTwo">
				<div className="col-start-2 col-span-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-0">
						<div className="grid items-center">
							<div>
								<p className="text-3xl font-bold mb-4 leading-10 text-tertiary">
									Centro de Producción Farmacéutica
								</p>
								<p className="mb-5">
									Somos un equipo de profesionales
									comprometidos en brindar un servicio
									eficiente en análisis clínicos y
									toxicológicos, certificados por las normas
									nacionales e internacionales de calidad y
									contamos con tecnología moderna con el fin
									de proporcionar información confiable a
									nuestros clientes. Nuestro personal está en
									constante coordinación mediante charlas,
									reuniones de trabajo, circulares, entre
									otros.
								</p>
								{/* <Boton text="Leer más" secondary bold /> */}
							</div>
						</div>
						<div className="relative">
							<Image
								src={
									'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/home-centro-produccion-farmaceutica.jpg'
								}
								width={650}
								height={411}
								quality={100}
								sizes="(max-width: 768px) 100vw, 650px"
								// sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
								alt="cenprofarma"
								className="object-cover w-full rounded-lg"
							/>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Cenprofarma;
