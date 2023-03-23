import React from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

import UbicacionStroke from './../icons/UbicacionStroke';
import TelefonoStroke from './../icons/TelefonoStroke';

const FooterComponent = () => {
	return (
		<footer className="bg-footerOne">
			<div className="container mx-auto px-3 grid-cols-12 gap-x-4 md:grid block pt-20 pb-6">
				<div className="md:col-start-2 md:col-span-10 text-blanco grid grid-cols-2 md:grid-cols-[auto_auto_auto_auto] md:grid-rows-1 gap-x-4 md:gap-x-10 gap-y-14 md:gap-y-0 px-14">
					<div className="col-span-2 md:col-span-1 md:max-w-[225px]">
						<div className="grid grid-cols-[50px_auto] gap-x-4 gap-y-[18px] w-full mb-3">
							<Image
								src="https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/logo_unmsm_2_8e2e045cd4.png"
								alt="logo de la UNMSM"
								width={50}
								height={61}
							/>
							<div>
								<p className="font-bold mb-2">
									Facultad de Química e Ingeniería Química
								</p>
								<p className="font-semibold text-xs">
									Universidad Nacional Mayor de San Marcos
								</p>
							</div>
						</div>
						<p className="text-xs">
							Somos una institución pionera y referente en la
							formación de profesionales farmacéuticos a nivel
							nacional
						</p>
					</div>
					<div className="">
						<div className="col-span-1 md:block">
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
						</div>

						<p className="mb-6">
							<Link href="/tramites">
								<a>Trámites</a>
							</Link>
						</p>
					</div>
					<div className="">
						{/* <p className="mb-6">
							<Link href="/">
								<a>Historia</a>
							</Link>
						</p> */}
						{/* <p className="mb-6">
							<a
								href=""
								className="inline-block"
								onClick={(e) => {
									e.preventDefault();
									window.open(
										'https://patch-knot-df8.notion.site/FFB-Informaci-n-acad-mica-9a6b64da3bf144b29098948e6c87bd75',
										'_blank'
									);
								}}>
								Información
								<br />
								académica
							</a>
						</p> */}
						<p className="mb-6">
							<Link href="/nosotros/autoridades-y-organos">
								<a>Autoridades y órganos de control</a>
							</Link>
						</p>
						<p className="">
							<Link href="/transparencia">
								<a>Transparencia</a>
							</Link>
						</p>
					</div>
					<div className="col-span-2 md:col-span-1">
						<div className="mb-7">
							<p className="mb-1">
								<span>
									<UbicacionStroke className="fill-blanco inline relative -top-[1px] mr-1" />
								</span>
								<span className="font-bold">Ubicación</span>
							</p>
							<p>Jr. Puno N.° 1002, Lima, Perú</p>
						</div>

						<div className="mb-7">
							<p className="mb-1">
								<span>
									<TelefonoStroke className="fill-blanco inline relative -top-[1px] mr-1" />
								</span>
								<span className="font-bold">Teléfono</span>
							</p>
							<p>
								(+51) 619 7000 (
								<Link href="/directorio">
									<a className="font-bold">Ver directorio</a>
								</Link>
								)
							</p>
						</div>
					</div>
				</div>
			</div>
			<p className="col-start-3 col-span-8 text-center text-blanco mt-10 md:mt-28 py-3 text-xs bg-negroPuro/40">
				Diseñado, desarrollado e implementado por el Equipo Especial Web
				de la Oficina General de Imagen Institucional-UNMSM-2022
			</p>
		</footer>
	);
};

export default FooterComponent;
