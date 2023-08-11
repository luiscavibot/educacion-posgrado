import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';
import Boton from '../shared/Boton';
import { getProgramasCarousel } from '../../helpers/getProgramasCarousel';
import CarouselProgramas from './CarouselProgramas';
import { programas } from '../../data/programas/general';

const Programas = () => {
	const [dataCarrousel, setDataCarrousel] = useState(null);
	useEffect(() => {
		setDataCarrousel(getProgramasCarousel(programas));
	}, []);
	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.05 }}
			id="programas"
			className="bg-blanco mb-14 md:mb-18 animate__animated animate__fadeInUp"
		>
			<motion.div
				variants={entradaCardScroll}
				className="container mx-auto px-3 md:grid-cols-12 gap-x-4 md:grid"
			>
				<h2 className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 text-[2rem] font-bold text-tertiary">
					Programas
				</h2>
				<div className="col-start-2 col-span-10 md:col-start-2 md:col-span-3">
					<p className="mt-6">
						Conoce los programas que ofrecemos y sé parte de nuestra
						comunidad sanmarquina.
					</p>
					<ul className="font-bold mt-6">
						<li className="text-lg hover:text-secondary cursor-pointer duration-400">
							<Link href="/diplomaturas">
								<a className="flex items-center justify-start">
									<FaChevronRight />
									<span id="diplomaturas" className="pl-3">
										Diplomaturas
									</span>
								</a>
							</Link>
						</li>
						<li className="text-lg mt-6 hover:text-secondary cursor-pointer duration-400">
							<Link href="/maestrias">
								<a className="flex items-center justify-start">
									<FaChevronRight />
									<span id="maestrias" className="pl-3">
										Maestrías
									</span>
								</a>
							</Link>
						</li>
						<li className="text-lg mt-6 hover:text-secondary cursor-pointer duration-400">
							<Link href="/doctorado">
								<a className="flex items-center justify-start">
									<FaChevronRight />
									<span id="doctorado" className="pl-3">
										Doctorado
									</span>
								</a>
							</Link>
						</li>
						<li className="text-lg mt-6 hover:text-secondary cursor-pointer duration-400">
							<Link href="/posdoctorado">
								<a className="flex items-center justify-start">
									<FaChevronRight />
									<span id="posdoctorado" className="pl-3">
										Posdoctorado
									</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
				{!dataCarrousel && <>loading</>}

				{dataCarrousel?.length > 0 && (
					<div className="col-start-1 col-span-12 md:col-start-5 md:col-span-7 relative">
						<CarouselProgramas programas={dataCarrousel} />
					</div>
				)}
			</motion.div>
		</motion.section>
	);
};

export default Programas;
