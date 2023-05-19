import React from 'react';
import Image from 'next/image';

import { ImSearch } from 'react-icons/im';
import { useRouter } from 'next/router';

const BuscadorGeneral = () => {
	const router = useRouter();
	const buscarResultados = (e) => {
		if (e.key === 'Enter') {
			router.push('/resultados?q=' + e.target.value);
		}
	};

	return (
		// <div className="hidden animate__fadeIn animate__animated absolute z-10 md:flex h-10 right-5 top-20 items-center justify-start">
		<div className="hidden animate__fadeIn animate__animated absolute z-10 h-10 md:block top-20 w-full">
			<div className="container m-auto flex items-center justify-end">
				{/* <div className="bg-negroTransparente pl-4 pr-3 py-1 mr-7 text-blanco rounded-xl border border-blancoTransparente cursor-pointer flex items-center">
					<ImSearch />
					<input
						placeholder="Buscar"
						className="focus:outline-none ml-2 pl-2 bg-transparente	text-blanco placeholder-blanco"
						onKeyDown={buscarResultados}></input>
				</div> */}
				<div
					className="cursor-pointer"
					onClick={() => {
						window.open('https://unmsm.edu.pe/', '_blank');
					}}>
					<div className="w-48 tablet:w-64">
						<Image
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/logo_unmsm_web_central_6ba7dbe312.png"
							width={256}
							height={73}
							priority
							alt="Logo de la Universidad Nacional Mayor de San Marcos"
							className="w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuscadorGeneral;
