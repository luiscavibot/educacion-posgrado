import Link from 'next/link';
// import Image from 'next/image';
import Image from 'next/future/image';
import React, { useEffect, useState } from 'react';

import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';

import { BASE_URL, SLUG_CARRERA } from '../../config/consts';

import Boton from '../../components/shared/Boton';

import useSWR from 'swr';
import { ComillasTestimoniosIcon } from '../../components/icons/ComillasTestimoniosIcon';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = (
	{
		// directorio
	}
) => {
	const { data, error, isLoading } = useSWR(
		`${BASE_URL}/directorios/${SLUG_CARRERA}`,
		fetcher
	);

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
						Nosotros
					</li>
					<li className="text-textColorOne font-bold inline">
						<span>Historia</span>
					</li>
				</ul>
				<div className="mx-4 md:mx-0 col-span-full title-page mb-10 text-secondary">
					Historia
				</div>
				<div className="col-span-full mb-5">
					<div className="mx-4 md:mx-0 col-span-full mb-4">
						<div className="mb-8">
							<div className="w-full max-w-[394px] md:w-[394px] md:float-right mb-12 md:ml-6 max-md:mx-auto">
								<Image
									src={
										'https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/Nosotros/imagen-historia.jpg'
									}
									layout="responsive"
									width={394}
									height={262}
									priority={true}
									alt="Historia"
									className="w-full h-full object-cover"
								/>
								<div className="w-[302px] m-auto mt-8">
									<div className="relative -left-3">
										<ComillasTestimoniosIcon className="fill-tertiary mb-4" />
									</div>
									<p className="text-tertiary text-xl">
										La Unidad de Posgrado de la Facultad de
										Ciencias Administrativas{' '}
										<span className="font-bold">
											brinda diez programas de
											especialización integral
											para profesionales
										</span>
									</p>
								</div>
							</div>
							<p className="mb-6">
								En 1990, la Facultad de Educación (FCA) aprobó
								su primer programa de maestría con las cuatro
								siguientes menciones: en Marketing, en Gestión
								Empresarial, en Dirección de Recursos Humanos y
								en Finanzas y Valores. Luego se añadieron las
								maestrías en Gestión Pública y en Negocios
								Internacionales con mención en Comercio
								Internacional. De esta manera, a la fecha, la
								Unidad de Posgrado de la FCA brinda seis
								programas de maestría con distintas menciones,
								un doctorado en Ciencias Administrativas y dos
								diplomaturas, en Gestión Pública y Gestión de
								Universidades Públicas. Asimismo, se encuentra
								en proceso el lanzamiento del primer programa de
								Posdoctorado de la Universidad Nacional Mayor de
								San Marcos, Decana de América, dirigido a
								doctores en administración y carreras afines.
							</p>
							{/* <p className="mb-6">
								Luego se añadieron las maestrías en Gestión
								Pública y en Negocios Internacionales con
								mención en Comercio Internacional.
							</p>
							<p className="mb-6">
								De esta manera, a la fecha, la Unidad de
								Posgrado de la FCA brinda seis programas de
								maestría con distintas menciones, un doctorado
								en Ciencias Administrativas y dos diplomaturas,
								en Gestión Pública y Gestión de Universidades
								Públicas.
							</p>
							<p className="mb-6">
								Asimismo, se encuentra en proceso el lanzamiento
								del primer programa de Posdoctorado de la
								Universidad Nacional Mayor de San Marcos, Decana
								de América, dirigido a doctores en
								administración y carreras afines.
							</p> */}
						</div>
						<div>
							<p className="font-bold text-xl mb-2">Misión</p>
							<p className="mb-6">
								La Unidad de Posgrado de la Facultad de Ciencias
								Administrativas es una comunidad académica que
								forma a profesionales de las ciencias
								empresariales y de la gestión dotándolos de las
								herramientas tecnológicas y científicas para
								producir conocimientos que aporten al bien común
								y al desarrollo sostenible del país y la
								sociedad en su conjunto.
							</p>
							<p className="font-bold text-xl mb-2">Visión</p>
							<p>
								Ser la Unidad de Posgrado líder en el Perú y
								latinoamérica que presente como marca distintiva
								la generación de una masa crítica cultivada en
								base a la investigación para aportar al debate
								de la agenda pública nacional y mundial en favor
								del desarrollo sostenible.
							</p>
						</div>
					</div>
				</div>
			</PrincipalLayout>
		</>
	);
};

// export async function getStaticProps() {

// 	const resDirectorio = await fetch(
// 		`${BASE_URL}/directorios/${SLUG_CARRERA}`
// 	);
// 	const directorio = await resDirectorio.json();
// 	return {
// 		props: {
// 			directorio,
// 		},
// 	};
// }

export default Index;
