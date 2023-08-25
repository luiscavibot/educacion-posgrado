import React from 'react';
import Observacion from '../../Observacion';
import LinkExtIcon from '../../../icons/LinkExtIcon';

const InversionDiplomatura = () => {
	return (
		<>
			<Observacion className="mb-6">
				<p>
					Recuerda que antes de proceder con el pago por derecho de
					inscripción debes revisar el cronograma académico
					establecido.
				</p>
			</Observacion>
			<div className="mb-6">
				<p>
					Contamos con facilidades de pago y descuentos corpotativos
					aplicados al costo total por derecho de inscripción.
				</p>
			</div>

			<div className="mb-8">
				<div className="overflow-x-auto mt-6">
					<div className="flex justify-center flex-wrap mb-4 gap-y-6">
						<div className="pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
							<p className="text-xl font-bold mb-[10px]">
								S/. 4 860.00
							</p>
							<p>
								<span className="font-bold">
									Inversión total del programa
								</span>
							</p>
						</div>
						<div className="pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
							<p className="text-xl font-bold mb-[10px]">
								S/. 4 374.00
							</p>
							<p className="mb-2">
								<span className="font-bold">
									Descuento del 10% por pago único
								</span>{' '}
								del programa.
							</p>
							<p>
								<span className="font-bold">
									Descuento corporativo del 10%
								</span>{' '}
								si se inscriben 3 personas al programa.
							</p>
						</div>
						<div className="pt-6 w-[289px] mx-4 card flex flex-col px-6 py-8">
							<p className="text-xl font-bold mb-[10px]">
								S/. 4 131.00
							</p>
							<p>
								<span className="font-bold">
									Descuento corporativo del 15%
								</span>{' '}
								si se inscriben 20 personas al programa.
							</p>
						</div>
					</div>
					{/* <p className="text-center text-textColorTwo text-sm italic mb-6">
						*Los costos corresponden al proceso de admisión 2023,
						sujetos a variaciones.
					</p> */}
				</div>
				<p className="mb-6">
					Podrás realizar el pago inscripción de forma fácil y segura
					en los siguientes medios autorizados:
				</p>
				<div className="mb-8">
					<p className="mb-4">
						<span className="subtitle mr-2">
							Banco de Credito del Peru
						</span>
						{/* <a
							href="https://pagalo.pe/"
							target="_blank"
							rel="noopener noreferrer"
							className="link inline-flex align-center relative -bottom-[3px]">
							<LinkExtIcon className="fill-primary" />
						</a> */}
					</p>
					<ul className="pl-3 list-disc list-inside">
						<li className="mb-8">
							<p className="inline-block mb-3">
								<span className="subtitle mr-2">
									Pago mediante Banca por internet o tu App
									BCP
								</span>
								{/* <a
									href="https://www.viabcp.com/canales/agencias-bcp"
									target="_blank"
									rel="noopener noreferrer"
									className="link inline-flex align-center relative -bottom-[3px]">
									<LinkExtIcon className="fill-primary" />
								</a> */}
							</p>
							<ul className="list-decimal list-inside ml-5">
								<li className="mb-4">
									Elige la opción de &quot;Pago&quot;.
								</li>
								<li className="mb-4">
									Ingresa a &quot;Pagar un servicio&quot;.
								</li>
								<li className="mb-4">
									Busca el nombre de la empresa, digite:
									Universidad Nacional Mayor de San Marcos
								</li>
								<li className="mb-4">
									Da clic en el servicio a pagar: Pagos varios
								</li>
								<li className="mb-4">
									<p className="inline-block mb-3">
										Digite el código de pago:{' '}
										<span className="font-bold">
											094012
										</span>
										+DNI del estudiante
									</p>
									<div className="ml-3">
										<p>
											*Ejemplo:{' '}
											<span className="font-bold">
												094012
											</span>
											07888413
										</p>
									</div>
								</li>
							</ul>
						</li>
						<li className="mb-8">
							<p className="inline-block mb-3">
								<span className="subtitle mr-2">
									Pago mediante Agente BCP y Ventanilla
									Agencia BCP:
								</span>
								{/* <a
									href="https://www.viabcp.com/canales/agencias-bcp"
									target="_blank"
									rel="noopener noreferrer"
									className="link inline-flex align-center relative -bottom-[3px]">
									<LinkExtIcon className="fill-primary" />
								</a> */}
							</p>
							<div className="ml-5">
								<p className="mb-2">
									Acércate a un agente o ventanilla del BCP
									con tu DNI y brinda el siguiente código de
									pago:{' '}
									<span className="font-bold">094012</span>
									+DNI del estudiante.
								</p>
								<p className="mb-5">
									*Ejemplo:{' '}
									<span className="font-bold">094012</span>
									07888413
								</p>
								<p className="mb-2">
									En caso requiera el RUC de nuestra
									institución:
								</p>
								<ul className="list-[circle] list-inside">
									<li className="mb-2">
										<span className="font-bold">
											Razón social:
										</span>{' '}
										Universidad Nacional Mayor de San Marcos
									</li>
									<li>
										<span className="font-bold">RUC:</span>{' '}
										20148092282
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<div className="mb-8">
					<p className="mb-4">
						<span className="subtitle mr-2">
							Banco Pichincha (Ex Banco Financiero)
						</span>
						<a
							href="https://www.pichincha.pe/servicio-al-cliente/nuestras-agencias"
							target="_blank"
							rel="noopener noreferrer"
							className="link inline-flex align-center relative -bottom-[3px]"
						>
							<LinkExtIcon className="fill-primary" />
						</a>
					</p>
					<p className="mb-2">
						Acércate a una ventanilla del Banco Pichincha con tu DNI
						y brinda el siguiente código de pago:{' '}
						<span className="font-bold">094012</span>.
					</p>
					<p className="mb-2">
						En caso requiera el RUC de nuestra institución:
					</p>
					<ul className="list-[circle] list-inside">
						<li className="mb-2">
							<span className="font-bold">Razón social:</span>{' '}
							Universidad Nacional Mayor de San Marcos
						</li>
						<li>
							<span className="font-bold">RUC:</span> 20148092282
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default InversionDiplomatura;
