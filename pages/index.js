import React, { useState } from 'react';
import FHpages from '../components/shared/layouts/FHpages';
import SideBar from '../components/shared/SideBar';
import SubMenu from '../components/shared/SubMenu';
import BuscadorGeneral from '../components/shared/BuscadorGeneral';
import PortadaHome from '../components/home/PortadaHome';
import Noticias from '../components/home/Noticias';
import Comunicados from '../components/home/Comunicados';
import Eventos from '../components/home/Eventos';
import Carreras from '../components/home/Carreras';
import Numeros from '../components/home/Numeros';
import FooterComponent from '../components/shared/FooterComponent';
import { BASE_URL, SLUG_CARRERA } from '../config/consts';
import Unete from '../components/home/Unete';
import LinksExternos from '../components/home/LinksExternos';
import Testimonios from '../components/home/Testimonios';

import { BannerAdmisionHome } from '../components/admision/BannerAdmisionHome';
import { BannerAdmision } from '../components/admision/BannerAdmision';

export default function Home({
	noticiasDestacadas,
	noticias,
	eventosVigentes,
	eventosNoVigentes,
	carrerasEnProceso,
}) {
	const [isOpenHeader, setIsOpenHeader] = useState(carrerasEnProceso);
	const [isOpenBanner, setIsOpenBanner] = useState(carrerasEnProceso);
	return (
		<FHpages>
			{/* <SideBar /> */}
			<div className="fixed max-md:bottom-0 md:top-0 z-20 w-full">
				{isOpenHeader && (
					<BannerAdmisionHome setIsOpenHeader={setIsOpenHeader} />
				)}
				{/* <SubMenu theme="tertiary" color="blanco" /> */}
			</div>
			<BuscadorGeneral />

			<PortadaHome />
			<main className="bg-blanco pt-14 md:pt-18">
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
				<Eventos
					eventosVigentes={eventosVigentes}
					eventosNoVigentes={eventosNoVigentes}
				/>
				<Carreras />
				<LinksExternos />
				<Testimonios />
				<Unete />
			</main>
			<FooterComponent inHome />
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

	// const eventos = [];

	const urlEventosVigentes = `/eventos/${SLUG_CARRERA}/?estado=true&vigentes=true&limit=100`;
	const resEventosVigentes = await fetch(`${BASE_URL}${urlEventosVigentes}`);
	const eventosVigentesJSON = await resEventosVigentes.json();
	const eventosVigentes = eventosVigentesJSON.items;

	// si eventosVigentes.length < 5, traer los eventos no vigentes tal que la suma de los dos sea 5

	let eventosNoVigentes = [];
	if (eventosVigentes.length < 5) {
		const urlEventosNoVigentes = `/eventos/${SLUG_CARRERA}/?estado=true&noVigentes=true&limit=${
			5 - eventosVigentes.length
		}`;
		const resEventosNoVigentes = await fetch(
			`${BASE_URL}${urlEventosNoVigentes}`
		);
		const eventosNoVigentesJSON = await resEventosNoVigentes.json();
		const preEventosNoVigentes = eventosNoVigentesJSON.items;
		eventosNoVigentes = preEventosNoVigentes;
	}

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
			eventosVigentes,
			eventosNoVigentes,
			carrerasEnProceso,
		},
		revalidate: 400,
	};
}
//
