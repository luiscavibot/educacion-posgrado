import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';

import Cargando from '../../../components/resultados/Cargando';

import InputText from '../../../components/shared/InputText';
import InputCheckbox from '../../../components/shared/InputCheckbox';
import Paginador from '../../../components/shared/Paginador';

import useInfoAcadPosgrado from '../../../hooks/useInfoAcadPosgrado';

import { getFecha } from '../../../helpers/getFecha';
import EntradaFijaIcon from '../../../components/icons/EntradaFijaIcon';

const INITIAL_INPUTS = {
	keyWords: '',
	programa: {
		doctoradoCheck: false,
		maestriasCheck: false,
		segundasEspecialidadesCheck: false,
	},
	recurso: {
		syllabusCheck: false,
		horariosCheck: false,
		planesEstudiosCheck: false,
		planesCurricularesCheck: false,
		mallasCurricularesCheck: false,
		otrosCheck: false,
	},
	// anio: '',
};

const InfoAcadPosgrado = () => {
	const debounceRef = useRef(null);
	const [inputs, setInputs] = useState(INITIAL_INPUTS);
	const [searchParams, setSearchParams] = useState(INITIAL_INPUTS);

	const { infoAcadPosgrado, setPage, page, totalPages } =
		useInfoAcadPosgrado(searchParams);

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
		const newInput = {
			...inputs,
			[group]: { ...inputs[group], [e.target.name]: e.target.checked },
		};
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
						Información académica: Posgrado
					</li>
				</ul>
				<div className="px-4 md:px-0 col-span-full mb-10">
					<p className="title-page text-secondary mb-6">Posgrado</p>
					<p>
						Todo lo necesario para cursar el semestre con éxito está
						aquí: horarios, planes de estudios, mallas curriculares,
						syllabus, etc.
					</p>
				</div>
				<div className="col-span-4 lg:col-span-3 2xl:col-span-2 px-4 mb-5">
					<div className="bg-tertiary/10 rounded-lg p-6">
						<p className="text-textColorOne font-bold">Programa</p>
						<div
							role="group"
							aria-labelledby="checkbox-group"
							className="flex flex-col gap-y-1 mt-2 mb-8"
						>
							<InputCheckbox
								label="Doctorado"
								name="doctoradoCheck"
								checked={inputs.programa.doctoradoCheck}
								onChange={(e) => {
									handleCheck(e, 'programa');
								}}
							/>
							<InputCheckbox
								label="Maestrías"
								name="maestriasCheck"
								checked={inputs.programa.maestriasCheck}
								onChange={(e) => {
									handleCheck(e, 'programa');
								}}
							/>
							<InputCheckbox
								label="Segundas Especialidades"
								name="segundasEspecialidadesCheck"
								checked={
									inputs.programa.segundasEspecialidadesCheck
								}
								onChange={(e) => {
									handleCheck(e, 'programa');
								}}
							/>
						</div>

						<p className="text-textColorOne font-bold">Recurso</p>
						<div
							role="group"
							aria-labelledby="checkbox-group"
							className="flex flex-col gap-y-1 mt-2 mb-8"
						>
							<InputCheckbox
								label="Syllabus"
								name="syllabusCheck"
								checked={inputs.recurso.syllabusCheck}
								onChange={(e) => {
									handleCheck(e, 'recurso');
								}}
							/>
							<InputCheckbox
								label="Horarios"
								name="horariosCheck"
								checked={inputs.recurso.horariosCheck}
								onChange={(e) => {
									handleCheck(e, 'recurso');
								}}
							/>
							<InputCheckbox
								label="Planes de estudios"
								name="planesEstudiosCheck"
								checked={inputs.recurso.planesEstudiosCheck}
								onChange={(e) => {
									handleCheck(e, 'recurso');
								}}
							/>
							<InputCheckbox
								label="Planes curriculares"
								name="planesCurricularesCheck"
								checked={inputs.recurso.planesCurricularesCheck}
								onChange={(e) => {
									handleCheck(e, 'recurso');
								}}
							/>
							<InputCheckbox
								label="Mallas curriculares"
								name="mallasCurricularesCheck"
								checked={inputs.recurso.mallasCurricularesCheck}
								onChange={(e) => {
									handleCheck(e, 'recurso');
								}}
							/>
							<InputCheckbox
								label="Otros"
								name="otrosCheck"
								checked={inputs.recurso.otrosCheck}
								onChange={(e) => {
									handleCheck(e, 'recurso');
								}}
							/>
						</div>

						{/* <p className="text-textColorOne font-bold">Año</p>
						<div
							role="group"
							aria-labelledby="checkbox-group"
							className="flex flex-col gap-y-1 mt-2"></div> */}
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
						<Paginador controles={[page, setPage, totalPages]} />
					</div>
					<div className="mt-7">
						{infoAcadPosgrado ? (
							infoAcadPosgrado.length > 0 ? (
								infoAcadPosgrado
									.filter(
										(infoPosgrado) => infoPosgrado.fijado
									)
									.map((infoPosgrado) => (
										<a
											key={infoPosgrado.id}
											href={infoPosgrado.url}
											target="_blank"
											rel="noopener noreferrer"
											className="block mb-7"
										>
											<div className="mb-1">
												<p className="text-textColorOne font-bold mr-2 inline-block">
													{infoPosgrado.nombre}
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
													infoPosgrado.updated_at
												)}
											</p>
										</a>
									))
									.concat(
										infoAcadPosgrado.filter(
											(infoPosgrado) =>
												infoPosgrado.fijado
										).length > 0 ? (
											<div
												key="divider"
												className="bg-complementaryOne rounded-lg w-full h-[2px] mb-7"
											/>
										) : (
											''
										)
									)
									.concat(
										infoAcadPosgrado
											.filter(
												(infoPosgrado) =>
													!infoPosgrado.fijado
											)
											.map((infoPosgrado) => (
												<a
													key={infoPosgrado.id}
													href={infoPosgrado.url}
													target="_blank"
													rel="noopener noreferrer"
													className="block mb-7"
												>
													<p className="text-textColorOne font-bold mb-1">
														{infoPosgrado.nombre}
													</p>
													<p className="text-textColorTwo">
														Última actualización:{' '}
														{getFecha(
															infoPosgrado.updated_at
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
			</PrincipalLayout>
		</>
	);
};

export default InfoAcadPosgrado;
