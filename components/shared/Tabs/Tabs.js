import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// import Image from 'next/image';
// import flechaAbajo from '../../../public/img/icons/flecha-abajo.svg';
import IconTab from './IconTab';
import { slugify } from '../../../helpers/slugify';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';

const Tabs = ({ children, nombre, carrera, tipoPrograma }) => {
	const [activeTab, setActiveTab] = useState(null);
	const router = useRouter();

	useEffect(() => {
		// condicional para esperar que los parámetros estén listos y no hacer renderizaciones innecesarias.
		if (!router.isReady) {
			return;
		}
		const labels = children.map((child) => slugify(child.props.label));
		if (labels.includes(router.query.tab)) {
			setActiveTab(router.query.tab);
		} else {
			setActiveTab(slugify(children[0].props.label));
		}
	}, [router.query, children, router.isReady]);

	const pushInsideRoute = (newActiveTab) => {
		setActiveTab(slugify(newActiveTab));
		switch (nombre) {
			case 'autoridades':
				router.push(
					`/nosotros/director-y-coordinadores?tab=${slugify(
						newActiveTab
					)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
			case 'tramites':
				router.push(
					`/tramites/?tab=${slugify(newActiveTab)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
			case 'taller-tesis':
				router.push(
					`/investigacion/taller-tesis/?tab=${slugify(newActiveTab)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
			case 'transparencia':
				router.push(
					`/nosotros/transparencia/?tab=${slugify(newActiveTab)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
			case 'bibliotecas':
				router.push(
					`/investigacion/bibliotecas/?tab=${slugify(newActiveTab)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
			case 'admision_diplomatura':
				router.push(
					`/admision?programa=diplomatura&tab=${slugify(
						newActiveTab
					)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
			case 'admision_maestria':
				router.push(
					`/admision?programa=maestria&tab=${slugify(newActiveTab)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
			case 'admision_doctorado':
				router.push(
					`/admision?programa=doctorado&tab=${slugify(newActiveTab)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
			case 'admision_posdoctorado':
				router.push(
					`/admision?programa=posdoctorado&tab=${slugify(
						newActiveTab
					)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
			case 'posdoctorado':
				router.push(
					`/programas/posdoctorado?tab=${slugify(newActiveTab)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
			case 'posgrado':
				if (tipoPrograma === 'doctorado') {
					router.push(
						`/programas/${tipoPrograma}?tab=${slugify(
							newActiveTab
						)}`,
						undefined,
						{
							shallow: true,
						}
					);
					break;
				}
				router.push(
					`/programas/${tipoPrograma}/${
						router.query.programa
					}?tab=${slugify(newActiveTab)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
			// case 'pregrado':
			// 	router.push(
			// 		`/formacion-academica/pregrado/educacion/?tab=${slugify(
			// 			newActiveTab
			// 		)}`,
			// 		undefined,
			// 		{
			// 			shallow: true,
			// 		}
			// 	);
			// 	break;
			default:
				router.push(
					`/formacion-academica/${nombre}/${
						router.query.carrera
					}?tab=${slugify(newActiveTab)}`,
					undefined,
					{
						shallow: true,
					}
				);
				break;
		}
	};

	const handleClick = (e, newActiveTab, link) => {
		e.preventDefault();
		if (link) {
			router.push(link);
			return;
		}
		pushInsideRoute(newActiveTab);
	};

	return (
		activeTab && (
			<div className="mx-4 md:mx-0 cont-grid-tabs mt-8">
				<ul className="tabs">
					{children.map((tab, index) => {
						const label = slugify(tab.props.label);
						const link = tab.props.link;
						return (
							<li
								key={label + index}
								className={
									label == activeTab
										? 'current bg-gris md:bg-blanco'
										: ''
								}
							>
								<div
									className="p-4 flex border-b border-b-secondary/40 cursor-pointer hover:font-black fill-textColorOne"
									onClick={(e) => {
										handleClick(e, label, link);
									}}
								>
									<div className="basis-1/12 md:basis-3/12 wrapper-icon">
										<IconTab label={label} />
									</div>
									<p className="pl-2 md:pl-0 basis-9/12 md:basis-11/12">
										{tab.props.label}
									</p>
									<div
										className={
											label === activeTab
												? 'md:hidden pl-4 self-center inline spin-downArrow-animation'
												: 'hidden'
										}
									>
										<IoIosArrowDown />
									</div>
								</div>
							</li>
						);
					})}
					{carrera && (
						<li className="mt-8">
							<p className="font-bold">Enlaces de interés</p>
							<ul className="text-secondary font-semibold">
								{carrera?.enlaces_interes.map((enlace) => {
									return (
										<li
											className="mt-4 hover:text-tertiary cursor-pointer"
											key={enlace}
										>
											<a
												onClick={() => {
													window.open(
														enlace.link,
														'_blank'
													);
												}}
											>
												{enlace.label}
											</a>
										</li>
									);
								})}
							</ul>
						</li>
					)}
				</ul>
				{/* NOTE: Los divs dentro de content-tabs tenían un py-5, pero se procede a setearlos a 0 */}
				<div className="content-tabs">
					{children.map((one, index) => {
						const label = slugify(one.props.label);
						if (slugify(label) === activeTab)
							return (
								<div
									key={index + label}
									className="content py-0"
								>
									{one.props.children}
								</div>
							);
					})}
				</div>
			</div>
		)
	);
};

export { Tabs };
