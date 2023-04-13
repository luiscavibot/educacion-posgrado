import React from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';
import Boton from '../shared/Boton';

const Unete = () => {
	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			id="unete"
			className="">
			<motion.div
				variants={entradaCardScroll}
				className="container mx-auto px-3 grid-cols-12 gap-x-4 grid text-textColorTwo">
				<div className="col-start-2 col-span-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-0">
						<div className="relative">
							<Image
								src={
									'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/home/quimica-home-contribuyendo-formacion.jpg'
								}
								width={650}
								height={411}
								quality={100}
								sizes="(max-width: 768px) 100vw, 650px"
								// sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
								alt="unete"
								className="object-cover w-full rounded-lg"
							/>
						</div>
						<div className="grid items-center">
							<div>
								<p className="text-[28px] font-bold mb-4 leading-10 text-tertiary">
									¡Únete a nuestra comunidad reconocida a
									nivel nacional e internacionalmente y haz de
									tu futuro un éxito!
								</p>
								<p className="mb-5 text-[15px]">
									Contamos con 77 años de experiencia en la
									formación universitaria basada en la
									investigación científica y tecnológica.
								</p>
								{/* <Boton text="Leer más" secondary bold /> */}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Unete;
