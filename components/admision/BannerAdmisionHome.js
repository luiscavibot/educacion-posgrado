import React from 'react';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
// import anuncio_admision from '../../data/admision/anuncio_admision.json';

export const BannerAdmisionHome = ({ setIsOpenHeader }) => {
	return (
		<div className="bg-blanco relative shadow-[0px_-2px_4px_rgba(0,0,0,0.25)] md:shadow-none">
			<div className="md:flex justify-center gap-2 p-3">
				<div className="font-bold text-tertiary">
					Admisión de Posgrado 2023 - I
				</div>
				<div>Inscripciones rezagados: hasta el 24 de marzo</div>
				<div>
					{/* <Link href="/formacion-academica/admision?posgrado"> */}
					<Link href="/formacion-academica/admision?nivel=posgrado">
						<a className="link">| Más información</a>
					</Link>
				</div>
			</div>
			<button
				className="absolute right-0 top-2 bg-blanco mx-5 w-[30px] h-[30px] flex items-center justify-center rounded-lg shadow-[0px_1px_4px_rgba(0,0,0,0.25)]"
				onClick={() => setIsOpenHeader(false)}>
				<IoClose size={16} />
			</button>
		</div>
	);
};
