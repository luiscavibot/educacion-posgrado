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
						? 'bg-primary fixed z-20 flex h-10 -left-24 top-4 md:top-20 items-center cursor-pointer justify-start px-2 md:px-5 shadow-xl text-blanco hover:brightness-110 duration-700 rounded-r-lg menu-bars'
						: 'animate__animated animate__fadeInLeft bg-primary fixed z-20 flex h-10 left-0 top-4 md:top-20 items-center cursor-pointer justify-start px-2 md:px-5 shadow-xl text-blanco hover:brightness-110 hover:scale-105 duration-700 rounded-r-lg menu-bars'
				}
				onClick={handleSidebar}>
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
					onClick={handleSidebar}></div>
				<div
					className={
						sidebar
							? 'h-screen bg-tertiary md:bg-primary fixed inset-y-0 md:w-sidebarWidth w-full duration-300 transition-left z-30 left-0'
							: 'h-screen bg-tertiary md:bg-primary fixed inset-y-0 w-64 duration-300 transition-left z-30 -left-80'
					}>
					<button
						className="absolute w-16 md:-right-16 right-5 h-12 flex justify-center items-center bg-primary text-blanco top-5 transition-brightness hover:scale-105 hover:brightness-110"
						onClick={handleSidebar}>
						<FaTimes />
					</button>
					<div className="overflow-y-auto h-full">
						<div className="w-full pt-8 pb-4 bg-primary max-h-full">
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
										onClick={changeAccordion}>
										<div className="flex gap-x-1 md:gap-x-0 md:flex-col font-bold">
											<span>Admisión</span>
										</div>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 0}>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne">
											<div onClick={handleSidebar}>
												<Link href="/admision/pregrado">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Pregrado
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/admision/posgrado">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Posgrado
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
										onClick={changeAccordion}>
										<div className="flex gap-x-1 md:gap-x-0 md:flex-col font-bold">
											<span>Formación</span>
											<span>académica</span>
										</div>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 1}>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne">
											{/* <div onClick={handleSidebar}>
												<Link href="/formacion-academica/admision">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Admisión
													</a>
												</Link>
											</div> */}
											<div onClick={handleSidebar}>
												<Link href="/formacion-academica/pregrado">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Pregrado
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/formacion-academica/posgrado">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Posgrado
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
										onClick={changeAccordion}>
										<div className="flex gap-x-1 md:gap-x-0 md:flex-col font-bold">
											<span>Noticias y</span>
											<span>Eventos</span>
										</div>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 2}>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne font-bold">
											<div onClick={handleSidebar}>
												<Link href="/noticias">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Noticias
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/eventos">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Eventos
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
										onClick={changeAccordion}>
										<span className="font-bold">
											Nosotros
										</span>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 3}>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne ">
											<div onClick={handleSidebar}>
												<Link href="/nosotros/autoridades-y-organos">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Autoridades y órganos de
														gobierno
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/transparencia">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Transparencia
													</a>
												</Link>
											</div>
										</div>
									</Accordion.Content>
								</>
							</Accordion>
						</div>
						<div className="bg-tertiary w-full pt-4 block md:hidden">
							<Link href="/tramites">
								<a className="block py-[10px] px-11 text-blanco">
									Trámites
								</a>
							</Link>
							<Accordion className="accordion-menu font-bold">
								<>
									<Accordion.Title
										active={activeIndexAccordion === 4}
										index={4}
										onClick={changeAccordion}>
										<div className="flex gap-x-1 md:gap-x-0 md:flex-col text-blanco">
											<span>Información académica</span>
										</div>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 4}>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne">
											<div onClick={handleSidebar}>
												<Link href="/informacion-academica/pregrado">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Pregrado
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<Link href="/informacion-academica/posgrado">
													<a className="inline-flex items-center py-[10px] px-11 transition w-full">
														Posgrado
													</a>
												</Link>
											</div>
											<div onClick={handleSidebar}>
												<span className="text-textColorOne/20 inline-flex items-center py-[10px] px-11 transition w-full">
													Docentes
												</span>
											</div>
										</div>
									</Accordion.Content>
								</>
							</Accordion>
							<Link href="/transparencia">
								<a className="block py-[10px] px-11 text-blanco">
									Transparencia
								</a>
							</Link>
							<Link href="/directorio">
								<a className="block py-[10px] px-11 text-blanco">
									Directorio
								</a>
							</Link>
							<Accordion className="accordion-menu font-bold">
								<>
									<Accordion.Title
										active={activeIndexAccordion === 5}
										index={5}
										onClick={changeAccordion}>
										<div className="flex gap-x-1 md:gap-x-0 md:flex-col text-blanco">
											<span>Intranet</span>
										</div>
										<div className="icon-accordion">
											<FlechaAbajo className="fill-blanco" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === 5}>
										<div className="mb-0 py-[10px] bg-blanco text-textColorOne">
											<div onClick={handleSidebar}>
												<a
													href="https://mail.google.com/mail/u/1/?pli=1#inbox"
													rel="noopener noreferrer"
													target={'_blank'}
													className="inline-flex items-center py-[10px] px-11 transition w-full">
													Correo institucional
												</a>
											</div>
											<div onClick={handleSidebar}>
												<a
													href="https://sum.unmsm.edu.pe/"
													rel="noopener noreferrer"
													target={'_blank'}
													className="inline-flex items-center py-[10px] px-11 transition w-full">
													Sistema único de matrícula
													(SUM)
												</a>
											</div>
											<div onClick={handleSidebar}>
												<a
													href="http://campus.farmacia.unmsm.edu.pe/"
													rel="noopener noreferrer"
													target={'_blank'}
													className="inline-flex items-center py-[10px] px-11 transition w-full">
													Aula virtual (OEV)
												</a>
											</div>
										</div>
									</Accordion.Content>
								</>
							</Accordion>
							<div>
								<RedesSocialesHome
									className="text-lg mt-12 mb-8 flex items-center justify-center"
									facebook="https://www.facebook.com/fqiq.unmsm.1946"
									// youtube="https://www.youtube.com/@UNMSMFarmacia"
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
