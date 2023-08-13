import Link from 'next/link';
// import Image from 'next/image';
import Image from 'next/future/image';
import React from 'react';

import { Tab } from 'semantic-ui-react';
import { Tabs } from '../../components/shared/Tabs';

import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';

import { BASE_URL, SLUG_CARRERA } from '../../config/consts';
import DocumentosOficiales from '../../components/transparencia/DocumentosOficiales';
import ResolucionesDecanales from '../../components/transparencia/ResolucionesDecanales';

const Index = ({ years }) => {
	const directorios = [
		{
			menuItem: 'Programas de Maestrías y doctorados',
			render: () => (
				<Tab.Pane attached={false}>
					<div className="col-start-3 col-span-10 mb-14">
						<div className="mb-14"></div>
					</div>
				</Tab.Pane>
			),
		},
	];
	return (
		<>
			<PrincipalLayout>
				<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
					<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
						Nosotros
					</li>
					<li className="text-textColorOne font-bold inline">
						<span>Transparencia</span>
					</li>
				</ul>
				<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
					Transparencia
				</div>
				<div className="col-span-full mb-5 ">
					<div className="relative h-bannerMobile md:h-banner xl:h-auto">
						<Image
							src={
								'https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fca-posgrado/Nosotros/transparencia-administracion-posgrado.jpg'
							}
							layout="responsive"
							width={1343}
							height={397}
							priority={true}
							alt="Banner Transparencia"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className="col-span-full mb-14">
					<Tabs nombre="transparencia">
						<div label="Documentos oficiales">
							<DocumentosOficiales years={years} />
						</div>
						<div label="Resoluciones decanales">
							<ResolucionesDecanales />
						</div>
					</Tabs>
				</div>
			</PrincipalLayout>
		</>
	);
};

export async function getStaticProps() {
	let years = [];
	const resYears = await fetch(
		`${BASE_URL}/documentos-oficiales/${SLUG_CARRERA}/years`
	);
	const _years = await resYears.json();
	_years.forEach((e) => {
		years.push({ nombre: `${e}` });
	});

	return {
		props: {
			years,
		},
	};
}

export default Index;
