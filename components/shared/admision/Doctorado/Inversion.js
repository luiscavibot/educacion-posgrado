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

			<div className="overflow-x-auto mt-3">
				<p className="text-negro font-bold mb-4">
					Paga tu derecho de inscripción de forma fácil y segura en
					los siguientes medios autorizados:
				</p>
				<div className="mb-4">
					<ul className="list-disc list-inside mb-4">
						<li className="subtitle">
							<div className="inline-flex items-center">
								<span className="mr-2">
									Banco de Crédito del Perú
								</span>
								<button
									onClick={() => {
										window.open(
											'https://bcpzonasegurabeta.viabcp.com/#/iniciar-sesion',
											'_blank'
										);
									}}>
									<LinkExtIcon className="fill-secondary" />
								</button>
							</div>
						</li>
					</ul>
					<p className="mb-8">
						A continuación, detallamos el número de Cuenta Corriente
						de la UNMSM en el Banco de Crédito del Perú, para
						depósitos en ventanilla, cajero, agente o transferencia
						interbancaria:
					</p>
					<div className="mb-8 flex flex-wrap justify-center">
						<div className="mb-3 md:mb-0 flex items-center gap-x-2">
							<p>Cta. Cte. n.°</p>
							<div>
								<CajaConFuncionCopiar
									big
									text="191-0215772014"
								/>
							</div>
						</div>
						<div className="ml-3 flex items-center gap-x-2">
							<p>CCI n.°</p>
							<div>
								<CajaConFuncionCopiar
									big
									text="002-191-00021577201451"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap justify-center mb-14">
					<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
						<p className="text-xl font-bold mb-[10px]">
							S/. 400.00
						</p>
						<p>
							Para magíster UNMSM, personal administrativo de la
							UNMSM, docente de universidades nacionales y
							Magisterio Nacional.
						</p>
					</div>
					<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
						<p className="text-xl font-bold mb-[10px]">
							S/. 500.00
						</p>
						<p>
							Para postulantes (graduados de otras universidades).
						</p>
					</div>
				</div>
				{/* <p className="text-center text-textColorTwo text-sm italic mb-14">
							*Los costos corresponden al proceso de admisión
							2022-II, sujetos a variaciones.
						</p> */}

				<div className="mb-8">
					<ul className="list-disc list-inside mb-4">
						<li className="subtitle">
							<div className="inline-flex items-center">
								<span className="mr-2">Banco de la Nación</span>
								<button
									onClick={() => {
										window.open(
											'https://www.bn.com.pe/banca-internet/banca-internet.asp',
											'_blank'
										);
									}}>
									<LinkExtIcon className="fill-secondary" />
								</button>
							</div>
						</li>
					</ul>
					<p className="mb-8">
						Acércate presencialmente a una de sus agencias más
						cercanas e indica que realizarás un depósito al n.° de
						TRANSACCIÓN 9650 + el código que corresponda; así como
						el n.° DNI, carné de extranjería o pasaporte del
						postulante.
					</p>
					{/* <div className="mb-8 flex flex-wrap justify-center">
								<div className="mb-3 md:mb-0 flex items-center">
									<p>Cta. Cte. n.°</p>
									<CajaConFuncionCopiar text="191-0215772014" />
								</div>
								<div className="ml-3 flex items-center">
									<p>CCI n.°</p>
									<CajaConFuncionCopiar text="002-191-00021577201451" />
								</div>
							</div> */}
				</div>
				<div className="flex justify-center flex-wrap mb-14">
					<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
						<p className="text-xl font-bold mb-[10px]">
							S/. 350.00
						</p>
						<p className="mb-3 font-bold">
							<span>Transacción</span>: 9650 + código: 9702
						</p>
						<p>
							Para magíster UNMSM, personal administrativo de la
							UNMSM, docente de universidades nacionales y
							Magisterio Nacional.
						</p>
					</div>
					<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
						<p className="text-xl font-bold mb-[10px]">
							S/. 450.00
						</p>
						<p className="mb-3 font-bold">
							<span>Transacción</span>: 9650 + código: 9703
						</p>
						<p>
							Para postulantes (graduados de otras universidades).
						</p>
					</div>
				</div>
				{/* <p className="text-center text-textColorTwo text-sm italic mb-14">
							*Los costos corresponden al proceso de admisión
							2022-II, sujetos a variaciones.
						</p> */}
			</div>
			<PagoPagalo programa={'doctorado'} />
			<div>
				<p className="mb-9">
					<span>
						En caso de tener dudas con el trámite puedes revisar el
						siguiente{' '}
					</span>
					<button
						onClick={() => {
							window.open(
								'https://www.youtube.com/watch?v=1pQDLq1Rv0Y&ab_channel=BuenasPr%C3%A1cticasjlp',
								'_blank'
							);
						}}
						// className="hover:-translate-y-1 shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-lg py-2 px-3 text-sm hover:shadow-md duration-300 bg-blanco text-secondary font-semibold inline-flex place-items-center ml-3"
					>
						{/* <BsYoutube className="inline mr-3 text-lg" /> */}
						<span className="link">tutorial</span>.
					</button>
				</p>
				<p className="font-bold mb-3">
					Aspectos a considerar en el Banco de la Nación:
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
				<div className="bg-complementaryTwo/[0.5] py-4 px-8 mb-8">
					<p>
						Las solicitudes de devolución de dinero del pago por
						derecho de inscripción se tramitan una vez finalizado el
						presente proceso de admisión si el programa ha sido
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
			monto: 'S/ 350',
		},
		{
			programa: 'maestria',
			key: '2',
			codigo: '09701',
			descripcion: 'Epg-Maestría-Otros',
			monto: 'S/ 450',
		},
		{
			programa: 'doctorado',
			key: '1',
			codigo: '09702',
			descripcion: 'Epg-Doctorado-Inscripción',
			monto: 'S/ 400',
		},
		{
			programa: 'doctorado',
			key: '2',
			codigo: '09703',
			descripcion: 'Epg-Doctorado-Otros',
			monto: 'S/ 500',
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
							}}>
							<LinkExtIcon className="fill-secondary" />
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
						<tr className="!bg-secondary text-blanco text-center">
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
		</>
	);
};
