import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';
import Boton from '../shared/Boton';
import { getFecha, getDia, getMes } from '../../helpers/getFecha';

const Eventos = ({
	eventosVigentes,
	eventosNoVigentes,
	// eventos,
}) => {
	const eventos = [...eventosVigentes, ...eventosNoVigentes];
	const [selectedEvent, setSelectedEvent] = useState(null);

	useEffect(() => {
		if (eventosVigentes && eventosVigentes.length > 0) {
			const id = eventosVigentes[0].id;
			setSelectedEvent(eventos.find((evento) => evento.id === id));
			return;
		}
		if (eventosNoVigentes && eventosNoVigentes.length > 0) {
			const id = eventosNoVigentes[0].id;
			setSelectedEvent(eventos.find((evento) => evento.id === id));
			return;
		}
	}, []);

	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			id="carreras"
			className="mb-14 md:mb-18 bg-homebg2/40">
			<motion.div
				variants={entradaCardScroll}
				className="md:container mx-4 md:mx-auto px-6 lg:px-3 lg:grid-cols-12 gap-x-4 lg:grid text-secondary py-[72px]">
				<div className="col-start-2 col-span-10 flex mb-9">
					<h2 className="text-4xl font-bold text-tertiary">
						Eventos
					</h2>
					<Link href="/eventos" passHref>
						<a className="text-lg text-primary font-bold flex items-end hover:text-textColorOne">
							<span className="ml-2">|</span>
							<p className="ml-2">ver más</p>
						</a>
					</Link>
				</div>
				<div className="col-start-2 col-span-10 flex mb-9 bg-blanco shadow-submenu rounded-lg py-11 px-8">
					<div className="flex flex-col gap-4 md:gap-0 md:flex-row w-full">
						<div className="basis-2/5 flex flex-col gap-1 md:pr-8">
							{eventosNoVigentes &&
								eventosNoVigentes.length > 0 &&
								eventosNoVigentes.map((evento) => (
									<div
										onClick={() => setSelectedEvent(evento)}
										key={evento.id}
										className={`${
											evento.id === selectedEvent?.id &&
											'bg-disabled/25 !text-textColorTwo'
										} grid grid-flow-col grid-cols-[min-content_auto] gap-4 px-4 py-2 transition-colors duration-300 cursor-pointer rounded-lg text-disabled hover:text-textColorTwo/60`}>
										<div className="bg-textColorTwo/10 w-12 h-12 rounded-lg flex flex-col items-center justify-center">
											<div className="font-bold text-xl leading-none text-center">
												{getDia(evento.fecha_inicio)}
											</div>
											<div className="font-bold text-sm leading-none text-center">
												{getMes(
													evento.fecha_inicio
												).substring(0, 3)}
											</div>
										</div>
										<div className="flex flex-col space-y-3">
											<p className="text-sm font-semibold line-clamp-2">
												{evento.titulo}
											</p>
										</div>
									</div>
								))}
							{eventosVigentes &&
								eventosVigentes.length > 0 &&
								eventosVigentes.map((evento) => (
									<div
										onClick={() => setSelectedEvent(evento)}
										key={evento.id}
										className={`${
											evento.id === selectedEvent?.id &&
											'bg-secondary/10 !text-secondary'
										} grid grid-flow-col grid-cols-[min-content_auto] gap-4 px-4 py-2 transition-colors duration-300 cursor-pointer rounded-lg text-textColorTwo hover:text-secondary`}>
										<div
											className={`${
												evento.id ===
													selectedEvent?.id &&
												'bg-secondary/10'
											} bg-textColorTwo/10 w-12 h-12 rounded-lg flex flex-col items-center justify-center`}>
											<div className="font-bold text-xl leading-none text-center">
												{getDia(evento.fecha_inicio)}
											</div>
											<div className="font-bold text-sm leading-none text-center">
												{getMes(
													evento.fecha_inicio
												).substring(0, 3)}
											</div>
										</div>
										<div className="flex flex-col space-y-3">
											<p className="text-sm font-semibold line-clamp-2">
												{evento.titulo}
											</p>
										</div>
									</div>
								))}
						</div>
						<div className="basis-3/5 flex justify-center md:pl-8">
							<div className="flex flex-col justify-center w-full max-w-[523px]">
								{selectedEvent && (
									<>
										<div className="flex justify-center">
											<div className="relative max-w-full w-full h-[184px] rounded-lg overflow-hidden mb-4">
												<Image
													quality={100}
													src={selectedEvent.foto}
													width={502}
													height={335}
													className=" absolute object-cover w-full h-[184px]"
												/>
												<Boton
													text="Ver más"
													link={`/eventos/${selectedEvent.slug}`}
													className="absolute bottom-4 right-4"
												/>
											</div>
										</div>
										<p className="text-textColorOne text-sm font-bold mb-2 line-clamp-3">
											{selectedEvent.titulo}
										</p>
										<div className="text-textColorTwo text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
											<div className="order-1">
												Del 5 al 12 de enero del 2023
											</div>
											<div className="order-2 md:order-3">
												10:00 a.m.
											</div>
											<div className="order-3 md:order-2">
												{selectedEvent.lugar}
											</div>
											<div className="order-4">
												Organizador: Grupo de
												estudiantes
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Eventos;