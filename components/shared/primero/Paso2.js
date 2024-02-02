import React from 'react';
import Observacion from '../../../components/shared/Observacion';

export const Paso2 = ({ isOpen, programa }) => {
	let contenido;

	if (programa === 'maestria') {
		contenido = (
			<>
				<p>
					A continuación, te detallamos el listado de requisitos para
					presentar esta solicitud:
				</p>
				<ol>
					<li>
						Certificado de similitud de la evaluación de
						originalidad con firma y huella del asesor. Debe
						alcanzar un porcentaje menor o igual al 20% de
						similitud.
					</li>
					<li>
						Tesis revisada por el software detector de similitud de
						acuerdo a la Directiva de Originalidad y Similitud de
						Trabajos Académicos, de Investigación y Producción
						Intelectual de la UNMSM (
						<a
							target="_blank"
							href="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/directiva-de%20originalidad%20%202023%20%20f%20-1680040982586.pdf"
							rel="noopener noreferrer">
							ver Directiva
						</a>
						).
					</li>
					<li>
						Tesis completa al 100% (desde la carátula hasta los
						anexos) en pdf con la cual se ha obtenido la evaluación
						de originalidad del <b>punto 1</b>.
					</li>
					<li>
						Certificado original de suficiencia (escaneado por ambos
						lados) de un (01) idioma extranjero, preferentemente
						inglés o lengua nativa* (ingresantes desde el 2014-2 en
						adelante). Dicho certificado puede ser emitido por la{' '}
						<a
							href="https://posgrado.unmsm.edu.pe/examen-suficiencia/"
							target="_blank"
							rel="noopener noreferrer">
							Dirección General de Escuela Posgrado (DGEP)
						</a>{' '}
						o de la{' '}
						<a
							href="https://letras.unmsm.edu.pe/examenes-de-suficiencia/"
							target="_blank"
							rel="noopener noreferrer">
							Oficina de Examen de Suficiencia en Idiomas
						</a>{' '}
						de la FLCH.
					</li>
					<p>
						(*) Aplica solamente para los que se graduaron a partir
						de la emisión del{' '}
						<a
							target="_blank"
							href="https://posgrado.unmsm.edu.pe/reglamento/"
							rel="noopener noreferrer">
							Reglamento General de Estudios de Posgrado R.R. N.°
							04790-R-18
						</a>{' '}
						(expedido el 8 de agosto 2018), los que son de anterior
						reglamento no contempla Lengua Nativa.
					</p>
					<Observacion>
						El certificado de examen de suficiencia de idiomas debe
						tener una antigüedad no mayor de tres (3) años al
						momento de solicitar el expedito. Si en caso el
						certificado cuenta con más de tres (3) años de
						antigüedad se acogerá a la R. R. N.° 010464-2022-R, la
						cual es vigente hasta diciembre del 2023.
					</Observacion>
					<li className="mt-4">
						<b>Dos declaraciones juradas</b>:{' '}
						<a
							target="_blank"
							href="https://docs.google.com/document/d/15UrkT3UXKqbL59F79CJ5yz3A1VF6aoDK/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							no adeudar dinero
						</a>{' '}
						y  
						<a
							target="_blank"
							href="https://docs.google.com/document/d/1JsZjO7fPlEDD_ykGhhUvvgpTF_OXZZ3n/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							no adeudar libros y/o material bibliográfico
						</a>{' '}
						a la facultad y la universidad. Ten en cuenta registrar
						el nombre del programa correcto, dirección, calle o
						jirón.
					</li>
					<li>
						<b>
							Constancia de aceptación para la publicación del
							artículo científico
						</b>{' '}
						(ISSN, fecha de publicación, DOI), detallando lo
						siguiente:
						<div>
							<ul>
								<li>Título de la revista</li>
								<li>Año de publicación</li>
								<li>Número y fecha de la revista</li>
								<li>N.° de la página de publicación</li>
								<li>
									Número Internacional Normalizado de
									Publicaciones Seriadas o International
									Standard Serial Number (ISSN)
								</li>
								<li>
									Indicar la base de datos que se encuentra
									indexada
								</li>
								<li>El artículo en formato PDF</li>
							</ul>
							<p>
								En aplicación del Reglamento General de Estudios
								de Posgrado, artículo 65.° dice: “El graduando
								debe acreditar la publicación o la aceptación
								para publicación de un artículo original o
								primario sobre el tema de su tesis, en una
								revista de la especialidad indexada en Web of
								Science, Scopus, Scielo o en las revistas
								institucionales de investigación acreditadas por
								el Fondo Editorial de la UNMSM.”
							</p>
							<Observacion>
								El contenido de este artículo debe ser parte de
								la tesis. Además, los ingresantes hasta el 2008
								no presentan constancia de aceptación para la
								publicación del artículo científico.
							</Observacion>
						</div>
					</li>
					<li>
						<b>Copia del informe favorable del asesor/a</b> y tres{' '}
						<b>(3) fichas</b> de asesoría como mínimo.
					</li>
					<li>
						<a
							target="_blank"
							href="https://docs.google.com/document/d/1w4iDrb7IcV8NPUx0tTAHh94UPoAhPIzG/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							Declaración Jurada de Veracidad de Documentación
						</a>
					</li>
					<li>
						<a
							target="_blank"
							href="https://docs.google.com/document/d/15yuEBRFZDQ28fthj9SIVNYICUqNmsVAI/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							Formato de verificación de indexación de la revista
						</a>{' '}
						en Web of Science, Scopus, Scielo, Latindex Catálogo 2.0
						o en revistas institucionales de investigación
						acreditadas por el Fondo Editorial de la UNMSM. Este
						formato debe estar llenado todos los campos y contar con
						su publicación para la declaratoria de expedito. El
						envío es en documento Word{' '}
						<b>
							(solo para aquellos que ingresaron a partir del
							2009)
						</b>
						.
						<Observacion>
							Para el caso de los graduados extranjeros, deberán
							adjuntar la resolución de reconocimiento de Grado (
							<a
								href="https://educacion.unmsm.edu.pe/comunicados/42"
								target="_blank"
								rel="noopener noreferrer">
								ver comunicado
							</a>
							).
						</Observacion>
					</li>
				</ol>
				<p>
					Presenta todos los requisitos detallados anteriormente en
					formato PDF, a excepción del formato de verificación de
					indexación de revista (word), con el nombre de cada
					requisito. Envíalos a través del{' '}
					<a
						target="_blank"
						href="https://tramiteonline.unmsm.edu.pe/sgdfd/mat/"
						rel="noopener noreferrer">
						MAT{' '}
					</a>{' '}
					mediante un{' '}
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=sharing"
						rel="noopener noreferrer">
						FUT
					</a>{' '}
					, colocando en el asunto:{' '}
					<b>Declaratoria de expedito y jurados informantes</b>.
				</p>
			</>
		);
	} else if (programa === 'doctorado') {
		contenido = (
			<>
				<p>
					A continuación, te detallamos el listado de requisitos para
					presentar esta solicitud:
				</p>
				<ol>
					<li>
						Certificado de similitud de la evaluación de
						originalidad con firma y huella del asesor. Debe
						alcanzar un porcentaje menor o igual al 20% de
						similitud.
					</li>
					<li>
						Tesis revisada por el software detector de similitud de
						acuerdo a la Directiva de Originalidad y Similitud de
						Trabajos Académicos, de Investigación y Producción
						Intelectual de la UNMSM (
						<a
							target="_blank"
							href="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/directiva-de%20originalidad%20%202023%20%20f%20-1680040982586.pdf"
							rel="noopener noreferrer">
							ver Directiva
						</a>
						).
					</li>
					<li>
						Tesis completa al 100% (desde la carátula hasta los
						anexos) en pdf con la cual se ha obtenido la evaluación
						de originalidad del <b>punto 1</b>.
					</li>
					<li>
						Certificado original de suficiencia (escaneado por ambos
						lados) de dos (02) idioma extranjero, uno de ellos
						inglés. Un idioma puede ser reemplazado por la
						certificación del dominio de una lengua nativa*
						(ingresantes desde el 2014-2 en adelante). Dicho
						certificado puede ser emitido por la{' '}
						<b>Dirección General de Escuela Posgrado (DGEP)</b> o de
						la <b>Oficina de Examen de Suficiencia en Idiomas</b> de
						la FLCH.
					</li>
					<p>
						(*) Aplica solamente para los que se graduaron luego de
						la emisión del{' '}
						<a
							target="_blank"
							href="https://posgrado.unmsm.edu.pe/reglamento/"
							rel="noopener noreferrer">
							Reglamento General de Estudios de Posgrado R.R. N.°
							04790-R-18
						</a>{' '}
						(expedido el 8 de agosto 2018), los que son de anterior
						reglamento no contempla Lengua Nativa.
					</p>
					<Observacion>
						El certificado de examen de suficiencia de idiomas debe
						tener una antigüedad no mayor de tres (3) años al
						momento de solicitar el expedito. Si en caso el
						certificado cuenta con más de tres (3) años de
						antigüedad se acogerá a la R. R. N.° 010464-2022-R, la
						cual es vigente hasta diciembre del 2023.
					</Observacion>
					<li className="mt-4">
						<b>Dos declaraciones juradas</b>:{' '}
						<a
							target="_blank"
							href="https://docs.google.com/document/d/15UrkT3UXKqbL59F79CJ5yz3A1VF6aoDK/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							no adeudar dinero
						</a>{' '}
						y  
						<a
							target="_blank"
							href="https://docs.google.com/document/d/1JsZjO7fPlEDD_ykGhhUvvgpTF_OXZZ3n/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							no adeudar libros y/o material bibliográfico
						</a>{' '}
						a la facultad y la universidad. Ten en cuenta registrar
						el nombre del programa correcto, dirección, calle o
						jirón.
					</li>
					<li>
						<b>
							Constancia de aceptación para la publicación del
							artículo científico
						</b>{' '}
						(ISSN, fecha de publicación, DOI), detallando lo
						siguiente:
						<div>
							<ul>
								<li>Título de la revista</li>
								<li>Año de publicación</li>
								<li>Número y fecha de la revista</li>
								<li>N.° de la página de publicación</li>
								<li>
									Número Internacional Normalizado de
									Publicaciones Seriadas o International
									Standard Serial Number (ISSN)
								</li>
								<li>
									Menciona la base de datos que se encuentra
									indexada
								</li>
								<li>El artículo en formato PDF</li>
							</ul>
							<p>
								En aplicación del Reglamento General de Estudios
								de Posgrado, artículo 65.° dice: “El graduando
								debe acreditar la publicación o la aceptación
								para publicación de un artículo original o
								primario sobre el tema de su tesis, en una
								revista de la especialidad indexada en Web of
								Science, Scopus, Scielo o en las revistas
								institucionales de investigación acreditadas por
								el Fondo Editorial de la UNMSM.”
							</p>
							<Observacion>
								El contenido de este artículo debe ser parte de
								la tesis. Además, los ingresantes hasta el 2008
								no presentan constancia de aceptación para la
								publicación del artículo científico.
							</Observacion>
						</div>
					</li>
					<li>
						<b>Copia del informe favorable del asesor/a</b> y tres{' '}
						<b>(3) fichas</b> de asesoría como mínimo.
					</li>
					<li>
						<a
							target="_blank"
							href="https://docs.google.com/document/d/1w4iDrb7IcV8NPUx0tTAHh94UPoAhPIzG/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							Declaración Jurada de Veracidad de Documentación
						</a>
						.
					</li>
					<li>
						<a
							target="_blank"
							href="https://docs.google.com/document/d/15yuEBRFZDQ28fthj9SIVNYICUqNmsVAI/edit?usp=sharing&ouid=108447217911636332338&rtpof=true&sd=true"
							rel="noopener noreferrer">
							Formato de verificación de indexación de la revista
						</a>{' '}
						en Web of Science, Scopus, Scielo, Latindex Catálogo 2.0
						o en revistas institucionales de investigación
						acreditadas por el Fondo Editorial de la UNMSM. Este
						formato debe estar llenado todos los campos y contar con
						su publicación para la declaratoria de expedito. El
						envío es en documento Word{' '}
						<b>
							(solo para aquellos que ingresaron a partir del
							2009)
						</b>
						.
						<Observacion>
							Para el caso de los graduados extranjeros, deberán
							adjuntar la resolución de reconocimiento de Grado (
							<a
								href="https://educacion.unmsm.edu.pe/comunicados/42"
								target="_blank"
								rel="noopener noreferrer">
								ver comunicado
							</a>
							).
						</Observacion>
					</li>
				</ol>
				<p>
					Presenta todos los requisitos detallados anteriormente en
					formato PDF, a excepción del formato de verificación de
					indexación de revista que se debe adjuntar en formato word,
					con el nombre de cada requisito. Envíalos a través del{' '}
					<a
						target="_blank"
						href="https://tramiteonline.unmsm.edu.pe/sgdfd/mat/"
						rel="noopener noreferrer">
						MAT{' '}
					</a>{' '}
					mediante un{' '}
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=sharing"
						rel="noopener noreferrer">
						FUT
					</a>{' '}
					, colocando en el asunto:{' '}
					<b>Declaratoria de expedito y jurados informantes</b>.
				</p>
			</>
		);
	} else if (programa === 'segunda especialidad') {
		contenido = (
			<>
				<p>
					A continuación, te detallamos el listado de requisitos para
					presentar esta solicitud:
				</p>
				<ol>
					<li>
						Certificado de similitud de la evaluación de
						originalidad con firma y huella del asesor. Debe
						alcanzar un porcentaje menor o igual al 20% de
						similitud.
					</li>
					<li>
						Tesis revisada por el software detector de similitud de
						acuerdo a la Directiva de Originalidad y Similitud de
						Trabajos Académicos, de Investigación y Producción
						Intelectual de la UNMSM (
						<a
							href="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/directiva-de%20originalidad%20%202023%20%20f%20-1680040982586.pdf"
							target="_blank"
							rel="noopener noreferrer">
							ver Directiva
						</a>
						).
					</li>
					<li>
						Tesis completa al 100% (desde la carátula hasta los
						anexos) en pdf con la cual se ha obtenido la evaluación
						de originalidad del <b>punto 1</b>.
					</li>
					<li>
						Adjuntar recibos de pagos por derecho de TÍTULO DE
						SEGUNDA ESPECIALIDAD, efectuados en el Banco Pichincha.
						Aquí te dejamos los datos correspondientes:
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
							<td>201-202</td>
							<td>
								Expedición del Título de Segunda Especialidad
							</td>
							<td>S/ 600.00</td>
						</tr>
						<tr>
							<td>061-202</td>
							<td>
								Otorgamiento del Título de Segunda Especialidad
							</td>
							<td>S/ 600.00</td>
						</tr>
					</tbody>
				</table>
				<p className="mt-4">
					Presenta los documentos en archivos PDF y envíalos al correo{' '}
					<a>upg.educacion@unmsm.edu.pe</a> con un{' '}
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=sharing"
						rel="noopener noreferrer">
						FUT
					</a>
					.
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
