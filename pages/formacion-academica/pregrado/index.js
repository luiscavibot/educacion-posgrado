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
						Somos la primera institución a nivel universitario en el
						Perú en formar profesionales especializados, con una
						cultura de calidad, divulgación científica,
						responsabilidad social y comprometidos con el desarrollo
						sostenible del país.
					</p>
				</div>

				{CarrerasEnProceso && isOpen && (
					<BannerAdmision setIsOpen={setIsOpen} />
				)}

				<div className="px-4 md:px-0 col-span-full mb-10">
					<Link href="/formacion-academica/pregrado/quimica-e-ingenieria-quimica">
						<div className="cursor-pointer max-w-[917px] mx-auto">
							<div className="relative rounded-lg overflow-hidden mb-8">
								<div className="absolute h-full w-full -z-10">
									<Image
										src={
											'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/minihome-farmacia-bioquimica-pregrado.jpg'
										}
										className="object-center object-cover"
										fill
										quality={100}
										alt="vocacion1"
										priority
										sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-r from-tertiary via-secondary/50 to-tertiary/50 md:to-transparente -z-10"></div>
								<div className="text-blanco md:max-w-[338px] md:mx-20 py-16">
									<p className="font-bold mb-4 text-xl text-center md:text-left">
										Escuela Profesional de
										<br />
										Farmacia y Bioquímica
									</p>
									<p className="mb-6 hidden md:block">
										Tenemos como propósito principal
										contribuir al desarrollo del país,
										mediante la formación de profesionales e
										investigadores químicos farmacéuticos de
										nivel superior.
									</p>
									<div className="hidden md:block">
										<Boton
											text="Leer más"
											primary
											link={
												'/formacion-academica/pregrado/quimica-e-ingenieria-quimica'
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</Link>
					<Link href="/formacion-academica/pregrado/ciencias-de-los-alimentos">
						<div className="cursor-pointer max-w-[917px] mx-auto">
							<div className="relative rounded-lg overflow-hidden md:flex md:justify-end mb-8">
								<div className="absolute h-full w-full -z-10">
									<Image
										src={
											'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/minihome-ciencias-alimentos-invertido.jpg'
										}
										className="object-center object-cover"
										fill
										quality={100}
										priority
										alt="vocacion1"
										sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-l from-tertiary via-secondary/50 to-tertiary/50 md:to-transparente -z-10"></div>
								<div className="text-blanco md:max-w-[276px] md:mx-20 py-16">
									<p className="font-bold mb-4 text-xl text-center md:text-left">
										Escuela Profesional de
										<br />
										Ciencias de los Alimentos
									</p>
									<p className="mb-6 hidden md:block">
										Nuestro objetivo es guiar a
										profesionales en la ciencia y tecnología
										de los alimentos para fortalecer los
										sistemas de investigación y de
										producción alimentaria actuales.
									</p>
									<div className="hidden md:block">
										<Boton
											text="Leer más"
											primary
											link={
												'/formacion-academica/pregrado/ciencias-de-los-alimentos'
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</Link>
					<Link href="/formacion-academica/pregrado/toxicologia">
						<div className="cursor-pointer max-w-[917px] mx-auto">
							<div className="relative rounded-lg overflow-hidden mb-8">
								<div className="absolute h-full w-full -z-10">
									<Image
										src={
											'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/minihome-toxicologia-pregrado.jpg'
										}
										className="object-center object-cover"
										fill
										quality={100}
										alt="vocacion1"
										priority
										sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-r from-tertiary via-secondary/50 to-tertiary/50 md:to-transparente -z-10"></div>
								<div className="text-blanco md:max-w-[338px] md:mx-20 py-16">
									<p className="font-bold mb-4 text-center md:text-left text-xl">
										Escuela Profesional de
										<br />
										Toxicología
									</p>
									<p className="mb-6 hidden md:block">
										Nuestra finalidad es generar potencial
										humano idóneo en los campos de la
										toxicología y la evaluación de la
										contaminación ambiental en un nivel
										científico, técnico y ético.
									</p>
									<div className="hidden md:block">
										<Boton
											text="Leer más"
											primary
											link={
												'/formacion-academica/pregrado/toxicologia'
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
