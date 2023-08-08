import Link from 'next/link';
import Image from 'next/future/image';
import React, { useState, useEffect } from 'react';

import { BASE_URL, SLUG_CARRERA } from '../../../config/consts';

import { BannerAdmision } from '../../../components/admision/BannerAdmision';
import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';

const Index = ({ CarrerasEnProceso }) => {
	const [isOpenBanner, setIsOpenBanner] = useState(CarrerasEnProceso);
	return (
		<>
			<PrincipalLayout>
				<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
					<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
						Programas
					</li>
					<li className="text-textColorOne font-bold inline">
						Maestrías
					</li>
				</ul>
				<div className="px-4 md:px-0 col-span-full mb-8">
					<p className="title-page mb-6 text-secondary">Maestrías</p>
					{/* <p>
						Nuestros programas de maestría y doctorado profundizan
						en la experiencia educacional interdisciplinaria de los
						últimos avances científicos y tecnológicos; con el fin
						de formar profesionales íntegros, globalmente
						competitivos y comprometidos con la construcción de una
						sociedad eficiente y sostenible.
					</p> */}
				</div>

				{isOpenBanner && (
					<BannerAdmision
						setIsOpenBanner={setIsOpenBanner}
						enlace="/admision/pregrado"
					/>
				)}

				<div className="px-4 md:px-0 col-span-full mb-10">
					<div className="grid place-items-center">
						<div className="inline-grid grid-cols-1 lg:grid-cols-[290px_290px_290px] gap-5 md:gap-11 w-full md:w-auto">
							<Link
								href={`/programas/maestrias/doctorado-ingenieria-quimica`}
							>
								<a className="group card md:max-w-[290px]">
									<div className="relative h-[168px]">
										<Image
											alt={`Diplomatura en Gestión Pública`}
											width={290}
											height={168}
											className="object-cover h-full w-full"
											src={`https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg`}
										/>
										<div className="absolute top-5 left-0 bg-secondary rounded-r-lg text-blanco p-2 font-bold modalidad">
											Modalidad Presencial
										</div>
									</div>
									<div className="text-content text-textColorOne group-hover:text-secondary">
										<p className="font-bold">
											Administración
										</p>
										<p className="line-clamp-2">
											Diplomatura en Gestión Pública
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={`/programas/maestrias/doctorado-ingenieria-quimica`}
							>
								<a className="group card md:max-w-[290px]">
									<div className="relative h-[168px]">
										<Image
											alt={`Diplomatura en Gestión Pública`}
											width={290}
											height={168}
											className="object-cover h-full w-full"
											src={`https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg`}
										/>
										<div className="absolute top-5 left-0 bg-secondary rounded-r-lg text-blanco p-2 font-bold modalidad">
											Modalidad Presencial
										</div>
									</div>
									<div className="text-content text-textColorOne group-hover:text-secondary">
										<p className="font-bold">
											Administración
										</p>
										<p className="line-clamp-2">
											Diplomatura en Gestión Pública
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={`/programas/maestrias/doctorado-ingenieria-quimica`}
							>
								<a className="group card md:max-w-[290px]">
									<div className="relative h-[168px]">
										<Image
											alt={`Diplomatura en Gestión Pública`}
											width={290}
											height={168}
											className="object-cover h-full w-full"
											src={`https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg`}
										/>
										<div className="absolute top-5 left-0 bg-secondary rounded-r-lg text-blanco p-2 font-bold modalidad">
											Modalidad Presencial
										</div>
									</div>
									<div className="text-content text-textColorOne group-hover:text-secondary">
										<p className="font-bold">
											Administración
										</p>
										<p className="line-clamp-2">
											Diplomatura en Gestión Pública
										</p>
									</div>
								</a>
							</Link>
							<Link
								href={`/programas/maestrias/doctorado-ingenieria-quimica`}
							>
								<a className="group card md:max-w-[290px]">
									<div className="relative h-[168px]">
										<Image
											alt={`Diplomatura en Gestión Pública`}
											width={290}
											height={168}
											className="object-cover h-full w-full"
											src={`https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg`}
										/>
										<div className="absolute top-5 left-0 bg-secondary rounded-r-lg text-blanco p-2 font-bold modalidad">
											Modalidad Presencial
										</div>
									</div>
									<div className="text-content text-textColorOne group-hover:text-secondary">
										<p className="font-bold">
											Administración
										</p>
										<p className="line-clamp-2">
											Diplomatura en Gestión Pública
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
		(carrera) => carrera.en_proceso
	);
	// const valor = CarrerasEnProceso.some(objeto => objeto.en_proceso);

	// console.log(CarrerasEnProceso);

	return {
		props: {
			CarrerasEnProceso,
		},
	};
}

export default Index;
