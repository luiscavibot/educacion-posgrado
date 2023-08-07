import React, { useState } from 'react';
import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';
import Link from 'next/link';
import Image from 'next/future/image';

import CardsNoticiasResultados from '../../components/noticias/CardsNoticiasResultados';
import useNoticias from '../../hooks/useNoticias';

const START_DATE = new Date();
START_DATE.setMonth(START_DATE.getMonth() - 12);
START_DATE.setHours(0, 0, 0, 0);
const END_DATE = new Date();
END_DATE.setHours(23, 59, 59, 999);

const Blog = () => {
	const [entradaBusqueda, setEntradaBusqueda] = useState('');
	const [startDate, setStartDate] = useState(START_DATE);
	const [endDate, setEndDate] = useState(END_DATE);

	const { noticias, setPage, page, totalPaginas, INITIAL_PAGE } = useNoticias(
		entradaBusqueda,
		startDate,
		endDate,
		START_DATE,
		END_DATE
	);

	return (
		<>
			<PrincipalLayout>
				<ul className="px-4 md:px-0 col-span-full text-sm mb-5">
					<li className="text-textColorTwo font-bold inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="inline text-textColorOne font-bold">
						Blog de Gestión Pública
					</li>
				</ul>
				<div className="mx-4 md:mx-0 col-span-full title-page mb-8">
					Blog de Gestión Pública
				</div>
				<div className="col-span-full mb-5">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Incidunt, eaque, unde et impedit repellat minus facere
						iusto tempora non vel minima, quidem exercitationem quis
						distinctio. Alias iure voluptatibus impedit pariatur!
					</p>
				</div>
				<div className="col-span-full mb-5 grid grid-cols-12 gap-x-8">
					<div className="col-span-10">
						<CardsNoticiasResultados noticias={noticias} />
					</div>
					<div className="col-span-2">
						<div className="rounded-lg bg-TikTok bg-cover overflow-hidden">
							<div className="bg-TikTokGradient px-6 py-8 text-blanco h-[25.75rem]">
								<p className="text-[2rem] font-bold leading-[normal] mb-3">
									Visita nuestro Tik tok
								</p>
								<p className="text-base leading-[150%]">
									Encuentra nuestro contenido especial
								</p>
							</div>
						</div>
					</div>
				</div>
			</PrincipalLayout>
		</>
	);
};

export default Blog;
