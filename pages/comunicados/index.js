import React, { useState, useRef } from 'react';
import Link from 'next/link';

import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';
import InfoAcademicaPregradoIcon from '../../components/icons/InfoAcademicaPregradoIcon';
import InfoAcademicaPosgradoIcon from '../../components/icons/InfoAcademicaPosgradoIcon';
import InfoAcademicaDocentesIcon from '../../components/icons/InfoAcademicaDocentesIcon';

import { BiTimeFive } from 'react-icons/bi';
import { getFecha } from '../../helpers/getFecha';
import Cargando from '../../components/resultados/Cargando';

import useComunicados from '../../hooks/useComunicados';
import InputText from '../../components/shared/InputText';
import Paginador from '../../components/shared/Paginador';

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

	return (
		<>
			<PrincipalLayout>
				<ul className="px-4 md:px-0 col-span-full text-tertiary text-sm mb-5">
					<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="inline text-negro">Comunicados</li>
				</ul>
				{/* <div className="px-4 md:px-0 col-span-full mb-10">
					<p className="title-page text-secondary">
						Información académica
					</p>
				</div> */}
				{/* <div className="px-4 md:px-0 col-span-full mb-20 flex flex-col md:flex-row gap-x-[42px] gap-y-6 justify-center">
					<Link href="informacion-academica/pregrado">
						<a className="w-full md:max-w-[211px] h-[190px] bg-tertiary hover:bg-secondary border border-disabled rounded-lg text-blanco grid place-items-center duration-300">
							<div className="flex flex-col items-center">
								<span>
									<InfoAcademicaPregradoIcon className="fill-blanco" />
								</span>
								<p className="font-bold text-xl">Pregrado</p>
							</div>
						</a>
					</Link>
					<a className="w-full md:max-w-[211px] h-[190px] bg-tertiary hover:bg-secondary border border-disabled rounded-lg text-blanco grid place-items-center duration-300 disabled">
						<div className="flex flex-col items-center">
							<span>
								<InfoAcademicaPosgradoIcon className="fill-disabled" />
							</span>
							<p className="font-bold text-xl">Posgrado</p>
						</div>
					</a>
					<a className="w-full md:max-w-[211px] h-[190px] bg-tertiary hover:bg-secondary border border-disabled rounded-lg text-blanco grid place-items-center duration-300 disabled">
						<div className="flex flex-col items-center">
							<span>
								<InfoAcademicaDocentesIcon className="fill-disabled" />
							</span>
							<p className="font-bold text-xl">Docentes</p>
						</div>
					</a>
				</div> */}
				<div className="px-4 md:px-0 col-span-full mb-10">
					<p className="title-page text-secondary">Comunicados</p>
				</div>
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
						<Paginador controles={[page, setPage, totalPages]} />
					</div>
				</div>
				<div className="px-4 md:px-0 col-span-full mb-20">
					{comunicados ? (
						comunicados.length > 0 ? (
							comunicados.map((comunicado) => (
								<Link
									key={comunicado.id}
									href={`/comunicados/${comunicado.id}`}
								>
									<a
										key={comunicado.id}
										className="group animate__animated animate__fadeIn mb-6 bg-blanco flex flex-row cursor-pointer shadow-[0px_1px_5px_rgba(0,_0,_0,_0.1)] hover:shadow-md hover:-translate-y-1 duration-300 hover:brightness-105"
									>
										<div className="flex flex-col px-5 py-3">
											<div className="mt-[6px] md:mt-0 order-2 md:order-1 text-grisTenue text-xs flex justify-start items-center">
												<BiTimeFive />
												<p className="ml-1">
													{getFecha(comunicado.fecha)}
												</p>
											</div>
											<div className="mt-[6px] md:mt-0 order-1 md:order-2">
												<p className="text-base font-bold leading-6 text-negro group-hover:text-secondary transition duration-300">
													{comunicado.nombre}
												</p>
												{comunicado.resumen && (
													<div className="hidden md:block">
														<p className="line-clamp-2">
															{comunicado.resumen}
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
			</PrincipalLayout>
		</>
	);
};

export default InformacioAcademica;
