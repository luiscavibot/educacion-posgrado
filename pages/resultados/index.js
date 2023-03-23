import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';
import MostrarResultados from '../../components/resultados/MostrarResultados';
import InputText from '../../components/shared/InputText';

import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';
import { useBuscadorGeneral } from '../../hooks/useBuscadorGeneral';

const Index = () => {
	const router = useRouter();
	const [entradaBusqueda, setEntradaBusqueda] = useState('');
	const [input, setInput] = useState('');
	const { resultados, loadingResultados, cantidadResultados } =
		useBuscadorGeneral(entradaBusqueda);
	useEffect(() => {
		if (router.isReady && router.query.q) {
			setEntradaBusqueda(router.query.q);
		}
	}, [router.isReady]);

	const handleKeyDown = (e) => {
		setInput(e.target.value);
		if (e.key === 'Enter') {
			setEntradaBusqueda(e.target.value);
		}
	};
	return (
		<>
			<PrincipalLayout>
				<ul className="px-4 md:px-0 col-start-3 col-span-9 text-secondary text-sm font-medium mb-5">
					<li className="inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/" passHref>
							<a>Inicio</a>
						</Link>
					</li>
					<li className="inline text-negro">Resultados</li>
				</ul>
				<div className="px-4 md:px-0 col-start-3 col-span-9 title-page mb-5">
					Resultados
				</div>
				<div className="px-4 md:px-0 col-start-3 col-span-9 mb-5">
					<InputText
						value={input}
						onChange={handleKeyDown}
						placeholder="Ingrese una palabra clave"
						onKeyDown={handleKeyDown}
						conIconoBuscador
						className="w-full"
						backgroundClass="bg-gris"
					/>
				</div>
				<div className="px-4 md:px-0 col-start-3 col-span-9 mb-10">
					<div>
						<p className="mb-6 text-xs">
							{cantidadResultados > 0 &&
								(cantidadResultados > 1
									? `Se encontraron ${cantidadResultados} resultados
							coincidentes.`
									: `Se encontró 1 resultado coincidente `) +
									`para el término "${entradaBusqueda}".`}
						</p>
						<div>
							<MostrarResultados
								resultados={resultados}
								loadingResultados={loadingResultados}
								cantidadResultados={cantidadResultados}
							/>
						</div>
					</div>
				</div>
			</PrincipalLayout>
		</>
	);
};

export default Index;
