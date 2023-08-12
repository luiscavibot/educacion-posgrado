import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';

import VerMasIcon from '../icons/VerMasIcon';

const LinksInternos = () => {
	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			className="bg-blanco mb-14 md:mb-18 animate__animated animate__fadeInUp"
		>
			<motion.div
				variants={entradaCardScroll}
				className="container mx-auto px-4 md:grid-cols-12 gap-x-4 md:grid"
			>
				<div className="col-start-2 col-span-10">
					<div className="flex gap-[18px] flex-col lg:flex-row">
						<div className="rounded-lg bg-BlogGestionPublica bg-cover overflow-hidden w-full">
							<div className="bg-Gradient px-6 py-8 text-blanco h-full flex items-center">
								<div>
									<div className="text-[2rem] font-bold leading-[normal] mb-3 flex gap-x-3">
										<span>
											Blog de Gestión
											<br />
											Pública
										</span>
										<Link
											href="/blog-gestion-publica"
											passHref
										>
											<a className="grid place-items-center rounded-lg w-9 h-9 bg-primary hover:bg-primary-hover transition-colors duration-300">
												<div className="w-3 inline-block">
													<VerMasIcon className="fill-blanco h-full" />
												</div>
											</a>
										</Link>
									</div>
									<p className="text-base leading-[150%] w-1/2">
										Descubre nuestros foros y webinars
										internacionales sobre temas
										coyunturales. Amplía tus conocimientos
										del país y el mundo.
									</p>
								</div>
							</div>
						</div>
						<div className="rounded-lg bg-Posdoctorado bg-cover overflow-hidden w-full">
							<div className="bg-Gradient px-6 py-8 text-blanco h-full flex items-center">
								<div>
									<div className="text-[2rem] font-bold leading-[normal] mb-3 flex gap-x-3">
										<span>Posdoctorado</span>
										<Link
											href="/programas/posdoctorado"
											passHref
										>
											<a className="grid place-items-center rounded-lg w-9 h-9 bg-primary hover:bg-primary-hover transition-colors duration-300">
												<div className="w-3 inline-block">
													<VerMasIcon className="fill-blanco h-full" />
												</div>
											</a>
										</Link>
									</div>
									<p className="text-base leading-[150%] w-1/2">
										Únete a nuestra comunidad de
										especialistas y destaca como
										investigador publicando en revistas de
										alto impacto.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default LinksInternos;
