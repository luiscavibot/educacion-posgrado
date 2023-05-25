import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';

import Cargando from '../../../components/resultados/Cargando';

import InputText from '../../../components/shared/InputText';
import InputCheckbox from '../../../components/shared/InputCheckbox';
import Paginador from '../../../components/shared/Paginador';

import useInfoAcadPregrado from '../../../hooks/useInfoAcadPregrado';

import { getFecha } from '../../../helpers/getFecha';
import EntradaFijaIcon from '../../../components/icons/EntradaFijaIcon';
import useEscuelasPregrado from '../../../hooks/useEsuelasPregrado';

const InfoAcadPregrado = () => {
	const { escuelasPregrado } = useEscuelasPregrado();
	const INITIAL_INPUTS = {
		keyWords: '',
		escuelas: escuelasPregrado.map((escuelaPregrado) => ({
			...escuelaPregrado,
			check: false,
		})),
		recursos: {
			syllabusCheck: false,
			horariosCheck: false,
			planesEstudiosCheck: false,
			planesCurricularesCheck: false,
			mallasCurricularesCheck: false,
			otrosCheck: false,
		},
	};

	const debounceRef = useRef(null);

	const [inputs, setInputs] = useState(null);
	const [searchParams, setSearchParams] = useState(null);

	useEffect(() => {
		if (escuelasPregrado.length > 0) {
			setInputs(INITIAL_INPUTS);
			setSearchParams(INITIAL_INPUTS);
		}
	}, [escuelasPregrado]);

	const { infoAcadPregrado, setPage, page, totalPages } =
		useInfoAcadPregrado(searchParams);

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

	const handleCheck = (e, group) => {
		const newInput = {};
		if (group === 'escuelas') {
			newInput = {
				...inputs,
				[group]: inputs[group].map((escuela) => {
					if (escuela.path === e.target.name) {
						return { ...escuela, check: e.target.checked };
					}
					return escuela;
				}),
			};
		}
		if (group === 'recursos') {
			newInput = {
				...inputs,
				[group]: {
					...inputs[group],
					[e.target.name]: e.target.checked,
				},
			};
		}
		setPage(0);
		setSearchParams(newInput);
		setInputs(newInput);
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
					{/* <li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/informacion-academica">
							<a>Información académica</a>
						</Link>
					</li> */}
					<li className="inline text-negro">
						Información académica: Pregrado
					</li>
				</ul>
				<div className="px-4 md:px-0 col-span-full mb-10">
					<p className="title-page text-secondary mb-6">Pregrado</p>
					<p>
						Todo lo necesario para cursar el semestre con éxito está
						aquí: horarios, planes de estudios, mallas curriculares,
						syllabus, etc.
					</p>
				</div>
				{inputs && searchParams && (
					<>
						<div className="col-span-4 lg:col-span-3 2xl:col-span-2 px-4 mb-5">
							<div className="bg-secondary/10 rounded-lg p-6">
								<p className="text-textColorOne font-bold">
									Escuela
								</p>
								<div
									role="group"
									aria-labelledby="checkbox-group"
									className="flex flex-col gap-y-1 mt-2 mb-8">
									{inputs.escuelas?.map((escuela) => {
										console.log(escuela);
										return (
											<InputCheckbox
												key={escuela?.id}
												label={escuela?.label}
												name={escuela?.path}
												checked={escuela.check}
												onChange={(e) => {
													handleCheck(e, 'escuelas');
												}}
											/>
										);
									})}
								</div>

								<p className="text-textColorOne font-bold">
									Recurso
								</p>
								<div
									role="group"
									aria-labelledby="checkbox-group"
									className="flex flex-col gap-y-1 mt-2 mb-8">
									<InputCheckbox
										label="Syllabus"
										name="syllabusCheck"
										checked={inputs.recursos?.syllabusCheck}
										onChange={(e) => {
											handleCheck(e, 'recursos');
										}}
									/>
									<InputCheckbox
										label="Horarios"
										name="horariosCheck"
										checked={inputs.recursos?.horariosCheck}
										onChange={(e) => {
											handleCheck(e, 'recursos');
										}}
									/>
									<InputCheckbox
										label="Planes de estudios"
										name="planesEstudiosCheck"
										checked={
											inputs.recursos?.planesEstudiosCheck
										}
										onChange={(e) => {
											handleCheck(e, 'recursos');
										}}
									/>
									<InputCheckbox
										label="Planes curriculares"
										name="planesCurricularesCheck"
										checked={
											inputs.recursos
												?.planesCurricularesCheck
										}
										onChange={(e) => {
											handleCheck(e, 'recursos');
										}}
									/>
									<InputCheckbox
										label="Mallas curriculares"
										name="mallasCurricularesCheck"
										checked={
											inputs.recursos
												?.mallasCurricularesCheck
										}
										onChange={(e) => {
											handleCheck(e, 'recursos');
										}}
									/>
									<InputCheckbox
										label="Otros"
										name="otrosCheck"
										checked={inputs.recursos?.otrosCheck}
										onChange={(e) => {
											handleCheck(e, 'recursos');
										}}
									/>
								</div>
							</div>
						</div>
						<div className="col-span-8 lg:col-span-9 2xl:col-span-10 px-4 mb-5">
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
							<div className="mt-7">
								{infoAcadPregrado ? (
									infoAcadPregrado.length > 0 ? (
										infoAcadPregrado
											.filter(
												(infoPregrado) =>
													infoPregrado.fijado
											)
											.map((infoPregrado) => (
												<a
													key={infoPregrado.id}
													href={infoPregrado.url}
													target="_blank"
													rel="noopener noreferrer"
													className="block mb-7">
													<div className="mb-1">
														<p className="text-textColorOne font-bold mr-2 inline-block">
															{
																infoPregrado.nombre
															}
														</p>
														<p className="inline-block">
															<span className="text-xs text-textColorTwo/80 mr-1">
																Entrada fijada
															</span>
															<span>
																<EntradaFijaIcon className="fill-textColorTwo inline" />
															</span>
														</p>
													</div>
													<p className="text-textColorTwo">
														Última actualización:{' '}
														{getFecha(
															infoPregrado.updated_at
														)}
													</p>
												</a>
											))
											.concat(
												infoAcadPregrado.filter(
													(infoPregrado) =>
														infoPregrado.fijado
												).length > 0 ? (
													<div
														key="divider"
														className="bg-complementaryTwo rounded-lg w-full h-[2px] mb-7"
													/>
												) : (
													''
												)
											)
											.concat(
												infoAcadPregrado
													.filter(
														(infoPregrado) =>
															!infoPregrado.fijado
													)
													.map((infoPregrado) => (
														<a
															key={
																infoPregrado.id
															}
															href={
																infoPregrado.url
															}
															target="_blank"
															rel="noopener noreferrer"
															className="block mb-7">
															<p className="text-textColorOne font-bold mb-1">
																{
																	infoPregrado.nombre
																}
															</p>
															<p className="text-textColorTwo">
																Última
																actualización:{' '}
																{getFecha(
																	infoPregrado.updated_at
																)}
															</p>
														</a>
													))
											)
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
					</>
				)}
			</PrincipalLayout>
		</>
	);
};

export default InfoAcadPregrado;
