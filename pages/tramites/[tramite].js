import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';
import { BiTimeFive } from 'react-icons/bi';
import Boton from '../../components/shared/Boton';
import { useRouter } from 'next/router';
import { BASE_URL, SLUG_CARRERA } from '../../config/consts';
import { getFecha } from '../../helpers/getFecha';
import Cargando from '../../components/resultados/Cargando';
import CompartirIcon from '../../components/icons/CompartirIcon';
import CorreoIcon from '../../components/icons/CorreoIcon';
import TelefonoIcon from '../../components/icons/TelefonoIcon';
import DescripcionIcon from '../../components/icons/DescripcionIcon';
import DiriridaaIcon from '../../components/icons/DiriridaaIcon';
import FechaLimiteIcon from '../../components/icons/FechaLimiteIcon';

import { UltimasNoticias } from '../../components/shared/programas/UltimasNoticias';

const Tramite = ({ ultimasNoticias }) => {
	const router = useRouter();
	const [tramite, setTramite] = useState(null);
	useEffect(() => {
		const fetchDataTramite = async () => {
			let response = await fetch(
				`${BASE_URL}/tramites/id/${router.query.tramite}`
			);
			// console.log(response);
			let {
				id,
				titulo,
				descripcion,
				dirigido,
				fecha,
				requisitos,
				proceso,
				correo,
				anexo,
			} = (await response.json()).data;
			setTramite({
				id,
				titulo,
				descripcion,
				dirigido,
				fecha,
				requisitos,
				proceso,
				correo,
				anexo,
			});
		};

		if (router.isReady) {
			setTramite(null);
			fetchDataTramite().catch(console.error);
		}
	}, [router.isReady, router.query]);

	return (
		<PrincipalLayout>
			{!tramite ? (
				<div className="col-span-full mt-10 grid place-items-center h-[60vh]">
					<Cargando />
				</div>
			) : (
				<>
					<ul className="px-4 md:px-0 col-span-full text-tertiary text-sm mb-5">
						<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
							<Link href="/">
								<a>Inicio</a>
							</Link>
						</li>
						<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
							<Link href="/tramites">
								<a>Trámites</a>
							</Link>
						</li>
						<li className="inline text-negro">{tramite.titulo}</li>
					</ul>
					<div className="mx-4 md:mx-0 col-span-full title-page mb-4">
						{tramite.titulo}
					</div>
					<div className="mx-4 md:mx-0 col-span-10 mb-4">
						<div className="bg-tertiary/10 p-6 rounded-lg mb-6">
							<div className="mb-4">
								<div className="inline-flex items-center mb-4 font-bold">
									<DescripcionIcon className="fill-secondary" />
									<p className="text-textColorOne font-bold text-sm mt-1">
										Descripción
									</p>
								</div>
								<p
									className="text-textColorTwo"
									dangerouslySetInnerHTML={{
										__html: `${tramite.descripcion}`,
									}}></p>
							</div>
							<div className="mb-4">
								<div className="inline-flex items-center mb-4 font-bold">
									<DiriridaaIcon />
									<p className="text-textColorOne font-bold text-sm mt-1 ml-1">
										Dirigido a
									</p>
								</div>
								<p
									className="text-textColorTwo"
									dangerouslySetInnerHTML={{
										__html: `${mensaje(tramite.dirigido)}`,
									}}></p>
							</div>
							<div>
								<div className="inline-flex items-center mb-4 font-bold">
									<FechaLimiteIcon className="fill-secondary" />
									<p className="text-textColorOne font-bold text-sm mt-1 ml-1">
										Fecha límite
									</p>
								</div>

								{tramite.fecha ? (
									<p className="text-textColorTwo">
										{getFecha(tramite.fecha)}
									</p>
								) : (
									<p className="text-textColorTwo">
										No existe fecha límite
									</p>
								)}
							</div>
						</div>
						<div className="mb-8">
							<p className="text-textColorOne font-bold mb-2">
								1. Requisitos
							</p>
							<div
								className="mx-4 md:mx-0 col-span-full mb-5 html-default"
								dangerouslySetInnerHTML={{
									__html: tramite.requisitos,
								}}
							/>
						</div>
						<div className="mb-8">
							<p className="text-textColorOne font-bold mb-2">
								2. Proceso
							</p>
							<div
								className="mx-4 md:mx-0 col-span-full mb-5 html-default"
								dangerouslySetInnerHTML={{
									__html: tramite.proceso,
								}}
							/>
						</div>
						<div className="mb-8">
							<p className="text-textColorOne font-bold mb-2">
								3. Más información
							</p>
							<div>
								<p>
									<CorreoIcon className="fill-textColorOne inline mr-2" />
									<span className="text-textColorOne font-bold">
										Correo:{' '}
									</span>
									<span className="text-textColorTwo">
										{tramite.correo}
									</span>
								</p>
								<p>
									<TelefonoIcon className="fill-textColorOne inline mr-2" />
									<span className="text-textColorOne font-bold">
										Teléfono:{' '}
									</span>
									<span className="text-textColorTwo">
										(+51) 619 7000 anexo {tramite.anexo}
									</span>
								</p>
							</div>
						</div>
					</div>
					<div className="mx-4 md:mx-0 col-span-2 mb-4 flex flex-col">
						<p className="font-semibold mb-4">Más trámites</p>
						{/* <a
							className="font-semibold mb-4 inline-block text-secondary"
							href="">
							Grado académico (Tesis)
						</a>
						<a
							className="font-semibold mb-4 inline-block text-secondary"
							href="">
							Título profesional (Tesis)
						</a>
						<a
							className="font-semibold mb-4 inline-block text-secondary"
							href="">
							Certificado de estudios por semestres académicos
						</a>
						<a
							className="font-semibold mb-4 inline-block text-secondary"
							href="">
							Historial académico por años
						</a> */}
						{tramites.map(({ nombre, enlace }) => {
							return (
								<a
									href=""
									key={nombre}
									className="font-semibold mb-4 inline-block text-secondary link">
									{nombre}
								</a>
							);
						})}
					</div>
					{/* <div className="mx-4 md:mx-0 col-start-5 col-span-5 mb-5"> */}

					<div
						className="mx-4 md:mx-0 col-span-full mt-5 mb-5 html-default"
						dangerouslySetInnerHTML={{ __html: tramite.cuerpo }}
					/>
				</>
			)}
			<UltimasNoticias ultimasNoticias={ultimasNoticias} />
		</PrincipalLayout>
	);
	function mensaje(mensaje) {
		const arreglo = (
			mensaje.charAt(0) + mensaje.toLowerCase().slice(0 + 1)
		).split(',');
		let retorno = '';
		for (let index = 0; index < arreglo.length; index++) {
			retorno +=
				index < arreglo.length - 1
					? (retorno += arreglo[index] + ', ')
					: arreglo[index] + '.';
		}
		return retorno;
	}
};

// export async function getStaticProps() {
// 	const resUltimasNoticias = await fetch(
// 		`${BASE_URL}/noticias/${SLUG_CARRERA}/ultimas`
// 	);
// 	const ultimasNoticias = await resUltimasNoticias.json();

// 	return {
// 		props: {
// 			ultimasNoticias,
// 		},
// 	};
// }

export default Tramite;

const tramites = [
	{
		nombre: 'Grado académico (Tesis)',
		enlace: '',
	},
	{
		nombre: 'Título profesional (Tesis)',
		enlace: '',
	},
	{
		nombre: 'Certificado de estudios por semestres académicos',
		enlace: '',
	},
	{
		nombre: 'Historial académico por años',
		enlace: '',
	},
];
