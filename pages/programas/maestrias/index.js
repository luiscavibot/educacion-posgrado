import Link from 'next/link';
import Image from 'next/future/image';
import React, { useEffect, useState } from 'react';

import { BannerAdmision } from '../../../components/admision/BannerAdmision';
import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';
import { maestrias as programasData } from '../../../data/programas/general';

const Index = () => {
	const [programas, setProgramas] = useState(null);
	useEffect(() => {
		setProgramas(
			programasData.filter((programa) => programa.tipo === 'MAESTRIA')
		);
	}, []);
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
						Programas
					</li>
					<li className="text-textColorOne font-bold inline">
						Maestrías
					</li>
				</ul>
				<div className="px-4 md:px-0 col-span-full mb-8">
					<p className="title-page mb-6 text-secondary">Maestrías</p>
					{/* <p>
						Nuestros programas de maestría y doctorado profundizan
						en la experiencia educacional interdisciplinaria de los
						últimos avances científicos y tecnológicos; con el fin
						de formar profesionales íntegros, globalmente
						competitivos y comprometidos con la construcción de una
						sociedad eficiente y sostenible.
					</p> */}
				</div>

				{/* {isOpenBanner && (
					<BannerAdmision
						setIsOpenBanner={setIsOpenBanner}
						enlace="/admision/pregrado"
					/>
				)} */}

				<div className="px-4 md:px-0 col-span-full mb-10">
					<div className="grid place-items-center">
						<div className="inline-grid grid-cols-1 lg:grid-cols-[290px_290px_290px] gap-5 md:gap-11 w-full md:w-auto">
							{programas?.length > 0 &&
								programas.map((programa) => (
									<Link
										key={programa.slug}
										href={`/programas/maestrias/${programa.slug}`}
									>
										<a className="group card md:max-w-[290px]">
											<div className="relative h-[168px]">
												<Image
													alt={`Diplomatura en Gestión Pública`}
													width={290}
													height={168}
													className="object-cover h-full w-full"
													src={programa.miniHomeImg}
												/>
												<div className="absolute top-5 left-0 bg-secondary rounded-r-lg text-blanco p-2 font-bold modalidad">
													Modalidad{' '}
													{programa.modalidad ===
														'PRESENCIAL' &&
														'Presencial'}
													{programa.modalidad ===
														'SEMIPRESENCIAL' &&
														'Semipresencial'}
												</div>
											</div>
											<div className="text-content text-textColorOne group-hover:text-secondary">
												<p className="font-bold">
													{programa.titulo}
												</p>
												<p className="line-clamp-2">
													{programa.subtitulo}
												</p>
											</div>
										</a>
									</Link>
								))}
						</div>
					</div>
				</div>
			</PrincipalLayout>
		</>
	);
};

export default Index;
