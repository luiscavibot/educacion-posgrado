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
import DocumentosFillIcon from '../../components/icons/DocumentosFillIcon';
import Observacion from '../../components/shared/Observacion';
// import useUltimasNoticias from '../../hooks/useUltimasNoticias';

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
					<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
						<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
							<Link href="/">
								<a>Inicio</a>
							</Link>
						</li>
						<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
							<Link href="/tramites">
								<a>Trámites</a>
							</Link>
						</li>
						<li className="text-textColorOne font-bold inline">
							{tramite.titulo}
						</li>
					</ul>

					<div className="mx-4 md:mx-0 col-span-10 mb-4">
						<div className="title-page mb-4">{tramite.titulo}</div>
					</div>

					<div className="mx-4 md:mx-0 col-span-full lg:col-span-10 mb-4">
						<div>
							<div className="bg-complementaryTwo p-6 rounded-lg mb-6">
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
										}}
									></p>
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
											__html: `${mensaje(
												tramite.dirigido
											)}`,
										}}
									></p>
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
					</div>

					<div className="mx-4 md:mx-0 col-span-full lg:col-span-2 mb-5">
						<div className="bg-complementaryTwo px-4 py-4 rounded-lg text-sm mb-6">
							<p className="mb-2">
								¿Dificultades para realizar un trámite?
							</p>
							<Link href="/tramites/preguntas-frecuentes">
								<a className="font-semibold text-secondary link">
									Ir Preguntas frecuentes
								</a>
							</Link>
						</div>
						<a
							href="#"
							className="text-blanco text-[15px] py-3 px-4 bg-primary rounded-lg mb-8 inline-flex items-center justify-center gap-x-2 hover:bg-primary-hover transition-colors duration-300"
							rel="noreferrer noopener"
							target="_blank"
						>
							<span>
								<DocumentosFillIcon className="fill-blanco" />
							</span>
							<span>Descargar FUT</span>
						</a>
						<Observacion>
							<p className="mb-1 text-sm">
								Si tienes consultas sobre tu{' '}
								<span className="font-bold">
									Estado de cuenta
								</span>
								, envíanos un mensaje al siguiente correo:
							</p>
							<p className="break-all text-xs text-primary font-bold">
								cobranzas.administracion@unmsm.edu.pe
							</p>
						</Observacion>
					</div>
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
