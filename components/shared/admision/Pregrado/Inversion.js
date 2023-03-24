import React, { useRef } from 'react';
import { Tab } from 'semantic-ui-react';
import { BsYoutube } from 'react-icons/bs';
import CajaConFuncionCopiar from '../../CajaConFuncionCopiar';
import Link from 'next/link';

import Observacion from '../../Observacion';

export const Inversion = ({ programas }) => {
	const cciBCP = useRef(null);
	// const pago = [
	// 	{
	// 		menuItem: `Programa de ${programas[0]}`,
	// 		render: () => (
	// 			<Tab.Pane attached={false}>
	// 				<div className="overflow-x-auto mt-3">
	// 					<p className="text-negro font-bold mb-4">
	// 						Bancos autorizados para realizar el pago por derecho
	// 						de inscripción:
	// 					</p>
	// 					<div className="mb-4">
	// 						<ul className="list-disc list-inside mb-4">
	// 							<li className="subtitle">
	// 								<div className="inline-flex items-center">
	// 									<span>Banco de Crédito del Perú</span>
	// 									<button
	// 										onClick={() => {
	// 											window.open(
	// 												'https://bcpzonasegurabeta.viabcp.com/#/iniciar-sesion',
	// 												'_blank'
	// 											);
	// 										}}>
	// 										<svg
	// 											width="18"
	// 											height="18"
	// 											viewBox="0 0 18 18"
	// 											fill="none"
	// 											xmlns="http://www.w3.org/2000/svg"
	// 											className="ml-1">
	// 											<path
	// 												d="M15.2222 8.22222C15.0159 8.22222 14.8181 8.30417 14.6722 8.45003C14.5264 8.59589 14.4444 8.79372 14.4444 9V13.6667C14.4444 13.8729 14.3625 14.0708 14.2166 14.2166C14.0708 14.3625 13.8729 14.4444 13.6667 14.4444H4.33333C4.12705 14.4444 3.92922 14.3625 3.78336 14.2166C3.6375 14.0708 3.55556 13.8729 3.55556 13.6667V4.33333C3.55556 4.12705 3.6375 3.92922 3.78336 3.78336C3.92922 3.6375 4.12705 3.55556 4.33333 3.55556H9C9.20628 3.55556 9.40411 3.47361 9.54997 3.32775C9.69583 3.18189 9.77778 2.98406 9.77778 2.77778C9.77778 2.5715 9.69583 2.37367 9.54997 2.22781C9.40411 2.08194 9.20628 2 9 2H4.33333C3.71449 2 3.121 2.24583 2.68342 2.68342C2.24583 3.121 2 3.71449 2 4.33333V13.6667C2 14.2855 2.24583 14.879 2.68342 15.3166C3.121 15.7542 3.71449 16 4.33333 16H13.6667C14.2855 16 14.879 15.7542 15.3166 15.3166C15.7542 14.879 16 14.2855 16 13.6667V9C16 8.79372 15.9181 8.59589 15.7722 8.45003C15.6263 8.30417 15.4285 8.22222 15.2222 8.22222Z"
	// 												fill="#9E1D1F"></path>
	// 											<path
	// 												d="M12.1102 3.55556H13.3391L8.44686 8.44C8.37396 8.5123 8.3161 8.59833 8.27661 8.69311C8.23713 8.78789 8.2168 8.88955 8.2168 8.99222C8.2168 9.0949 8.23713 9.19656 8.27661 9.29134C8.3161 9.38612 8.37396 9.47214 8.44686 9.54444C8.51917 9.61734 8.60519 9.67521 8.69997 9.71469C8.79475 9.75418 8.89641 9.77451 8.99908 9.77451C9.10176 9.77451 9.20342 9.75418 9.2982 9.71469C9.39298 9.67521 9.479 9.61734 9.55131 9.54444L14.4435 4.66V5.88889C14.4435 6.09517 14.5255 6.293 14.6713 6.43886C14.8172 6.58472 15.015 6.66667 15.2213 6.66667C15.4276 6.66667 15.6254 6.58472 15.7713 6.43886C15.9171 6.293 15.9991 6.09517 15.9991 5.88889V2.77778C15.9991 2.5715 15.9171 2.37367 15.7713 2.22781C15.6254 2.08194 15.4276 2 15.2213 2H12.1102C11.9039 2 11.7061 2.08194 11.5602 2.22781C11.4144 2.37367 11.3324 2.5715 11.3324 2.77778C11.3324 2.98406 11.4144 3.18189 11.5602 3.32775C11.7061 3.47361 11.9039 3.55556 12.1102 3.55556V3.55556Z"
	// 												fill="#9E1D1F"></path>
	// 										</svg>
	// 									</button>
	// 								</div>
	// 							</li>
	// 						</ul>
	// 						<p className="mb-8">
	// 							A continuación detallamos en número de Cuenta
	// 							Corriente de la UNMSM en el Banco de Crédito del
	// 							Perú, para depósitos en ventanilla, cajero,
	// 							agente o transferencia interbancaria:
	// 						</p>
	// 						<div className="mb-8 flex flex-wrap justify-center">
	// 							<div className="mb-3 md:mb-0 flex items-center">
	// 								<p>Cta. Cte. n.°</p>
	// 								<CajaConFuncionCopiar text="191-0215772014" />
	// 							</div>
	// 							<div className="ml-3 flex items-center">
	// 								<p>CCI n.°</p>
	// 								<CajaConFuncionCopiar text="002-191-00021577201451" />
	// 							</div>
	// 						</div>
	// 					</div>
	// 					<div className="flex flex-wrap justify-center mb-14">
	// 						<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
	// 							<p className="text-xl font-bold mb-[10px]">
	// 								S/. 350.00
	// 							</p>
	// 							<p>
	// 								<span className="font-bold">Para</span>:
	// 								Bachiller UNMSM, personal administrativo de
	// 								la UNMSM, docente de Universidades
	// 								Nacionales y Magisterio Nacional.
	// 							</p>
	// 						</div>
	// 						<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
	// 							<p className="text-xl font-bold mb-[10px]">
	// 								S/. 450.00
	// 							</p>
	// 							<p>
	// 								<span className="font-bold">Para</span>:
	// 								Otros postulantes (Graduados de otras
	// 								universidades).
	// 							</p>
	// 						</div>
	// 					</div>

	// 					<div className="mb-8">
	// 						<ul className="list-disc list-inside mb-4">
	// 							<li className="subtitle">
	// 								<div className="inline-flex items-center">
	// 									<span>Banco de la Nación</span>
	// 									<button
	// 										onClick={() => {
	// 											window.open(
	// 												'https://www.bn.com.pe/banca-internet/banca-internet.asp',
	// 												'_blank'
	// 											);
	// 										}}>
	// 										<svg
	// 											width="18"
	// 											height="18"
	// 											viewBox="0 0 18 18"
	// 											fill="none"
	// 											xmlns="http://www.w3.org/2000/svg"
	// 											className="ml-1">
	// 											<path
	// 												d="M15.2222 8.22222C15.0159 8.22222 14.8181 8.30417 14.6722 8.45003C14.5264 8.59589 14.4444 8.79372 14.4444 9V13.6667C14.4444 13.8729 14.3625 14.0708 14.2166 14.2166C14.0708 14.3625 13.8729 14.4444 13.6667 14.4444H4.33333C4.12705 14.4444 3.92922 14.3625 3.78336 14.2166C3.6375 14.0708 3.55556 13.8729 3.55556 13.6667V4.33333C3.55556 4.12705 3.6375 3.92922 3.78336 3.78336C3.92922 3.6375 4.12705 3.55556 4.33333 3.55556H9C9.20628 3.55556 9.40411 3.47361 9.54997 3.32775C9.69583 3.18189 9.77778 2.98406 9.77778 2.77778C9.77778 2.5715 9.69583 2.37367 9.54997 2.22781C9.40411 2.08194 9.20628 2 9 2H4.33333C3.71449 2 3.121 2.24583 2.68342 2.68342C2.24583 3.121 2 3.71449 2 4.33333V13.6667C2 14.2855 2.24583 14.879 2.68342 15.3166C3.121 15.7542 3.71449 16 4.33333 16H13.6667C14.2855 16 14.879 15.7542 15.3166 15.3166C15.7542 14.879 16 14.2855 16 13.6667V9C16 8.79372 15.9181 8.59589 15.7722 8.45003C15.6263 8.30417 15.4285 8.22222 15.2222 8.22222Z"
	// 												fill="#9E1D1F"></path>
	// 											<path
	// 												d="M12.1102 3.55556H13.3391L8.44686 8.44C8.37396 8.5123 8.3161 8.59833 8.27661 8.69311C8.23713 8.78789 8.2168 8.88955 8.2168 8.99222C8.2168 9.0949 8.23713 9.19656 8.27661 9.29134C8.3161 9.38612 8.37396 9.47214 8.44686 9.54444C8.51917 9.61734 8.60519 9.67521 8.69997 9.71469C8.79475 9.75418 8.89641 9.77451 8.99908 9.77451C9.10176 9.77451 9.20342 9.75418 9.2982 9.71469C9.39298 9.67521 9.479 9.61734 9.55131 9.54444L14.4435 4.66V5.88889C14.4435 6.09517 14.5255 6.293 14.6713 6.43886C14.8172 6.58472 15.015 6.66667 15.2213 6.66667C15.4276 6.66667 15.6254 6.58472 15.7713 6.43886C15.9171 6.293 15.9991 6.09517 15.9991 5.88889V2.77778C15.9991 2.5715 15.9171 2.37367 15.7713 2.22781C15.6254 2.08194 15.4276 2 15.2213 2H12.1102C11.9039 2 11.7061 2.08194 11.5602 2.22781C11.4144 2.37367 11.3324 2.5715 11.3324 2.77778C11.3324 2.98406 11.4144 3.18189 11.5602 3.32775C11.7061 3.47361 11.9039 3.55556 12.1102 3.55556V3.55556Z"
	// 												fill="#9E1D1F"></path>
	// 										</svg>
	// 									</button>
	// 								</div>
	// 							</li>
	// 						</ul>
	// 						<p className="mb-8">
	// 							Debe indicar que realizará un depósito al n.° de
	// 							TRANSACCIÓN 9650 + el código que corresponda;
	// 							así como el n.° DNI, carné de extranjería o
	// 							pasaporte del postulante.
	// 						</p>
	// 						{/* <div className="mb-8 flex flex-wrap justify-center">
	// 							<div className="mb-3 md:mb-0 flex items-center">
	// 								<p>Cta. Cte. n.°</p>
	// 								<CajaConFuncionCopiar text="191-0215772014" />
	// 							</div>
	// 							<div className="ml-3 flex items-center">
	// 								<p>CCI n.°</p>
	// 								<CajaConFuncionCopiar text="002-191-00021577201451" />
	// 							</div>
	// 						</div> */}
	// 					</div>
	// 					<div className="flex justify-center flex-wrap mb-14">
	// 						<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
	// 							<p className="text-xl font-bold mb-[10px]">
	// 								S/. 350.00
	// 							</p>
	// 							<p className="mb-3 font-bold">
	// 								<span>Transacción</span>: 9650 + código:
	// 								9700
	// 							</p>
	// 							<p>
	// 								<span className="font-bold">Para</span>:
	// 								Bachiller UNMSM, personal administrativo de
	// 								la UNMSM, docente de Universidades
	// 								nacionales y Magisterio Nacional.
	// 							</p>
	// 						</div>
	// 						<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
	// 							<p className="text-xl font-bold mb-[10px]">
	// 								S/. 450.00
	// 							</p>
	// 							<p className="mb-3 font-bold">
	// 								<span>Transacción</span>: 9650 + código:
	// 								9701
	// 							</p>
	// 							<p>
	// 								<span className="font-bold">Para</span>:
	// 								Otros postulantes (Graduados de otras
	// 								universidades).
	// 							</p>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</Tab.Pane>
	// 		),
	// 	},
	// 	{
	// 		menuItem: `Programa de ${programas[1]}`,
	// 		render: () => (
	// 			<Tab.Pane attached={false}>
	// 				<div className="overflow-x-auto mt-3">
	// 					<p className="text-negro font-bold mb-4">
	// 						Bancos autorizados para realizar el pago por derecho
	// 						de inscripción:
	// 					</p>
	// 					<div className="mb-4">
	// 						<ul className="list-disc list-inside mb-4">
	// 							<li className="subtitle">
	// 								<div className="inline-flex items-center">
	// 									<span>Banco de Crédito del Perú</span>
	// 									<button
	// 										onClick={() => {
	// 											window.open(
	// 												'https://bcpzonasegurabeta.viabcp.com/#/iniciar-sesion',
	// 												'_blank'
	// 											);
	// 										}}>
	// 										<svg
	// 											width="18"
	// 											height="18"
	// 											viewBox="0 0 18 18"
	// 											fill="none"
	// 											xmlns="http://www.w3.org/2000/svg"
	// 											className="ml-1">
	// 											<path
	// 												d="M15.2222 8.22222C15.0159 8.22222 14.8181 8.30417 14.6722 8.45003C14.5264 8.59589 14.4444 8.79372 14.4444 9V13.6667C14.4444 13.8729 14.3625 14.0708 14.2166 14.2166C14.0708 14.3625 13.8729 14.4444 13.6667 14.4444H4.33333C4.12705 14.4444 3.92922 14.3625 3.78336 14.2166C3.6375 14.0708 3.55556 13.8729 3.55556 13.6667V4.33333C3.55556 4.12705 3.6375 3.92922 3.78336 3.78336C3.92922 3.6375 4.12705 3.55556 4.33333 3.55556H9C9.20628 3.55556 9.40411 3.47361 9.54997 3.32775C9.69583 3.18189 9.77778 2.98406 9.77778 2.77778C9.77778 2.5715 9.69583 2.37367 9.54997 2.22781C9.40411 2.08194 9.20628 2 9 2H4.33333C3.71449 2 3.121 2.24583 2.68342 2.68342C2.24583 3.121 2 3.71449 2 4.33333V13.6667C2 14.2855 2.24583 14.879 2.68342 15.3166C3.121 15.7542 3.71449 16 4.33333 16H13.6667C14.2855 16 14.879 15.7542 15.3166 15.3166C15.7542 14.879 16 14.2855 16 13.6667V9C16 8.79372 15.9181 8.59589 15.7722 8.45003C15.6263 8.30417 15.4285 8.22222 15.2222 8.22222Z"
	// 												fill="#9E1D1F"></path>
	// 											<path
	// 												d="M12.1102 3.55556H13.3391L8.44686 8.44C8.37396 8.5123 8.3161 8.59833 8.27661 8.69311C8.23713 8.78789 8.2168 8.88955 8.2168 8.99222C8.2168 9.0949 8.23713 9.19656 8.27661 9.29134C8.3161 9.38612 8.37396 9.47214 8.44686 9.54444C8.51917 9.61734 8.60519 9.67521 8.69997 9.71469C8.79475 9.75418 8.89641 9.77451 8.99908 9.77451C9.10176 9.77451 9.20342 9.75418 9.2982 9.71469C9.39298 9.67521 9.479 9.61734 9.55131 9.54444L14.4435 4.66V5.88889C14.4435 6.09517 14.5255 6.293 14.6713 6.43886C14.8172 6.58472 15.015 6.66667 15.2213 6.66667C15.4276 6.66667 15.6254 6.58472 15.7713 6.43886C15.9171 6.293 15.9991 6.09517 15.9991 5.88889V2.77778C15.9991 2.5715 15.9171 2.37367 15.7713 2.22781C15.6254 2.08194 15.4276 2 15.2213 2H12.1102C11.9039 2 11.7061 2.08194 11.5602 2.22781C11.4144 2.37367 11.3324 2.5715 11.3324 2.77778C11.3324 2.98406 11.4144 3.18189 11.5602 3.32775C11.7061 3.47361 11.9039 3.55556 12.1102 3.55556V3.55556Z"
	// 												fill="#9E1D1F"></path>
	// 										</svg>
	// 									</button>
	// 								</div>
	// 							</li>
	// 						</ul>
	// 						<p className="mb-8">
	// 							A continuación detallamos en número de Cuenta
	// 							Corriente de la UNMSM en el Banco de Crédito del
	// 							Perú, para depósitos en ventanilla, cajero,
	// 							agente o transferencia interbancaria:
	// 						</p>
	// 						<div className="mb-8 flex flex-wrap justify-center">
	// 							<div className="mb-3 md:mb-0 flex items-center">
	// 								<p>Cta. Cte. n.°</p>
	// 								<CajaConFuncionCopiar text="191-0215772014" />
	// 							</div>
	// 							<div className="ml-3 flex items-center">
	// 								<p>CCI n.°</p>
	// 								<CajaConFuncionCopiar text="002-191-00021577201451" />
	// 							</div>
	// 						</div>
	// 					</div>
	// 					<div className="flex flex-wrap justify-center mb-14">
	// 						<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
	// 							<p className="text-xl font-bold mb-[10px]">
	// 								S/. 400.00
	// 							</p>
	// 							<p>
	// 								<span className="font-bold">Para</span>:
	// 								Magíster UNMSM, personal administrativo de
	// 								la UNMSM, docente de Universidades
	// 								Nacionales y Magisterio Nacional.
	// 							</p>
	// 						</div>
	// 						<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
	// 							<p className="text-xl font-bold mb-[10px]">
	// 								S/. 500.00
	// 							</p>
	// 							<p>
	// 								<span className="font-bold">Para</span>:
	// 								Otros postulantes (Graduados de otras
	// 								universidades).
	// 							</p>
	// 						</div>
	// 					</div>

	// 					<div className="mb-8">
	// 						<ul className="list-disc list-inside mb-4">
	// 							<li className="subtitle">
	// 								<div className="inline-flex items-center">
	// 									<span>Banco de la Nación</span>
	// 									<button
	// 										onClick={() => {
	// 											window.open(
	// 												'https://www.bn.com.pe/banca-internet/banca-internet.asp',
	// 												'_blank'
	// 											);
	// 										}}>
	// 										<svg
	// 											width="18"
	// 											height="18"
	// 											viewBox="0 0 18 18"
	// 											fill="none"
	// 											xmlns="http://www.w3.org/2000/svg"
	// 											className="ml-1">
	// 											<path
	// 												d="M15.2222 8.22222C15.0159 8.22222 14.8181 8.30417 14.6722 8.45003C14.5264 8.59589 14.4444 8.79372 14.4444 9V13.6667C14.4444 13.8729 14.3625 14.0708 14.2166 14.2166C14.0708 14.3625 13.8729 14.4444 13.6667 14.4444H4.33333C4.12705 14.4444 3.92922 14.3625 3.78336 14.2166C3.6375 14.0708 3.55556 13.8729 3.55556 13.6667V4.33333C3.55556 4.12705 3.6375 3.92922 3.78336 3.78336C3.92922 3.6375 4.12705 3.55556 4.33333 3.55556H9C9.20628 3.55556 9.40411 3.47361 9.54997 3.32775C9.69583 3.18189 9.77778 2.98406 9.77778 2.77778C9.77778 2.5715 9.69583 2.37367 9.54997 2.22781C9.40411 2.08194 9.20628 2 9 2H4.33333C3.71449 2 3.121 2.24583 2.68342 2.68342C2.24583 3.121 2 3.71449 2 4.33333V13.6667C2 14.2855 2.24583 14.879 2.68342 15.3166C3.121 15.7542 3.71449 16 4.33333 16H13.6667C14.2855 16 14.879 15.7542 15.3166 15.3166C15.7542 14.879 16 14.2855 16 13.6667V9C16 8.79372 15.9181 8.59589 15.7722 8.45003C15.6263 8.30417 15.4285 8.22222 15.2222 8.22222Z"
	// 												fill="#9E1D1F"></path>
	// 											<path
	// 												d="M12.1102 3.55556H13.3391L8.44686 8.44C8.37396 8.5123 8.3161 8.59833 8.27661 8.69311C8.23713 8.78789 8.2168 8.88955 8.2168 8.99222C8.2168 9.0949 8.23713 9.19656 8.27661 9.29134C8.3161 9.38612 8.37396 9.47214 8.44686 9.54444C8.51917 9.61734 8.60519 9.67521 8.69997 9.71469C8.79475 9.75418 8.89641 9.77451 8.99908 9.77451C9.10176 9.77451 9.20342 9.75418 9.2982 9.71469C9.39298 9.67521 9.479 9.61734 9.55131 9.54444L14.4435 4.66V5.88889C14.4435 6.09517 14.5255 6.293 14.6713 6.43886C14.8172 6.58472 15.015 6.66667 15.2213 6.66667C15.4276 6.66667 15.6254 6.58472 15.7713 6.43886C15.9171 6.293 15.9991 6.09517 15.9991 5.88889V2.77778C15.9991 2.5715 15.9171 2.37367 15.7713 2.22781C15.6254 2.08194 15.4276 2 15.2213 2H12.1102C11.9039 2 11.7061 2.08194 11.5602 2.22781C11.4144 2.37367 11.3324 2.5715 11.3324 2.77778C11.3324 2.98406 11.4144 3.18189 11.5602 3.32775C11.7061 3.47361 11.9039 3.55556 12.1102 3.55556V3.55556Z"
	// 												fill="#9E1D1F"></path>
	// 										</svg>
	// 									</button>
	// 								</div>
	// 							</li>
	// 						</ul>
	// 						<p className="mb-8">
	// 							Debe indicar que realizará un depósito al n.° de
	// 							TRANSACCIÓN 9650 + el código que corresponda;
	// 							así como el n.° DNI, carné de extranjería o
	// 							pasaporte del postulante.
	// 						</p>
	// 					</div>
	// 					<div className="flex justify-center flex-wrap mb-14">
	// 						<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
	// 							<p className="text-xl font-bold mb-[10px]">
	// 								S/. 400.00
	// 							</p>
	// 							<p className="mb-3 font-bold">
	// 								<span>Transacción</span>: 9650 + código:
	// 								9702
	// 							</p>
	// 							<p>
	// 								<span className="font-bold">Para</span>:
	// 								Magíster UNMSM, personal administrativo de
	// 								la UNMSM, docente de Universidades
	// 								nacionales y Magisterio Nacional.
	// 							</p>
	// 						</div>
	// 						<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
	// 							<p className="text-xl font-bold mb-[10px]">
	// 								S/. 500.00
	// 							</p>
	// 							<p className="mb-3 font-bold">
	// 								<span>Transacción</span>: 9650 + código:
	// 								9703
	// 							</p>
	// 							<p>
	// 								<span className="font-bold">Para</span>:
	// 								Otros postulantes (Graduados de otras
	// 								universidades).
	// 							</p>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</Tab.Pane>
	// 		),
	// 	},
	// ];
	return (
		<>
			<div className="mb-8">
				<p className="subtitle mb-3">Prospecto de admisión</p>
				<p className="mb-6">
					El pago para adquirir el{' '}
					<span className="font-bold">
						reglamento de admisión 2023-II
					</span>{' '}
					se realiza en el Banco de la Nación, a través de dos formas:
					{/* <a
						href="https://pagalo.pe/"
						className="link"
						target="_blank"
						rel="noopener noreferrer">
						{' '}
						Págalo.pe
					</a> */}
				</p>
				<div className="overflow-x-auto mt-4 mb-8 max-w-xl mx-auto">
					<table className="table table-striped mb-0">
						<thead>
							<tr className="!bg-tertiary text-blanco text-center">
								<th>Medio</th>
								<th className="w-32 text-center">Código</th>
								<th className="w-32 text-center">Monto</th>
							</tr>
						</thead>
						<tbody>
							<tr key="1">
								<td>
									<a
										href="https://pagalo.pe/"
										className="link"
										target="_blank"
										rel="noopener noreferrer">
										Plataforma virtual (Págalo.pe)
									</a>
								</td>
								<td className="text-center">9520</td>
								<td className="text-center">S/ 60.00</td>
							</tr>
							<tr key="2">
								<td>
									<a
										href="https://www.bn.com.pe/canales-atencion/agencia-lima-metropolitana.asp"
										className="link"
										target="_blank"
										rel="noopener noreferrer">
										Presencial en agencia
									</a>
								</td>
								<td className="text-center">9516</td>
								<td className="text-center">S/ 60.00</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="mb-8">
				<p className="subtitle mb-3">
					Inscripción para el examen de admisión
				</p>
				<p className="mb-6">
					{/* Los pagos por derecho de inscripción para el examen de
					admisión son los siguientes y se pueden realizar en el Banco
					de la Nación o a través de{' '}
					<a
						href="https://pagalo.pe/"
						className="link"
						target="_blank"
						rel="noopener noreferrer">
						{' '}
						Págalo.pe{' '}
					</a>
					(excepto para los postulantes de Instituciones educativas
					privadas con fines de lucro): */}
					El pago por las modalidades, según el reglamento, y códigos
					por derecho de inscripción para el examen de admisión
					2023-II son los siguientes:
				</p>
				<div className="flex flex-wrap justify-center mb-5 gap-y-6">
					<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
						<p className="text-xl font-bold mb-[10px]">
							S/. 350.00
						</p>
						<p className="font-bold text-textColorTwo text-[15px] mb-3">
							Código: 9501
						</p>
						<p>
							<span className="font-bold">Para</span>: Postulantes
							que provienen de institución educativa de gestión
							pública
						</p>
					</div>

					<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
						<p className="text-xl font-bold mb-[10px]">
							S/. 500.00
						</p>
						<p className="font-bold text-textColorTwo text-[15px] mb-3">
							Código: 9502
						</p>
						<p>
							<span className="font-bold">Para: </span>{' '}
							Postulantes que provienen de institución educativa
							de gestión privada{' '}
							<span className="font-bold">
								sin fines de lucro{' '}
							</span>{' '}
						</p>
					</div>
					<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
						<p className="text-xl font-bold mb-[10px]">
							S/. 800.00
						</p>
						<p className="font-bold text-textColorTwo text-[15px] mb-3">
							Código: 9549
						</p>
						<p>
							<span className="font-bold">Para: </span>{' '}
							Postulantes que provienen de institución educativa
							de gestión privada{' '}
							<span className="font-bold">
								con fines de lucro{' '}
							</span>{' '}
						</p>
					</div>
				</div>
				{/* <p className="text-center text-textColorTwo text-sm italic mb-14">
					*Los costos corresponden al proceso de admisión 2023-II,
					sujetos a variaciones.
				</p> */}
				<p className="p-4 bg-complementaryTwo/[0.5] rounded-lg py-4 px-8">
					Si tu Institución educativa es con fines de lucro,
					<span className="font-bold">
						{' '}
						el abono es solo en ventanilla{' '}
					</span>
					del Banco de la Nación.
				</p>
			</div>
			<div className="mb-8">
				<p className="subtitle mb-3">Rezagados</p>
				<p className="mb-6">
					Los postulantes que no pudieron abonar a su derecho de
					inscripción dentro de las fechas indicadas en el Cronograma
					de Admisión 2023-II (
					<Link href="/formacion-academica/admision?nivel=pregrado&tab=cronograma-academico">
						<a className="link">Ver cronograma</a>
					</Link>
					) podrán hacerlo en la etapa de de{' '}
					<span className="font-bold">Rezagados</span> . Los montos a
					pagar son los siguientes y se pueden realizar en el Banco de
					la Nación o a través de
					<a
						href="https://pagalo.pe/"
						className="link"
						target="_blank"
						rel="noopener noreferrer">
						{' '}
						Págalo.pe
					</a>
				</p>
				<div className="flex flex-wrap justify-center mb-5 gap-y-6">
					<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
						<p className="text-xl font-bold mb-[10px]">
							S/. 370.00
						</p>
						<p className="font-bold text-textColorTwo text-[15px] mb-3">
							Código: 9507
						</p>
						<p>
							<span className="font-bold">Para</span>: Postulantes
							que provienen de institución educativa de gestión
							pública
						</p>
					</div>
					<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
						<p className="text-xl font-bold mb-[10px]">
							S/. 520.00
						</p>
						<p className="font-bold text-textColorTwo text-[15px] mb-3">
							Código: 9508
						</p>
						<p>
							<span className="font-bold">Para</span>: Postulantes
							que provienen de institución educativa de gestión
							privada.
						</p>
					</div>
					<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
						<p className="text-xl font-bold mb-[10px]">
							S/. 820.00
						</p>
						<p className="font-bold text-textColorTwo text-[15px] mb-3">
							Código: 9520
						</p>
						<p>
							<span className="font-bold">Para: </span>{' '}
							Postulantes que provienen de institución educativa
							de gestión privada{' '}
							<span className="font-bold">
								con fines de lucro{' '}
							</span>{' '}
						</p>
					</div>
				</div>
			</div>
			<Observacion className="mb-6">
				<p>
					Se recomienda esperar 6 horas luego de haber realizado
					cualquier pago, para que figure en el sistema.
				</p>
			</Observacion>
		</>
	);
};
