import React, { useState } from 'react';
import FHpages from '../components/shared/layouts/FHpages';
import PortadaHome from '../components/home/PortadaHome';
import AgendaPublica from '../components/home/AgendaPublica';
import LinkInternos from '../components/home/LinksInternos';
import Programas from '../components/home/Programas';
import FooterComponent from '../components/shared/FooterComponent';
import { BACKEND, CORREO_COMUNICACIONES } from '../config/consts';
import Contactanos from '../components/home/Contactanos';
import LinksExternos from '../components/home/LinksExternos';
import Testimonios from '../components/home/Testimonios';

import { BannerAdmisionHome } from '../components/admision/BannerAdmisionHome';
import AsideSocialNetworks from '../components/home/AsideSocialNetworks';
import useAlertasInformativas from '../hooks/useAlerta';

export default function Home({ noticiasDestacadas, noticias, eventos }) {
	const [isOpenHeader, setIsOpenHeader] = useState(true);
	const { alerta } = useAlertasInformativas();

	return (
		<FHpages>
			<AsideSocialNetworks />
			{/* <SideBar /> */}
			<div className="max-md:fixed sticky max-md:bottom-0 md:top-0 z-20 w-full">
				{isOpenHeader && alerta && (
					<BannerAdmisionHome
						alerta={alerta}
						setIsOpenHeader={setIsOpenHeader}
					/>
				)}
			</div>

			<PortadaHome eventos={eventos} />

			<main className="bg-blanco pt-14 md:pt-18">
				<AgendaPublica
					noticiasDestacadas={noticiasDestacadas}
					noticias={noticias}
				/>
				<LinkInternos />
				<Programas />
				<Testimonios />
				<LinksExternos />
				<Contactanos mail={CORREO_COMUNICACIONES} />
			</main>
			<FooterComponent inHome />
		</FHpages>
	);
}

export async function getStaticProps() {
	const urlEventos = `/eventos/ultimos-vigentes`;
	const resEventos = await fetch(`${BACKEND}${urlEventos}`);
	const eventos = await resEventos.json();

	const urlNoticiasDestacadas = `/agenda-publica/destacadas`;
	const resNoticiasDestacadas = await fetch(
		`${BACKEND}${urlNoticiasDestacadas}`
	);
	const noticiasDestacadas = await resNoticiasDestacadas.json();

	const urlNoticias = `/agenda-publica/ultimas-home`;
	const resNoticias = await fetch(`${BACKEND}${urlNoticias}`);
	const noticias = await resNoticias.json();

	return {
		props: {
			noticiasDestacadas,
			noticias,
			eventos,
		},
		revalidate: 400,
	};
}
