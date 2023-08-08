import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';

import BirreteStroke from '../icons/BirreteStroke';
import RevistaStroke from '../icons/RevistaStroke';
import EdificioBibliotecaStroke from '../icons/EdificioBibliotecaStroke';
import LupaStroke from '../icons/LupaStroke';
import DocumentClipIcon from '../icons/DocumentoClipIcon';
import HojaLupaStroke from '../icons/HojaLupaStroke';
import ManoCorazon from '../icons/ManoCorazon';
import LibroCintaStroke2 from '../icons/LibroCintaStroke2';
import GrupoPersonasTres from '../icons/GrupoPersonasTres';
import AdmisionHomeIcon from '../icons/AdmisionHomeIcon';
import BlogGestionPublicaHomeIcon from '../icons/BlogGestionPublicaHomeIcon';

const LinksExternos = () => {
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
					{/* <div className="w-full lg:w-auto lg:max-w-[1022px] md:mx-auto grid grid-cols-2 lg:grid-cols-4 place-items-center gap-x-4 gap-y-8 lg:gap-x-[60px] mb-8"> */}
					<div className="w-full lg:w-auto lg:max-w-[1022px] md:mx-auto grid grid-cols-2 lg:grid-cols-5 place-items-center gap-x-4 gap-y-8 lg:gap-x-[60px]">
						<Link href="/admision?programa=maestria">
							<a className="group bg-secondary hover:bg-primary transition-colors duration-300 text-center rounded-lg w-full md:w-[188px] h-[140px] flex flex-col items-center justify-center px-5 cursor-pointer">
								<div>
									<AdmisionHomeIcon className="fill-blanco group-hover:fill-blanco transition-colors duration-300 h-9" />
								</div>
								<p className="text-blanco text-lg">
									Admisión de Mestrías
								</p>
							</a>
						</Link>
						<Link href="/investigacion/actividad-cientifica">
							<a className="group bg-secondary hover:bg-primary transition-colors duration-300 text-center rounded-lg w-full md:w-[188px] h-[140px] flex flex-col items-center justify-center px-5 cursor-pointer">
								<div>
									<LupaStroke className="fill-blanco group-hover:fill-blanco transition-colors duration-300 h-9" />
								</div>
								<p className="text-blanco text-lg">
									Actividad científica
								</p>
							</a>
						</Link>

						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="group bg-secondary hover:bg-primary transition-colors duration-300 text-center rounded-lg w-full md:w-[188px] h-[140px] flex flex-col items-center justify-center px-5 cursor-pointer"
						>
							<div>
								<LibroCintaStroke2 className="fill-blanco group-hover:fill-blanco transition-colors duration-300 h-11" />
							</div>
							<p className="text-blanco text-lg">Publicaciones</p>
						</a>

						<Link href="/blog-gestion-publica">
							<a className="group bg-secondary hover:bg-primary transition-colors duration-300 text-center rounded-lg w-full md:w-[188px] h-[140px] flex flex-col items-center justify-center px-5 cursor-pointer">
								<div>
									<BlogGestionPublicaHomeIcon className="fill-blanco group-hover:fill-blanco transition-colors duration-300 h-9" />
								</div>
								<p className="text-blanco text-lg">
									Blog de Gestión Pública
								</p>
							</a>
						</Link>

						<Link href="/nosotros/transparencia">
							<a className="group bg-secondary hover:bg-primary transition-colors duration-300 text-center rounded-lg w-full md:w-[188px] h-[140px] flex flex-col items-center justify-center px-5 cursor-pointer">
								<div>
									<HojaLupaStroke className="fill-blanco group-hover:fill-blanco transition-colors duration-300 h-9" />
								</div>
								<p className="text-blanco text-lg">
									Transparencia
								</p>
							</a>
						</Link>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default LinksExternos;
