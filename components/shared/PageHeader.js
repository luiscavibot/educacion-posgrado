import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { ImSearch } from 'react-icons/im';
import LogoUNMSM from '../icons/LogoUNMSM';

import SideBar from '../shared/SideBar';
import SubMenu from './SubMenu';

const HeaderPage = () => {
	const router = useRouter();
	const buscarResultados = (e) => {
		if (e.key === 'Enter') {
			router.push('/resultados?q=' + e.target.value);
		}
	};
	const [mostrarBuscardor, setMostrarBuscardor] = useState(true);
	useEffect(() => {
		if (router.isReady && router.pathname === '/resultados') {
			setMostrarBuscardor(false);
		} else {
			setMostrarBuscardor(true);
		}
	}, [router.isReady, router.pathname]);

	return (
		<header className="bg-bgHeader bg-no-repeat bg-cover bg-tertiary text-blanco fixed inset-x-0 z-10">
			<div className="container mx-auto px-3 py-3 md:py-5 flex justify-between relative z-10">
				<div className="md:hidden block">
					<SideBar interno />
				</div>
				<div>
					<Link href="/">
						<a className="flex gap-3">
							<div>
								<h1 className="text-base sm:text-xl font-bold">
									Facultad de Farmacia y Bioquímica
								</h1>
								<h2 className="text-[10px] sm:text-base">
									Universidad Nacional Mayor de San Marcos
								</h2>
							</div>
							<LogoUNMSM className="fill-blanco w-7 block md:hidden" />
						</a>
					</Link>
				</div>
				{/* buscador y logo */}
				<div className="items-center md:flex hidden">
					{/* {mostrarBuscardor && (
						<div className="pl-4 pr-3 mr-7 h-9 text-blanco rounded-xl border border-blanco flex items-center">
							<ImSearch />
							<input
								placeholder="Buscar"
								className="focus:outline-none ml-2 pl-2 bg-transparente placeholder-blanco"
								onKeyDown={buscarResultados}
							/>
						</div>
					)} */}
					<div
						onClick={() => {
							window.open('https://unmsm.edu.pe/', '_blank');
						}}>
						<Image
							alt=""
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/logo_unmsm_web_central_6ba7dbe312.png"
							className="cursor-pointer"
							width={180}
							height={47}
						/>
					</div>
				</div>
			</div>
			<SubMenu theme="primary" color="textColorOne" />
		</header>
	);
};

export default HeaderPage;
