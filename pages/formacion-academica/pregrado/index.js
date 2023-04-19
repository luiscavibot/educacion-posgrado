import Link from 'next/link';
import Image from 'next/future/image';
import React, { useState } from 'react';

import { BASE_URL, SLUG_CARRERA } from '../../../config/consts';

import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import Boton from '../../../components/shared/Boton';
import { BannerAdmision } from '../../../components/admision/BannerAdmision';

const Index = ({ CarrerasEnProceso }) => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<>
			<PrincipalLayout>
				<ul className="px-4 md:px-0 col-span-full text-tertiary text-sm mb-5">
					<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
						Formación académica
					</li>
					<li className="inline text-negro">Pregrado</li>
				</ul>
				<div className="px-4 md:px-0 col-span-full mb-8">
					<p className="title-page mb-6 text-secondary">Pregrado</p>
					<p>
						Somos reconocidos por nuestro elevado nivel profesional
						y nuestra contribución al conocimiento en las áreas de
						Química, Ingeniería Química e Ingeniería Agroindustrial.
					</p>
				</div>

				{CarrerasEnProceso && isOpen && (
					<BannerAdmision setIsOpen={setIsOpen} />
				)}

				<div className="px-4 md:px-0 col-span-full mb-10">
					<Link href="/formacion-academica/pregrado/ingenieria-quimica">
						<div className="cursor-pointer max-w-[917px] mx-auto">
							<div className="relative rounded-lg overflow-hidden md:flex md:justify-end mb-8">
								<div className="absolute h-full w-full -z-10">
									<Image
										src={
											'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/formacion-academica/pregrado/eap-ingenieria-quimica-facultad-unmsm-1.4.jpg'
										}
										className="object-center object-cover"
										fill
										quality={100}
										alt="vocacion1"
										priority
										sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-l from-tertiary via-secondary/50 to-tertiary/50 md:to-transparente -z-10"></div>
								<div className="text-blanco md:max-w-[338px] md:mx-20 py-16">
									<p className="font-bold mb-4 text-xl text-center md:text-left">
										Escuela Profesional
										<br />
										de Ingeniería Química
									</p>
									<p className="mb-6 hidden md:block">
										Garantizamos contribuir en la formación
										de profesionales con competencias
										sólidas en la industria química,
										considerando aspectos técnicos, sociales
										y medioambientales.
									</p>
									<div className="hidden md:block">
										<Boton
											text="Leer más"
											primary
											link={
												'/formacion-academica/pregrado/ingenieria-quimica'
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</Link>
					<Link href="/formacion-academica/pregrado/quimica">
						<div className="cursor-pointer max-w-[917px] mx-auto">
							<div className="relative rounded-lg overflow-hidden mb-8">
								<div className="absolute h-full w-full -z-10">
									<Image
										src={
											'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/formacion-academica/pregrado/eap-quimica-facultad-unmsm-1.4.jpg'
										}
										className="object-center object-cover"
										fill
										quality={100}
										priority
										alt="vocacion1"
										sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-r from-tertiary via-secondary/50 to-tertiary/50 md:to-transparente -z-10"></div>
								<div className="text-blanco md:max-w-[276px] md:mx-20 py-16">
									<p className="font-bold mb-4 text-xl text-center md:text-left">
										Escuela Profesional
										<br />
										de Química
									</p>
									<p className="mb-6 hidden md:block">
										Nuestra misión es promover la formación
										de profesionales con amplia experiencia
										en las áreas de matemáticas, física,
										química aplicados a los procesos
										industriales.
									</p>
									<div className="hidden md:block">
										<Boton
											text="Leer más"
											primary
											link={
												'/formacion-academica/pregrado/quimica'
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</Link>
					<Link href="/formacion-academica/pregrado/ingenieria-agroindustrial">
						<div className="cursor-pointer max-w-[917px] mx-auto">
							<div className="relative rounded-lg overflow-hidden md:flex md:justify-end mb-8">
								<div className="absolute h-full w-full -z-10">
									<Image
										src={
											'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/formacion-academica/pregrado/eap-ingenieria-agroindustrial-facultad-unmsm-1.4.jpg'
										}
										className="object-center object-cover"
										fill
										quality={100}
										alt="vocacion1"
										priority
										sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-l from-tertiary via-secondary/50 to-tertiary/50 md:to-transparente -z-10"></div>
								<div className="text-blanco md:max-w-[338px] md:mx-20 py-16">
									<p className="font-bold mb-4 text-center md:text-left text-xl">
										Escuela Profesional de
										<br />
										Ingeniería Agroindustrial
									</p>
									<p className="mb-6 hidden md:block">
										Nos comprometemos a cooperar en el
										desarrollo agroindustrial nacional a
										través de la formación integral de
										profesionales competentes con
										responsabilidad social.
									</p>
									<div className="hidden md:block">
										<Boton
											text="Leer más"
											primary
											link={
												'/formacion-academica/pregrado/ingenieria-agroindustrial'
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</PrincipalLayout>
		</>
	);
};

export async function getStaticProps() {
	const resCarrerasPregrado = await fetch(
		`${BASE_URL}/carreras/${SLUG_CARRERA}`
	);
	const carrerasPregrado = await resCarrerasPregrado.json();

	const CarrerasEnProceso = carrerasPregrado.some(
		(carrera) => carrera.en_proceso === true
	);

	// console.log(CarrerasEnProceso);

	return {
		props: {
			CarrerasEnProceso,
		},
	};
}

export default Index;
