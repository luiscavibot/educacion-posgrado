import React, { useState } from 'react';
import FHpages from '../components/shared/layouts/FHpages';
import SideBar from '../components/shared/SideBar';
import SubMenu from '../components/shared/SubMenu';
import BuscadorGeneral from '../components/shared/BuscadorGeneral';
import PortadaHome from '../components/home/PortadaHome';
import Noticias from '../components/home/Noticias';
import Comunicados from '../components/home/Comunicados';
import Carreras from '../components/home/Carreras';
import Numeros from '../components/home/Numeros';
import FooterComponent from '../components/shared/FooterComponent';
import { BASE_URL, SLUG_CARRERA } from '../config/consts';
import Cenprofarma from '../components/home/Cenprofarma';
import LinksExternos from '../components/home/LinksExternos';
import Testimonios from '../components/home/Testimonios';

import { BannerAdmisionHome } from '../components/admision/BannerAdmisionHome';
import { BannerAdmision } from '../components/admision/BannerAdmision';

export default function Home({
	noticiasDestacadas,
	noticias,
	eventos,
	carrerasEnProceso,
}) {
	const [isOpenHeader, setIsOpenHeader] = useState(carrerasEnProceso);
	const [isOpenBanner, setIsOpenBanner] = useState(carrerasEnProceso);
	return (
		<FHpages>
			<SideBar />
			<div className="fixed max-md:bottom-0 md:top-0 z-20 w-full">
				{isOpenHeader && (
					<BannerAdmisionHome setIsOpenHeader={setIsOpenHeader} />
				)}
				<SubMenu theme="tertiary" color="blanco" />
			</div>
			<BuscadorGeneral />
			<PortadaHome eventos={eventos} />
			<main className="bg-blanco py-14 md:py-18">
				{isOpenBanner && (
					<div className="container mx-auto px-3 md:grid-cols-12 gap-x-4 md:grid mb-14 md:mb-18 mt-6">
						<div className="col-start-2 col-span-10">
							<BannerAdmision
								setIsOpenBanner={setIsOpenBanner}
								enlace={'/admision/posgrado'}
							/>
						</div>
					</div>
				)}
				<Noticias
					noticiasDestacadas={noticiasDestacadas}
					noticias={noticias}
				/>
				<Comunicados />
				{/* <Numeros /> */}
				<Carreras />
				<LinksExternos />
				<Testimonios />
				<Cenprofarma />
			</main>
			<FooterComponent />
		</FHpages>
	);
}

export async function getStaticProps() {
	const urlNoticiasDestacadas = `/noticias/${SLUG_CARRERA}/destacadas`;
	const resNoticiasDestacadas = await fetch(
		`${BASE_URL}${urlNoticiasDestacadas}`
	);
	const noticiasDestacadas = await resNoticiasDestacadas.json();

	const urlNoticias = `/noticias/${SLUG_CARRERA}/ultimas-home`;
	const resNoticias = await fetch(`${BASE_URL}${urlNoticias}`);
	const noticias = await resNoticias.json();

	const urlEventos = `/eventos/${SLUG_CARRERA}/ultimos-vigentes`;
	const resEventos = await fetch(`${BASE_URL}${urlEventos}`);
	const eventos = await resEventos.json();

	const resCarrerasPregrado = await fetch(
		`${BASE_URL}/carreras/${SLUG_CARRERA}?tipo=posgrado`
	);
	const carrerasPregrado = await resCarrerasPregrado.json();
	const carrerasEnProceso = carrerasPregrado.some(
		(carrera) => carrera.en_proceso
	);

	return {
		props: {
			noticiasDestacadas,
			noticias,
			eventos,
			carrerasEnProceso,
		},
		revalidate: 400,
	};
}
//
