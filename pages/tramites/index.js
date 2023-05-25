import Link from 'next/link';
// import Image from 'next/image';
import Image from 'next/future/image';
import React, { useRef, useState } from 'react';

import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';

import { BASE_URL, SLUG_CARRERA } from '../../config/consts';

import Boton from '../../components/shared/Boton';

import Cargando from '../../components/resultados/Cargando';

import InputText from '../../components/shared/InputText';
import InputCheckbox from '../../components/shared/InputCheckbox';
import Paginador from '../../components/shared/Paginador';
import useTramites from '../../hooks/useTramites';

import { UltimasNoticias } from '../../components/shared/programas/UltimasNoticias';
import { getFecha } from '../../helpers/getFecha';
import LinkExtIcon from '../../components/icons/LinkExtIcon';

const INITIAL_INPUTS = {
	keyWords: '',
	ingresantesCheck: false,
	pregradoCheck: false,
	posgradoCheck: false,
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
				<ul className="px-4 md:px-0 col-span-full text-tertiary text-sm mb-5">
					<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="inline text-negro">Trámites</li>
				</ul>
				<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
					Trámites
				</div>
				<div className="col-span-2 mb-5  min-w-300">
					<div className="bg-tertiary/10 rounded-lg p-6">
						<p className="text-textColorOne font-bold">
							Dirigido a:
						</p>

						<div
							role="group"
							aria-labelledby="checkbox-group"
							className="flex flex-col gap-y-1 mt-2">
							<InputCheckbox
								label="Ingresantes"
								name="ingresantesCheck"
								checked={inputs.ingresantesCheck}
								onChange={handleCheck}
							/>
							<InputCheckbox
								label="Pregrado"
								name="pregradoCheck"
								checked={inputs.pregradoCheck}
								onChange={handleCheck}
							/>
							<InputCheckbox
								label="Posgrado"
								name="posgradoCheck"
								checked={inputs.posgradoCheck}
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
				<div className="col-span-8 mb-6 px-4 md:px-0">
					<div className="flex justify-between flex-col md:flex-row">
						<InputText
							value={inputs.keyWords}
							name="buscador"
							onChange={handleChange}
							placeholder="Buscar por palabra clave"
							conIconoBuscador
							className="w-full md:w-[14rem] inline-block"
							backgroundClass="bg-textColorTwo/5"
						/>
						<div className="max-md:flex max-md:justify-center">
							<Paginador
								controles={[page, setPage, totalPages]}
							/>
						</div>
					</div>
					<div className="mt-7">
						{tramites ? (
							tramites.length > 0 ? (
								tramites.map((tramite) => (
									<Link
										key={tramite.id}
										href={`/tramites/${tramite.id}`}>
										<a
											key={tramite.id}
											className="block mb-7">
											<p className="text-textColorOne font-bold mb-1">
												{tramite.titulo}
											</p>
											<p className="text-textColorTwo">
												Última actualización:{' '}
												{getFecha(tramite.updated_at)}
											</p>
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
				<div className="col-span-2 mb-5">
					<div className="inline-flex items-center mb-4 font-bold">
						<span className="mr-2">Enlaces de interés</span>
						<LinkExtIcon className="fill-secondary" />{' '}
					</div>
					<a
						className="font-semibold mb-4 inline-block text-secondary"
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view"
						rel="noreferrer noopener">
						Formato Único de Trámites
					</a>
					{/* <a
						className="font-semibold mb-4 inline-block text-secondary link"
						target="_blank"
						href="https://drive.google.com/file/d/1B67SEzlFmOBZX6Waz97UF3ir5VPEQOpo/view?usp=sharing"
						rel="noreferrer noopener">
						Declaraciones juradas
					</a> */}
					{/* <a
						className="font-semibold mb-4 inline-block text-secondary link"
						target="_blank"
						href="https://drive.google.com/file/d/1Y9VH0Car3ZikXqH4OGewDJV5zscjBV7V/view?usp=sharing"
						rel="noreferrer noopener">
						Tarifario de Pregrado
					</a> */}
					<a
						className="font-semibold mb-4 inline-block text-secondary link"
						target="_blank"
						href="https://drive.google.com/file/d/1TDHzIZuLmYdsmEiguw01GAUyJKdiqb4f/view?usp=share_link"
						rel="noreferrer noopener">
						Tarifario de Posgrado
					</a>
					<a
						className="font-semibold mb-4 inline-block text-secondary link"
						target="_blank"
						href="https://tramiteonline.unmsm.edu.pe/sgdfd/mat/"
						rel="noreferrer noopener">
						Módulo de Atención de Trámites
					</a>
					<a
						className="font-semibold mb-4 inline-block text-secondary link"
						target="_blank"
						href="https://tramiteonline.unmsm.edu.pe/sgdfd/mat/seguimiento-expedientes-unmsm"
						rel="noreferrer noopener">
						Seguimiento de trámites
					</a>
				</div>
				<UltimasNoticias ultimasNoticias={ultimasNoticias} />
			</PrincipalLayout>
		</>
	);
};

export async function getStaticProps() {
	const resUltimasNoticias = await fetch(
		`${BASE_URL}/noticias/${SLUG_CARRERA}/ultimas`
	);
	const ultimasNoticias = await resUltimasNoticias.json();
	return {
		props: {
			ultimasNoticias,
		},
	};
}

export default Index;
