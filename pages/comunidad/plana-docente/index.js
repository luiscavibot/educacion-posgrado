import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import InputText from '../../../components/shared/InputText';
import InputCheckbox from '../../../components/shared/InputCheckbox';
import Paginador from '../../../components/shared/Paginador';
import { FaLinkedinIn } from 'react-icons/fa';
import DocumentosFillIcon from '../../../components/icons/DocumentosFillIcon';
import CorreoIcon from '../../../components/icons/CorreoIcon';
import { planaDocenteData } from '../../../data/planaDocente';

const PlanaDocente = () => {
	const checkboxes = [
		{ name: 'Nacional', label: 'Nacional' },
		{ name: 'Internacional', label: 'Internacional' },
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

	const filteredPlanaDocente = planaDocenteData
		.filter(
			(item) =>
				!selectedFilters.length || selectedFilters.includes(item.origin)
		)
		.filter(
			(item) =>
				item.names.toLowerCase().includes(searchTerm.toLowerCase()) ||
				item.degree.toLowerCase().includes(searchTerm.toLowerCase())
		);
	const [page, setPage] = useState(0);
	const itemsPerPage = 6;

	const totalPages = Math.ceil(filteredPlanaDocente.length / itemsPerPage);

	const displayedItems = filteredPlanaDocente.slice(
		page * itemsPerPage,
		page * itemsPerPage + itemsPerPage
	);

	useEffect(() => {
		if (searchTerm !== '') {
			setPage(0);
		}
	}, [searchTerm]);

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
						<span>Plana Docente</span>
					</li>
				</ul>
				<div className="px-4 md:px-0 col-span-full mb-8">
					<p className="title-page">Plana Docente</p>
				</div>
				<div className="col-span-full lg:col-span-2 px-4 md:px-0 mb-5">
					<div className="bg-complementaryTwo rounded-lg p-6 max-xl:break-all">
						<div className="mb-8">
							<p className="text-textColorOne font-bold">
								Origen
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
						<Paginador controles={[page, setPage, totalPages]} />
					</div>
					<div className="mt-7">
						{displayedItems.map((docente) => (
							<div
								key={docente.names}
								className="min-h-[150px] rounded-lg animate__animated animate__fadeIn mb-6 md:mb-16 bg-complementaryTwo/20 flex flex-row"
							>
								{/* <div className="relative w-full max-w-[188px] hidden md:block">
								<Image
									layout="fill"
									objectFit="cover"
									src={
										'https://posgrado-unmsm.s3.amazonaws.com/fondo_programa_c0563685fb.jpg'
									}
								/>
							</div> */}
								<div className="px-5 py-3 pb-0 relative w-full">
									<div className="text-textColorOne font-bold">
										{docente.names}
									</div>
									<div className="">
										{/* <p className="text-sm font-semibold leading-6 text-textColorTwo mb-[6px]">
										Docente principal - Dedicación exclusiva
									</p> */}
										<div>
											<p className="line-clamp-3 mb-2">
												{docente.degree}
											</p>
										</div>
									</div>
									<div className="md:absolute bottom-4 left-0 right-0 md:px-5 w-full flex flex-col md:flex-row justify-between md:items-center">
										<p className="text-textColorTwo text-sm mb-2">
											<CorreoIcon className="fill-textColorTwo inline-block mr-2 relative bottom-[1px]" />
											{docente.correo}
										</p>
										<div className="flex flex-row items-center gap-4">
											{docente?.linkedin && (
												<a
													href={docente.linkedin}
													target="_blank"
													rel="noopener noreferrer"
													className="grid place-items-center rounded-lg w-9 h-9 border-[1.5px] border-primary bg-transparente hover:bg-primary/[0.12] text-primary transition-colors duration-300"
												>
													<FaLinkedinIn />
												</a>
											)}
											{docente?.cv && (
												<a
													href={docente.cv}
													target="_blank"
													rel="noopener noreferrer"
													className="rounded-lg flex flex-row items-center gap-x-2 border-[1.5px] px-4 py-3 border-primary bg-transparente hover:bg-primary/[0.12] text-primary transition-colors duration-300"
												>
													<DocumentosFillIcon className="fill-primary" />
													Hoja de vida
												</a>
											)}
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

export default PlanaDocente;
