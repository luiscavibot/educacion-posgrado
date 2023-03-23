import React, { useRef } from 'react';
import { Tab } from 'semantic-ui-react';
import { BsYoutube } from 'react-icons/bs';
import CajaConFuncionCopiar from '../CajaConFuncionCopiar';

export const PagoInscripcion = ({ programas }) => {
	const cciBCP = useRef(null);
	const pago = [
		{
			menuItem: `Programa de ${programas[0]}`,
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-3">
						<p className="text-negro font-bold mb-4">
							Bancos autorizados para realizar el pago por derecho
							de inscripción:
						</p>
						<div className="mb-4">
							<ul className="list-disc list-inside mb-4">
								<li className="subtitle">
									<div className="inline-flex items-center">
										<span>Banco de Crédito del Perú</span>
										<button
											onClick={() => {
												window.open(
													'https://bcpzonasegurabeta.viabcp.com/#/iniciar-sesion',
													'_blank'
												);
											}}>
											<svg
												width="18"
												height="18"
												viewBox="0 0 18 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="ml-1">
												<path
													d="M15.2222 8.22222C15.0159 8.22222 14.8181 8.30417 14.6722 8.45003C14.5264 8.59589 14.4444 8.79372 14.4444 9V13.6667C14.4444 13.8729 14.3625 14.0708 14.2166 14.2166C14.0708 14.3625 13.8729 14.4444 13.6667 14.4444H4.33333C4.12705 14.4444 3.92922 14.3625 3.78336 14.2166C3.6375 14.0708 3.55556 13.8729 3.55556 13.6667V4.33333C3.55556 4.12705 3.6375 3.92922 3.78336 3.78336C3.92922 3.6375 4.12705 3.55556 4.33333 3.55556H9C9.20628 3.55556 9.40411 3.47361 9.54997 3.32775C9.69583 3.18189 9.77778 2.98406 9.77778 2.77778C9.77778 2.5715 9.69583 2.37367 9.54997 2.22781C9.40411 2.08194 9.20628 2 9 2H4.33333C3.71449 2 3.121 2.24583 2.68342 2.68342C2.24583 3.121 2 3.71449 2 4.33333V13.6667C2 14.2855 2.24583 14.879 2.68342 15.3166C3.121 15.7542 3.71449 16 4.33333 16H13.6667C14.2855 16 14.879 15.7542 15.3166 15.3166C15.7542 14.879 16 14.2855 16 13.6667V9C16 8.79372 15.9181 8.59589 15.7722 8.45003C15.6263 8.30417 15.4285 8.22222 15.2222 8.22222Z"
													fill="#9E1D1F"></path>
												<path
													d="M12.1102 3.55556H13.3391L8.44686 8.44C8.37396 8.5123 8.3161 8.59833 8.27661 8.69311C8.23713 8.78789 8.2168 8.88955 8.2168 8.99222C8.2168 9.0949 8.23713 9.19656 8.27661 9.29134C8.3161 9.38612 8.37396 9.47214 8.44686 9.54444C8.51917 9.61734 8.60519 9.67521 8.69997 9.71469C8.79475 9.75418 8.89641 9.77451 8.99908 9.77451C9.10176 9.77451 9.20342 9.75418 9.2982 9.71469C9.39298 9.67521 9.479 9.61734 9.55131 9.54444L14.4435 4.66V5.88889C14.4435 6.09517 14.5255 6.293 14.6713 6.43886C14.8172 6.58472 15.015 6.66667 15.2213 6.66667C15.4276 6.66667 15.6254 6.58472 15.7713 6.43886C15.9171 6.293 15.9991 6.09517 15.9991 5.88889V2.77778C15.9991 2.5715 15.9171 2.37367 15.7713 2.22781C15.6254 2.08194 15.4276 2 15.2213 2H12.1102C11.9039 2 11.7061 2.08194 11.5602 2.22781C11.4144 2.37367 11.3324 2.5715 11.3324 2.77778C11.3324 2.98406 11.4144 3.18189 11.5602 3.32775C11.7061 3.47361 11.9039 3.55556 12.1102 3.55556V3.55556Z"
													fill="#9E1D1F"></path>
											</svg>
										</button>
									</div>
								</li>
							</ul>
							<p className="mb-8">
								A continuación detallamos en número de Cuenta
								Corriente de la UNMSM en el Banco de Crédito del
								Perú, para depósitos en ventanilla, cajero,
								agente o transferencia interbancaria:
							</p>
							<div className="mb-8 flex flex-wrap justify-center">
								<div className="mb-3 md:mb-0 flex items-center">
									<p>Cta. Cte. n.°</p>
									<CajaConFuncionCopiar text="191-0215772014" />
								</div>
								<div className="ml-3 flex items-center">
									<p>CCI n.°</p>
									<CajaConFuncionCopiar text="002-191-00021577201451" />
								</div>
							</div>
						</div>
						<div className="flex flex-wrap justify-center mb-14">
							<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
								<p className="text-xl font-bold mb-[10px]">
									S/. 350.00
								</p>
								<p>
									<span className="font-bold">Para</span>:
									Bachiller UNMSM, personal administrativo de
									la UNMSM, docente de Universidades
									Nacionales y Magisterio Nacional.
								</p>
							</div>
							<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
								<p className="text-xl font-bold mb-[10px]">
									S/. 450.00
								</p>
								<p>
									<span className="font-bold">Para</span>:
									Otros postulantes (Graduados de otras
									universidades).
								</p>
							</div>
						</div>

						<div className="mb-8">
							<ul className="list-disc list-inside mb-4">
								<li className="subtitle">
									<div className="inline-flex items-center">
										<span>Banco de la Nación</span>
										<button
											onClick={() => {
												window.open(
													'https://www.bn.com.pe/banca-internet/banca-internet.asp',
													'_blank'
												);
											}}>
											<svg
												width="18"
												height="18"
												viewBox="0 0 18 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="ml-1">
												<path
													d="M15.2222 8.22222C15.0159 8.22222 14.8181 8.30417 14.6722 8.45003C14.5264 8.59589 14.4444 8.79372 14.4444 9V13.6667C14.4444 13.8729 14.3625 14.0708 14.2166 14.2166C14.0708 14.3625 13.8729 14.4444 13.6667 14.4444H4.33333C4.12705 14.4444 3.92922 14.3625 3.78336 14.2166C3.6375 14.0708 3.55556 13.8729 3.55556 13.6667V4.33333C3.55556 4.12705 3.6375 3.92922 3.78336 3.78336C3.92922 3.6375 4.12705 3.55556 4.33333 3.55556H9C9.20628 3.55556 9.40411 3.47361 9.54997 3.32775C9.69583 3.18189 9.77778 2.98406 9.77778 2.77778C9.77778 2.5715 9.69583 2.37367 9.54997 2.22781C9.40411 2.08194 9.20628 2 9 2H4.33333C3.71449 2 3.121 2.24583 2.68342 2.68342C2.24583 3.121 2 3.71449 2 4.33333V13.6667C2 14.2855 2.24583 14.879 2.68342 15.3166C3.121 15.7542 3.71449 16 4.33333 16H13.6667C14.2855 16 14.879 15.7542 15.3166 15.3166C15.7542 14.879 16 14.2855 16 13.6667V9C16 8.79372 15.9181 8.59589 15.7722 8.45003C15.6263 8.30417 15.4285 8.22222 15.2222 8.22222Z"
													fill="#9E1D1F"></path>
												<path
													d="M12.1102 3.55556H13.3391L8.44686 8.44C8.37396 8.5123 8.3161 8.59833 8.27661 8.69311C8.23713 8.78789 8.2168 8.88955 8.2168 8.99222C8.2168 9.0949 8.23713 9.19656 8.27661 9.29134C8.3161 9.38612 8.37396 9.47214 8.44686 9.54444C8.51917 9.61734 8.60519 9.67521 8.69997 9.71469C8.79475 9.75418 8.89641 9.77451 8.99908 9.77451C9.10176 9.77451 9.20342 9.75418 9.2982 9.71469C9.39298 9.67521 9.479 9.61734 9.55131 9.54444L14.4435 4.66V5.88889C14.4435 6.09517 14.5255 6.293 14.6713 6.43886C14.8172 6.58472 15.015 6.66667 15.2213 6.66667C15.4276 6.66667 15.6254 6.58472 15.7713 6.43886C15.9171 6.293 15.9991 6.09517 15.9991 5.88889V2.77778C15.9991 2.5715 15.9171 2.37367 15.7713 2.22781C15.6254 2.08194 15.4276 2 15.2213 2H12.1102C11.9039 2 11.7061 2.08194 11.5602 2.22781C11.4144 2.37367 11.3324 2.5715 11.3324 2.77778C11.3324 2.98406 11.4144 3.18189 11.5602 3.32775C11.7061 3.47361 11.9039 3.55556 12.1102 3.55556V3.55556Z"
													fill="#9E1D1F"></path>
											</svg>
										</button>
									</div>
								</li>
							</ul>
							<p className="mb-8">
								Debe indicar que realizará un depósito al n.° de
								TRANSACCIÓN 9650 + el código que corresponda;
								así como el n.° DNI, carné de extranjería o
								pasaporte del postulante.
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
									<span>Transacción</span>: 9650 + código:
									9700
								</p>
								<p>
									<span className="font-bold">Para</span>:
									Bachiller UNMSM, personal administrativo de
									la UNMSM, docente de Universidades
									nacionales y Magisterio Nacional.
								</p>
							</div>
							<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
								<p className="text-xl font-bold mb-[10px]">
									S/. 450.00
								</p>
								<p className="mb-3 font-bold">
									<span>Transacción</span>: 9650 + código:
									9701
								</p>
								<p>
									<span className="font-bold">Para</span>:
									Otros postulantes (Graduados de otras
									universidades).
								</p>
							</div>
						</div>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: `Programa de ${programas[1]}`,
			render: () => (
				<Tab.Pane attached={false}>
					<div className="overflow-x-auto mt-3">
						<p className="text-negro font-bold mb-4">
							Bancos autorizados para realizar el pago por derecho
							de inscripción:
						</p>
						<div className="mb-4">
							<ul className="list-disc list-inside mb-4">
								<li className="subtitle">
									<div className="inline-flex items-center">
										<span>Banco de Crédito del Perú</span>
										<button
											onClick={() => {
												window.open(
													'https://bcpzonasegurabeta.viabcp.com/#/iniciar-sesion',
													'_blank'
												);
											}}>
											<svg
												width="18"
												height="18"
												viewBox="0 0 18 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="ml-1">
												<path
													d="M15.2222 8.22222C15.0159 8.22222 14.8181 8.30417 14.6722 8.45003C14.5264 8.59589 14.4444 8.79372 14.4444 9V13.6667C14.4444 13.8729 14.3625 14.0708 14.2166 14.2166C14.0708 14.3625 13.8729 14.4444 13.6667 14.4444H4.33333C4.12705 14.4444 3.92922 14.3625 3.78336 14.2166C3.6375 14.0708 3.55556 13.8729 3.55556 13.6667V4.33333C3.55556 4.12705 3.6375 3.92922 3.78336 3.78336C3.92922 3.6375 4.12705 3.55556 4.33333 3.55556H9C9.20628 3.55556 9.40411 3.47361 9.54997 3.32775C9.69583 3.18189 9.77778 2.98406 9.77778 2.77778C9.77778 2.5715 9.69583 2.37367 9.54997 2.22781C9.40411 2.08194 9.20628 2 9 2H4.33333C3.71449 2 3.121 2.24583 2.68342 2.68342C2.24583 3.121 2 3.71449 2 4.33333V13.6667C2 14.2855 2.24583 14.879 2.68342 15.3166C3.121 15.7542 3.71449 16 4.33333 16H13.6667C14.2855 16 14.879 15.7542 15.3166 15.3166C15.7542 14.879 16 14.2855 16 13.6667V9C16 8.79372 15.9181 8.59589 15.7722 8.45003C15.6263 8.30417 15.4285 8.22222 15.2222 8.22222Z"
													fill="#9E1D1F"></path>
												<path
													d="M12.1102 3.55556H13.3391L8.44686 8.44C8.37396 8.5123 8.3161 8.59833 8.27661 8.69311C8.23713 8.78789 8.2168 8.88955 8.2168 8.99222C8.2168 9.0949 8.23713 9.19656 8.27661 9.29134C8.3161 9.38612 8.37396 9.47214 8.44686 9.54444C8.51917 9.61734 8.60519 9.67521 8.69997 9.71469C8.79475 9.75418 8.89641 9.77451 8.99908 9.77451C9.10176 9.77451 9.20342 9.75418 9.2982 9.71469C9.39298 9.67521 9.479 9.61734 9.55131 9.54444L14.4435 4.66V5.88889C14.4435 6.09517 14.5255 6.293 14.6713 6.43886C14.8172 6.58472 15.015 6.66667 15.2213 6.66667C15.4276 6.66667 15.6254 6.58472 15.7713 6.43886C15.9171 6.293 15.9991 6.09517 15.9991 5.88889V2.77778C15.9991 2.5715 15.9171 2.37367 15.7713 2.22781C15.6254 2.08194 15.4276 2 15.2213 2H12.1102C11.9039 2 11.7061 2.08194 11.5602 2.22781C11.4144 2.37367 11.3324 2.5715 11.3324 2.77778C11.3324 2.98406 11.4144 3.18189 11.5602 3.32775C11.7061 3.47361 11.9039 3.55556 12.1102 3.55556V3.55556Z"
													fill="#9E1D1F"></path>
											</svg>
										</button>
									</div>
								</li>
							</ul>
							<p className="mb-8">
								A continuación detallamos en número de Cuenta
								Corriente de la UNMSM en el Banco de Crédito del
								Perú, para depósitos en ventanilla, cajero,
								agente o transferencia interbancaria:
							</p>
							<div className="mb-8 flex flex-wrap justify-center">
								<div className="mb-3 md:mb-0 flex items-center">
									<p>Cta. Cte. n.°</p>
									<CajaConFuncionCopiar text="191-0215772014" />
								</div>
								<div className="ml-3 flex items-center">
									<p>CCI n.°</p>
									<CajaConFuncionCopiar text="002-191-00021577201451" />
								</div>
							</div>
						</div>
						<div className="flex flex-wrap justify-center mb-14">
							<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
								<p className="text-xl font-bold mb-[10px]">
									S/. 400.00
								</p>
								<p>
									<span className="font-bold">Para</span>:
									Magíster UNMSM, personal administrativo de
									la UNMSM, docente de Universidades
									Nacionales y Magisterio Nacional.
								</p>
							</div>
							<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
								<p className="text-xl font-bold mb-[10px]">
									S/. 500.00
								</p>
								<p>
									<span className="font-bold">Para</span>:
									Otros postulantes (Graduados de otras
									universidades).
								</p>
							</div>
						</div>

						<div className="mb-8">
							<ul className="list-disc list-inside mb-4">
								<li className="subtitle">
									<div className="inline-flex items-center">
										<span>Banco de la Nación</span>
										<button
											onClick={() => {
												window.open(
													'https://www.bn.com.pe/banca-internet/banca-internet.asp',
													'_blank'
												);
											}}>
											<svg
												width="18"
												height="18"
												viewBox="0 0 18 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="ml-1">
												<path
													d="M15.2222 8.22222C15.0159 8.22222 14.8181 8.30417 14.6722 8.45003C14.5264 8.59589 14.4444 8.79372 14.4444 9V13.6667C14.4444 13.8729 14.3625 14.0708 14.2166 14.2166C14.0708 14.3625 13.8729 14.4444 13.6667 14.4444H4.33333C4.12705 14.4444 3.92922 14.3625 3.78336 14.2166C3.6375 14.0708 3.55556 13.8729 3.55556 13.6667V4.33333C3.55556 4.12705 3.6375 3.92922 3.78336 3.78336C3.92922 3.6375 4.12705 3.55556 4.33333 3.55556H9C9.20628 3.55556 9.40411 3.47361 9.54997 3.32775C9.69583 3.18189 9.77778 2.98406 9.77778 2.77778C9.77778 2.5715 9.69583 2.37367 9.54997 2.22781C9.40411 2.08194 9.20628 2 9 2H4.33333C3.71449 2 3.121 2.24583 2.68342 2.68342C2.24583 3.121 2 3.71449 2 4.33333V13.6667C2 14.2855 2.24583 14.879 2.68342 15.3166C3.121 15.7542 3.71449 16 4.33333 16H13.6667C14.2855 16 14.879 15.7542 15.3166 15.3166C15.7542 14.879 16 14.2855 16 13.6667V9C16 8.79372 15.9181 8.59589 15.7722 8.45003C15.6263 8.30417 15.4285 8.22222 15.2222 8.22222Z"
													fill="#9E1D1F"></path>
												<path
													d="M12.1102 3.55556H13.3391L8.44686 8.44C8.37396 8.5123 8.3161 8.59833 8.27661 8.69311C8.23713 8.78789 8.2168 8.88955 8.2168 8.99222C8.2168 9.0949 8.23713 9.19656 8.27661 9.29134C8.3161 9.38612 8.37396 9.47214 8.44686 9.54444C8.51917 9.61734 8.60519 9.67521 8.69997 9.71469C8.79475 9.75418 8.89641 9.77451 8.99908 9.77451C9.10176 9.77451 9.20342 9.75418 9.2982 9.71469C9.39298 9.67521 9.479 9.61734 9.55131 9.54444L14.4435 4.66V5.88889C14.4435 6.09517 14.5255 6.293 14.6713 6.43886C14.8172 6.58472 15.015 6.66667 15.2213 6.66667C15.4276 6.66667 15.6254 6.58472 15.7713 6.43886C15.9171 6.293 15.9991 6.09517 15.9991 5.88889V2.77778C15.9991 2.5715 15.9171 2.37367 15.7713 2.22781C15.6254 2.08194 15.4276 2 15.2213 2H12.1102C11.9039 2 11.7061 2.08194 11.5602 2.22781C11.4144 2.37367 11.3324 2.5715 11.3324 2.77778C11.3324 2.98406 11.4144 3.18189 11.5602 3.32775C11.7061 3.47361 11.9039 3.55556 12.1102 3.55556V3.55556Z"
													fill="#9E1D1F"></path>
											</svg>
										</button>
									</div>
								</li>
							</ul>
							<p className="mb-8">
								Debe indicar que realizará un depósito al n.° de
								TRANSACCIÓN 9650 + el código que corresponda;
								así como el n.° DNI, carné de extranjería o
								pasaporte del postulante.
							</p>
						</div>
						<div className="flex justify-center flex-wrap mb-14">
							<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
								<p className="text-xl font-bold mb-[10px]">
									S/. 400.00
								</p>
								<p className="mb-3 font-bold">
									<span>Transacción</span>: 9650 + código:
									9702
								</p>
								<p>
									<span className="font-bold">Para</span>:
									Magíster UNMSM, personal administrativo de
									la UNMSM, docente de Universidades
									nacionales y Magisterio Nacional.
								</p>
							</div>
							<div className="mb-6 md:mb-0 pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
								<p className="text-xl font-bold mb-[10px]">
									S/. 500.00
								</p>
								<p className="mb-3 font-bold">
									<span>Transacción</span>: 9650 + código:
									9703
								</p>
								<p>
									<span className="font-bold">Para</span>:
									Otros postulantes (Graduados de otras
									universidades).
								</p>
							</div>
						</div>
					</div>
				</Tab.Pane>
			),
		},
	];
	return (
		<div className="col-start-3 col-span-10 mb-14">
			<div className="bg-gris py-4 px-8 mt-4">
				<h2 className="font-medium mb-[6px] inline-flex items-center">
					{/* <MasInformacion /> */}
					<p className="font-bold">
						<img
							className="w-[19px] mb-[1px] mr-1 inline-block"
							src="/img/icons/observacion-white-icon.svg"
							alt=""
						/>
						<span>Observación</span>
					</p>
				</h2>
				<p>
					Recuerde que antes de realizar el pago por derecho de
					inscripción debe verificar que el programa de interés cuente
					con vacantes disponibles y estar dentro del cronograma
					establecido en el presente proceso de admisión
				</p>
			</div>
			<Tab menu={{ secondary: true, pointing: true }} panes={pago} />
			<div>
				<ul className="list-disc list-inside mb-4">
					<li className="subtitle">
						<div className="inline-flex items-center">
							<span>Págalo.pe</span>
							<button
								onClick={() => {
									window.open('https://pagalo.pe/', '_blank');
								}}>
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="ml-1">
									<path
										d="M15.2222 8.22222C15.0159 8.22222 14.8181 8.30417 14.6722 8.45003C14.5264 8.59589 14.4444 8.79372 14.4444 9V13.6667C14.4444 13.8729 14.3625 14.0708 14.2166 14.2166C14.0708 14.3625 13.8729 14.4444 13.6667 14.4444H4.33333C4.12705 14.4444 3.92922 14.3625 3.78336 14.2166C3.6375 14.0708 3.55556 13.8729 3.55556 13.6667V4.33333C3.55556 4.12705 3.6375 3.92922 3.78336 3.78336C3.92922 3.6375 4.12705 3.55556 4.33333 3.55556H9C9.20628 3.55556 9.40411 3.47361 9.54997 3.32775C9.69583 3.18189 9.77778 2.98406 9.77778 2.77778C9.77778 2.5715 9.69583 2.37367 9.54997 2.22781C9.40411 2.08194 9.20628 2 9 2H4.33333C3.71449 2 3.121 2.24583 2.68342 2.68342C2.24583 3.121 2 3.71449 2 4.33333V13.6667C2 14.2855 2.24583 14.879 2.68342 15.3166C3.121 15.7542 3.71449 16 4.33333 16H13.6667C14.2855 16 14.879 15.7542 15.3166 15.3166C15.7542 14.879 16 14.2855 16 13.6667V9C16 8.79372 15.9181 8.59589 15.7722 8.45003C15.6263 8.30417 15.4285 8.22222 15.2222 8.22222Z"
										fill="#9E1D1F"></path>
									<path
										d="M12.1102 3.55556H13.3391L8.44686 8.44C8.37396 8.5123 8.3161 8.59833 8.27661 8.69311C8.23713 8.78789 8.2168 8.88955 8.2168 8.99222C8.2168 9.0949 8.23713 9.19656 8.27661 9.29134C8.3161 9.38612 8.37396 9.47214 8.44686 9.54444C8.51917 9.61734 8.60519 9.67521 8.69997 9.71469C8.79475 9.75418 8.89641 9.77451 8.99908 9.77451C9.10176 9.77451 9.20342 9.75418 9.2982 9.71469C9.39298 9.67521 9.479 9.61734 9.55131 9.54444L14.4435 4.66V5.88889C14.4435 6.09517 14.5255 6.293 14.6713 6.43886C14.8172 6.58472 15.015 6.66667 15.2213 6.66667C15.4276 6.66667 15.6254 6.58472 15.7713 6.43886C15.9171 6.293 15.9991 6.09517 15.9991 5.88889V2.77778C15.9991 2.5715 15.9171 2.37367 15.7713 2.22781C15.6254 2.08194 15.4276 2 15.2213 2H12.1102C11.9039 2 11.7061 2.08194 11.5602 2.22781C11.4144 2.37367 11.3324 2.5715 11.3324 2.77778C11.3324 2.98406 11.4144 3.18189 11.5602 3.32775C11.7061 3.47361 11.9039 3.55556 12.1102 3.55556V3.55556Z"
										fill="#9E1D1F"></path>
								</svg>
							</button>
						</div>
					</li>
				</ul>
				<p className="mb-8">
					A continuación, te brindamos los códigos de pago para los
					programas de Maestría y Doctorados.
				</p>
				<div className="overflow-x-auto mb-11">
					<table className="table table-striped mb-6 max-w-xl mx-auto">
						<thead>
							<tr className="text-blanco bg-negro">
								<th>Código </th>
								<th>Descripción</th>
								<th>Monto</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>09700</td>
								<td>Epg-Maestria-Inscripcion</td>
								<td>350</td>
							</tr>
							<tr>
								<td>09701</td>
								<td>Epg-Maestria-Otros</td>
								<td>450</td>
							</tr>
							<tr>
								<td>09702</td>
								<td>Epg-Doctorado-Inscripcion</td>
								<td>400</td>
							</tr>
							<tr>
								<td>09703</td>
								<td>Epg-Doctorado-Otros</td>
								<td>500</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className="mb-9">
					<span>
						En caso de tener dudas con el trámtite puedes revisar el
						siguiente tutorial.{' '}
					</span>
					<button
						onClick={() => {
							window.open(
								'https://www.youtube.com/watch?v=1pQDLq1Rv0Y&ab_channel=BuenasPr%C3%A1cticasjlp',
								'_blank'
							);
						}}
						className="hover:-translate-y-1 shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-lg py-2 px-3 text-sm hover:shadow-md duration-300 bg-blanco text-secondary font-semibold inline-flex place-items-center ml-3">
						<BsYoutube className="inline mr-3 text-lg" />
						<span>Tutorial</span>
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
				<div className="bg-gris py-4 px-8 mt-4">
					<p>
						Las solicitudes de devolución de dinero del pago por
						derecho de inscripción se tramitan una vez finalizado el
						presente proceso de admisión, si el programa ha sido
						cancelado.
					</p>
				</div>
			</div>
		</div>
	);
};
