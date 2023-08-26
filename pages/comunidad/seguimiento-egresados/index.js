import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import InputText from '../../../components/shared/InputText';
import InputCheckbox from '../../../components/shared/InputCheckbox';
import { FaLinkedinIn } from 'react-icons/fa';
import testimoniosData from '../../../data/testimonios';

const SeguimientoEgresados = () => {
	const checkboxes = [
		{ name: 'maestrias', label: 'Maestrías' },
		{ name: 'doctorado', label: 'Doctorado' },
		{ name: 'diplomaturas', label: 'Diplomaturas' },
		{ name: 'posdoctorado', label: 'Posdoctorado' },
	];

	const [selectedFilters, setSelectedFilters] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const handleToggle = (tipo) => {
		if (selectedFilters.includes(tipo)) {
			setSelectedFilters((filters) => filters.filter((f) => f !== tipo));
		} else {
			setSelectedFilters((filters) => [...filters, tipo]);
		}
	};

	const filteredTestimonios = testimoniosData
		.filter(
			(item) =>
				!selectedFilters.length ||
				selectedFilters.includes(item.tipoPrograma)
		)
		.filter((item) =>
			item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
		);

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
								{checkboxes.map((checkbox) => (
									<InputCheckbox
										key={checkbox.name}
										label={checkbox.label}
										name={checkbox.name}
										checked={selectedFilters.includes(
											checkbox.name
										)}
										onChange={() =>
											handleToggle(checkbox.name)
										}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-full lg:col-span-10 px-4 mb-5">
					<div className="flex justify-between">
						<InputText
							onChange={(e) => setSearchTerm(e.target.value)}
							value={searchTerm}
							name="buscador"
							placeholder="Buscar por palabra clave"
							conIconoBuscador
							className="w-full md:w-[14rem] inline-block"
							backgroundClass="bg-textColorTwo/5"
						/>
						{/* <Paginador controles={[page, setPage, totalPages]} /> */}
					</div>
					<div className="mt-7">
						{filteredTestimonios.map((testimonio) => (
							<div
								key={testimonio.linkedin}
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
										src={testimonio.foto}
									/>
								</a>
								<div className="px-5 py-1 pb-0 relative">
									<div>
										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer"
										>
											<div>
												<span className="text-textColorOne font-bold">
													{testimonio.nombre}
												</span>
												<span className="mx-1 text-textColorTwo">
													|
												</span>
												<span className="text-textColorTwo font-semibold">
													{testimonio.cargo}
												</span>
											</div>
											<div className="">
												<p className="text-sm font-semibold leading-6 text-textColorTwo mb-[2px]">
													{testimonio.programa}
												</p>
												<div>
													<p className="line-clamp-3 mb-2 leading-[150%]">
														{testimonio.frase}
													</p>
												</div>
											</div>
										</a>
										<div className="md:absolute bottom-0 left-0 right-0 md:px-5 w-full flex flex-col md:flex-row justify-between md:items-center">
											<div className="flex flex-row items-center gap-4">
												<span>Redes sociales:</span>
												<a
													href={testimonio.linkedin}
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
						))}
					</div>
				</div>
			</PrincipalLayout>
		</>
	);
};

export default SeguimientoEgresados;
