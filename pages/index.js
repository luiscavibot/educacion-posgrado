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
import { useHome } from '../hooks/useHome';

export default function Home() {
	const [isOpenHeader, setIsOpenHeader] = useState(true);
	// const { alerta } = useAlertasInformativas();
	const { isLoading, agendaDestacadas, ultimasHome } = useHome();

	return (
		<FHpages>
			{!isLoading && agendaDestacadas && ultimasHome && (
				<>
					<AsideSocialNetworks />
					<div className="max-md:fixed sticky max-md:bottom-0 md:top-0 z-20 w-full">
						{/* {isOpenHeader && alerta && ( */}
						{isOpenHeader && (
							<BannerAdmisionHome
								// alerta={alerta}
								setIsOpenHeader={setIsOpenHeader}
							/>
						)}
					</div>

					<PortadaHome />

					<main className="bg-blanco pt-14 md:pt-18">
						<AgendaPublica
							noticiasDestacadas={agendaDestacadas}
							noticias={ultimasHome}
						/>
						{/* <LinkInternos /> */}
						<Programas />
						{/* <Testimonios /> */}
						<LinksExternos />
						<Contactanos mail={CORREO_COMUNICACIONES} />
					</main>
					<FooterComponent inHome />
				</>
			)}
		</FHpages>
	);
}
