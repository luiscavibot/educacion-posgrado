import Link from 'next/link';
// import Image from 'next/image';
import React, { useRef, useState } from 'react';

import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';

import { BACKEND } from '../../config/consts';

import Cargando from '../../components/resultados/Cargando';

import InputText from '../../components/shared/InputText';
import InputCheckbox from '../../components/shared/InputCheckbox';
import Paginador from '../../components/shared/Paginador';
import useTramites from '../../hooks/useTramites';

import { UltimasNoticias } from '../../components/shared/programas/UltimasNoticias';
import { getFecha } from '../../helpers/getFecha';
import LinkExtIcon from '../../components/icons/LinkExtIcon';
import Observacion from '../../components/shared/Observacion';
import DocumentosFillIcon from '../../components/icons/DocumentosFillIcon';
import FijadoIcon from '../../components/icons/FijadoIcon';

const INITIAL_INPUTS = {
	keyWords: '',
	estudiantesCheck: false,
	egresadosCheck: false,
	docentesCheck: false,
};

const Index = ({ ultimasNoticias }) => {
	const debounceRef = useRef(null);
	const [inputs, setInputs] = useState(INITIAL_INPUTS);
	const [searchParams, setSearchParams] = useState(INITIAL_INPUTS);
	const { tramites, setPage, page, totalPages } = useTramites(searchParams);
	const handleChange = (e) => {
		setPage(0);
		setInputs({
			...inputs,
			keyWords: e.target.value,
		});
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			setSearchParams({
				...searchParams,
				keyWords: e.target.value,
			});
		}, 500);
	};

	const handleCheck = (e) => {
		setPage(0);
		setSearchParams({ ...inputs, [e.target.name]: e.target.checked });
		setInputs({ ...inputs, [e.target.name]: e.target.checked });
	};

	return (
		<>
			<PrincipalLayout>
				<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
					<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="text-textColorOne font-bold inline">
						Trámites
					</li>
				</ul>
				<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
					Trámites
				</div>
				<div className="col-span-4 lg:col-span-3 xl:col-span-2 px-4 mb-5">
					<div className="bg-complementaryTwo rounded-lg p-6 mb-8">
						<p className="text-textColorOne font-bold">
							Dirigido a:
						</p>

						<div
							role="group"
							aria-labelledby="checkbox-group"
							className="flex flex-col gap-y-1 mt-2"
						>
							<InputCheckbox
								label="Estudiantes"
								name="estudiantesCheck"
								checked={inputs.estudiantesCheck}
								onChange={handleCheck}
							/>
							<InputCheckbox
								label="Egresados"
								name="egresadosCheck"
								checked={inputs.egresadosCheck}
								onChange={handleCheck}
							/>
							<InputCheckbox
								label="Docentes"
								name="docentesCheck"
								checked={inputs.docentesCheck}
								onChange={handleCheck}
							/>
						</div>
					</div>
					<Observacion>
						<p className="mb-1 text-sm">
							Si tienes consultas sobre tu{' '}
							<span className="font-bold">Estado de cuenta</span>,
							envíanos un mensaje al siguiente correo:
						</p>
						<p className="break-all text-xs text-primary font-bold">
							controldepagosupg.fe@unmsm.edu.pe
						</p>
					</Observacion>
				</div>
				<div className="col-span-8 lg:col-span-7 xl:col-span-8 px-4 mb-6 md:px-0">
					<div className="flex justify-between flex-col md:flex-row">
						<InputText
							value={inputs.keyWords}
							name="buscador"
							onChange={handleChange}
							placeholder="Buscar por palabra clave"
							conIconoBuscador
							className="w-full md:w-[20rem] inline-block mb-4"
							backgroundClass="bg-textColorTwo/5"
						/>
						<div className="max-md:flex max-md:justify-center">
							<Paginador
								controles={[page, setPage, totalPages]}
							/>
						</div>
					</div>
					<div className="mt-7">
						<Link
							key="a"
							href={`/tramites/grado-academico-magister`}
						>
							<a className={`block mb-7`}>
								<p className="text-textColorOne font-bold mb-1">
									{`Protocolo de trámite para la obtención del grado académico de magíster`}
									&nbsp;&nbsp;
									<FijadoIcon className="fill-secondary inline-block relative -top-[1px]" />
								</p>
								<p className="text-textColorTwo">
									{/* Última actualización: {getFecha(fecha)} */}
									Última actualización: 17 de mayo de 2023
								</p>
							</a>
						</Link>
						<Link key="b" href={`/tramites/grado-academico-doctor`}>
							<a className={`block mb-7`}>
								<p className="text-textColorOne font-bold mb-1">
									{`Protocolo de trámite para la obtención del grado académico de doctor`}
									&nbsp;&nbsp;
									<FijadoIcon className="fill-secondary inline-block relative -top-[1px]" />
								</p>
								<p className="text-textColorTwo">
									{/* Última actualización: {getFecha(fecha)} */}
									Última actualización: 17 de mayo de 2023
								</p>
							</a>
						</Link>
						<Link
							key="b"
							href={`/tramites/titulo-segunda-especialidad`}
						>
							<a className={`block mb-7`}>
								<p className="text-textColorOne font-bold mb-1">
									{`Protocolo de trámite para la obtención del título de Segunda Especialidad`}
									&nbsp;&nbsp;
									<FijadoIcon className="fill-secondary inline-block relative -top-[1px]" />
								</p>
								<p className="text-textColorTwo">
									{/* Última actualización: {getFecha(fecha)} */}
									Última actualización: 17 de mayo de 2023
								</p>
							</a>
						</Link>

						{tramites ? (
							tramites.length > 0 ? (
								<>
									{tramites
										.filter((tramite) => tramite.fijar)
										.map((tramite) => (
											<Link
												key={tramite.id}
												href={`/tramites/${tramite.id}`}
											>
												<a
													key={tramite.id}
													className="block mb-6"
												>
													<p className="text-textColorOne font-bold mb-1">
														{tramite.titulo}
														&nbsp;&nbsp;
														<FijadoIcon className="fill-secondary inline-block relative -top-[1px]" />
													</p>
													<p className="text-textColorTwo">
														Última actualización:{' '}
														{getFecha(
															tramite.updated_at
														)}
													</p>
												</a>
											</Link>
										))}
									<div className="w-full bg-complementaryOne rounded-lg h-[2px] mb-6"></div>
									{tramites
										.filter((tramite) => !tramite.fijar)
										.map((tramite) => (
											<Link
												key={tramite.id}
												href={`/tramites/${tramite.id}`}
											>
												<a
													key={tramite.id}
													className="block mb-6"
												>
													<p className="text-textColorOne font-bold mb-1">
														{tramite.titulo}
													</p>
													<p className="text-textColorTwo">
														Última actualización:{' '}
														{getFecha(
															tramite.updated_at
														)}
													</p>
												</a>
											</Link>
										))}
								</>
							) : (
								<p>No hay resultados</p>
							)
						) : (
							<div className=" mt-10 flex justify-center items-center">
								<Cargando />
							</div>
						)}
					</div>
				</div>
				<div className="col-span-full lg:col-span-2 mb-5 px-4">
					{/* <div className="bg-complementaryTwo px-4 py-4 rounded-lg text-sm mb-6">
						<p className="mb-2">
							¿Dificultades para realizar un trámite?
						</p>
						<Link href="/tramites/preguntas-frecuentes">
							<a className="font-semibold text-secondary link">
								Ir a Preguntas frecuentes
							</a>
						</Link>
					</div> */}
					<a
						href="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/educacion/documents/fut-unmsm-educacion_compressed.pdf"
						className="text-blanco text-[15px] py-3 px-4 bg-primary rounded-lg mb-8 inline-flex items-center justify-center gap-x-2 hover:bg-primary-hover transition-colors duration-300"
						rel="noreferrer noopener"
						target="_blank"
					>
						<span>
							<DocumentosFillIcon className="fill-blanco" />
						</span>
						<span>Descargar FUT</span>
					</a>
					<div className="inline-flex items-center mb-4 font-bold">
						<span className="mr-2 text-textColorOne">
							Enlaces de interés
						</span>
						<LinkExtIcon className="fill-textColorOne" />
					</div>
					<div>
						<a
							className="font-semibold mb-4 block text-secondary"
							target="_blank"
							href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view"
							rel="noreferrer noopener"
						>
							Módulo de Atención de Trámites (MAT)
						</a>
						<a
							className="font-semibold mb-4 block text-secondary"
							target="_blank"
							href="https://tramiteonline.unmsm.edu.pe/sgdfd/mat/seguimiento-expedientes-unmsm"
							rel="noreferrer noopener"
						>
							Seguimiento de trámites
						</a>
					</div>
				</div>
				<UltimasNoticias ultimasNoticias={ultimasNoticias} />
			</PrincipalLayout>
		</>
	);
};

export async function getStaticProps() {
	const resUltimasNoticias = await fetch(`${BACKEND}/agenda-publica/ultimas`);
	const ultimasNoticias = await resUltimasNoticias.json();
	return {
		props: {
			ultimasNoticias,
		},
	};
}

export default Index;
