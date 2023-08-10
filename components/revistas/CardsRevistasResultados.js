import React from 'react';
import Image from 'next/image';
import { BiTimeFive } from 'react-icons/bi';
import { getFecha } from '../../helpers/getFecha';
import Link from 'next/link';
import Cargando from '../resultados/Cargando';
import DocumentosFillIcon from '../icons/DocumentosFillIcon';

const CardsRevistasResultados = ({ revistas }) => {
	return (
		<>
			{revistas ? (
				revistas.length > 0 ? (
					revistas.map((revista) => (
						<a
							key={revista.slug}
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="group min-h-[6.2rem] md:min-h-[8.4rem] animate__animated animate__fadeIn mb-6 md:mb-10 bg-blanco flex flex-row cursor-pointer shadow-[0px_1px_5px_rgba(0,_0,_0,_0.1)] hover:shadow-md hover:-translate-y-1 duration-300 hover:brightness-105"
						>
							<div className="flex flex-col basis-12/12 md:basis-9/12 px-5 py-3">
								<div className="mt-[6px] md:mt-0 order-2 md:order-1 text-grisTenue text-xs flex justify-start items-center">
									<BiTimeFive />
									<p className="ml-1">
										{getFecha(revista.fecha)}
									</p>
								</div>
								<div className="mt-[6px] md:mt-0 order-1 md:order-2">
									<p className="text-base font-bold leading-6 text-textColorOne group-hover:text-secondary transition duration-300">
										<DocumentosFillIcon className="fill-textColorOne group-hover:fill-secondary inline mr-[6px] transition duration-300" />
										{revista.titulo}
									</p>
									<div className="hidden md:block text-textColorTwo">
										<p className="line-clamp-2">
											{revista.resumen}
										</p>
									</div>
								</div>
							</div>
						</a>
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

export default CardsRevistasResultados;
