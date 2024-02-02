import React, { useState } from 'react';
import Observacion from '../../../components/shared/Observacion';

export const Paso1 = ({ isOpen, programa }) => {
	let contenido;

	if (programa === 'maestria') {
		contenido = (
			<>
				<p>
					Antes de iniciar la inscripción, considera tener listo los
					siguientes documentos:
				</p>
				<ul>
					<li>Proyecto de tesis</li>
					<li>
						<a
							target="_blank"
							href="https://docs.google.com/document/d/1YCmirH000jUf43aAl9jAuXLkGK-fZAGO/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							Ficha de inscripción
						</a>{' '}
						debidamente llenada con fotografía y{' '}
						<a
							target="_blank"
							href="https://docs.google.com/document/d/1qFtTdVtfV9l_9eb7gjMGhEzpdPv1L_rp/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							declaración jurada
						</a>
					</li>
					<li>
						DNI y partida de nacimiento escaneados por ambos lados
					</li>
					<li>
						<a
							target="_blank"
							href="https://enlinea.sunedu.gob.pe/"
							rel="noopener noreferrer">
							Ficha de registro SUNEDU{' '}
						</a>
						del grado de Bachiller
					</li>
				</ul>
				<p>
					Luego, los documentos serán presentados en PDF y deben ser
					enviados a través del{' '}
					<a
						target="_blank"
						href="https://tramiteonline.unmsm.edu.pe/sgdfd/mat/"
						rel="noopener noreferrer">
						MAT{' '}
					</a>
					mediante un{' '}
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=share_link"
						rel="noopener noreferrer">
						FUT
					</a>{' '}
					, e indicar en el asunto de la solicitud:{' '}
					<b>
						Inscripción del proyecto de tesis y nombramiento de
						asesor
					</b>
					.
				</p>
				<Observacion>
					Considera que durante el proceso de asesoría de tesis, se
					debe llenar completamente todos los campos de mínimo{' '}
					<a
						target="_blank"
						href="https://drive.google.com/drive/folders/1hKfpNpbSFj_PFbgRWH4iQkfZfkQPxbMO"
						rel="noopener noreferrer">
						3 fichas
					</a>{' '}
					y presentarlas en el{' '}
					<b>Paso 2: declaratoria de expedito.</b>
				</Observacion>
			</>
		);
	} else if (programa === 'doctorado') {
		contenido = (
			<>
				<p>
					Antes de iniciar la inscripción, considera tener listo los
					siguientes documentos:
				</p>
				<ul>
					<li>Proyecto de tesis</li>
					<li>
						<a
							target="_blank"
							href="https://docs.google.com/document/d/1zUHVJL0MoXKi5jF07L3zeFz2a0NZnueF/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							Ficha de inscripción
						</a>{' '}
						con fotografía y{' '}
						<a
							target="_blank"
							href="https://docs.google.com/document/d/1mS4d39ADx3jDz-eKXzsWkfA1wI6NKIpM/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							declaración jurada
						</a>{' '}
						debidamente llenada
					</li>
					<li>DNI y partida de nacimiento</li>
					<li>
						<a
							target="_blank"
							href="https://enlinea.sunedu.gob.pe/"
							rel="noopener noreferrer">
							Ficha de registro SUNEDU{' '}
						</a>
						del grado de Magister
					</li>
				</ul>
				<p>
					Luego, los documentos serán presentados en PDF y deben ser
					enviados a través del{' '}
					<a
						target="_blank"
						href="https://tramiteonline.unmsm.edu.pe/sgdfd/mat/"
						rel="noopener noreferrer">
						MAT{' '}
					</a>
					mediante un{' '}
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=share_link"
						rel="noopener noreferrer">
						FUT
					</a>{' '}
					, e indicar en el asunto de la solicitud:{' '}
					<b>
						Inscripción del proyecto de tesis y nombramiento de
						asesor
					</b>
					.
				</p>
				<Observacion>
					Considera que durante el proceso de asesoría de tesis, se
					debe llenar completamente todos los campos de mínimo{' '}
					<a
						target="_blank"
						href="https://drive.google.com/drive/folders/1Zm-aNrLHQiJfU0GxIni8Yf2X1Z0g78mk"
						rel="noopener noreferrer">
						3 fichas
					</a>{' '}
					y presentarlas en el{' '}
					<b>Paso 2: declaratoria de expedito.</b>
				</Observacion>
			</>
		);
	} else if (programa === 'segunda especialidad') {
		contenido = (
			<>
				<p>Considera tener listo los siguientes documentos:</p>
				<ul>
					<li>Archivo trabajo académico</li>
					<li>
						Título Universitario escaneado por ambos lados en PDF.
					</li>
					<li>
						<a
							target="_blank"
							href="https://docs.google.com/document/d/1ODJK9Jds-dl4CN-B2AnN4RDf4nMaShrC/edit?usp=share_link&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							Ficha de inscripción
						</a>{' '}
						y{' '}
						<a
							target="_blank"
							href="https://docs.google.com/document/d/1GwasV3CF81Osi4szbj8rvHh1URl13upc/edit?usp=share_link&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							declaración jurada
						</a>{' '}
						debidamente llenadas
					</li>
					<li>DNI y partida de nacimiento</li>
					<li>
						<a
							target="_blank"
							href="https://enlinea.sunedu.gob.pe/"
							rel="noopener noreferrer">
							Ficha de registro SUNEDU{' '}
						</a>
						del título universitario obtenido
					</li>
				</ul>
				<p>
					Luego, deberás enviarlos a través del{' '}
					<a
						target="_blank"
						href="https://tramiteonline.unmsm.edu.pe/sgdfd/mat/"
						rel="noopener noreferrer">
						MAT{' '}
					</a>
					mediante un{' '}
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=share_link"
						rel="noopener noreferrer">
						FUT
					</a>{' '}
					agrupándolos en dos archivos en formatos PDF:
				</p>
				<ol>
					<li>Trabajo académico</li>
					<li>
						Requisitos (ficha de inscripción, declaración jurada,
						DNI, partida de nacimiento y ficha de registro SUNEDU)
					</li>
				</ol>
				<p>
					*Recuerda indicar en el asunto de la solicitud:{' '}
					<b>
						Inscripción del trabajo académico y nombramiento de
						asesor para segunda especialidad
					</b>
					.
				</p>
				<Observacion className="mb-3">
					Considera que durante el proceso de asesoría de tesis, se
					debe llenar completamente todos los campos de mínimo{' '}
					<a
						target="_blank"
						href="https://drive.google.com/drive/folders/1b29Fwx7scvGaBGCpz7HrKlF5uKfPVDYa?usp=share_link"
						rel="noopener noreferrer">
						3 fichas
					</a>{' '}
					y presentarlas para el <b>Paso 2.</b>
				</Observacion>
				<p>
					Una vez entregado el Dictamen de Inscripción del trabajo
					Académico y el Dictamen de Asesor, ambos documentos deberán
					ser enviados al correo, mediante un FUT dirigido al Director
					de UPG para ser registrados en el sistema SUM (correo:{' '}
					<span className="break-words font-bold">
						registroyrenovaciontesis.fe@unmsm.edu.pe
					</span>
					)
				</p>
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
