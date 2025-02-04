import React from 'react';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import CampanaIcon from '../icons/CampanaIcon';
import anuncio_admision from '../../data/admision/anuncio_admision.json';

export const BannerAdmisionHome = (
	{
		setIsOpenHeader,
		// alerta
	}
) => {
	return (
		<div className="bg-alert bg-cover bg-center relative shadow-[0px_-2px_4px_rgba(0,0,0,0.25)] md:shadow-none">
			<div className="flex flex-col md:flex-row justify-center gap-y-[1px] gap-x-2 px-3 py-3 md:py-5">
				<span>
					<CampanaIcon className="fill-textColorOne" />
				</span>
				<div className="font-bold text-textColorOne text-lg">
					{anuncio_admision.titulo}
				</div>
				<div className="text-textColorOne text-lg">
					{anuncio_admision.cierreDeInscripciones}
				</div>
				<div>
					<Link href="/admision">
						<a className="py-3 px-4 rounded-lg bg-primary hover:bg-primary-hover transition-colors duration-300 text-blanco max-md:inline-block">
							Más información
						</a>
					</Link>
				</div>
			</div>
			<button
				className="absolute right-0 md:right-5 top-1 md:top-1/2 md:-translate-y-1/2 bg-blanco mx-2 w-[30px] h-[30px] flex items-center justify-center rounded-lg shadow-[0px_1px_4px_rgba(0,0,0,0.25)]"
				onClick={() => setIsOpenHeader(false)}
			>
				<IoClose size={16} />
			</button>
		</div>
	);
};
