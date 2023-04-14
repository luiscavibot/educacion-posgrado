import Link from 'next/link';
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import FlechaAbajo from '../icons/FlechaAbajo';
import { useRouter } from 'next/router';
import opcionesSideBar from '../../config/opcionesSideBar';
import { Accordion } from 'semantic-ui-react';
import SocialMediaAside from './layouts/SocialMediaAside';

const SideBarPrincipal = ({ refFooter, refSocialMedia }) => {
	const router = useRouter();
	const [rutas, setRutas] = useState(opcionesSideBar);
	const [rutaActual, setRutaActual] = useState('');

	const [activeIndexAccordion, setActiveIndexAccordion] = useState(-1);

	const changeAccordion = (e, titleProps) => {
		const { index } = titleProps;
		const newIndexAccordion = activeIndexAccordion === index ? -1 : index;
		setActiveIndexAccordion(newIndexAccordion);
	};

	useEffect(() => {
		if (router.isReady) {
			setRutaActual(router.pathname);
		}
	}, [router.isReady, router.pathname]);

	const refAsideContent = useRef(null);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const yObs = refFooter.current?.getBoundingClientRect();
	// 		if (!yObs) {
	// 			return;
	// 		}
	// 		const { y } = yObs;
	// 		if (y <= window.innerHeight) {
	// 			let offset = window.innerHeight - y;
	// 			refAsideContent.current.style.transform = `translateY(-${offset}px)`;
	// 			refSocialMedia.current.style.transform = `translateY(-${offset}px)`;
	// 		} else {
	// 			refAsideContent.current.style.transform = `translateY(0px)`;
	// 			refSocialMedia.current.style.transform = `translateY(0px)`;
	// 		}
	// 	};
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, [refAsideContent, refFooter, refSocialMedia]);

	return (
		// <aside className="fixed top-0 bg-gris justify-center inset-y-0 pt-36 w-sidebarWidth left-0 md:flex hidden">
		<aside className="overflow-x-auto fixed top-0 bg-gris justify-center inset-y-0 pt-36 w-sidebarWidth left-0 md:flex hidden">
			<div className="flex flex-col h-full justify-between ">
				<div className="w-full " ref={refAsideContent}>
					<p className="text-primary text-lg font-bold px-11">Menú</p>
					<div className="mt-6">
						<Link href="/" passHref>
							<a className="inline-flex items-center py-2 px-11 transition w-full hover:text-primary">
								<AiFillHome className="mr-1" />
								Inicio
							</a>
						</Link>
					</div>
					<Accordion className="accordion-menu-aside">
						{rutas.map((ruta, id) => {
							return (
								<div key={id}>
									<Accordion.Title
										active={activeIndexAccordion === id}
										index={id}
										onClick={changeAccordion}>
										{ruta.seccion}
										<div className="icon-accordion">
											<FlechaAbajo className="fill-tertiary" />
										</div>
									</Accordion.Title>
									<Accordion.Content
										active={activeIndexAccordion === id}>
										<div className="mb-0 py-[10px] bg-complementaryTwo">
											{ruta.links.map((link, id) => {
												return (
													<div key={id}>
														<Link href={link.path}>
															<a className="inline-flex items-center py-[10px] px-11 transition w-full hover:text-secondary">
																{
																	link.nombreLink
																}
															</a>
														</Link>
													</div>
												);
											})}
										</div>
									</Accordion.Content>
								</div>
							);
						})}
					</Accordion>
				</div>
				<div className="flex">
					<div className="ml-10 mb-24">
						<div ref={refSocialMedia}>
							<SocialMediaAside />
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default SideBarPrincipal;
