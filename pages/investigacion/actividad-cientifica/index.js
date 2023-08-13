import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
import InputRadioButton from '../../../components/shared/InputRadioButton';
import useActividadCientifica from '../../../hooks/useActividadCientifica';

const INITIAL_INPUTS = {
	keyWords: '',
};
const radioOptions = [
	{ value: 'ARTICULOSCIENTIFICOS', label: 'Artículos científicos' },
	{ value: 'ARTICULOSREVISION', label: 'Artículos de revisión' },
	{ value: 'TESIS', label: 'Tesis' },
	{ value: 'DOCENTESASESORES', label: 'Docentes asesores' },
	{
		value: 'SUSTENTACIONESVIRTUALES',
		label: 'Sustentaciones virtuales',
	},
	{ value: 'LIBROS', label: 'Libros' },
	{
		value: 'INVESTIGACIONESDOCTORADO',
		label: 'Investigaciones de Doctorado',
	},
];

function createMarkup(dom) {
	return { __html: dom };
}
const ActividadCientifica = () => {
	const [selectedOption, setSelectedOption] = useState(radioOptions[0].value);

	const handleRadioChange = (event) => {
		setSelectedOption(event.target.value);
	};
	const { actividadesCientificas, isLoading } =
		useActividadCientifica(selectedOption);
	// const debounceRef = useRef(null);
	// const [inputs, setInputs] = useState(INITIAL_INPUTS);
	// const [searchParams, setSearchParams] = useState(INITIAL_INPUTS);
	// const { comunicados, setPage, page, totalPages } =
	// 	useComunicados(searchParams);

	// const handleChange = (e) => {
	// 	setPage(0);
	// 	setInputs({
	// 		...inputs,
	// 		keyWords: e.target.value,
	// 	});
	// 	if (debounceRef.current) clearTimeout(debounceRef.current);
	// 	debounceRef.current = setTimeout(() => {
	// 		setSearchParams({
	// 			...searchParams,
	// 			keyWords: e.target.value,
	// 		});
	// 	}, 500);
	// };

	// const handleCheck = (e) => {
	// 	setPage(0);
	// 	setSearchParams({ ...inputs, [e.target.name]: e.target.checked });
	// 	setInputs({ ...inputs, [e.target.name]: e.target.checked });
	// };

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
						Investigación
					</li>
					<li className="text-textColorOne font-bold inline">
						<span>Actividad científica</span>
					</li>
				</ul>

				<div className="px-4 md:px-0 col-span-full mb-10">
					<p className="title-page text-secondary">
						Actividad científica
					</p>
				</div>
				<div className="col-span-4 lg:col-span-3 xl:col-span-2 px-4 md:px-0 mb-5">
					<div className="bg-complementaryTwo rounded-lg p-6">
						<p className="text-textColorOne font-bold">Tipo:</p>
						<InputRadioButton
							name="Tipo"
							options={radioOptions}
							value={selectedOption}
							onChange={handleRadioChange}
						/>
					</div>
				</div>
				<div className="col-span-8 lg:col-span-9 xl:col-span-10 px-4 mb-6 md:px-0">
					{/* <div className="px-4 md:px-0 col-span-full mb-5">
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
					</div> */}
					<div className="px-4 md:px-0 col-span-full mb-20">
						{!isLoading && actividadesCientificas.length === 0 && (
							<p>No hay resultados</p>
						)}
						{actividadesCientificas.length > 0 &&
							actividadesCientificas.map((actividad) => (
								<Link
									key={actividad.slug}
									href={`#`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<a
										key={`1`}
										className="group min-h-[190px] md:min-h-[200px] animate__animated animate__fadeIn mb-6 md:mb-8 bg-blanco flex flex-row cursor-pointer shadow-[0px_1px_5px_rgba(0,_0,_0,_0.1)] hover:shadow-md duration-300 hover:brightness-105"
									>
										<div className="relative w-full max-w-[188px] hidden md:block">
											<Image
												layout="fill"
												objectFit="cover"
												src={actividad.foto}
											/>
										</div>
										<div className="flex flex-col gap-2 basis-12/12 md:basis-9/12 px-5 py-3 relative">
											<div className="mt-[6px] md:mt-0 order-2 md:order-1 text-grisTenue text-xs flex justify-start items-center">
												<BiTimeFive />
												<p className="ml-1">
													{/* {getFecha(noticia.fecha)} */}
													20 de junio de 2023
												</p>
											</div>
											<div className="mt-[6px] md:mt-0 order-1 md:order-2">
												<p className="text-base font-bold leading-6 text-negro mb-2 group-hover:text-secondary transition duration-300">
													{actividad.nombre}
												</p>
												<div>
													<p
														className="line-clamp-4 mb-2"
														dangerouslySetInnerHTML={createMarkup(
															actividad.resumen
														)}
													/>
													{/* <span className="text-secondary font-bold">
												{' '}
												Leer más
											</span> */}
												</div>
											</div>
											<p className="text-tertiary text-sm absolute bottom-3 left-5">
												Anthony Ramirez
											</p>
										</div>
									</a>
								</Link>
							))}
						{/* registro de docentes */}
						{/* <div className="mb-8">
							<p className="text-textColorOne font-bold mb-1">
								Dr. Victor Chalco Flores
							</p>
							<p className="text-textColorTwo mb-2">
								mvelazquezc@unmsm.edu.pe
							</p>
							<ul className="list-disc list-inside">
								<li>
									Ll-21: Administración Financiera - ODS 4:
									Educación de calidad
								</li>
								<li>
									LI-122: Gestión Bancaria - ODS 9: Industria,
									innovación e infraestructura
								</li>
								<li>
									LI-123: Finanzas Corporativas - ODS 9:
									Industria, innovación e infraestructura
								</li>
							</ul>
						</div> */}
					</div>
				</div>
			</PrincipalLayout>
		</>
	);
};

export default ActividadCientifica;
