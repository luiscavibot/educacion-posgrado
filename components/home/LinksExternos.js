import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';

import BirreteStroke from '../icons/BirreteStroke';
import RevistaStroke from '../icons/RevistaStroke';
import EdificioBibliotecaStroke from '../icons/EdificioBibliotecaStroke';
import LupaStroke from '../icons/LupaStroke';
import HojaLupaStroke from '../icons/HojaLupaStroke';
import ManoCorazon from '../icons/ManoCorazon';
import LibroCintaStroke2 from '../icons/LibroCintaStroke2';
import GrupoPersonasTres from '../icons/GrupoPersonasTres';

const LinksExternos = () => {
	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			className="bg-blanco mb-14 md:mb-18 animate__animated animate__fadeInUp">
			<motion.div
				variants={entradaCardScroll}
				className="container mx-auto px-4 md:grid-cols-12 gap-x-4 md:grid">
				<div className="col-start-2 col-span-10">
					{/* <div className="w-full lg:w-auto lg:max-w-[1022px] md:mx-auto grid grid-cols-2 lg:grid-cols-4 place-items-center gap-x-4 gap-y-8 lg:gap-x-[60px] mb-8"> */}
					<div className="w-full lg:w-auto lg:max-w-[1022px] md:mx-auto grid grid-cols-2 lg:grid-cols-4 place-items-center gap-x-4 gap-y-8 lg:gap-x-[60px]">
						<Link href="/formacion-academica/posgrado">
							<a className="group bg-tertiary hover:bg-secondary transition-colors duration-300 text-center rounded-lg w-full md:w-[211px] h-[190px] flex flex-col items-center justify-center px-5 cursor-pointer">
								<div>
									<BirreteStroke className="fill-blanco group-hover:fill-blanco transition-colors duration-300 w-14" />
								</div>
								<p className="text-blanco text-xl">Posgrado</p>
							</a>
						</Link>
						<a
							onClick={() => {
								window.open(
									'https://revistasinvestigacion.unmsm.edu.pe/index.php/farma',
									'_blank'
								);
							}}
							// onClick={(e) => {
							// 	e.preventDefault();
							// }}
							className="group bg-tertiary hover:bg-secondary transition-colors duration-300 text-center rounded-lg w-full md:w-[211px] h-[190px] flex flex-col items-center justify-center px-5 cursor-pointer">
							<div>
								<RevistaStroke className="fill-blanco group-hover:fill-blanco transition-colors duration-300 w-14" />
							</div>
							<p className="text-blanco text-xl">
								Revista “Ciencia e investigación”
							</p>
						</a>
						<a
							onClick={() => {
								window.open(
									'https://sisbib.unmsm.edu.pe/',
									'_blank'
								);
							}}
							// onClick={(e) => {
							// 	e.preventDefault();
							// }}
							className="group bg-tertiary hover:bg-secondary transition-colors duration-300 text-center rounded-lg w-full md:w-[211px] h-[190px] flex flex-col items-center justify-center px-5 cursor-pointer">
							<div>
								<EdificioBibliotecaStroke className="fill-blanco group-hover:fill-blanco transition-colors duration-300 w-14" />
							</div>
							<p className="text-blanco text-xl">
								Sistemas de bibliotecas
							</p>
						</a>
						<a
							onClick={() => {
								window.open(
									'https://sisbib.unmsm.edu.pe/?page=2',
									'_blank'
								);
							}}
							className="group bg-tertiary hover:bg-secondary transition-colors duration-300 text-center rounded-lg w-full md:w-[211px] h-[190px] flex flex-col items-center justify-center px-5 cursor-pointer">
							<div>
								<LupaStroke className="fill-blanco group-hover:fill-blanco transition-colors duration-300 w-14" />
							</div>
							<p className="text-blanco text-xl">
								Recursos de investigación
							</p>
						</a>
					</div>
					{/* <div className="w-full grid grid-cols-2 gap-x-4 gap-y-8 md:flex justify-between">
						<a
							onClick={() => {
								window.open(
									'https://revistasinvestigacion.unmsm.edu.pe/index.php/repiie',
									'_blank'
								);
							}}
							// onClick={(e) => {
							// 	e.preventDefault();
							// }}
							className="group bg-tertiary hover:bg-secondary transition-colors duration-300 text-center rounded-lg w-full md:w-[211px] h-[190px] flex flex-col items-center justify-center px-5 cursor-pointer">
							<div>
								<ManoCorazon className="fill-blanco group-hover:fill-blanco transition-colors duration-300 w-14" />
							</div>
							<p className="text-blanco text-xl">CERSEU</p>
						</a>
						<a
							// onClick={() => {
							// 	window.open(
							// 		'https://quipucamayoc.unmsm.edu.pe/PortalEmpleo/#/login/alumno',
							// 		'_blank'
							// 	);
							// }}
							onClick={(e) => {
								e.preventDefault();
							}}
							className="group bg-tertiary hover:bg-secondary transition-colors duration-300 text-center rounded-lg w-full md:w-[211px] h-[190px] flex flex-col items-center justify-center px-5 cursor-pointer">
							<div>
								<GrupoPersonasTres className="fill-blanco group-hover:fill-blanco transition-colors duration-300 w-14" />
							</div>
							<p className="text-blanco text-xl">Comunidad</p>
						</a>
						<a
							// onClick={() => {
							// 	window.open(
							// 		'https://sisbib.unmsm.edu.pe/',
							// 		'_blank'
							// 	);
							// }}
							onClick={(e) => {
								e.preventDefault();
							}}
							className="group bg-tertiary hover:bg-secondary transition-colors duration-300 text-center rounded-lg w-full md:w-[211px] h-[190px] flex flex-col items-center justify-center px-5 cursor-pointer">
							<div>
								<HojaLupaStroke className="fill-blanco group-hover:fill-blanco transition-colors duration-300 w-14" />
							</div>
							<p className="text-blanco text-xl">Transparencia</p>
						</a>
						<a
							// onClick={() => {
							// 	window.open(
							// 		'https://quipucamayoc.unmsm.edu.pe/PortalEmpleo/#/login/alumno',
							// 		'_blank'
							// 	);
							// }}
							onClick={(e) => {
								e.preventDefault();
							}}
							className="group bg-tertiary hover:bg-secondary transition-colors duration-300 text-center rounded-lg w-full md:w-[211px] h-[190px] flex flex-col items-center justify-center px-5 cursor-pointer">
							<div>
								<LibroCintaStroke2 className="fill-blanco group-hover:fill-blanco transition-colors duration-300 w-14" />
							</div>
							<p className="text-blanco text-xl">
								Educación continua
							</p>
						</a>
					</div> */}
				</div>
			</motion.div>
		</motion.section>
	);
};

export default LinksExternos;
