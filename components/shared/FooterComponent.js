import React from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

import UbicacionStroke from './../icons/UbicacionStroke';
import TelefonoStroke from './../icons/TelefonoStroke';
import Logo from '../icons/Logo';
import AsideSocialNetworks from './AsideSocialNetworks';

const FooterComponent = ({ inHome }) => {
	return (
		<footer className="bg-blanco">
			<div className={`${inHome ? 'bg-homebg2/40' : 'hidden'}`}>
				<div className="h-4 md:h-[50px] overflow-hidden">
					<svg
						viewBox="0 0 500 150"
						preserveAspectRatio="none"
						className="h-full w-full"
					>
						<path
							d="M-0.27,102.14 C143.06,-33.03 340.00,-34.02 501.41,102.14 L500.00,150.00 L-0.27,150.50 Z"
							className="stroke-none fill-footerOne"
						></path>
					</svg>
				</div>
			</div>
			<div className="bg-footerOne">
				<div className="container mx-auto px-4 grid-cols-12 gap-x-4 lg:grid block pt-20 pb-10 md:pb-[88px]">
					<div className="lg:col-start-2 lg:col-span-10 text-blanco grid grid-cols-2 lg:grid-cols-[281px_auto_auto_auto_auto] gap-x-4 lg:gap-x-10 gap-y-14 lg:gap-y-0 px-4 lg:px-0">
						<div className="col-span-2 lg:col-span-1">
							<div className="w-full mb-3">
								<Logo className="h-24 w-full mb-3" />

								<p className="text-sm mb-2">
									<b>Dirección:</b> Av. Carlos Germán Amezaga
									#375 - Cercado de Lima (
									<a
										href="https://goo.gl/maps/6jXz2gUmn5QKXWdh9"
										target="_blank"
										className="font-bold underline"
										rel="noopener noreferrer"
									>
										ver en el mapa
									</a>
									)
								</p>

								<p className="text-sm">
									<b>Teléfono:</b> (01) 6197000 Anexo
								</p>
							</div>
						</div>
						<div className="">
							<p className="mb-6">
								<Link href="/admision">
									<a>Admisión</a>
								</Link>
							</p>

							<p className="mb-6">
								<Link href="/actualidad/agenda-publica">
									<a>Actualidad</a>
								</Link>
							</p>
						</div>
						<div className="">
							<p className="mb-6">
								<Link href="/programas/maestrias">
									<a>Programas</a>
								</Link>
							</p>
							{/* <p className="mb-6">
								<Link href="/admision/posgrado">
									<a>Admisión Posgrado</a>
								</Link>
							</p>
							<p className="">
								<Link href="/comunicados">
									<a>Comunicados</a>
								</Link>
							</p> */}
						</div>
						<div className="">
							<p className="mb-6">
								<Link href="/investigacion/actividad-cientifica">
									<a>Investigación</a>
								</Link>
							</p>
							<p className="mb-6">
								<Link href="/tramites">
									<a>Trámites</a>
								</Link>
							</p>
							{/* <p className="">
								<Link href="/transparencia">
									<a>Transparencia</a>
								</Link>
							</p> */}
						</div>
						<div className="">
							<p className="mb-6">
								<Link href="/comunidad/informacion-academica">
									<a>Comunidad</a>
								</Link>
							</p>
							<p className="">
								<Link href="/tramites/preguntas-frecuentes">
									<a>Preguntas frecuentes</a>
								</Link>
							</p>
						</div>
					</div>
				</div>
				{/* <p className="text-center text-blanco/25 px-4 py-6 text-xs">
					Diseñado, desarrollado e implementado por el equipo especial
					web | Oficina General de Imagen e Institucional de la
					Universidad Nacional Mayor San Marcos
				</p> */}
			</div>
		</footer>
	);
};

export default FooterComponent;
