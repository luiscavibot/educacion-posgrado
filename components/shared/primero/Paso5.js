import React from 'react';
import LinkExtIcon from '../../../components/icons/LinkExtIcon';

export const Paso5 = ({ isOpen, programa }) => {
	let contenido;

	if (programa === 'maestria') {
		contenido = (
			<>
				<ol className="mb-8">
					<li>
						Adjuntar los siguientes archivos en formato (PDF):
						<ul>
							<li>
								<p className="ml-2">
									Formato de verificación e indexación de la
									revista
								</p>
							</li>
							<li>
								<p className="ml-2">
									Tesis: nombra al archivo PDF de la siguiente
									manera: <b>T001_N.° DNI_D</b> (ej.:
									T001_12345678_D)
								</p>
							</li>
							<li>
								<p className="ml-2">
									<a
										href="https://docs.google.com/document/d/1Lcr5xahpjaA4z_CNXf-M2jzBdEhTqcIa/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
										target="_blank"
										rel="noopener noreferrer">
										Hoja de metadatos complementarios
									</a>
								</p>
							</li>
							<li>
								<p className="ml-2">
									<a
										href="https://docs.google.com/document/d/1drgO3s1F4BHg2UWUNPloJgyZsSLHBRMv/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
										target="_blank"
										rel="noopener noreferrer">
										Formulario de autorización para depósito
										de obra en Cybertesis
									</a>
								</p>
							</li>
							<li>
								<p className="ml-2">
									Una (01) foto digital (
									<a
										href="https://drive.google.com/file/d/1m6sptfntYV1CfAEO0eIKicoerl6YF9Iz/view?usp=sharing"
										target="_blank"
										rel="noopener noreferrer">
										ver especificaciones
									</a>
									)
								</p>
							</li>
						</ul>
					</li>
					<li>
						Adjuntar el artículo publicado, DOI y link del artículo.
					</li>
				</ol>
				<p className="mt-4">
					Los documentos serán presentados en archivos en formato PDF
					y deben ser enviados al correo:{' '}
					<a>upg.educacion@unmsm.edu.pe</a> con un{' '}
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=sharing"
						rel="noopener noreferrer">
						FUT
					</a>{' '}
					(Formato Único de Trámite).
				</p>
				<p>
					Aquí te brindamos la orientación para el llenado correcto de
					la información:
				</p>
				<div className="flex items-center space-x-2 mb-4">
					<LinkExtIcon className="fill-primary" />
					<span className="mr-2">
						<a
							target="_blank"
							href="https://sisbib.unmsm.edu.pe/archivos/documentos/recepcion_investigacion/Guia%20para%20el%20deposito%20a%20Cybertesis_Febrero%20(26-02-2021).pdf"
							rel="noopener noreferrer">
							Guía para el depósito en CYBERTESIS
						</a>
					</span>
				</div>
				<div className="flex items-center space-x-2">
					<LinkExtIcon className="fill-primary" />
					<span className="mr-2">
						<a
							target="_blank"
							href="https://sisbib.unmsm.edu.pe/archivos/documentos/recepcion_investigacion/guia_metadatos_complementarios.pdf"
							rel="noopener noreferrer">
							Guía de metadatos complementarios
						</a>
					</span>
				</div>
			</>
		);
	} else if (programa === 'doctorado') {
		contenido = (
			<>
				<ol className="mb-8">
					<li>
						Adjuntar los siguientes archivos en formato (PDF):
						<ul>
							<li>
								<p className="ml-2">
									Formato de verificación e indexación de la
									revista
								</p>
							</li>
							<li>
								<p className="ml-2">
									Tesis: nombra al archivo PDF de la siguiente
									manera: <b>T001_N.° DNI_D</b> (ej.:
									T001_12345678_D)
								</p>
							</li>
							<li>
								<p className="ml-2">
									<a
										href="https://docs.google.com/document/d/1Lcr5xahpjaA4z_CNXf-M2jzBdEhTqcIa/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
										target="_blank"
										rel="noopener noreferrer">
										Hoja de metadatos complementarios
									</a>
								</p>
							</li>
							<li>
								<p className="ml-2">
									<a
										href="https://docs.google.com/document/d/1drgO3s1F4BHg2UWUNPloJgyZsSLHBRMv/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
										target="_blank"
										rel="noopener noreferrer">
										Formulario de autorización para depósito
										de obra en Cybertesis
									</a>
								</p>
							</li>
							<li>
								<p className="ml-2">
									Una (01) foto digital (
									<a
										href="https://drive.google.com/file/d/1m6sptfntYV1CfAEO0eIKicoerl6YF9Iz/view?usp=sharing"
										target="_blank"
										rel="noopener noreferrer">
										ver especificaciones
									</a>
									)
								</p>
							</li>
						</ul>
					</li>
					<li>
						Adjuntar el artículo publicado, DOI y link del artículo.
					</li>
				</ol>
				<p className="mt-4">
					Los documentos serán presentados en archivos en formato PDF
					y deben ser enviados al correo:{' '}
					<a>upg.educacion@unmsm.edu.pe</a> con un{' '}
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=sharing"
						rel="noopener noreferrer">
						FUT
					</a>{' '}
					(Formato Único de Trámite).
				</p>
				<p>
					Aquí te brindamos la orientación para el llenado correcto de
					la información:
				</p>
				<div className="flex items-center space-x-2 mb-4">
					<LinkExtIcon className="fill-primary" />
					<span className="mr-2">
						<a
							target="_blank"
							href="https://sisbib.unmsm.edu.pe/archivos/documentos/recepcion_investigacion/Guia%20para%20el%20deposito%20a%20Cybertesis_Febrero%20(26-02-2021).pdf"
							rel="noopener noreferrer">
							Guía para el depósito en CYBERTESIS
						</a>
					</span>
				</div>
				<div className="flex items-center space-x-2">
					<LinkExtIcon className="fill-primary" />
					<span className="mr-2">
						<a
							target="_blank"
							href="https://sisbib.unmsm.edu.pe/archivos/documentos/recepcion_investigacion/guia_metadatos_complementarios.pdf"
							rel="noopener noreferrer">
							Guía de metadatos complementarios
						</a>
					</span>
				</div>
			</>
		);
	} else if (programa === 'segunda especialidad') {
		contenido = (
			<>
				<p>segunda especialidad</p>
			</>
		);
	}

	return (
		<div
			className={`transition-all duration-1000 transform mx-6 my-4 ${
				isOpen
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'
			}`}>
			{contenido}
		</div>
	);
};
