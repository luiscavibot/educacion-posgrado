import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';

import { Tabs } from '../../components/shared/Tabs';
import Boton from '../../components/shared/Boton';

import { UltimasNoticias } from '../../components/shared/programas/UltimasNoticias';

import { BASE_URL, SLUG_CARRERA } from '../../config/consts';

import 'react-toastify/dist/ReactToastify.css';

const Bibliotecas = ({ ultimasNoticias }) => {
	return (
		<PrincipalLayout>
			<ul className="px-4 md:px-0 col-span-full text-tertiary text-sm mb-5">
				<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
					Investigación
				</li>
				<li className="inline text-negro">Bibliotecas</li>
			</ul>
			<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
				Bibliotecas
			</div>
			<div className="col-start-3 col-span-10 mb-5 ">
				<div className="relative">
					<Image
						src={
							'https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg'
						}
						layout="responsive"
						width={1343}
						height={397}
						priority={true}
						alt="Banner Maestría"
					/>
				</div>
			</div>
			<div className="col-start-3 col-span-10 mb-14">
				<Tabs nombre="bibliotecas">
					<div label="Biblioteca de Educación">
						<div className="grid grid-cols-8 gap-7">
							<div className="col-span-10 md:col-span-6">
								<p className="mb-7">
									La Biblioteca Central &quot;Pedro
									Zulen&quot; de la Universidad Nacional Mayor
									de San Marcos, inaugurada en diciembre del
									año 1999, tiene como visión convertirse en
									un centro de información y modelo de
									biblioteca universitaria que brinde
									servicios de información innovadores a los
									usuarios internos y externos a través de una
									gestión basada en la optimización de
									recursos tecnológicos, económicos y humanos.
									Para ello, tiene como misión el ser un
									centro de recursos de información y difusión
									del conocimiento científico, tecnológico y
									humanístico que contribuya en la formación
									académico profesional y la investigación,
									brindando servicios de información
									pertinentes y de calidad, asumiendo el
									compromiso institucional de la Universidad,
									cuyos ejes están orientados al desarrollo
									humano y sostenible del país.
								</p>
								<Boton
									text="Visitar página"
									primary
									link={'/#'}
								/>
							</div>
							<div className="col-span-full md:col-span-2">
								<p>2</p>
							</div>
						</div>
					</div>
					<div label="Biblioteca de Educación Física"></div>
					<div label="Biblioteca Central Pedro Zulen"></div>
				</Tabs>
			</div>

			<UltimasNoticias ultimasNoticias={ultimasNoticias} />
		</PrincipalLayout>
	);
};

export async function getStaticProps({}) {
	const resNoticias = await fetch(
		`${BASE_URL}/noticias/${SLUG_CARRERA}/ultimas`
	);
	const ultimasNoticias = await resNoticias.json();

	return {
		props: {
			ultimasNoticias,
		},
	};
}

export default Bibliotecas;
