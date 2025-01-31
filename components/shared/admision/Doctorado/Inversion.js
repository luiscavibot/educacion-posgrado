import React, { useEffect, useRef, useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import CajaConFuncionCopiar from '../../CajaConFuncionCopiar';

import LinkExtIcon from '../../../icons/LinkExtIcon';

import Observacion from '../../Observacion';
export const Inversion = () => {
	return (
		<>
			<Observacion className="mb-6">
				<p>
					Recuerda que antes de proceder con el pago por derecho de
					inscripción debes revisar el cronograma académico
					establecido y verificar que el programa de interés cuente
					con vacantes disponibles en el presente proceso de admisión.
				</p>
			</Observacion>

			<div className="flex justify-center flex-wrap mb-4 md:mb-14">
				<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
					<p className="text-xl font-bold mb-[10px]">
						S/. 400.00
					</p>
					{/* <p className="mb-3 font-bold">
						<span>Transacción</span>: 9650 + código: 9700
					</p> */}
					<p>
						Para magister UNMSM, personal administrativo de
						la UNMSM, docente de universidades nacionales y
						Magisterio Nacional.
					</p>
				</div>
				<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
					<p className="text-xl font-bold mb-[10px]">
						S/. 500.00
					</p>
					{/* <p className="mb-3 font-bold">
						<span>Transacción</span>: 9650 + código: 9701
					</p> */}
					<p>
						Para postulantes graduados de otras
						universidades.
					</p>
				</div>
			</div>

			<p className="text-negro font-bold mb-4">
				Paga tu derecho de inscripción de forma fácil y segura con estos pasos:
			</p>

			<div className="mb-4">
				<div className="subtitle mb-4">
					<div className="inline-flex items-center">
						<span className="mr-2">
							1. Generar ticket en SanMarket-UNMSM
						</span>
					</div>
				</div>
				<div className="relative pb-[56.25%] w-full">
					<iframe 
					className="absolute top-0 left-0 w-full h-full" 
					src="https://www.youtube.com/embed/wDpbuHt1xg4?si=G0ykZewH8ZVtB0UL" 
					title="YouTube video player" 
					frameBorder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					referrerpolicy="strict-origin-when-cross-origin" 
					allowFullScreen>
					</iframe>
				</div>
			</div>
			<div className="mb-4">
				<div className="subtitle mb-4">
					<div className="inline-flex items-center">
						<span className="mr-2">
							2. Realizar el pago
						</span>
					</div>
				</div>
				<div className="relative pb-[56.25%] w-full">
					<iframe 
					className="absolute top-0 left-0 w-full h-full" 
					src="https://www.youtube.com/embed/ZupbHHyZZcg?si=tRokEAFyS006IzaA" 
					title="YouTube video player" 
					frameBorder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					referrerpolicy="strict-origin-when-cross-origin" 
					allowFullScreen>
					</iframe>
				</div>
			</div>
			<div className="mb-4 pl-4">
				<ul className="list-disc list-inside mb-4">
					<li className="subtitle">
						<div className="inline-flex items-center">
							<span className="mr-2">
								Banco de Crédito del Perú (APP BCP)
							</span>
						</div>
					</li>
				</ul>
				<ul className="list-[circle] ml-10 mb-4">
					<li>
						<b>PASO 1</b> - Ingresar a <b>“PAGAR SERVICIO”</b>
					</li>
					<li>
						<b>PASO 2</b> - Digitar el siguiente nombre{' '}
						<b>“UNIVERSIDAD NAC MAYOR DE SAN MARCOS”</b>
					</li>
					<li>
						<b>PASO 3</b> - Seleccionar servicio{' '}
						<b>“PAGOS VARIOS”</b>
					</li>
					<li>
						<b>PASO 4</b> - Ingresar código de cliente
					</li>
					<li>
						<b>PASO 5</b> - Seleccionar <b>MONTO A PAGAR</b>
					</li>
					<li>
						<b>PASO 6</b> - ¡Confirmar que el pago sea exitoso!
					</li>
				</ul>
				{/* <p className="text-textColorTwo text-sm italic mb-1">
					(*)Son los mismos códigos de pago para el Banco de la Nación
					y a través del portal Pagalo.pe
				</p>
				<p className="text-textColorTwo text-sm italic mb-14">
					(**)Bachiller UNMSM, Magíster UNMSM, personal administrativo
					de la UNMSM, docente de Universidades Nacionales y
					Magisterio Nacional.
				</p> */}
			</div>
			<div className="mb-4 pl-4">
				<ul className="list-disc list-inside mb-4">
					<li className="subtitle">
						<div className="inline-flex items-center">
							<span className="mr-2">
								Yape
							</span>
						</div>
					</li>
				</ul>
				<ul className="list-[circle] ml-10 mb-4">
					<li>
						<b>PASO 1</b> - Ingresar a <b>“YAPEAR SERVICIO”</b>
					</li>
					<li>
						<b>PASO 2</b> - Digitar el siguiente nombre{' '}
						<b>“Universidad Nacional Mayor de San Marcos”</b>
					</li>
					{/* <li>
						<b>PASO 3</b> - Seleccionar servicio{' '}
						<b>“PAGOS VARIOS”</b>
					</li> */}
					<li>
						<b>PASO 3</b> - Ingresar código de cliente
					</li>
					<li>
						<b>PASO 4</b> - Seleccionar <b>MONTO A PAGAR</b>
					</li>
					<li>
						<b>PASO 5</b> - ¡Confirmar que el pago sea exitoso!
					</li>
				</ul>
				{/* <p className="text-textColorTwo text-sm italic mb-1">
					(*)Son los mismos códigos de pago para el Banco de la Nación
					y a través del portal Pagalo.pe
				</p>
				<p className="text-textColorTwo text-sm italic mb-14">
					(**)Bachiller UNMSM, Magíster UNMSM, personal administrativo
					de la UNMSM, docente de Universidades Nacionales y
					Magisterio Nacional.
				</p> */}
			</div>
			<div>
				<p className="font-bold mb-3">
					Aspectos a considerar:
				</p>
				<ol className="list-decimal list-inside mb-6">
					<li className="mb-5">
						El pago por derecho de inscripción se realizará
						indicando el número del{' '}
						<span className="font-bold">DNI del postulante</span>.
					</li>
					<li className="mb-5">
						En el caso de postulantes del extranjero, deberán
						indicar el número de su{' '}
						<span className="font-bold">
							carné de extranjería o pasaporte
						</span>
						.
					</li>
					<li className="mb-5">
						Verificar que el número del{' '}
						<span className="font-bold">
							DNI, carné de extranjería o pasaporte
						</span>{' '}
						del postulante coincida con el n.° indicado en el recibo
						de pago antes de retirarse de la ventanilla.
					</li>
					<li className="mb-5">
						Cualquier error es{' '}
						<span className="font-bold">
							responsabilidad del postulante
						</span>
						.
					</li>
				</ol>
				<div className="bg-complementaryOne/[0.5] py-4 px-8 mb-8">
					<p>
						Las solicitudes de devolución de dinero del pago por
						derecho de inscripción se tramitan una vez finalizado el
						presente proceso de admisión, si el programa ha sido
						cancelado.
					</p>
				</div>
			</div>
		</>
	);
};
export const PagoPagalo = ({ programa }) => {
	const tablePagalo = [
		{
			programa: 'maestria',
			key: '1',
			codigo: '09700',
			descripcion: 'Epg-Maestría-Inscripción',
			monto: 'S/ 350.00',
		},
		{
			programa: 'maestria',
			key: '2',
			codigo: '09701',
			descripcion: 'Epg-Maestría-Otros',
			monto: 'S/ 450.00',
		},
		{
			programa: 'doctorado',
			key: '1',
			codigo: '09702',
			descripcion: 'Epg-Doctorado-Inscripción',
			monto: 'S/ 400.00',
		},
		{
			programa: 'doctorado',
			key: '2',
			codigo: '09703',
			descripcion: 'Epg-Doctorado-Otros',
			monto: 'S/ 500.00',
		},
	];
	return (
		<>
			<ul className="list-disc list-inside mb-4">
				<li className="subtitle">
					<div className="inline-flex items-center">
						<span className="mr-2">Págalo.pe</span>
						<button
							onClick={() => {
								window.open('https://pagalo.pe/', '_blank');
							}}
						>
							<LinkExtIcon className="fill-primary" />
						</button>
					</div>
				</li>
			</ul>
			<p className="mb-8">
				¡Paga seguro en línea! Te proporcionamos los siguientes códigos
				y montos necesarios para una transacción exitosa.
			</p>
			<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
				<table className="table table-striped mb-0">
					<thead>
						<tr className="!bg-tertiary text-blanco text-center">
							<th>Código</th>
							<th className="">Descripción</th>
							<th className="w-32">Monto</th>
						</tr>
					</thead>
					<tbody>
						{tablePagalo
							.filter((prop) => prop.programa === programa)
							.map((prop) => {
								return (
									<>
										<tr key={prop.key}>
											<th className="font-normal">
												{prop.codigo}
											</th>
											<th className="font-normal">
												{prop.descripcion}
											</th>
											<th className="font-normal">
												{prop.monto}
											</th>
										</tr>
									</>
								);
							})}
					</tbody>
				</table>
			</div>
			<p className="mb-9">
				<span>
					En caso de tener dudas con el trámite puedes revisar el
					siguiente{' '}
				</span>
				<a
					href="https://www.youtube.com/watch?v=1pQDLq1Rv0Y&ab_channel=BuenasPr%C3%A1cticasjlp"
					target="_blank"
					rel="noreferrer noopener"
					className="link"
					// className="hover:-translate-y-1 shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-lg py-2 px-3 text-sm hover:shadow-md duration-300 bg-blanco text-secondary font-semibold inline-flex place-items-center ml-3"
				>
					{/* <BsYoutube className="inline mr-3 text-lg" /> */}
					<span className="link">tutorial.</span>
				</a>
			</p>
		</>
	);
};
