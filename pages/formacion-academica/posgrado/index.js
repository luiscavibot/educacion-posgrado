import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import { BASE_URL, SLUG_CARRERA } from '../../../config/consts';

import { BannerAdmision } from '../../../components/admision/BannerAdmision';
import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';

const Index = ({ CarrerasEnProceso }) => {
	const [isOpenBanner, setIsOpenBanner] = useState(true);
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
					<li className="inline text-negro">Unidad de Posgrado</li>
				</ul>
				<div className="px-4 md:px-0 col-span-full mb-8">
					<p className="title-page mb-6 text-secondary">
						Unidad de Posgrado
					</p>
					<p>
						Nuestros programas de maestría, doctorado y segundas
						especialidades profundizan en la experiencia educacional
						interdisciplinaria de los últimos avances científicos y
						tecnológicos; con el fin de formar profesionales
						íntegros, globalmente competitivos y comprometidos con
						la construcción de una sociedad eficiente y sostenible.
					</p>
				</div>

				{isOpenBanner && (
					<BannerAdmision setIsOpenBanner={setIsOpenBanner} />
				)}

				<div className="px-4 md:px-0 col-span-full mb-10">
					<div className="grid place-items-center">
						<div className="inline-grid grid-cols-1 md:grid-cols-[330px_330px] gap-5 md:gap-11 w-full md:w-auto">
							<Link
								href={
									'/formacion-academica/posgrado/doctor-en-farmacia-y-bioquimica'
								}>
								<a className="relative rounded-lg overflow-hidden w-full md:w-[330px] h-[262px]">
									<div className="absolute h-full w-full -z-10">
										<Image
											src={
												'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/doctorado-en-farmacia-y-bioquimica.jpg'
											}
											objectFit="cover"
											layout="fill"
											quality={100}
											alt="vocacion1"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 to-secondary/5 -z-10"></div>
									<div className="text-blanco absolute inset-x-9 bottom-7">
										<p className="font-bold">
											<span className="text-xs">
												Doctorado en
											</span>
											<br />
											<span className="text-xl">
												Farmacia y Bioquímica
											</span>
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={
									'/formacion-academica/posgrado/productos-naturales-y-biocomercio'
								}>
								<a className="relative rounded-lg overflow-hidden w-full md:w-[330px] h-[262px]">
									<div className="absolute h-full w-full -z-10">
										<Image
											src={
												'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/maestria-en-productos-naturales-y-biocomercio.jpg'
											}
											objectFit="cover"
											layout="fill"
											quality={100}
											alt="vocacion1"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/5 -z-10"></div>
									<div className="text-blanco absolute inset-x-9 bottom-7">
										<p className="font-bold">
											<span className="text-xs">
												Maestría en
											</span>
											<br />
											<span className="text-xl">
												Productos Naturales y
												Biocomercio
											</span>
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={
									'/formacion-academica/posgrado/farmacologia-con-mencion-en-farmacologia-experimental'
								}>
								<a className="relative rounded-lg overflow-hidden w-full md:w-[330px] h-[262px]">
									<div className="absolute h-full w-full -z-10">
										<Image
											src={
												'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/maestria-en-ciencias-farmaceuticas-con-mencion-en-farmacolog%C3%ADia-experimental.jpg'
											}
											objectFit="cover"
											layout="fill"
											quality={100}
											alt="vocacion1"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/5 -z-10"></div>
									<div className="text-blanco absolute inset-x-9 bottom-7">
										<p className="font-bold">
											<span className="text-xs">
												Maestría en
											</span>
											<br />
											<span className="text-xl">
												Farmacología con mención en
												Farmacología Experimental
											</span>
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={
									'/formacion-academica/posgrado/atencion-farmaceutica'
								}>
								<a className="relative rounded-lg overflow-hidden w-full md:w-[330px] h-[262px]">
									<div className="absolute h-full w-full -z-10">
										<Image
											src={
												'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/maestria-en-atencion-farmaceutica.jpg'
											}
											objectFit="cover"
											layout="fill"
											quality={100}
											alt="vocacion1"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/5 -z-10"></div>
									<div className="text-blanco absolute inset-x-9 bottom-7">
										<p className="font-bold">
											<span className="text-xs">
												Maestría en
											</span>
											<br />
											<span className="text-xl">
												Atención Farmacéutica
											</span>
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={
									'/formacion-academica/posgrado/ciencia-de-los-alimentos'
								}>
								<a className="relative rounded-lg overflow-hidden w-full md:w-[330px] h-[262px]">
									<div className="absolute h-full w-full -z-10">
										<Image
											src={
												'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/maestria-en-ciencia-de-los-alimentos.jpg'
											}
											objectFit="cover"
											layout="fill"
											quality={100}
											alt="vocacion1"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/5 -z-10"></div>
									<div className="text-blanco absolute inset-x-9 bottom-7">
										<p className="font-bold">
											<span className="text-xs">
												Maestría en
											</span>
											<br />
											<span className="text-xl">
												Ciencia de los Alimentos
											</span>
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={
									'/formacion-academica/posgrado/microbiologia'
								}>
								<a className="relative rounded-lg overflow-hidden w-full md:w-[330px] h-[262px]">
									<div className="absolute h-full w-full -z-10">
										<Image
											src={
												'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/maestria-en-microbiologia.jpg'
											}
											objectFit="cover"
											layout="fill"
											quality={100}
											alt="vocacion1"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/5 -z-10"></div>
									<div className="text-blanco absolute inset-x-9 bottom-7">
										<p className="font-bold">
											<span className="text-xs">
												Maestría en
											</span>
											<br />
											<span className="text-xl">
												Microbiología
											</span>
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={
									'/formacion-academica/posgrado/toxicologia'
								}>
								<a className="relative rounded-lg overflow-hidden w-full md:w-[330px] h-[262px]">
									<div className="absolute h-full w-full -z-10">
										<Image
											src={
												'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/maestria-en-toxicologia.jpg'
											}
											objectFit="cover"
											layout="fill"
											quality={100}
											alt="vocacion1"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/5 -z-10"></div>
									<div className="text-blanco absolute inset-x-9 bottom-7">
										<p className="font-bold">
											<span className="text-xs">
												Maestría en
											</span>
											<br />
											<span className="text-xl">
												Toxicología
											</span>
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={
									'/formacion-academica/posgrado/biotecnologia'
								}>
								<a className="relative rounded-lg overflow-hidden w-full md:w-[330px] h-[262px]">
									<div className="absolute h-full w-full -z-10">
										<Image
											src={
												'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/maestria-en-biotecnologia.jpg'
											}
											objectFit="cover"
											layout="fill"
											quality={100}
											alt="vocacion1"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/5 -z-10"></div>
									<div className="text-blanco absolute inset-x-9 bottom-7">
										<p className="font-bold">
											<span className="text-xs">
												Maestría en
											</span>
											<br />
											<span className="text-xl">
												Biotecnología
											</span>
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={
									'/formacion-academica/posgrado/ciencias-farmaceuticas-con-mencion-en-ciencia-y-tecnologia-cosmetica'
								}>
								<a className="relative rounded-lg overflow-hidden w-full md:w-[330px] h-[262px]">
									<div className="absolute h-full w-full -z-10">
										<Image
											src={
												'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/maestria-en-ciencias-farmaceuticas-con-mencion-en-ciencia-y-tecnologia-cosmetica.jpg'
											}
											objectFit="cover"
											layout="fill"
											quality={100}
											alt="vocacion1"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/5 -z-10"></div>
									<div className="text-blanco absolute inset-x-9 bottom-7">
										<p className="font-bold">
											<span className="text-xs">
												Maestría en
											</span>
											<br />
											<span className="text-xl">
												Ciencias Farmacéuticas con
												mención en Ciencia y Tecnología
												Cosmética
											</span>
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={
									'/formacion-academica/posgrado/quimica-clinica'
								}>
								<a className="relative rounded-lg overflow-hidden w-full md:w-[330px] h-[262px]">
									<div className="absolute h-full w-full -z-10">
										<Image
											src={
												'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/maestria-en-quimica-clinica.jpg'
											}
											objectFit="cover"
											layout="fill"
											quality={100}
											alt="vocacion1"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/5 -z-10"></div>
									<div className="text-blanco absolute inset-x-9 bottom-7">
										<p className="font-bold">
											<span className="text-xs">
												Maestría en
											</span>
											<br />
											<span className="text-xl">
												Química Clínica
											</span>
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={
									'/formacion-academica/admision?nivel=segundasespecialidades'
								}>
								<a className="relative rounded-lg overflow-hidden w-full md:w-[330px] h-[262px]">
									<div className="absolute h-full w-full -z-10">
										<Image
											src={
												'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/segundas-especialidades-minihome.jpg'
											}
											objectFit="cover"
											layout="fill"
											quality={100}
											alt="vocacion1"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-tertiary to-secondary/5 -z-10"></div>
									<div className="text-blanco absolute inset-x-9 bottom-7">
										<p className="font-bold">
											{/* <span className="text-xs">
												Maestría en
											</span> */}
											<br />
											<span className="text-xl">
												Segundas especialidades
											</span>
										</p>
									</div>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</PrincipalLayout>
		</>
	);
};

export async function getStaticProps({ params }) {
	const resCarrerasPregrado = await fetch(
		`${BASE_URL}/carreras/${SLUG_CARRERA}?tipo=posgrado`
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
