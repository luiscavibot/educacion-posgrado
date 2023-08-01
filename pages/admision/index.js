import Link from 'next/link';
// import Image from 'next/image';
import Image from 'next/future/image';
import React, { useEffect } from 'react';

import { POSGRADO_URL, SLUG_CARRERA } from '../../config/consts';

import { Tab } from 'semantic-ui-react';

import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';

import { AdmisionDiplomatura } from '../../components/shared/admision/Diplomatura/AdmisionDiplomatura';
import { AdmisionMaestria } from '../../components/shared/admision/Maestria/AdmisionMaestria';
import { AdmisionDoctorado } from '../../components/shared/admision/Doctorado/AdmisionDoctorado';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Index = ({ admision, facultad }) => {
	const router = useRouter();
	const [activeIndex, setActiveIndex] = useState(0);
	useEffect(() => {
		if (router.query.programa === 'diplomatura') {
			setActiveIndex(0);
			return;
		}
		if (router.query.programa === 'maestria') {
			setActiveIndex(1);
			return;
		}
		if (router.query.programa === 'doctorado') {
			setActiveIndex(2);
			return;
		}
	}, [router]);

	const handleClick = (event, { activeIndex }) => {
		switch (activeIndex) {
			case 0:
				router.push('/admision?programa=diplomatura', undefined, {
					shallow: true,
				});
				break;
			case 1:
				router.push('/admision?programa=maestria', undefined, {
					shallow: true,
				});
				break;
			case 2:
				router.push('/admision?programa=doctorado', undefined, {
					shallow: true,
				});
				break;
		}
		setActiveIndex(activeIndex);
	};

	const programas = [
		{
			menuItem: 'Diplomaturas',
			render: () => (
				<Tab.Pane
					attached={false}
					onClick={(e) => {
						handleClick(e, 'diplomatura');
					}}
				>
					<div className="col-start-3 col-span-10 mb-14">
						<div className="mb-14">
							<AdmisionDiplomatura />
						</div>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Maestría',
			render: () => (
				<Tab.Pane
					attached={false}
					onClick={(e) => {
						handleClick(e, 'maestria');
					}}
				>
					<div className="col-start-3 col-span-10 mb-14">
						<div className="mb-14">
							<AdmisionMaestria
								cronograma={admision[0].attributes.programas[0]}
								proceso={admision[0].attributes.admision}
								facultad={facultad}
							/>
						</div>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Doctorado',
			render: () => (
				<Tab.Pane
					attached={false}
					onClick={(e) => {
						handleClick(e, 'doctorado');
					}}
				>
					<div className="col-start-3 col-span-10 mb-14">
						<div className="mb-14">
							<AdmisionDoctorado
								cronograma={admision[0].attributes.programas[0]}
								proceso={admision[0].attributes.admision}
								facultad={facultad}
							/>
						</div>
					</div>
				</Tab.Pane>
			),
		},
	];
	return (
		<>
			<PrincipalLayout>
				<ul className="px-4 md:px-0 col-span-full text-sm mb-5">
					<li className="text-textColorTwo font-bold inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="inline text-textColorOne font-bold">
						Admisión
					</li>
				</ul>
				<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
					Admisión
				</div>
				<div className="col-span-full mb-5">
					<div className="relative md:h-banner xl:h-auto">
						<Image
							priority
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/formacion-academica/admision/admision-banner-facultad-quimica.jpg"
							layout="responsive"
							alt="Banner de admisión"
							width={1080}
							height={319}
							quality={100}
							className="w-full h-full object-cover"
						/>
						{/* temporal este bloque de abajo solo funciona visualmente, más no se puede mostrar condicionadamente */}
						<div className="bg-tertiary/90 text-blanco md:absolute bottom-0 inset-x-0 py-4 w-full flex flex-col md:flex-row justify-center items-center gap-2 px-4">
							<div>
								<p className="font-bold text-center">
									Admisión de Posgrado 2023-II
								</p>
							</div>
							<div className="mb-2 md:mb-0">
								<p className="text-center">
									<span>
										Cierre de inscripciones: 14 de julio del
										2023
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-11 mb-14">
					<Tab
						menu={{ secondary: true, pointing: true }}
						panes={programas}
						activeIndex={activeIndex}
						onTabChange={handleClick}
					/>
				</div>
			</PrincipalLayout>
		</>
	);
};

export async function getStaticProps() {
	const resAdmision = await fetch(
		`${POSGRADO_URL}/admisiones?populate[programas][populate]=*`
	);
	const admision = (await resAdmision.json()).data;

	const resFacultad = await fetch(
		`${POSGRADO_URL}/facultades?populate=*&filters[nombre][$eq]=Química%20e%20Ingeniería%20Química`
	);

	const facultad = (await resFacultad.json()).data[0].attributes;
	return {
		props: {
			admision,
			facultad,
		},
	};
}

export default Index;
