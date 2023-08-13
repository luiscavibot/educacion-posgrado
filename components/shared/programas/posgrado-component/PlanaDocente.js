import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Modal } from '../Modal';
import { Pagination, Accordion } from 'semantic-ui-react';
import FlechaIzquierdaIcon from '../../../icons/FlechaIzquierdaIcon';
import FlechaDerechaIcon from '../../../icons/FlechaDerechaIcon';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import { HiChevronDoubleRight } from 'react-icons/hi';
import CorreoIcon from '../../../icons/CorreoIcon';
import { getPaginador } from '../../../../helpers/getPaginador';
import InputText from '../../InputText';

export const PlanaDocente = ({ docentes }) => {
	const [activeIndexAccordion, setActiveIndexAccordion] = useState(-1);

	const changeAccordion = (e, titleProps) => {
		const { index } = titleProps;
		const newIndexAccordion = activeIndexAccordion === index ? -1 : index;
		setActiveIndexAccordion(newIndexAccordion);
	};

	const [estadoModal, setEstadoModal] = useState(false);
	const [modalData, setModalData] = useState(null);

	const [valores, setValores] = useState({ pagina: 1, buscador: '' });
	const limitePorPagina = 5;
	const { data, total } = getPaginador(
		docentes,
		valores.pagina,
		limitePorPagina,
		valores.buscador
	);

	const handleChange = (event) => {
		setValores({
			pagina: 1,
			buscador: event.target.value,
		});
	};
	const goToPage = (newPage) => {
		setValores({
			...valores,
			pagina: newPage,
		});
	};

	return (
		<>
			<div className="grid grid-cols-8 gap-x-4">
				<div className="col-span-full md:col-span-7">
					<div className="flex flex-col md:flex-row justify-between mb-6">
						{docentes.length > 0 ? (
							<InputText
								value={valores.buscador}
								onChange={handleChange}
								placeholder="Buscar docente"
								onKeyDown={handleChange}
								conIconoBuscador
								className="w-full md:w-[14rem]"
								backgroundClass="bg-gris"
							/>
						) : null}
						{data.length > 0 ? (
							<div className="mt-4 md:mt-0 flex items-center justify-center">
								<Pagination
									firstItem={null}
									lastItem={null}
									prevItem={{
										content: (
											<FlechaIzquierdaIcon
												page={valores.pagina}
											/>
										),
										icon: true,
									}}
									nextItem={{
										content: (
											<FlechaDerechaIcon
												page={valores.pagina}
												totalPaginas={Math.ceil(
													total / limitePorPagina
												)}
											/>
										),
										icon: true,
									}}
									defaultActivePage={1}
									totalPages={Math.ceil(
										total / limitePorPagina
									)}
									onPageChange={(_, data) =>
										goToPage(data.activePage)
									}
								/>
							</div>
						) : null}
					</div>

					<>
						{data &&
							data.map((docente) => {
								return (
									<div key={docente.attributes.nombre}>
										<div className="flex gap-x-6 mb-0 md:mb-10">
											<div className="basis-2/12 md:basis-3/12">
												<Image
													alt=""
													width={124}
													height={156}
													objectFit="cover"
													layout="responsive"
													quality="100"
													src={
														docente.attributes.foto
															.data
															? docente.attributes
																	.foto.data
																	.attributes
																	.url
															: 'https://posgrado-unmsm.s3.amazonaws.com/coordinador_ejemplo_41e16694ae.png'
													}
												></Image>
											</div>
											<div className="basis-10/12 md:basis-9/12">
												<p className="subtitle mb-1">
													{docente.attributes.nombre}
												</p>
												<p className="text-sm mb-1">
													{docente.attributes.grado}
												</p>
												<p className="hidden md:block mb-1 md:line-clamp-6">
													{/* {docente.attributes.descripcion.substring(
															0,
															320
														)}
														... */}
													{docente.attributes
														.descripcion && (
														<>
															{
																docente
																	.attributes
																	.descripcion
															}
														</>
													)}
												</p>
												<div className="hidden md:flex justify-between">
													<div className="link">
														<CorreoIcon className="fill-primary inline mr-2 relative bottom-[1px]" />
														<span>
															{
																docente
																	.attributes
																	.correo
															}
														</span>
													</div>

													<button
														onClick={() => {
															setModalData(
																docente
															);
															setEstadoModal(
																true
															);
															// console.log(
															// 	docente
															// );
														}}
														className="link"
													>
														Leer más
													</button>
												</div>
											</div>
										</div>
										<div className="mt-2 md:mt-0 md:mb-0 mb-10 md:hidden">
											<p className="line-clamp-6">
												{docente.attributes
													.descripcion && (
													<>
														{
															docente.attributes
																.descripcion
														}
													</>
												)}
											</p>
											<div className="mt-3 md:mt-0 flex justify-between">
												<div className="link">
													<img
														className="w-[14px] mr-1 inline-block"
														src="/img/icons/correo-borde-rojo-icon.svg"
														alt=""
													/>
													<span>
														{
															docente.attributes
																.correo
														}
													</span>
												</div>
												<button
													onClick={() => {
														setModalData(docente);
														setEstadoModal(true);
													}}
													className="link"
												>
													Leer más
												</button>
											</div>
										</div>
									</div>
								);
							})}
						<Modal estado={estadoModal} setEstado={setEstadoModal}>
							{modalData && (
								<div>
									<div className="flex-col md:flex-row flex gap-x-6 mb-8">
										<div className="flex md:block justify-center mb-1 md:mb-0 md:flex-none">
											<Image
												alt=""
												width={124}
												height={156}
												// objectFit="cover"
												src={
													modalData.attributes.foto
														.data
														? // .formats
														  // .thumbnail.url
														  modalData.attributes
																.foto.data
																.attributes.url
														: 'https://posgrado-unmsm.s3.amazonaws.com/coordinador_ejemplo_41e16694ae.png'
												}
											></Image>
										</div>
										<div className="grow">
											<div className="mb-2 md:mb-0 md:block flex flex-col items-center">
												<p className="subtitle mb-1">
													{
														modalData.attributes
															.nombre
													}
												</p>
												<p className="sub-cursiva mb-1">
													{modalData.attributes.grado}
												</p>
											</div>
											<p className="mb-1 md:mb-2">
												{
													modalData.attributes
														.descripcion
												}
											</p>
											<div className="flex flex-wrap text-xs">
												{/* {modalData.attributes
													.correo && (
													<a
														href={
															'mailto:' +
															modalData.attributes
																.correo
														}
														className="px-2 rounded-lg shadow-md grid place-items-center h-[30px] mr-4">
														<img
															className="w-[14px] inline-block"
															src="/img/icons/correo-icon-relleno-rojo.svg"
															alt=""
														/>
													</a>
												)} */}
												{modalData.attributes
													.url_orcid && (
													<div
														onClick={() => {
															window.open(
																`${modalData.attributes.url_orcid}`,
																'_blank'
															);
														}}
														className="cursor-pointer px-2 rounded-lg shadow-md grid place-items-center h-[30px] mr-1 md:mr-4"
													>
														<span className="link">
															ORCID
														</span>
													</div>
												)}
												{modalData.attributes
													.url_siis && (
													<div
														onClick={() => {
															window.open(
																`${modalData.attributes.url_siis}`,
																'_blank'
															);
														}}
														className="cursor-pointer px-2 rounded-lg shadow-md grid place-items-center h-[30px] mr-1 md:mr-4"
													>
														<span className="link">
															SIIS
														</span>
													</div>
												)}
												{modalData.attributes
													.url_concytec && (
													<div
														onClick={() => {
															window.open(
																`${modalData.attributes.url_concytec}`,
																'_blank'
															);
														}}
														className="cursor-pointer px-2 rounded-lg shadow-md grid place-items-center h-[30px] mr-1 md:mr-4"
													>
														<span className="link">
															CONCYTEC
														</span>
													</div>
												)}
												{modalData.attributes
													.google_scholar && (
													<div
														onClick={() => {
															window.open(
																`${modalData.attributes.google_scholar}`,
																'_blank'
															);
														}}
														className="cursor-pointer px-2 rounded-lg shadow-md grid place-items-center h-[30px] mr-1 md:mr-4"
													>
														<span className="link">
															GOOGLE SCHOLAR
														</span>
														{/* <div className="flex">
															<img
																className="w-[14px] inline-block mr-1"
																src="/img/icons/cv-icon-relleno-rojo.svg"
																alt=""
															/>
															<span className="link">
																CV
															</span>
														</div> */}
													</div>
												)}
											</div>
										</div>
									</div>
									{(modalData.attributes.libro.length > 0 ||
										modalData.attributes.articulo.length >
											0) && (
										<div>
											<p className="mb-6 font-bold">
												Últimas publicaciones
											</p>
											<Accordion>
												{modalData.attributes.libro
													.length > 0 && (
													<>
														<Accordion.Title
															active={
																activeIndexAccordion ===
																0
															}
															index={0}
															onClick={
																changeAccordion
															}
														>
															Parte o capítulo de
															libro
															<div className="icon-accordion">
																<svg
																	width="11"
																	height="19"
																	viewBox="0 0 11 19"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M2.14355 16.2461L8.14355 9.24609L2.14355 2.24609"
																		stroke="#54626C"
																		strokeWidth="3"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																</svg>
															</div>
														</Accordion.Title>
														<Accordion.Content
															active={
																activeIndexAccordion ===
																0
															}
														>
															{modalData.attributes.libro.map(
																(libro) => {
																	return (
																		<div
																			className="mb-6 px-3"
																			key={
																				libro.id
																			}
																		>
																			<li className="font-semibold mb-[2px]">
																				{
																					libro.publicado_en
																				}
																			</li>
																			<p>
																				{
																					libro.titulo
																				}
																			</p>
																		</div>
																	);
																}
															)}
														</Accordion.Content>
													</>
												)}
												{modalData.attributes.articulo
													.length > 0 && (
													<>
														<Accordion.Title
															active={
																activeIndexAccordion ===
																1
															}
															index={1}
															onClick={
																changeAccordion
															}
														>
															Artículos en
															revistas
															<div className="icon-accordion">
																<svg
																	width="11"
																	height="19"
																	viewBox="0 0 11 19"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M2.14355 16.2461L8.14355 9.24609L2.14355 2.24609"
																		stroke="#54626C"
																		strokeWidth="3"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																</svg>
															</div>
														</Accordion.Title>
														<Accordion.Content
															active={
																activeIndexAccordion ===
																1
															}
														>
															{modalData.attributes.articulo.map(
																(articulo) => {
																	return (
																		<div
																			className="mb-6 px-3"
																			key={
																				articulo.id
																			}
																		>
																			<li className="font-semibold mb-[2px]">
																				{
																					articulo.publicado_en
																				}
																			</li>
																			<p>
																				{
																					articulo.titulo
																				}
																			</p>
																		</div>
																	);
																}
															)}
														</Accordion.Content>
													</>
												)}
											</Accordion>
										</div>
									)}
								</div>
							)}
						</Modal>
					</>
				</div>
			</div>
		</>
	);
};
