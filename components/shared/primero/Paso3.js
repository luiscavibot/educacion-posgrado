import React from 'react';
import LinkExtIcon from '../../../components/icons/LinkExtIcon';

export const Paso3 = ({ isOpen, programa }) => {
	let contenido;

	if (programa === 'maestria') {
		contenido = (
			<>
				<p>
					A continuación, te enlistamos los requisitos necesarios para
					esta solicitud:
				</p>
				<ol>
					<li>
						Archivo de la tesis en PDF y en Word con los informes de
						los jurados informantes.
					</li>
					<li>
						Adjuntar recibos de pagos por derecho de GRADO DE
						MAGÍSTER.
					</li>
				</ol>
				<table>
					<thead>
						<tr>
							<th>N.° de cuenta</th>
							<th>Concepto</th>
							<th>Monto</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Banco Pichincha: 201-202</td>
							<td>
								Expedición del Diploma Académico de MAGÍSTER
							</td>
							<td>S/ 700.00</td>
						</tr>
						<tr>
							<td>Banco BCP: 061-202</td>
							<td>
								Otorgamiento de grado de magíster - Facultad
							</td>
							<td>S/ 1 555.00</td>
						</tr>
					</tbody>
				</table>
				<p className="mt-4">
					Los documentos serán presentados en archivos en formato PDF
					y deben ser enviados al correo
					<a> upg.educacion@unmsm.edu.pe</a> con un{' '}
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=sharing"
						rel="noopener noreferrer"
					>
						FUT
					</a>
					(Formato Único de Trámite) .
				</p>
			</>
		);
	} else if (programa === 'doctorado') {
		contenido = (
			<>
				<p>
					A continuación, te enlistamos los requisitos necesarios para
					esta solicitud:
				</p>
				<ol>
					<li>
						Archivo de la tesis en PDF y en Word con los informes de
						los jurados informantes
					</li>
					<li>
						Adjuntar recibos de pagos por derecho de GRADO DE
						DOCTOR:
					</li>
				</ol>
				<table>
					<thead>
						<tr>
							<th>N.° de cuenta</th>
							<th>Concepto</th>
							<th>Monto</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Banco Pichincha: 201-203</td>
							<td>Expedición del Diploma Académico de Doctor</td>
							<td>S/ 1 200.00</td>
						</tr>
						<tr>
							<td>Banco BCP: 061-203</td>
							<td>Otorgamiento de grado de doctor - Facultad</td>
							<td>S/ 2 995.00</td>
						</tr>
					</tbody>
				</table>
				<p className="mt-4">
					Los documentos serán presentados en archivos en formato PDF
					y deben ser enviados al correo
					<a> upg.educacion@unmsm.edu.pe</a> con un{' '}
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=sharing"
						rel="noopener noreferrer"
					>
						FUT
					</a>
					(Formato Único de Trámite) .
				</p>
			</>
		);
	} else if (programa === 'segunda especialidad') {
		contenido = (
			<>
				<ol className="mb-8">
					<li>
						Adjuntar los siguientes archivos en formato (PDF):
						<ul>
							<li>
								<p className="ml-2">
									Trabajo académico en PDF, grabado de la
									siguiente manera: <b>T001_N.° DNI_S</b>{' '}
									(ej.: T001_12345678_S)
								</p>
							</li>
							<li>
								<p className="ml-2">Certificado de similitud</p>
							</li>
							<li>
								<p className="ml-2">
									Declaración jurada de{' '}
									<a
										href="https://docs.google.com/document/d/15UrkT3UXKqbL59F79CJ5yz3A1VF6aoDK/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
										target="_blank"
										rel="noopener noreferrer"
									>
										no adeudar dinero
									</a>{' '}
									y{' '}
									<a
										href="https://docs.google.com/document/d/1JsZjO7fPlEDD_ykGhhUvvgpTF_OXZZ3n/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
										target="_blank"
										rel="noopener noreferrer"
									>
										no adeudar libros y/o material
										bibliográfico
									</a>{' '}
									a la facultad y la universidad. Ten en
									cuenta registrar el nombre del programa
									correcto, dirección, calle o jirón.
								</p>
							</li>
							<li>
								<p className="ml-2">
									<a
										// href="https://docs.google.com/document/d/1drgO3s1F4BHg2UWUNPloJgyZsSLHBRMv/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
										target="_blank"
										rel="noopener noreferrer"
									>
										Declaración Jurada de Veracidad de
										Documentación
									</a>
								</p>
							</li>
							<li>
								<p className="ml-2">
									Foto digital (
									<a
										// href="https://drive.google.com/file/d/1m6sptfntYV1CfAEO0eIKicoerl6YF9Iz/view?usp=sharing"
										target="_blank"
										rel="noopener noreferrer"
									>
										ver especificaciones
									</a>
									)
								</p>
							</li>
						</ul>
					</li>
					{/* <li>
						Adjuntar el artículo publicado, DOI y link del artículo.
					</li> */}
				</ol>
				<p className="mt-4">
					Los documentos serán presentados en archivos en formato PDF
					y deben ser enviados al correo:{' '}
					<a>upg.educacion@unmsm.edu.pe</a> con un{' '}
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=sharing"
						rel="noopener noreferrer"
					>
						FUT
					</a>{' '}
					(Formato Único de Trámite).
				</p>
				{/* <p>
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
				</div> */}
			</>
		);
	}

	return (
		<div
			className={`transition-all duration-1000 transform mx-6 my-4 ${
				isOpen
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'
			}`}
		>
			{contenido}
		</div>
	);
};
