import Link from 'next/link';
// import Image from 'next/image';
import Image from 'next/future/image';
import React from 'react';

import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';

import { BASE_URL } from '../../config/consts';

import Boton from '../../components/shared/Boton';

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
	const { data, error } = useSWR(
		`${BASE_URL}/directorios/educacion`,
		fetcher
	);

	const directorio = data;

	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<>
			<PrincipalLayout>
				<ul className="px-4 md:px-0 col-span-full text-secondary text-sm mb-5">
					<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="inline text-negro">Directorio</li>
				</ul>
				<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
					Directorio
				</div>
				<div className="col-span-full mb-5">
					<div className="h-bannerMobile md:h-banner">
						<Image
							priority
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-educacion/directorio-educacion-banner.png"
							alt="imagen directorio"
							layout="responsive"
							width={1022}
							height={303}
							quality={100}
							className="w-full h-full object-cover"
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
									{directorio.map((unidad) => {
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
					<div className="hidden"></div>
				</div>
			</PrincipalLayout>
		</>
	);
};

// export async function getStaticProps() {
// 	const resDirectorio = await fetch(`${BASE_URL}/directorios/educacion`);
// 	const directorio = await resDirectorio.json();
// 	return {
// 		props: {
// 			directorio,
// 		},
// 	};
// }

export default Index;
