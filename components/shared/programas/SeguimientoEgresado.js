import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Pagination } from 'semantic-ui-react';
import FlechaIzquierdaIcon from '../../icons/FlechaIzquierdaIcon';
import FlechaDerechaIcon from '../../icons/FlechaDerechaIcon';
import { FaLinkedinIn } from 'react-icons/fa';
import { getPaginador } from '../../../helpers/getPaginador';

export const SeguimientoEgresado = ({ egresados }) => {
	const [valores, setValores] = useState({ pagina: 1, buscador: '' });
	const limitePorPagina = 5;
	const { data, total } = getPaginador(
		egresados,
		valores.pagina,
		limitePorPagina,
		valores.buscador
	);

	const goToPage = (newPage) => {
		setValores({
			...valores,
			pagina: newPage,
		});
	};

	return (
		<>
			<div className="grid grid-cols-8 gap-x-4">
				<div className="col-span-7">
					<>
						{data.map((egresado) => {
							return (
								<div
									className="flex gap-x-6 mb-10"
									key={egresado.nombre}>
									<div className="flex-none">
										<Image
											alt=""
											width={124}
											height={156}
											// layout="responsive"
											objectFit="cover"
											// src={`${egresado.foto}`}
											src={
												egresado.foto
													? `https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/${egresado.foto}`
													: 'https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg'
											}></Image>
									</div>
									<div className="grow">
										<div className="mb-[2px] subtitle">
											<span>{egresado.nombre}</span>
											<span className="mx-2">|</span>
											<span>{egresado.cargo}</span>
										</div>
										<p className="text-sm mb-1">
											<span>{egresado.grado}</span>
										</p>
										<p className="mb-1">{egresado.frase}</p>
										<div className="flex justify-between">
											<div className="flex items-center">
												<span className="subtitle mr-3">
													Redes sociales :
												</span>
												<button
													onClick={() => {
														window.open(
															egresado.url_linkedin,
															'_blank'
														);
													}}
													className="w-[36px] h-[36px] flex items-center justify-center text-primary bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_rgba(0,0,0,0.25)] cursor-pointer">
													<FaLinkedinIn />
												</button>
											</div>
											{/* <Link href="#">
												<a className="link">Leer más</a>
											</Link> */}
										</div>
									</div>
								</div>
							);
						})}
						{data.length > 0 ? (
							<div className="flex items-center justify-center">
								<Pagination
									prevItem={{
										content: <FlechaIzquierdaIcon />,
										icon: true,
									}}
									nextItem={{
										content: <FlechaDerechaIcon />,
										icon: true,
									}}
									firstItem={null}
									lastItem={null}
									defaultActivePage={1}
									totalPages={Math.ceil(
										total / limitePorPagina
									)}
									onPageChange={(_, data) =>
										goToPage(data.activePage)
									}
								/>
							</div>
						) : null}
					</>
				</div>
			</div>
		</>
	);
};
