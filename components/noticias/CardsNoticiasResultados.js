import React from 'react';
import Image from 'next/image';
import { BiTimeFive } from 'react-icons/bi';
import { getFecha } from '../../helpers/getFecha';
import Link from 'next/link';
import Cargando from '../resultados/Cargando';

const CardsNoticiasResultados = ({ agendas }) => {
	console.log(agendas);
	return (
		<>
			{agendas ? (
				agendas.length > 0 ? (
					agendas.map((agenda) => (
						<Link
							key={agenda.slug}
							href={`/actualidad/agenda-publica/${agenda.slug}`}
						>
							<a
								key={agenda.titulo}
								className="group min-h-[6.2rem] md:min-h-[8.4rem] animate__animated animate__fadeIn mb-6 md:mb-10 bg-blanco flex flex-row cursor-pointer shadow-[0px_1px_5px_rgba(0,_0,_0,_0.1)] hover:shadow-md hover:-translate-y-1 duration-300 hover:brightness-105"
							>
								<div className="relative w-full max-w-[188px] hidden md:block">
									<Image
										layout="fill"
										objectFit="cover"
										src={
											agenda.foto
												? `${agenda.foto}`
												: 'https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg'
										}
									/>
								</div>
								<div className="flex flex-col basis-12/12 md:basis-9/12 px-5 py-3">
									<div className="mt-[6px] md:mt-0 order-2 md:order-1 text-grisTenue text-xs flex justify-start items-center">
										<BiTimeFive />
										<p className="ml-1">
											{getFecha(agenda.fecha)}
										</p>
									</div>
									<div className="mt-[6px] md:mt-0 order-1 md:order-2">
										<p className="text-base font-bold leading-6 text-negro group-hover:text-secondary transition duration-300">
											{agenda.titulo}
										</p>
										<div className="hidden md:block">
											<p className="line-clamp-2">
												{agenda.resumen}
											</p>
										</div>
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

export default CardsNoticiasResultados;
