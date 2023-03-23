import React from 'react';

const Coordinador = ({ coordinadores, tipo }) => {
	return (
		<div>
			{coordinadores[0].attributes.lista_coordinadores ? (
				<>
					{coordinadores[0].attributes.lista_coordinadores.map(
						(coordinador) => {
							return (
								<div
									key={
										coordinador.docente.data.attributes
											.correo
									}>
									<div>
										<p className="mb-2">
											<span>
												<img
													className="w-[18px] mb-[2px] mr-1 inline-block"
													src="/img/icons/coordinador-icon.svg"
													alt=""
												/>
											</span>
											<span className="font-bold">
												Coordinador
											</span>
										</p>
										<p className="mb-3">
											{
												coordinador.docente.data
													.attributes.nombre
											}
										</p>
									</div>
									<div>
										{coordinador.docente.data.attributes
											.correo ? (
											<>
												<p className="mb-2">
													<span>
														<img
															className="w-[18px] mb-[2px] mr-1 inline-block"
															src="/img/icons/correo.svg"
															alt=""
														/>
													</span>
													<span className="font-bold">
														Correo
													</span>
												</p>
												<p className="mb-3">
													{
														coordinador.docente.data
															.attributes.correo
													}
												</p>
											</>
										) : (
											<></>
										)}
									</div>
									<div>
										<p className="mb-3">
											{
												coordinador.docente.data
													.attributes.grado
											}
										</p>
									</div>
									<div className="separator mb-3"></div>
								</div>
							);
						}
					)}
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default Coordinador;
