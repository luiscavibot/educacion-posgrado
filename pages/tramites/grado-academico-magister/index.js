import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { BiTimeFive } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { BASE_URL, SLUG_CARRERA } from '../../../config/consts';
import { getFecha } from '../../../helpers/getFecha';
import Cargando from '../../../components/resultados/Cargando';
import CompartirIcon from '../../../components/icons/CompartirIcon';
import CorreoIcon from '../../../components/icons/CorreoIcon';
import TelefonoIcon from '../../../components/icons/TelefonoIcon';

import { UltimasNoticias } from '../../../components/shared/programas/UltimasNoticias';
import DescripcionIcon from '../../../components/icons/DescripcionIcon';
import DiriridaaIcon from '../../../components/icons/DiriridaaIcon';
import FechaLimiteIcon from '../../../components/icons/FechaLimiteIcon';
import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import { ProtocoloTramitePaso1 } from '../../../components/icons/ProtocoloTramitePaso1';
import Observacion from '../../../components/shared/Observacion';
import { ProtocoloTramitePaso2 } from '../../../components/icons/ProtocoloTramitePaso2';
import { ProtocoloTramitePaso3 } from '../../../components/icons/ProtocoloTramitePaso3';
import { ProtocoloTramitePaso4 } from '../../../components/icons/ProtocoloTramitePaso4';
import { ProtocoloTramitePaso6 } from '../../../components/icons/ProtocoloTramitePaso6';
import { ProtocoloTramitePaso5 } from '../../../components/icons/ProtocoloTramitePaso5';
import { Paso1 } from '../../../components/shared/primero/Paso1';
import { Paso2 } from '../../../components/shared/primero/Paso2';
import { Paso3 } from '../../../components/shared/primero/Paso3';
import { Paso4 } from '../../../components/shared/primero/Paso4';
import { Paso5 } from '../../../components/shared/primero/Paso5';
import { Paso6 } from '../../../components/shared/primero/Paso6';
import FlechaAbajo from '../../../components/icons/FlechaAbajo';

const Index = ({ ultimasNoticias }) => {
	// const router = useRouter();
	// const [tramite, setTramite] = useState(null);
	// useEffect(() => {
	// 	const fetchDataTramite = async () => {
	// 		let response = await fetch(
	// 			`${BASE_URL}/tramites/id/${router.query.tramite}`
	// 		);
	// 		// console.log(response);
	// 		let {
	// 			id,
	// 			titulo,
	// 			descripcion,
	// 			dirigido,
	// 			fecha,
	// 			requisitos,
	// 			proceso,
	// 			correo,
	// 			anexo,
	// 		} = (await response.json()).data;
	// 		setTramite({
	// 			id,
	// 			titulo,
	// 			descripcion,
	// 			dirigido,
	// 			fecha,
	// 			requisitos,
	// 			proceso,
	// 			correo,
	// 			anexo,
	// 		});
	// 	};

	// 	if (router.isReady) {
	// 		setTramite(null);
	// 		fetchDataTramite().catch(console.error);
	// 	}
	// }, [router.isReady, router.query]);
	const tramite = {
		id: '',
		titulo: 'Protocolo de trámite para la obtención del grado académico de magíster',
		descripcion:
			'Guía de pasos con todo el proceso y requisitos para la obtención del grado de magíster.',
		dirigido: 'Egresado, posgrado',
		fecha: '',
		correo: 'mesadepartes.educacion@unmsm.edu.pe',
		anexo: '3011',
		requisitos: '',
		proceso: '',
	};
	const [isOpen, setIsOpen] = useState({
		isOpen1: false,
		isOpen2: false,
		isOpen3: false,
		isOpen4: false,
		isOpen5: false,
		isOpen6: false,
	});
	const { isOpen1, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6 } = isOpen;

	// const handleClick = () => {
	// 	setIsOpen(!isOpen);
	// };
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
						<div className="bg-gris p-6 rounded-lg mb-6">
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
								1. Proceso y requisitos
							</p>
							<div
								className="mx-4 md:mx-0 col-span-full mb-5 html-default-tramite"
								dangerouslySetInnerHTML={{
									__html: tramite.requisitos,
								}}
							/>
							<div className="html-default-tramite space-y-4">
								<p>
									En esta guía te mostramos todo lo que
									necesitas para obtener el grado académico de
									magíster sin complicaciones.
								</p>
								<div>
									<button
										onClick={() =>
											setIsOpen({
												...open,
												isOpen1: !isOpen1,
											})
										}
										className={`flex justify-between w-full py-4 px-4 bordersombra ${
											isOpen1 && 'font-bold'
										}`}>
										<div className="flex space-x-2">
											<ProtocoloTramitePaso1 />
											<p className="!mb-0">
												Paso 1: Inscripción del proyecto
												de Tesis y nombramiento de
												asesor
											</p>
										</div>
										<div
											className={`transition-transform duration-500 ${
												isOpen1
													? 'rotate-180'
													: 'rotate-0'
											}`}>
											<FlechaAbajo className="fill-secondary" />
										</div>
									</button>
									{isOpen1 && (
										<Paso1
											isOpen={isOpen1}
											programa={'maestria'}
										/>
									)}
								</div>
								<div>
									<button
										onClick={() =>
											setIsOpen({
												...open,
												isOpen2: !isOpen2,
											})
										}
										className={`flex justify-between w-full py-4 px-4 bordersombra ${
											isOpen2 && 'font-bold'
										}`}>
										<div className="flex space-x-2">
											<ProtocoloTramitePaso2 />
											<p className="!mb-0">
												Paso 2: Declaratoria de expedito
												y jurados informantes
											</p>
										</div>
										<div
											className={`transition-transform duration-500 ${
												isOpen2
													? 'rotate-180'
													: 'rotate-0'
											}`}>
											<FlechaAbajo className="fill-secondary" />
										</div>
									</button>
									{isOpen2 && (
										<Paso2
											isOpen={isOpen2}
											programa={'maestria'}
										/>
									)}
								</div>
								<div>
									<button
										onClick={() =>
											setIsOpen({
												...open,
												isOpen3: !isOpen3,
											})
										}
										className={`flex justify-between w-full py-4 px-4 bordersombra ${
											isOpen3 && 'font-bold'
										}`}>
										<div className="flex space-x-2">
											<ProtocoloTramitePaso3 />
											<p className="!mb-0">
												Paso 3: Fecha de sustentación y
												jurado examinador
											</p>
										</div>
										<div
											className={`transition-transform duration-500 ${
												isOpen3
													? 'rotate-180'
													: 'rotate-0'
											}`}>
											<FlechaAbajo className="fill-secondary" />
										</div>
									</button>
									{isOpen3 && (
										<Paso3
											isOpen={isOpen3}
											programa={'maestria'}
										/>
									)}
								</div>
								{/* <div>
									<button
										onClick={() =>
											setIsOpen({
												...open,
												isOpen4: !isOpen4,
											})
										}
										className={`flex justify-between w-full py-4 px-4 bordersombra ${
											isOpen4 && 'font-bold'
										}`}>
										<div className="flex space-x-2">
											<ProtocoloTramitePaso4 />
											<p className="!mb-0">
												Paso 4: Solicitud de informe de
												evaluación de originalidad
											</p>
										</div>
										<div
											className={`transition-transform duration-500 ${
												isOpen4
													? 'rotate-180'
													: 'rotate-0'
											}`}>
											<FlechaAbajo className="fill-secondary" />
										</div>
									</button>
									{isOpen4 && <Paso4 isOpen={isOpen4} />}
								</div> */}
								<div>
									<button
										onClick={() =>
											setIsOpen({
												...open,
												isOpen5: !isOpen5,
											})
										}
										className={`flex justify-between w-full py-4 px-4 bordersombra ${
											isOpen5 && 'font-bold'
										}`}>
										<div className="flex space-x-2">
											<ProtocoloTramitePaso5 />
											<p className="!mb-0">
												Paso 4: Emisión de expediente a
												Decanato
											</p>
										</div>
										<div
											className={`transition-transform duration-500 ${
												isOpen5
													? 'rotate-180'
													: 'rotate-0'
											}`}>
											<FlechaAbajo className="fill-secondary" />
										</div>
									</button>
									{isOpen5 && (
										<Paso5
											isOpen={isOpen5}
											programa={'maestria'}
										/>
									)}
								</div>
								{/* <div>
									<button
										onClick={() =>
											setIsOpen({
												...open,
												isOpen6: !isOpen6,
											})
										}
										className={`flex justify-between w-full py-4 px-4 bordersombra ${
											isOpen6 && 'font-bold'
										}`}>
										<div className="flex space-x-2">
											<ProtocoloTramitePaso6 />
											<p className="!mb-0">
												Paso 5: Emisión de expediente al
												Decanato
											</p>
										</div>
										<div
											className={`transition-transform duration-500 ${
												isOpen6
													? 'rotate-180'
													: 'rotate-0'
											}`}>
											<FlechaAbajo className="fill-secondary" />
										</div>
									</button>
									{isOpen6 && <Paso6 isOpen={isOpen6} />}
								</div> */}
							</div>
						</div>

						<div className="mb-8">
							<p className="text-textColorOne font-bold mb-2">
								2. Más información
							</p>
							<div className="space-y-4">
								<p>
									<CorreoIcon className="fill-textColorOne inline mr-2" />
									<span className="text-textColorOne font-bold ml-2">
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
					{/* <div className="mx-4 md:mx-0 col-span-2 mb-4">
						<p className="font-semibold mb-4">Más trámites</p>
						<a
							className="font-semibold mb-4 inline-block text-primary"
							href="">
							Grado académico (Tesis)
						</a>
						<a
							className="font-semibold mb-4 inline-block text-primary"
							href="">
							Título profesional (Tesis)
						</a>
						<a
							className="font-semibold mb-4 inline-block text-primary"
							href="">
							Certificado de estudios por semestres académicos
						</a>
						<a
							className="font-semibold mb-4 inline-block text-primary"
							href="">
							Historial académico por años
						</a>
					</div> */}
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
					? (retorno += validarPalabra(arreglo[index]) + ', ')
					: validarPalabra(arreglo[index]) + '.';
		}
		return retorno;
	}
	function validarPalabra(mensaje) {
		return mensaje === 'Programasespeciales'
			? 'Programas especiales'
			: mensaje;
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

export default Index;
