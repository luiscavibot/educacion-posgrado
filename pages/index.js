import React from 'react';
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

export default function Home({ noticiasDestacadas, noticias, eventos }) {
	return (
		<FHpages>
			{/* <SideBar /> */}
			{/* <div className="fixed max-md:bottom-0 md:top-0 z-20 w-full">
				{isOpenHeader && (
					<BannerAdmisionHome setIsOpenHeader={setIsOpenHeader} />
				)}
			</div> */}

			<PortadaHome eventos={eventos} />

			<main className="bg-blanco pt-14 md:pt-18">
				{/* <div className="container mx-auto px-3 md:grid-cols-12 gap-x-4 md:grid mb-14 md:mb-18 mt-6">
					<div className="col-start-2 col-span-10">
						<BannerAdmision
							setIsOpenBanner={setIsOpenBanner}
							enlace={'/admision/posgrado'}
						/>
					</div>
				</div> */}
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
