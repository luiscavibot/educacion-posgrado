import React, { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { BASE_URL } from '../../config/consts';
import { useFetch } from '../../hooks/useFetch';
import CarouselProgramas from './CarouselProgramas';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';
import { getProgramasCarrousel } from '../../helpers/getProgramasCarrousel';

const OfertaEducativa = ({ maestrias, doctorados }) => {
	const [dataCarrousel, setDataCarrousel] = useState([]);

	useEffect(() => {
		if (dataCarrousel.length === 0) {
			setDataCarrousel(getProgramasCarrousel(maestrias, doctorados));
		}
	}, [dataCarrousel]);

	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			id="ofertaEducativa"
			className="text-negro py-14">
			<motion.div
				variants={entradaCardScroll}
				className="container mx-auto px-3 grid-cols-12 gap-x-4 grid">
				<h1 className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 text-4xl font-bold">
					Nuestra oferta educativa
				</h1>
				<div className="col-start-2 col-span-10 md:col-start-2 md:col-span-3">
					<p className="mt-6">
						Conoce más de los programas disponibles y sé parte de
						nuestra comunidad sanmarquina.
					</p>
					<ul className="font-bold mt-6">
						<li className="text-lg hover:text-secondary cursor-pointer duration-400">
							<Link href="/maestrias">
								<a className="flex items-center justify-start">
									<BsArrowRight />
									<span id="maestrias" className="pl-3">
										Maestrías
									</span>
								</a>
							</Link>
						</li>
						<li className="text-lg mt-6 hover:text-secondary cursor-pointer duration-400">
							<Link href="/doctorados">
								<a className="flex items-center justify-start">
									<BsArrowRight />
									<span id="doctorados" className="pl-3">
										Doctorados
									</span>
								</a>
							</Link>
						</li>
						<li className="text-lg mt-6 hover:text-secondary cursor-pointer duration-400">
							<Link href="/especialidades">
								<a className="flex items-center justify-start">
									<BsArrowRight />
									<span id="doctorados" className="pl-3">
										Especialidades
									</span>
								</a>
							</Link>
						</li>
						<li className="text-lg mt-6 hover:text-secondary cursor-pointer duration-400">
							<Link href="/diplomados">
								<a className="flex items-center justify-start">
									<BsArrowRight />
									<span id="doctorados" className="pl-3">
										Diplomados
									</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
				{!dataCarrousel && <>loading</>}

				{dataCarrousel.length > 0 && (
					<div className="col-start-1 col-span-12 md:col-start-5 md:col-span-7 relative">
						<CarouselProgramas programas={dataCarrousel} />
					</div>
				)}
			</motion.div>
		</motion.section>
	);
};

export default OfertaEducativa;
