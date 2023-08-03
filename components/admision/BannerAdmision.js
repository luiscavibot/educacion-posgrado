import React from 'react';
import Boton from '../shared/Boton';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import Image from 'next/future/image';
import anuncio_admision from '../../data/admision/anuncio_admision.json';

export const BannerAdmision = ({ setIsOpenBanner, enlace }) => {
	return (
		// <div className="bg-gris col-span-full grid grid-cols-10 gap-x-4 shadow-[0_4px_20px_4px_rgba(0,0,0,0.04)] mb-8 relative">
		<div className="bg:none md:bg-[url('https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/circulo-gris.png')] bg-complementaryOne/60 bg-no-repeat bg-[length:429px] bg-[center_left_-49px] col-span-full grid grid-cols-12 gap-x-4 shadow-[0_4px_20px_4px_rgba(0,0,0,0.04)] mb-8 relative max-w-[917px] mx-auto">
			<div className="hidden md:flex mt-64 md:mt-0 col-start-1 relative col-span-12 md:col-span-6 justify-center items-center">
				<div className="absolute w-full h-full overflow-hidden">
					<div className="hidden md:block absolute -bottom-20 -left-2 h-[227px] w-[227px] rounded-full bg-primary"></div>
					<div className="hidden md:block absolute top-8 2xl:right-16 xl:right-18 lg:right-12 right-6 h-[27px] w-[27px] rounded-full bg-tertiary"></div>
				</div>
				<div className="absolute bottom-0 w-[90%] 2xl:w-admisionImageWidth max-w-[20rem] left-12">
					<Image
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/admision-alerta-posgrado-farmacia.png"
						quality={100}
						height={381}
						width={404}
						alt="alerta proceso admision"
					/>
				</div>
			</div>
			<div className="mx-4 md:mx-0 col-span-12 md:col-span-6 md:pr-12 pt-6 pb-6">
				<h2 className="text-2xl font-bold mb-3 text-tertiary">
					{anuncio_admision.titulo}
				</h2>
				<h3 className="text-2xl mt-2">{anuncio_admision.subtitulo}</h3>
				<p className="mt-2">{anuncio_admision.descripcion}</p>
				<h2 className="font-bold mt-3">
					{anuncio_admision.cierreDeInscripciones}
				</h2>
				<div className="mt-4 flex justify-start gap-x-6 gap-y-3">
					<Link href={enlace}>
						<a
							className={`inline-block cursor-pointer border-[1px] border-secondary rounded-lg py-2 px-3 font-medium text-sm text-secondary duration-300 bg-blanco hover:-translate-y-1`}
						>
							<span className="font-semibold">
								Más información
							</span>
						</a>
					</Link>
					<a
						href="https://posgrado.unmsm.edu.pe/admision/inscripcion/"
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-block cursor-pointer border-[1px] border-secondary rounded-lg py-2 px-3 font-medium text-sm text-blanco duration-300 bg-secondary hover:-translate-y-1`}
					>
						<span className="font-semibold">
							Inscripción online
						</span>
					</a>
				</div>
			</div>
			{/* <button
				className="absolute right-0 bg-blanco mx-5 my-2 w-[30px] h-[30px] flex items-center justify-center rounded-lg shadow-[0px_1px_4px_rgba(0,0,0,0.25)]"
				onClick={() => setIsOpenBanner(false)}>
				<IoClose size={16} />
			</button> */}
		</div>
	);
};
