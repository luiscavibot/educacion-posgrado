import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import FlechaAbajo from '../icons/FlechaAbajo';
import Link from 'next/link';
import RedesSocialesHome from '../home/RedesSocialesHome';

import { Accordion } from 'semantic-ui-react';

const SideBar = ({ interno }) => {
	const [sidebar, setSidebar] = useState(false);
	const handleSidebar = () => {
		setSidebar(!sidebar);
	};

	const [activeIndexAccordion, setActiveIndexAccordion] = useState(-1);

	const changeAccordion = (e, titleProps) => {
		const { index } = titleProps;
		const newIndexAccordion = activeIndexAccordion === index ? -1 : index;
		setActiveIndexAccordion(newIndexAccordion);
	};

	return (
		<>
			{/* Boton para abrir el menú */}
			<nav
				className={
					sidebar
						? 'bg-transparente fixed z-20 flex h-10 -left-24 top-7 md:top-16 items-center cursor-pointer justify-start px-4 md:px-5 text-blanco hover:brightness-110 duration-700 rounded-r-lg menu-bars'
						: 'animate__animated animate__fadeInLeft bg-transparente fixed z-20 flex h-10 left-0 top-7 md:top-16 items-center cursor-pointer justify-start px-4 md:px-5 text-blanco hover:brightness-110 hover:scale-105 duration-700 rounded-r-lg menu-bars'
				}
				onClick={handleSidebar}
			>
				<span className={interno ? 'text-blanco' : 'text-blanco'}>
					<FaBars size={24} />
				</span>
				<div className="pl-2 text-base md:block hidden">Menú</div>
			</nav>
			{/* Sidebar abierto */}
			<nav>
				<div
					className={
						sidebar
							? 'bg-negroPuro cursor-pointer fixed z-20 inset-0 opacity-50 visible'
							: ' opacity-0 hidden transition-opacity duration-1000'
					}
					onClick={handleSidebar}
				></div>
				<div
					className={
						sidebar
							? 'h-screen bg-secondary fixed inset-y-0 md:w-sidebarWidth w-full duration-300 transition-left z-30 left-0'
							: 'h-screen bg-secondary fixed inset-y-0 w-64 duration-300 transition-left z-30 -left-80'
					}
				>
					<button
						className="absolute w-16 md:-right-16 right-5 h-12 flex justify-center items-center bg-secondary text-blanco top-5 transition-brightness hover:scale-105 hover:brightness-110"
						onClick={handleSidebar}
					>
						<FaTimes />
					</button>
					<div className="overflow-y-auto h-full">
						<div className="w-full pt-8 pb-4 bg-secondary max-h-full">
							<p className="text-blanco text-lg font-bold px-11">
								Menú
							</p>
							<div className="mt-6" onClick={handleSidebar}>
								<Link href="/">
									<a className="inline-flex items-center py-2 px-11 transition w-full text-blanco font-bold">
										<AiFillHome className="mr-1" />
										Inicio
									</a>
								</Link>
							</div>
							<Accordion className="accordion-menu font-bold">
								<>
									<Accordion.Title
										active={activeIndexAccordion === 0}
										index={0}
										onClick={changeAccordion}
									>
										<div className="flex gap-x-1 md:gap-x-0 md:flex-col font-bold">
											<span>Admisión</span>
										</div>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 0}
									>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne">
											<div onClick={handleSidebar}>
												<Link href="/admision?programa=diplomatura">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Diplomaturas
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/admision?programa=maestria">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Maestrías
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/admision?programa=doctorado">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Doctorado
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/admision?programa=posdoctorado">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Posdoctorado
													</a>
												</Link>
											</div>
										</div>
									</Accordion.Content>
								</>
								<>
									<Accordion.Title
										active={activeIndexAccordion === 1}
										index={1}
										onClick={changeAccordion}
									>
										<div className="flex gap-x-1 md:gap-x-0 md:flex-col font-bold">
											<span>Programas</span>
										</div>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 1}
									>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne">
											<div onClick={handleSidebar}>
												<Link href="/programas/diplomaturas">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Diplomaturas
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/programas/maestrias">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Maestrías
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/programas/doctorado">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Doctorado
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/programas/posdoctorado">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Posdoctorado
													</a>
												</Link>
											</div>
										</div>
									</Accordion.Content>
								</>
								<>
									<Accordion.Title
										active={activeIndexAccordion === 2}
										index={2}
										onClick={changeAccordion}
									>
										<div className="flex gap-x-1 md:gap-x-0 md:flex-col font-bold">
											<span>Investigación</span>
										</div>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 2}
									>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne font-bold">
											<div onClick={handleSidebar}>
												<Link href="/investigacion/actividad-cientifica">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Actividad científica
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/investigacion/taller-tesis">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Taller de tesis
														(Maestrías)
													</a>
												</Link>
											</div>
										</div>
									</Accordion.Content>
								</>
								<>
									<Accordion.Title
										active={activeIndexAccordion === 3}
										index={3}
										onClick={changeAccordion}
									>
										<span className="font-bold">
											Comunidad
										</span>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 3}
									>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne ">
											<div onClick={handleSidebar}>
												<Link href="/comunidad/informacion-academica">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Información académica
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/comunidad/plana-docente">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Plana docente
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/comunidad/seguimiento-egresados">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Seguimiento de egresados
													</a>
												</Link>
											</div>
										</div>
									</Accordion.Content>
								</>
								<>
									<Accordion.Title
										active={activeIndexAccordion === 4}
										index={4}
										onClick={changeAccordion}
									>
										<span className="font-bold">
											Actualidad
										</span>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 4}
									>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne ">
											<div onClick={handleSidebar}>
												<Link href="/actualidad/agenda-publica">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Agenda pública
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/actualidad/eventos">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Eventos
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/actualidad/revistas">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Revistas
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/actualidad/comunicados">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Comunicados
													</a>
												</Link>
											</div>
										</div>
									</Accordion.Content>

									<>
										<Accordion.Title
											active={activeIndexAccordion === 5}
											index={5}
											onClick={changeAccordion}
										>
											<span className="font-bold">
												Nosotros
											</span>
											<div className="icon-accordion">
												<FlechaAbajo className="fill-blanco" />
											</div>
										</Accordion.Title>
										<Accordion.Content
											active={activeIndexAccordion === 5}
										>
											<div className="mb-0 py-[10px] bg-blanco text-textColorOne ">
												<div onClick={handleSidebar}>
													<Link href="/nosotros/director-y-coordinadores">
														<a className="inline-flex items-center py-[10px] px-11 transition w-full">
															Director y
															coordinadores
														</a>
													</Link>
												</div>
												{/* <div onClick={handleSidebar}>
													<a
														href="#"
														target="_blank"
														rel="noopener noreferrer"
														className="inline-flex items-center py-[10px] px-11 transition w-full"
													>
														Acreditación ACBSP
													</a>
												</div> */}
												<div onClick={handleSidebar}>
													<Link href="/nosotros/historia">
														<a className="inline-flex items-center py-[10px] px-11 transition w-full">
															Historia
														</a>
													</Link>
												</div>
												<div onClick={handleSidebar}>
													<Link href="/nosotros/transparencia">
														<a className="inline-flex items-center py-[10px] px-11 transition w-full">
															Transparencia
														</a>
													</Link>
												</div>
												<div onClick={handleSidebar}>
													<Link href="/nosotros/directorio">
														<a className="inline-flex items-center py-[10px] px-11 transition w-full">
															Directorio
														</a>
													</Link>
												</div>
											</div>
										</Accordion.Content>
									</>
								</>
							</Accordion>
						</div>
						<div className="bg-secondary w-full pt-4 block md:hidden">
							<Link href="/tramites">
								<a className="block py-[10px] px-11 text-blanco">
									Trámites
								</a>
							</Link>

							<Accordion className="accordion-menu font-bold">
								<>
									<Accordion.Title
										active={activeIndexAccordion === 6}
										index={6}
										onClick={changeAccordion}
									>
										<div className="flex gap-x-1 md:gap-x-0 md:flex-col text-blanco">
											<span>Intranet</span>
										</div>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 6}
									>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne">
											<div onClick={handleSidebar}>
												<a
													href="https://mail.google.com/mail/u/1/?pli=1#inbox"
													rel="noopener noreferrer"
													target={'_blank'}
													className="inline-flex items-center py-[10px] px-11 transition w-full"
												>
													Sistema único de matrícula
													(SUM)
												</a>
											</div>
											<div onClick={handleSidebar}>
												<a
													href="https://sum.unmsm.edu.pe/"
													rel="noopener noreferrer"
													target={'_blank'}
													className="inline-flex items-center py-[10px] px-11 transition w-full"
												>
													MAT
												</a>
											</div>
											<div onClick={handleSidebar}>
												<a
													href="#"
													rel="noopener noreferrer"
													target={'_blank'}
													className="inline-flex items-center py-[10px] px-11 transition w-full"
												>
													Aula virtual
												</a>
											</div>
										</div>
									</Accordion.Content>
								</>
							</Accordion>
							<div>
								<RedesSocialesHome
									className="text-lg mt-12 mb-8 flex gap-4 items-center justify-center"
									facebook="https://www.facebook.com/upg.administracion"
									youtube="https://www.youtube.com/c/fcaunmsm"
									// twitter="https://twitter.com/UNMSMFarmacia"
									// instagram="https://www.instagram.com/unmsmfarmacia/"
								/>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default SideBar;
