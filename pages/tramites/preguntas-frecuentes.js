import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';
import { BiTimeFive } from 'react-icons/bi';
import Boton from '../../components/shared/Boton';
import { useRouter } from 'next/router';
import { BASE_URL, SLUG_CARRERA } from '../../config/consts';
import { getFecha } from '../../helpers/getFecha';
import Cargando from '../../components/resultados/Cargando';
import CompartirIcon from '../../components/icons/CompartirIcon';
import CorreoIcon from '../../components/icons/CorreoIcon';
import TelefonoIcon from '../../components/icons/TelefonoIcon';
import DescripcionIcon from '../../components/icons/DescripcionIcon';
import DiriridaaIcon from '../../components/icons/DiriridaaIcon';
import FechaLimiteIcon from '../../components/icons/FechaLimiteIcon';

import { UltimasNoticias } from '../../components/shared/programas/UltimasNoticias';
import DocumentosFillIcon from '../../components/icons/DocumentosFillIcon';
import Observacion from '../../components/shared/Observacion';
// import useUltimasNoticias from '../../hooks/useUltimasNoticias';

import { Accordion, Icon } from 'semantic-ui-react';

const PreguntasFrecuentes = ({ ultimasNoticias }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const newIndex = activeIndex === index ? -1 : index;

		setActiveIndex(newIndex);
	};

	return (
		<PrincipalLayout>
			<>
				<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
					<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/tramites">
							<a>Trámites</a>
						</Link>
					</li>
					<li className="text-textColorOne font-bold inline">
						Preguntas Frecuentes
					</li>
				</ul>

				<div className="mx-4 md:mx-0 col-span-10 mb-4">
					<div className="title-page mb-4">Preguntas Frecuentes</div>
				</div>

				<div className="mx-4 md:mx-0 col-span-full lg:col-span-10 mb-4">
					<div className="preguntas-wrapper">
						<Accordion>
							<Accordion.Title
								active={activeIndex === 0}
								index={0}
								onClick={handleClick}
							>
								¿Cuál es el costo de la pre maestría y dónde me
								inscribo?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 0}>
								<p>
									La Unidad de Posgrado de la Facultad de
									Ciencias Administrativas (UPG-FCA) no ofrece
									el programa de pre maestría.
								</p>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 1}
								index={1}
								onClick={handleClick}
							>
								¿Qué debo hacer si en la página web de la
								UPG-FCA no encuentro información actual?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 1}>
								<p>
									Envíe un correo al Área de Admisión{' '}
									<span className="break-all font-bold">
										(upg.educacion@unmsm.edu.pe)
									</span>{' '}
									detallando la información que necesita.
								</p>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 2}
								index={2}
								onClick={handleClick}
							>
								¿Puedo postular a algún programa de la UPG-FCA
								si no soy egresado de administración?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 2}>
								<p>
									Sí, el proceso de admisión se encuentra
									abierto a todas las profesiones.
								</p>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 3}
								index={3}
								onClick={handleClick}
							>
								¿Cuáles son los requisitos, costos y cronograma
								del proceso de admisión?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 3}>
								<p>
									Dirija su consulta al correo del Área de
									Admisión{' '}
									<span className="break-all font-bold">
										(upg.educacion@unmsm.edu.pe)
									</span>{' '}
									o ingrese a la sección de{' '}
									<Link href="/admision?programa=maestria">
										<a className="link">maestría</a>
									</Link>{' '}
									o{' '}
									<Link href="/admision?programa=doctorado">
										<a className="link">doctorado</a>
									</Link>{' '}
									según su interés.
								</p>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 4}
								index={4}
								onClick={handleClick}
							>
								¿Cómo puedo realizar un trámite en el Módulo de
								Atención de Trámites (MAT)?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 4}>
								<p>
									Guíese del siguiente videotutorial que le
									brindará las pautas para utilizar el MAT:{' '}
									<a
										href="https://quipucamayoc.unmsm.edu.pe/videotutoriales/paginahtml2.html"
										target="_blank"
										className="link"
										rel="noopener noreferrer"
									>
										https://quipucamayoc.unmsm.edu.pe/videotutoriales/paginahtml2.html
									</a>
								</p>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 5}
								index={5}
								onClick={handleClick}
							>
								¿Cómo puedo recuperar mi usuario y contraseña
								para ingresar al MAT?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 5}>
								<p>
									Comuníquese al correo{' '}
									<span className="font-bold">
										soporte.correo@unmsm.edu.pe
									</span>{' '}
									o revise el siguiente videotutorial{' '}
									<a
										href="https://youtu.be/PGyecUIp2iE"
										target="_blank"
										className="link"
										rel="noopener noreferrer"
									>
										https://youtu.be/PGyecUIp2iE
									</a>
								</p>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 6}
								index={6}
								onClick={handleClick}
							>
								¿Cuántas etapas tiene el proceso de obtención de
								grado?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 6}>
								<p className="mb-2">Son 5 etapas:</p>
								<ol>
									<li>
										Asignación de asesor y aprobación de
										proyecto de tesis.
									</li>
									<li>Designación de jurados informantes.</li>
									<li>Declaratoria de expedito</li>
									<li>Evaluación de originalidad</li>
									<li>Sustentación</li>
								</ol>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 7}
								index={7}
								onClick={handleClick}
							>
								¿Puedo sugerir un asesor?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 7}>
								<p>
									Usted puede sugerir un docente de la
									Facultad de Educación (FCA) con el que
									previamente haya conversado para que sea su
									asesor. En caso de no proponer a ningún
									docente, puede omitirse esta parte y la UPG
									le asignará un docente asesor según su tema
									de proyecto de tesis.
								</p>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 8}
								index={8}
								onClick={handleClick}
							>
								¿Cuánto tiempo tengo para poder sustentar?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 8}>
								<p>
									Si usted ingresó antes del semestre 2018-II,
									el plazo de vencimiento es de 8 años
									contados desde la fecha de ingreso. Si usted
									ingresó después del semestre 2018-II, el
									plazo de vencimiento es de 4 años contados
									desde la fecha de ingreso.
								</p>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 9}
								index={9}
								onClick={handleClick}
							>
								¿Qué sucede si no realicé el proceso de
								obtención de grado dentro del plazo indicado?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 9}>
								<p>
									Debe realizar el proceso llamado Registro de
									tesis en el Sistema Único de Matrícula (SUM)
									el cual mantiene la vigencia de la maestría
									o doctorado. Se realiza durante cada ciclo
									hasta la fecha de sustentación.
								</p>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 10}
								index={10}
								onClick={handleClick}
							>
								¿Cuál es el nivel de idioma aceptado para
								obtener el grado?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 10}>
								<p>
									Se acepta desde el nivel básico con una nota
									mínima 12. Validez del certificado: 3 años
									Debe presentar la constancia de examen de
									suficiencia, la cual se puede tramitar con
									la Unidad de Idiomas de Posgrado{' '}
									<span className="font-bold">
										(idiomas.posgrado@unmsm.edu.pe)
									</span>{' '}
									o con la Facultad de Letras y Ciencias
									Humanas{' '}
									<span className="font-bold">
										(examensuficiencia.flch@unmsm.edu.pe)
									</span>
								</p>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 11}
								index={11}
								onClick={handleClick}
							>
								¿Todos los tesistas deben presentar un artículo
								científico?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 11}>
								<p>
									No, solo aquellos que ingresaron desde el
									año 2009 hacia adelante. Este requisito se
									presenta en la tercera etapa (declaratoria
									de expedito) del proceso de obtención de
									grado. Debe presentar una constancia de
									acreditar la publicación o la aceptación
									para publicación de un artículo original o
									primario referido al tema de su tesis, en
									una revista de la especialidad indexada en
									Web of Science, Scopus, Scielo, Latindex
									Catalogo 2.0 ó en las revistas
									institucionales de investigación acreditadas
									por el Fondo Editorial de la UNMSM.
								</p>
							</Accordion.Content>

							<Accordion.Title
								active={activeIndex === 12}
								index={12}
								onClick={handleClick}
							>
								¿Cómo puedo acceder a los recursos de la
								Biblioteca Central de la UNMSM y la Biblioteca
								de la FCA?
								<Icon name="dropdown" />
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 12}>
								<p>
									En el caso de la Biblioteca Central,
									comunicarse al correo{' '}
									<span className="font-bold">
										recepciontesis.dsbbc@unmsm.edu.pe
									</span>
									; con respecto a la Biblioteca de la FCA,
									enviar un correo al{' '}
									<span className="font-bold">
										lingam@unmsm.edu.pe
									</span>{' '}
									para solicitar el acceso a la persona
									encargada, Leonel Antonio Inga.
								</p>
							</Accordion.Content>
						</Accordion>
					</div>
				</div>

				<div className="mx-4 md:mx-0 col-span-full lg:col-span-2 mb-5">
					<Observacion>
						<p className="mb-1 text-sm">
							Si tienes consultas sobre tu{' '}
							<span className="font-bold">Estado de cuenta</span>,
							envíanos un mensaje al siguiente correo:
						</p>
						<p className="break-all text-xs text-primary font-bold">
							cobranzas.administracion@unmsm.edu.pe
						</p>
					</Observacion>
				</div>
			</>

			{/* <UltimasNoticias ultimasNoticias={ultimasNoticias} /> */}
		</PrincipalLayout>
	);
};

export default PreguntasFrecuentes;
