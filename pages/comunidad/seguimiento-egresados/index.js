import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';

import Cargando from '../../../components/resultados/Cargando';

import InputText from '../../../components/shared/InputText';
import InputCheckbox from '../../../components/shared/InputCheckbox';
import Paginador from '../../../components/shared/Paginador';

import useInfoAcadPosgrado from '../../../hooks/useInfoAcadPosgrado';

import { getFecha } from '../../../helpers/getFecha';
import EntradaFijaIcon from '../../../components/icons/EntradaFijaIcon';
import { BiTimeFive } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import DocumentosFillIcon from '../../../components/icons/DocumentosFillIcon';
import CorreoIcon from '../../../components/icons/CorreoIcon';

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

const SeguimientoEgresados = () => {
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
				<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
					<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
						Comunidad
					</li>
					<li className="text-textColorOne font-bold inline">
						<span>Testimonios de egresados</span>
					</li>
				</ul>
				<div className="px-4 md:px-0 col-span-full mb-8">
					<p className="title-page">Testimonios de egresados</p>
				</div>
				<div className="col-span-full lg:col-span-2 px-4 md:px-0 mb-5">
					<div className="bg-complementaryTwo rounded-lg p-6 max-xl:break-all">
						<div>
							<p className="text-textColorOne font-bold">
								Programas
							</p>
							<div
								role="group"
								aria-labelledby="checkbox-group"
								className="flex flex-col gap-y-1 mt-2"
							>
								<InputCheckbox
									label="Todos"
									name="todosCheck"
									checked={inputs.programa.todosCheck}
									onChange={(e) => {
										handleCheck(e, 'programa');
									}}
								/>
								<InputCheckbox
									label="Diplomados"
									name="diplomadosCheck"
									checked={inputs.programa.diplomadosCheck}
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
									label="Doctorado"
									name="maestriasCheck"
									checked={inputs.programa.maestriasCheck}
									onChange={(e) => {
										handleCheck(e, 'programa');
									}}
								/>
								<InputCheckbox
									label="Posdoctorado"
									name="maestriasCheck"
									checked={inputs.programa.maestriasCheck}
									onChange={(e) => {
										handleCheck(e, 'programa');
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-full lg:col-span-10 px-4 mb-5">
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
						<div
							key={`1`}
							className="min-h-[200px] animate__animated animate__fadeIn mb-6 md:mb-16 bg-blanco flex flex-row"
						>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="relative w-full max-w-[156px] hidden md:block"
							>
								<Image
									layout="fill"
									objectFit="cover"
									src={
										'https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg'
									}
								/>
							</a>
							<div className="px-5 py-1 pb-0 relative">
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div>
										<span className="text-textColorOne font-bold">
											Marinela Perez
										</span>
										<span className="mx-1 text-textColorTwo">
											|
										</span>
										<span className="text-textColorTwo font-semibold">
											Gerente geneal de Innova school
										</span>
									</div>
									<div className="">
										<p className="text-sm font-semibold leading-6 text-textColorTwo mb-[2px]">
											Maestría en Administración de
											Negocios
										</p>
										<div>
											<p className="line-clamp-3 mb-2 leading-[150%]">
												&quot;A los jóvenes que quieran
												estudiar esta carrera, yo les
												digo sean empeñosos, dedicados y
												valoren la educación. y a la
												Universidad Nacional Mayor de
												San Marcos le digo gracias por
												dejarme crecer&quot;
											</p>
										</div>
									</div>
								</a>
								<div className="md:absolute bottom-0 left-0 right-0 md:px-5 w-full flex flex-col md:flex-row justify-between md:items-center">
									<div className="flex flex-row items-center gap-4">
										<span>Redes sociales:</span>
										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer"
											className="grid place-items-center rounded-lg w-9 h-9 border-[1.5px] border-primary bg-transparente hover:bg-primary/[0.12] text-primary transition-colors duration-300"
										>
											<FaLinkedinIn />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</PrincipalLayout>
		</>
	);
};

export default SeguimientoEgresados;
