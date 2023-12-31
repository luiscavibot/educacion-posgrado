import React from 'react';
import Image from 'next/image';
import { BiTimeFive } from 'react-icons/bi';
import { getFecha, getDia, getMes3Letras } from '../../helpers/getFecha';
import { getTipoEvento } from '../../helpers/getTipoEvento';
import Link from 'next/link';
import Cargando from '../resultados/Cargando';

const CardsEventosPasados = ({ eventos }) => {
	return (
		<>
			{eventos ? (
				eventos.length > 0 ? (
					eventos.map((evento) => (
						<Link
							key={evento.slug}
							// key={evento.titulo}
							href={`/actualidad/eventos/${evento.slug}`}
						>
							{/* href={`/eventos/${evento.titulo}`}> */}
							<a
								// key={evento.attributes.slug}
								key={evento.titulo}
								className="card !rounded-t-none mb-6"
							>
								<div className="relative w-full h-[200px] hidden md:block">
									<Image
										layout="fill"
										objectFit="cover"
										// width={290}
										// height={200}
										// src={
										// 	evento.attributes.banner.data[0]
										// 		.attributes.url
										// }
										src={evento.foto}
									/>
									<div className="absolute top-4 left-4 bg-blanco px-[10px] py-[2px] rounded-[4px] font-bold">
										{evento.tipo.valor}
									</div>
								</div>
								<div className="text-content flex flex-col p-5">
									<div className="grid grid-cols-[45px_auto] gap-x-4 mb-[14px]">
										<div className="w-[45px] h-[45px] rounded-lg bg-textColorTwo text-blanco flex flex-col text-center justify-center">
											<span className="text-xl leading-none">
												{getDia(evento.fecha_inicio)}
											</span>
											<span className="text-[13px] leading-none">
												{getMes3Letras(
													evento.fecha_inicio
												)}
											</span>
										</div>
										<div className="title font-bold line-clamp-3">
											{evento.titulo}
										</div>
									</div>
									<div className="text-sm">
										{evento.lugar}
									</div>
								</div>
							</a>
						</Link>
					))
				) : (
					<p>No hay resultados</p>
				)
			) : (
				<div className=" mt-10 flex justify-center items-center">
					<Cargando />
				</div>
			)}
		</>
	);
};

export default CardsEventosPasados;
