import React from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';
import Boton from '../shared/Boton';

const Comunicados = () => {
	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			id="comunicados"
			className="mb-14 md:mb-18">
			<motion.div
				variants={entradaCardScroll}
				className="container mx-auto px-3 grid-cols-12 gap-x-4 grid text-textColorTwo">
				<div className="md:col-start-2 md:col-span-10 col-span-full">
					<div className="relative rounded-lg overflow-hidden px-4 md:px-[84px] py-6">
						<div className="absolute inset-0 h-full w-full">
							<Image
								src={
									'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/comunicados-home-facultad-farmacia-bioquimica.jpg'
								}
								className="object-center object-cover"
								fill
								quality={100}
								alt="vocacion1"
								priority
								sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
							/>
						</div>
						<div className="absolute inset-0 bg-gradient-to-r from-tertiary via-secondary/50 to-tertiary/50 md:to-transparente"></div>
						<div className="relative z-10">
							<h2 className="text-xl text-blanco font-bold mb-1">
								Comunicados
							</h2>
							<p className="text-blanco font-semibold mb-5">
								Descubre aquí los últimos avisos de la facultad.
							</p>
							<Boton
								text="Más información"
								link="/comunicados"
								className="inline-block font-semibold"
							/>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Comunicados;
