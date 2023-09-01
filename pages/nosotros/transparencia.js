import Link from 'next/link';
// import Image from 'next/image';
import Image from 'next/future/image';
import React from 'react';

import { Tab } from 'semantic-ui-react';
import { Tabs } from '../../components/shared/Tabs';

import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';

import { BACKEND, BASE_URL, SLUG_CARRERA } from '../../config/consts';
import DocumentosOficiales from '../../components/transparencia/DocumentosOficiales';
import ResolucionesDecanales from '../../components/transparencia/ResolucionesDecanales';
import { DOCUMENTOS_OFICIALES_YEARS } from '../../consts/documentosOficiales';

const Index = () => {
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
								'https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/Nosotros/transparencia-administracion-posgrado.jpg'
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
							{/* <DocumentosOficiales
								years={DOCUMENTOS_OFICIALES_YEARS}
							/> */}
						</div>
						<div label="Resoluciones decanales">
							{/* <ResolucionesDecanales /> */}
						</div>
					</Tabs>
				</div>
			</PrincipalLayout>
		</>
	);
};

export default Index;
