import React, { useRef, useState } from 'react';
import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';
import Link from 'next/link';

// import CardsNoticiasResultados from '../../components/noticias/CardsNoticiasResultados';
import VerMasIcon from '../../components/icons/VerMasIcon';
import CardsBlogResultados from '../../components/blog-gestion-publica/CardBlogResultados';
import useBlogGestionPublica from '../../hooks/useBlogGestionPublica';
import InputText from '../../components/shared/InputText';

const START_DATE = new Date();
START_DATE.setMonth(START_DATE.getMonth() - 12);
START_DATE.setHours(0, 0, 0, 0);
const END_DATE = new Date();
END_DATE.setHours(23, 59, 59, 999);
const INITIAL_INPUTS = {
	keyWords: '',
};

const Blog = () => {
	// const [entradaBusqueda, setEntradaBusqueda] = useState('');
	// const [startDate, setStartDate] = useState(START_DATE);
	// const [endDate, setEndDate] = useState(END_DATE);
	const debounceRef = useRef(null);
	const [inputs, setInputs] = useState(INITIAL_INPUTS);
	const [searchParams, setSearchParams] = useState(INITIAL_INPUTS);
	const { blogGestionPublica } = useBlogGestionPublica(searchParams);
	const handleChange = (e) => {
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
	return (
		<>
			<PrincipalLayout>
				<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
					<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="text-textColorOne font-bold inline">
						Blog de Gestión Pública
					</li>
				</ul>
				<div className="mx-4 md:mx-0 col-span-full title-page mb-8">
					Blog de Gestión Pública
				</div>
				<div className="col-span-full mb-5 mx-4 md:mx-0">
					<p>
						Se presenta un espacio dedicado íntegramente a la
						gestión pública en el Perú, constituyendo un foro de
						análisis riguroso sobre las políticas y administraciones
						que configuran el destino de la nación. En este lugar,
						se profundizará en las dinámicas, desafíos y
						oportunidades de la administración estatal, con el
						propósito de fomentar el debate constructivo y la
						optimización de procesos que buscan un Perú más
						eficiente, equitativo y próspero.
					</p>
				</div>
				<div className="mb-5">
					<InputText
						value={inputs.keyWords}
						name="buscador"
						onChange={handleChange}
						placeholder="Buscar por palabra clave"
						conIconoBuscador
						className="w-full md:w-[20rem] inline-block"
						backgroundClass="bg-textColorTwo/5"
					/>
				</div>
				<div className="col-span-full mb-5 lg:grid lg:grid-cols-12 gap-x-8">
					<div className="col-span-full xl:col-span-10 mx-4 md:mx-0">
						<CardsBlogResultados blogs={blogGestionPublica} />
					</div>
					<div className="hidden xl:block col-span-2">
						<div className="rounded-lg bg-TikTok bg-cover overflow-hidden">
							<div className="bg-TikTokGradient px-6 py-8 text-blanco h-[25.75rem]">
								<p className="text-[2rem] font-bold leading-[normal] mb-3">
									Visita nuestro Tik tok
								</p>
								<p className="text-base leading-[150%] mb-3">
									Encuentra nuestro contenido especial
								</p>
								<a
									href="https://www.tiktok.com/@posgradoadministracionsm"
									target="_blank"
									rel="noopener noreferrer"
									className="grid place-items-center rounded-lg w-9 h-9 bg-primary hover:bg-primary-hover transition-colors duration-300"
								>
									<div className="w-3 inline-block">
										<VerMasIcon className="fill-blanco h-full" />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</PrincipalLayout>
		</>
	);
};

export default Blog;
