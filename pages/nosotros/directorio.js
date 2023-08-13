import Link from 'next/link';
// import Image from 'next/image';
import Image from 'next/future/image';
import React, { useEffect, useState } from 'react';

import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';

import { BASE_URL, SLUG_CARRERA } from '../../config/consts';

import Boton from '../../components/shared/Boton';

import useSWR from 'swr';
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
						<span>Directorio</span>
					</li>
				</ul>
				<div className="mx-4 md:mx-0 col-span-full title-page mb-5 text-secondary">
					Directorio
				</div>
				<div className="col-span-full mb-5">
					<div className="h-bannerMobile md:h-banner xl:h-auto">
						<Image
							priority
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fca-posgrado/Nosotros/directorio-administracion-posgrado.jpg"
							alt='Directorio "Facultad de Farmacia y Bioquímica"'
							layout="responsive"
							width={1022}
							height={303}
							quality={100}
							className="w-full h-full object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1280px) 896px, 1408px"
							// sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
						/>
					</div>
					<div className="mx-4 md:mx-0 col-span-full mt-10 mb-4 flex items-center justify-between">
						<p className="text-sm font-normal md:font-bold mr-4">
							Central telefónica: 619-7000
						</p>
						<Boton
							primary
							ocultarResponsive
							// bold
							text="Directorio general"
							onClick={() => {
								window.open(
									'https://vicus.unmsm.edu.pe/',
									'_blank'
								);
							}}
						/>
					</div>
					<div className="mx-4 md:mx-0 col-span-full mb-4">
						<div className="overflow-x-auto">
							<table className="table table-striped mb-6">
								<thead>
									<tr>
										<th>Unidad</th>
										<th>Cargo</th>
										<th>Nombre</th>
										<th>Anexo</th>
										<th>Correo</th>
									</tr>
								</thead>
								<tbody>
									{!isLoading &&
										data.map((unidad) => {
											return (
												<tr key={unidad.id}>
													<td>{unidad.unidad}</td>
													<td>{unidad.cargo}</td>
													<td>{unidad.nombre}</td>
													<td>
														{unidad.anexo.map(
															(anexo, index) => (
																<p key={index}>
																	{anexo}
																</p>
															)
														)}
													</td>
													<td>
														{unidad.correos.map(
															(correo, index) => (
																<p key={index}>
																	{correo}
																</p>
															)
														)}
													</td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</div>
					</div>
					<div className="mx-4 md:mx-0 col-span-full mt-4 mb-8 md:hidden flex items-center justify-start">
						<Boton
							bold
							text="Directorio UNMSM"
							blanco
							onClick={() => {
								window.open(
									'https://vicus.unmsm.edu.pe/',
									'_blank'
								);
							}}
						/>
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
