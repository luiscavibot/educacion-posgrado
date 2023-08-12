import React, { useState, useRef } from 'react';
import Link from 'next/link';

import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import InfoAcademicaPregradoIcon from '../../../components/icons/InfoAcademicaPregradoIcon';
import InfoAcademicaPosgradoIcon from '../../../components/icons/InfoAcademicaPosgradoIcon';
import InfoAcademicaDocentesIcon from '../../../components/icons/InfoAcademicaDocentesIcon';

import { BiTimeFive } from 'react-icons/bi';
import { getFecha } from '../../../helpers/getFecha';
import Cargando from '../../../components/resultados/Cargando';

import useComunicados from '../../../hooks/useComunicados';
import InputText from '../../../components/shared/InputText';
import Paginador from '../../../components/shared/Paginador';
import InputCheckbox from '../../../components/shared/InputCheckbox';
import EntradaFijaIcon from '../../../components/icons/EntradaFijaIcon';

const INITIAL_INPUTS = {
	keyWords: '',
};

const InformacioAcademica = () => {
	const debounceRef = useRef(null);
	const [inputs, setInputs] = useState(INITIAL_INPUTS);
	const [searchParams, setSearchParams] = useState(INITIAL_INPUTS);
	const { comunicados, setPage, page, totalPages } =
		useComunicados(searchParams);

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
					<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
						Actualidad
					</li>
					<li className="text-textColorOne font-bold inline">
						Comunicados
					</li>
				</ul>

				<div className="px-4 md:px-0 col-span-full mb-10">
					<p className="title-page text-secondary">Comunicados</p>
				</div>
				<div className="col-span-4 lg:col-span-3 xl:col-span-2 px-4 md:px-0 mb-5">
					<div className="bg-complementaryTwo rounded-lg p-6">
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
				</div>
				<div className="col-span-8 lg:col-span-9 xl:col-span-10 px-4 mb-6 md:px-0">
					<div className="px-4 md:px-0 col-span-full mb-5">
						<div className="flex justify-between">
							<InputText
								value={inputs.keyWords}
								name="buscador"
								onChange={handleChange}
								placeholder="Buscar por palabra clave"
								conIconoBuscador
								className="w-full md:w-[14rem] inline-block"
								backgroundClass="bg-textColorTwo/5"
							/>
							<Paginador
								controles={[page, setPage, totalPages]}
							/>
						</div>
					</div>
					<div className="px-4 md:px-0 col-span-full mb-20">
						<Link key="1" href={`/actualidad/comunicados/118`}>
							<a
								key="1"
								className="group animate__animated animate__fadeIn mb-6 h-[113px] bg-blanco block cursor-pointer shadow-[0px_1px_5px_rgba(0,_0,_0,_0.1)] hover:shadow-md hover:-translate-y-1 duration-300 hover:brightness-105"
							>
								<div className="px-5 py-3 w-full">
									<div className="mt-[6px] md:mt-0 text-xs relative mb-[2px]">
										<div className="text-textColorTwo/50 flex justify-start items-center">
											<BiTimeFive />
											<p className="ml-1">
												01 de marzo de 2023
											</p>
										</div>
										<p className="inline-block absolute top-0 right-0">
											<span className="text-xs text-textColorTwo/80 mr-1 max-md:hidden">
												Entrada fijada
											</span>
											<span>
												<EntradaFijaIcon className="fill-textColorTwo inline" />
											</span>
										</p>
									</div>
									<div className="mt-[6px] md:mt-0">
										<p className="text-base mb-[2px] font-bold leading-6 text-negro group-hover:text-secondary transition duration-300">
											Comunicado: Curso por segunda
											repitencia ciclo 2023-1
										</p>

										<div className="hidden md:block">
											<p className="line-clamp-2">
												La primera edición de Crítica y
												Acción, revista nacional e
												internacional de reflexión,
												debate y propuestas del campo de
												la sociología y áreas afines,
												fue presentada públicamente.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Link>
						<div className="w-full bg-complementaryOne rounded-lg h-[2px] mb-6"></div>
						{comunicados ? (
							comunicados.length > 0 ? (
								comunicados.map((comunicado) => (
									<Link
										key={comunicado.id}
										href={`/actualidad/comunicados/${comunicado.id}`}
									>
										<a
											key={comunicado.id}
											className="group animate__animated animate__fadeIn mb-6 h-[113px] bg-blanco block cursor-pointer shadow-[0px_1px_5px_rgba(0,_0,_0,_0.1)] hover:shadow-md hover:-translate-y-1 duration-300 hover:brightness-105"
										>
											<div className="px-5 py-3 w-full">
												<div className="mt-[6px] md:mt-0 text-xs relative mb-[2px]">
													<div className="text-textColorTwo/50 flex justify-start items-center">
														<BiTimeFive />
														<p className="ml-1">
															{getFecha(
																comunicado.fecha
															)}
														</p>
													</div>
												</div>
												<div className="mt-[6px] md:mt-0">
													<p className="text-base mb-[2px] font-bold leading-6 text-negro group-hover:text-secondary transition duration-300">
														{comunicado.nombre}
													</p>
													{comunicado.resumen && (
														<div className="hidden md:block">
															<p className="line-clamp-2">
																{
																	comunicado.resumen
																}
															</p>
														</div>
													)}
												</div>
											</div>
										</a>
									</Link>
								))
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
			</PrincipalLayout>
		</>
	);
};

export default InformacioAcademica;
