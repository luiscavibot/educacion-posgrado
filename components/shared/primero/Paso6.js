import React from 'react';
import LinkExtIcon from '../../../components/icons/LinkExtIcon';

export const Paso6 = ({ isOpen, programa }) => {
	return (
		<div
			className={`transition-all duration-1000 transform mx-6 my-4 ${
				isOpen
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'
			}`}>
			{programa ? (
				<>
					<p>
						Antes de empezar, considera tener listo los siguientes
						documentos:
					</p>
					<ul>
						<li>
							Formato de verificación e indexación de la revista
						</li>
						<li>
							Tesis: nombra al archivo PDF de la siguiente manera:
							<b> T001_N.° DNI_M</b> (ej.: T001_12345678_M)
						</li>
						<li>
							<a
								target="_blank"
								href="https://docs.google.com/document/d/1Lcr5xahpjaA4z_CNXf-M2jzBdEhTqcIa/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
								rel="noopener noreferrer">
								Hoja de metadatos complementarios 
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="https://docs.google.com/document/d/1drgO3s1F4BHg2UWUNPloJgyZsSLHBRMv/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
								rel="noopener noreferrer">
								Formulario de autorización para depósito de obra
								en Cybertesis
							</a>
						</li>
						<li>
							Informe de evaluación de originalidad (ver paso 4,
							inciso 4.1.)
						</li>
						<li>
							Una (01) foto digital (
							<a
								target="_blank"
								href="https://drive.google.com/file/d/1m6sptfntYV1CfAEO0eIKicoerl6YF9Iz/view?usp=sharing"
								rel="noopener noreferrer">
								ver especificaciones
							</a>
							)
						</li>
						<li>Artículo publicado</li>
					</ul>
					<p>
						Envía los archivos en formato PDF, junto al DOI y link
						del artículo al siguiente correo:{' '}
						<a>upg.educacion@unmsm.edu.pe</a> con un{' '}
						<a
							target="_blank"
							href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=share_link"
							rel="noopener noreferrer">
							FUT
						</a>
						.
					</p>
					<p>
						Aquí te brindamos la orientación para el llenado
						correcto de la información:
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
			) : (
				<>
					<p>
						Antes de empezar, considera tener listo los siguientes
						documentos:
					</p>
					<ul>
						<li>
							Formato de verificación e indexación de la revista
						</li>
						<li>
							Tesis: nombra al archivo PDF de la siguiente manera:
							<b> T001_N.° DNI_D</b> (ej.: T001_12345678_D)
						</li>
						<li>
							<a
								target="_blank"
								href="https://docs.google.com/document/d/1Lcr5xahpjaA4z_CNXf-M2jzBdEhTqcIa/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
								rel="noopener noreferrer">
								Hoja de metadatos complementarios 
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="https://docs.google.com/document/d/1drgO3s1F4BHg2UWUNPloJgyZsSLHBRMv/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
								rel="noopener noreferrer">
								Formulario de autorización para depósito de obra
								en Cybertesis
							</a>
						</li>
						<li>
							Informe de evaluación de originalidad (ver paso 4,
							inciso 4.1.)
						</li>
						<li>
							Una (01) foto digital (
							<a
								target="_blank"
								href="https://drive.google.com/file/d/1m6sptfntYV1CfAEO0eIKicoerl6YF9Iz/view?usp=sharing"
								rel="noopener noreferrer">
								ver especificaciones
							</a>
							)
						</li>
						<li>Artículo publicado</li>
					</ul>
					<p>
						Envía los archivos en formato PDF, junto al DOI y link
						del artículo al siguiente correo:{' '}
						<a>upg.educacion@unmsm.edu.pe</a> con un{' '}
						<a
							target="_blank"
							href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=share_link"
							rel="noopener noreferrer">
							FUT
						</a>
						.
					</p>
					<p>
						Aquí te brindamos la orientación para el llenado
						correcto de la información:
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
			)}
		</div>
	);
};
