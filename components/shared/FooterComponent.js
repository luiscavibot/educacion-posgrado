import React from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

import UbicacionStroke from './../icons/UbicacionStroke';
import TelefonoStroke from './../icons/TelefonoStroke';

const FooterComponent = ({ inHome }) => {
	return (
		<footer className="bg-blanco">
			<div className={`${inHome ? 'bg-homebg2/40' : 'hidden'}`}>
				<div className="h-4 md:h-[50px] overflow-hidden">
					<svg
						viewBox="0 0 500 150"
						preserveAspectRatio="none"
						className="h-full w-full">
						<path
							d="M-0.27,102.14 C143.06,-33.03 340.00,-34.02 501.41,102.14 L500.00,150.00 L-0.27,150.50 Z"
							className="stroke-none fill-footerOne"></path>
					</svg>
				</div>
			</div>
			<div className="bg-footerOne">
				<div className="container mx-auto px-3 grid-cols-12 gap-x-4 md:grid block pt-20 pb-6">
					<div className="lg:col-start-2 lg:col-span-10 text-blanco grid grid-cols-2 md:grid-cols-[281px_auto_auto_auto_auto] md:grid-rows-1 gap-x-4 md:gap-x-10 gap-y-14 md:gap-y-0 px-4 md:px-0">
						<div className="col-span-2 md:col-span-1">
							<div className="grid grid-cols-[84px_auto] gap-x-4 gap-y-[18px] w-full mb-3">
								<Image
									src="https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/logo_unmsm_2_8e2e045cd4.png"
									alt="logo de la UNMSM"
									width={84}
									height={103}
								/>
								<div>
									<p className="font-bold mb-2">
										Facultad de Química e Ingeniería Química
									</p>
									<p className="text-sm">
										<b>Dirección:</b> Av. Carlos Germán
										Amezaga #375 - Cercado de Lima (
										<a
											href="https://goo.gl/maps/6jXz2gUmn5QKXWdh9"
											target="_blank"
											className="font-bold underline"
											rel="noopener noreferrer">
											ver en el mapa
										</a>
										)
									</p>
								</div>
							</div>
						</div>
						<div className="">
							{/* <div className="col-span-1 md:block">
								<p className="mb-6">
									<Link href="/formacion-academica/admision">
										<a>Admisión</a>
									</Link>
								</p>
								<p className="mb-6">
									<Link href="/formacion-academica/pregrado">
										<a>Pregrado</a>
									</Link>
								</p>
								<p className="">
									<Link href="/formacion-academica/posgrado">
										<a>Posgrado</a>
									</Link>
								</p>
							</div> */}
							<p className="mb-6">
								<b>Teléfono:</b> (01) 6197000
								<br />
								Anexo: 1209
							</p>

							<p className="mb-6">
								<Link href="/tramites">
									<a>Trámites</a>
								</Link>
							</p>
						</div>
						<div className="">
							<p className="mb-6">
								<Link href="/admision/pregrado">
									<a>Admisión Pregrado</a>
								</Link>
							</p>
							<p className="mb-6">
								<Link href="/admision/posgrado">
									<a>Admisión Posgrado</a>
								</Link>
							</p>
							<p className="">
								<Link href="/comunicados">
									<a>Comunicados</a>
								</Link>
							</p>
						</div>
						<div className="">
							<p className="mb-6">
								<Link href="/formacion-academica/pregrado">
									<a>Pregrado</a>
								</Link>
							</p>
							<p className="mb-6">
								<Link href="/formacion-academica/posgrado">
									<a>Posgrado</a>
								</Link>
							</p>
							<p className="">
								<Link href="/transparencia">
									<a>Transparencia</a>
								</Link>
							</p>
						</div>
						<div className="">
							<p className="mb-6">
								<Link href="/nosotros/autoridades-y-organos">
									<a>Autoridades</a>
								</Link>
							</p>
							<p className="">
								<Link href="/directorio">
									<a>Directorio</a>
								</Link>
							</p>
						</div>
					</div>
				</div>
				<p className="text-center text-blanco/25 mt-10 md:mt-[88px] py-6 text-xs">
					Diseñado, desarrollado e implementado por el equipo especial
					web | Oficina General de Imagen e Institucional de la
					Universidad Nacional Mayor San Marcos
				</p>
			</div>
		</footer>
	);
};

export default FooterComponent;
