import React from 'react';
import Image from 'next/future/image';

import directorPic from '../../../public/img/examples/dir-pregrado-small.png';
import UserCardIcon from '../../icons/UserCardIcon';
import CorreoIcon from '../../icons/CorreoIcon';
import TelefonoStroke from '../../icons/TelefonoStroke';
import UbicacionStroke from '../../icons/UbicacionStroke';
import FechaHorarioStroke from '../../icons/FechaHorarioStroke';
import DocumentosFillIcon from '../../icons/DocumentosFillIcon';
import Boton from '../../shared/Boton';
import Separator from '../../shared/Separator';

const DepartamentosAcademicos = () => {
	return (
		<>
			<p className="mb-8 col-span-full text-textColorTwo">
				Son los órganos de apoyo académico de la facultad y tienen como
				finalidad de mejorar las estrategias pedagógicas y preparar los
				sílabos, así como de designar a los docentes responsables de las
				asignaturas, de acuerdo con el perfil académico solicitado a
				requerimiento de Estudios Generales, Escuelas Profesionales y
				Unidad de Posgrado. Además, propone la creación de plazas de
				docentes para la contratación y nombramiento, así como de jefes
				de práctica y ayudantes de cátedra o laboratorio. Cada
				Departamento se integra a una facultad, sin perjuicio de su
				función de brindar servicios a otras facultades. Está conformado
				por el/la director/a y el comité del departamento académico.
				Conoce más acerca de esta Dirección ingresando al Manual de
				Organización y Funciones (
				<a
					className="link"
					href="https://cdn.www.gob.pe/uploads/document/file/1979591/MOF%20de%20la%20Facultad%20de%20Qu%C3%ADmica%20e%20Ingenier%C3%ADa%20Qu%C3%ADmica..pdf?v=1624896516"
					target="_blank"
					rel="noopener noreferrer">
					MOF
				</a>
				).
			</p>
			<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
				<div className="md:col-span-6">
					<div className="mb-6">
						<p className="text-tertiary font-bold mb-5">
							Departamento Académico de Procesos
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Mg. Leoncio Reyna Mariñas
							</span>
						</p>
						{/* <p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal, investigador y consultor
							ambiental
							<br />
							Licenciado en Ingeniería Química por la UNMSM,
							magíster en Ingeniería Química con especialidad en
							Bioingeniería y Ciencias Ambientales por la UNMSM y
							doctorado en Medio Ambiente y Desarrollo Sostenible
							por la UNFV.
						</p> */}
						{/* <p className="mb-5">
							Cuenta con más de 20 años de experiencia en docencia
							universitaria de posgrado en instituciones públicas
							como en la Universidad Nacional José Faustino
							Sánchez Carrión, Universidad Nacional San Luis
							Gonzaga de Ica, Universidad Nacional del Centro del
							Perú, Universidad Nacional de Ingeniería y la UNMSM.
							Se ha desempeñado como coordinador del Programa
							Iberoamericano de Ciencia y Tecnología para el
							Desarrollo, director del Instituto de Investigación
							de Ingeniería Química y coordinador del Departamento
							de Procesos.
						</p>
						<p className="mb-6">
							Ha realizado más de 20 investigaciones sobre la
							línea de intercambiadores de calor, tratamiento de
							residuos, estudio de la interacción química y
							bactericida, entre otros; proyectos de
							investigación, donde el último desarrollado el 2020
							se enfocó en la aplicación de ozono para incrementar
							la conservación de carnes de pollo; y fue asesor en
							más de 20 tesis para grados de maestría y doctorado.
							Además, ha recibido distinciones a nivel nacional
							por la UNMSM y a nivel internacional en Estados
							Unidos por The OAS Summit of Engineering for the
							Americas.
						</p> */}
						<div className="flex gap-x-5 mt-6">
							<a
								className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://www.gob.pe/institucion/unmsm/normas-legales/4252942-resolucion-rectoral-n-005230-2023-r"
								target={'_blank'}
								rel="noopener noreferrer">
								<span className="flex items-center justify-center">
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-complementaryOne" />
									Resolución rectoral
								</span>
							</a>
							<Boton
								secondary
								className="mb-6 text-primary"
								onClick={() =>
									window.open(
										'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=95716'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-1 fill-primary" />
								</span>
								<span>Hoja de vida</span>
							</Boton>
						</div>
					</div>
				</div>
				<div className="md:col-span-2">
					{/* <div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/dir-dept-procesos-raymundo-erazo.jpg"
							width={209}
							height={224}
							quality={100}
							className="w-full object-cover max-w-[254px] m-auto"
						/>
					</div> */}

					<p className="text-tertiary font-black mb-2">Contacto</p>
					<div className="text-sm">
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<CorreoIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Correo</span>
							</p>
							<p className="mb-3 break-words">
								lreynam@unmsm.edu.pe /
								procesos.quimica@unmsm.edu.pe
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<TelefonoStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Teléfono</span>
							</p>
							<p className="mb-3 break-words">
								(+51) 619 7000 anexo 1215
							</p>
						</div>
					</div>
				</div>
			</div>
			<Separator className="mb-6" />
			<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
				<div className="md:col-span-6">
					<div className="mb-6">
						<p className="text-tertiary font-bold mb-5">
							Departamento Académico de Química Orgánica
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dr. Olivio Nino Castro Mandujano
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal, investigador y químico
							<br />
							Licenciado en Química por la UNI, magíster en
							Química por la PUCP y doctorado en Ciencias Químicas
							por la UNMSM.
						</p>
						<p className="mb-5">
							Cuenta con más de 15 años de experiencia en docencia
							universitaria en instituciones privadas como en la
							Universidad Privada Norbert Winer y Universidad
							Privada Arzobispo Loayza e instituciones públicas
							como en la UNMSM. Se ha desempeñado como responsable
							del laboratorio de Fisicoquímica en la PUCP y
							docente en el laboratorio de genética en la Facultad
							de Ciencias Biológicas en la UNMSM.
						</p>
						<p className="mb-6">
							Ha realizado más de 45 investigaciones sobre
							distintos tópicos en química como gestión ambiental,
							recuperación de proteínas, análisis de ácidos, entre
							otros. Autor de libros como el último que publicó en
							el 2022 titulado “Investigación fitoquímica aplicada
							con aceites esenciales”. Asimismo, fue asesor de
							tesis y participó en proyectos de investigación
							aplicada y transferencia tecnológica financiados por
							instituciones como la Universidad Nacional José
							Faustino Sánchez Carrión y la UNMSM. Ha recibido
							diferentes distinciones, dentro de los cuales
							destaca ser primer puesto en la categoría varios en
							el Premio Coca-Cola Ecoeficiente (2007), primer
							lugar en el II Premio ADIFAN a la innovación en
							ciencias y tecnología farmacéuticas (2016).
						</p>
						<div className="flex gap-x-5">
							<a
								className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://cdn.www.gob.pe/uploads/document/file/4008984/RR-014959-2022-R-dept-quimica-organica-facultad-quimica-ingenieria-quimica.pdf.pdf?v=1672412302"
								target={'_blank'}
								rel="noopener noreferrer">
								<span className="flex items-center justify-center">
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-complementaryOne" />
									Resolución rectoral
								</span>
							</a>
							<Boton
								secondary
								className="mb-6 text-primary"
								onClick={() =>
									window.open(
										'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=12092'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-1 fill-primary" />
								</span>
								<span>Hoja de vida</span>
							</Boton>
						</div>
					</div>
				</div>
				{/* NOTE: COORDINADORES */}
				<div className="md:col-span-2">
					<div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/dir-dept-quimica-organica-nino-castro-unmsm.jpg"
							width={209}
							height={224}
							quality={100}
							className="w-full object-cover max-w-[254px] m-auto"
						/>
					</div>

					<p className="text-tertiary font-black mb-2">Contacto</p>
					<div className="text-sm">
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<CorreoIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Correo</span>
							</p>
							<p className="mb-3 break-words">
								organica.quimica@unmsm.edu.pe
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<TelefonoStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Teléfono</span>
							</p>
							<p className="mb-3 break-words">
								(+51) 619 7000 anexo 1212
							</p>
						</div>
						{/* <div>
							<p className="mb-1 text-tertiary">
								<span>
									<UbicacionStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Dirección</span>
							</p>
							<p className="mb-3 break-words">
								Jr. Puno n.° 1002, Lima, Perú
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<FechaHorarioStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">
									Atención presencial
								</span>
							</p>
							<p className="mb-3 break-words">
								lunes a viernes de 8:00 a. m. a 1:00 p. m. y de
								2:00 p. m. a 3:45 p. m.
							</p>
						</div> */}
					</div>
				</div>
			</div>
			<Separator className="mb-6" />
			<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
				<div className="md:col-span-6">
					<div className="mb-6">
						<p className="text-tertiary font-bold mb-5">
							Departamento Académico de Química Inorgánica
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Directora
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Mg. Maria Nieves Lino Pacheco
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesora principal, investigadora y química
							<br />
							Licenciada en Química por la UNMSM y magíster en
							Química con mención en Química Inorgánica por la
							UNMSM.
						</p>
						<p className="mb-5">
							Cuenta con más de 25 años de experiencia en docencia
							universitaria en instituciones estatales como en la
							Universidad Nacional Federico Villarreal,
							Universidad Nacional de Ingeniería y la UNMSM.
						</p>
						<p className="mb-6">
							Ha realizado investigaciones sobre distintos tópicos
							en química como comparación de la actividad
							antibacteriana, precursores de complejos
							supramoleculares, entre otros. Además, participó en
							proyectos de investigación como{' '}
							{` "Biomonitoreo y
							Evaluación del grado de contaminación en los
							laboratorios de la FQIQ y su impacto en la salud y
							el medio ambiente"`}
							; y recibió un destacado certificado a nivel
							internacional desde Alemania por realizar
							publicaciones en revistas internacionales sobre la
							síntesis de varios ligados y complejos.
						</p>
						<div className="flex gap-x-5">
							<a
								className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://cdn.www.gob.pe/uploads/document/file/3989408/R.R.%20009214-2021-R%20-%20dept-quimica-inorganica.pdf.pdf?v=1672156307"
								target={'_blank'}
								rel="noopener noreferrer">
								<span className="flex items-center justify-center">
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-complementaryOne" />
									Resolución rectoral
								</span>
							</a>
							<Boton
								secondary
								className="mb-6 text-primary"
								onClick={() =>
									window.open(
										'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=12743'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-1 fill-primary" />
								</span>
								<span>Hoja de vida</span>
							</Boton>
						</div>
					</div>
				</div>
				{/* NOTE: COORDINADORES */}
				<div className="md:col-span-2">
					<div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/dir-dept-inorganica-maria-lino-quimica-unmsm.jpg"
							width={209}
							height={224}
							quality={100}
							className="w-full object-cover max-w-[254px] m-auto"
						/>
					</div>

					<p className="text-tertiary font-black mb-2">Contacto</p>
					<div className="text-sm">
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<CorreoIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Correo</span>
							</p>
							<p className="mb-3 break-words">
								inorganica.quimica@unmsm.edu.pe
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<TelefonoStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Teléfono</span>
							</p>
							<p className="mb-3 break-words">
								(+51) 619 7000 anexo 1211
							</p>
						</div>
						{/* <div>
							<p className="mb-1 text-tertiary">
								<span>
									<UbicacionStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Dirección</span>
							</p>
							<p className="mb-3 break-words">
								Jr. Puno n.° 1002, Lima, Perú
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<FechaHorarioStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">
									Atención presencial
								</span>
							</p>
							<p className="mb-3 break-words">
								lunes a viernes de 8:00 a. m. a 1:00 p. m. y de
								2:00 p. m. a 3:45 p. m.
							</p>
						</div> */}
					</div>
				</div>
			</div>
			<Separator className="mb-6" />
			<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
				<div className="md:col-span-6">
					<div className="mb-6">
						<p className="text-tertiary font-bold mb-5">
							Departamento Académico de Fisicoquímica
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dr. Victor Raul Garcia Villegas
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor asociado, investigador y químico
							<br />
							Licenciado en Química por la UNFV de Lima Perú,
							doctor en Fisicoquímica Molecular por la Universidad
							Andrés Bello (Chile), con estancia de investigación
							en Faculty of Science and Bio-engineering Sciences
							por la Vrije Universiteit Brussel (Bélgica).
						</p>
						<p className="mb-5">
							Es docente investigador desde hace 10 años con
							amplia experiencia en estudios
							teórico-computacionales de acoplamiento molecular
							ligando-proteína, Docking. Sus investigaciones están
							orientadas a estudios de estabilidad natural y
							conformacional desde el enfoque de la dinámica
							molecular, mediante descriptores de reactividad y
							estudios de aromaticidad empleando propiedades
							magnéticas.
						</p>
						<p className="mb-6">
							Es miembro responsable de un proyecto de
							investigación y miembro del Grupo de Investigación
							Síntesis Química. Además, ha publicado 14 artículos
							en revistas indizadas, de los cuales, ocho han sido
							indexadas en WOS y SCOPUS en los últimos cuatro
							años.
						</p>
						<div className="flex gap-x-5">
							<a
								className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://www.gob.pe/institucion/unmsm/normas-legales/4252935-resolucion-rectoral-n-005595-2023-r"
								target={'_blank'}
								rel="noopener noreferrer">
								<span className="flex items-center justify-center">
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-complementaryOne" />
									Resolución rectoral
								</span>
							</a>
							<Boton
								secondary
								className="mb-6 text-primary"
								onClick={() =>
									window.open(
										'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=17858'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-1 fill-primary" />
								</span>
								<span>Hoja de vida</span>
							</Boton>
						</div>
					</div>
				</div>
				<div className="md:col-span-2">
					{/* <div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/dir-dept-fisioquimica-patricio-mu%C3%B1oz-unmsm.jpg"
							width={209}
							height={224}
							quality={100}
							className="w-full object-cover max-w-[254px] m-auto"
						/>
					</div> */}

					<p className="text-tertiary font-black mb-2">Contacto</p>
					<div className="text-sm">
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<CorreoIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Correo</span>
							</p>
							<p className="mb-3 break-words">
								victor.garcia@unmsm.edu.pe /
								fisicoquimica.quimica@unmsm.edu.pe
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<TelefonoStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Teléfono</span>
							</p>
							<p className="mb-3 break-words">
								(+51) 619 7000 anexo 1213
							</p>
						</div>
					</div>
				</div>
			</div>
			<Separator className="mb-6" />
			<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
				<div className="md:col-span-6">
					<div className="mb-6">
						<p className="text-tertiary font-bold mb-5">
							Departamento Académico de Análisis y Diseño de
							Procesos
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dr. Walter Esteban Barrutia Feijoo
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal, investigador e ingeniero químico
							<br />
							Licenciado en Ingeniería Química por la UNMSM,
							magíster en Ingeniería y doctor con mención en
							Gestión de Operaciones por Lamar University (Estados
							Unidos).
						</p>
						<p className="mb-5">
							Becado por el Programa Latinoamericano de Becas para
							Universidades Americanas (LASPAU) para realizar su
							maestría en Estados Unidos. Cuenta con más de 25
							años de experiencia en docencia universitaria de
							posgrado en instituciones públicas y privadas. Se ha
							desempeñado como director de la División de Calidad
							y Producción en Lamar University, director del
							Departamento de Aseguramiento de la Calidad en
							Austin Community College, asesor de la presidencia
							en CONCYTEC, subdirector de cooperación
							internacional en la Autoridad Nacional del Agua,
							entre más funciones. Ha realizado distintas
							investigaciones sobre la línea de recursos hídricos,
							exportaciones, capacitación y excelencia
							universitaria, entre otros. Además, participó en
							proyectos de investigación sobre el análisis de
							variables prospectivas para lograr un mayor
							desarrollo de patentes en instituciones públicas,
							extracción de oleorresinas de la páprika, entre
							otros.
						</p>
						<p className="mb-6">
							Ha recibido reconocimientos a nivel nacional por su
							distinguida participación como conferencista en la
							Conferencia Internacional: Perspectivas de
							Acreditación de la Universidad Pública y
							Mejoramiento Académico y Curricular de las Carreras
							Profesionales y a nivel internacional por su
							programa de apoyo al diseño e implementación de
							estrategias para la continuidad del servicio
							educativo superior de las universidades públicas del
							Perú desde Estados Unidos y por mejor proyecto de
							innovación de aprendizaje universitario desde Corea.
						</p>

						<div className="flex gap-x-5">
							<a
								className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://cdn.www.gob.pe/uploads/document/file/3989376/R.R.%20003015-2021-R%20-%20dpto-analisis-dise%C3%B1o-procesos-quimica-analitica.pdf.pdf?v=1672155975"
								target={'_blank'}
								rel="noopener noreferrer">
								<span className="flex items-center justify-center">
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-complementaryOne" />
									Resolución rectoral
								</span>
							</a>
							<Boton
								secondary
								className="mb-6 text-primary"
								onClick={() =>
									window.open(
										'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=3692'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-1 fill-primary" />
								</span>
								<span>Hoja de vida</span>
							</Boton>
						</div>
					</div>
				</div>
				{/* NOTE: COORDINADORES */}
				<div className="md:col-span-2">
					<div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/dir-dept-analisis-dise%C3%B1o-procesos-walter-barrutia-unmsm.jpg"
							width={209}
							height={224}
							quality={100}
							className="w-full object-cover max-w-[254px] m-auto"
						/>
					</div>

					{/* <Image
						src={directorPic}
						layout="responsive"
						width={209}
						height={224}
						priority={true}
						alt="Banner Maestría"
						className="mb-6"
					/> */}

					<p className="text-tertiary font-black mb-2">Contacto</p>
					<div className="text-sm">
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<CorreoIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Correo</span>
							</p>
							<p className="mb-3 break-words">
								anadisenoprocesos.quimica@unmsm.edu.pe
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<TelefonoStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Teléfono</span>
							</p>
							<p className="mb-3 break-words">
								(+51) 619 7000 anexo 1210
							</p>
						</div>
						{/* <div>
							<p className="mb-1 text-tertiary">
								<span>
									<UbicacionStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Dirección</span>
							</p>
							<p className="mb-3 break-words">
								Jr. Puno n.° 1002, Lima, Perú
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<FechaHorarioStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">
									Atención presencial
								</span>
							</p>
							<p className="mb-3 break-words">
								lunes a viernes de 8:00 a. m. a 1:00 p. m. y de
								2:00 p. m. a 3:45 p. m.
							</p>
						</div> */}
					</div>
				</div>
			</div>
			<Separator className="mb-6" />
			<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
				<div className="md:col-span-6">
					<div className="mb-6">
						<p className="text-tertiary font-bold mb-5">
							Departamento Académico de Química Analítica
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Mg. Holger Jelimer Maldonado García
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal, investigador y biólogo
							<br />
							Licenciado en Ciencias Biológicas por la Universidad
							Nacional de Trujillo y magíster en Ciencias con
							mención en Química por la Universidad Peruana
							Cayetano Heredia.
						</p>
						<p className="mb-5">
							Cuenta con más de 45 años de experiencia en docencia
							universitaria en instituciones estatales como en la
							UNMSM e instituciones privadas como en la
							Universidad Peruana Cayetano Heredia. Además es
							especialista en química de los productos naturales,
							separaciones químicas, cromatográficas y
							endocrinología reproductiva.
						</p>
						<p className="mb-6">
							Ha realizado investigaciones sobre distintos tópicos
							como el equilibrio y la cinética de biosorción,
							dentro de las cuales destaca su última publicación
							“Estudio de la coagulación de la suspensión coloidal
							de AgI por influencia de alginato de sodio y sulfato
							de aluminio” en el año 2021. Además, participó en
							proyectos de investigación sobre extracción,
							purificación , caracterización y acondicionamiento
							de biopolímeros; obtención y caracterización de
							fertilizantes de liberación controlada, entre otros.
						</p>

						<div className="flex gap-x-5">
							<a
								className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://cdn.www.gob.pe/uploads/document/file/3989376/R.R.%20003015-2021-R%20-%20dpto-analisis-dise%C3%B1o-procesos-quimica-analitica.pdf.pdf?v=1672155975"
								target={'_blank'}
								rel="noopener noreferrer">
								<span className="flex items-center justify-center">
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-complementaryOne" />
									Resolución rectoral
								</span>
							</a>
							<Boton
								secondary
								className="mb-6 text-primary"
								onClick={() =>
									window.open(
										'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=2207'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-1 fill-primary" />
								</span>
								<span>Hoja de vida</span>
							</Boton>
						</div>
					</div>
				</div>
				{/* NOTE: COORDINADORES */}
				<div className="md:col-span-2">
					<div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/dir-dept-procesos-raymundo-erazo.jpg"
							width={209}
							height={224}
							quality={100}
							className="w-full object-cover max-w-[254px] m-auto"
						/>
					</div>

					{/* <Image
						src={directorPic}
						layout="responsive"
						width={209}
						height={224}
						priority={true}
						alt="Banner Maestría"
						className="mb-6"
					/> */}

					<p className="text-tertiary font-black mb-2">Contacto</p>
					<div className="text-sm">
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<CorreoIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Correo</span>
							</p>
							<p className="mb-3 break-words">
								analitica.quimica@unmsm.edu.pe
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<TelefonoStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Teléfono</span>
							</p>
							<p className="mb-3 break-words">
								(+51) 619 7000 anexo 1214
							</p>
						</div>
						{/* <div>
							<p className="mb-1 text-tertiary">
								<span>
									<UbicacionStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Dirección</span>
							</p>
							<p className="mb-3 break-words">
								Jr. Puno n.° 1002, Lima, Perú
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<FechaHorarioStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">
									Atención presencial
								</span>
							</p>
							<p className="mb-3 break-words">
								lunes a viernes de 8:00 a. m. a 1:00 p. m. y de
								2:00 p. m. a 3:45 p. m.
							</p>
						</div> */}
					</div>
				</div>
			</div>
			<Separator className="mb-6" />
			<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
				<div className="md:col-span-6">
					<div className="mb-6">
						<p className="text-tertiary font-bold mb-5">
							Departamento Académico de Operaciones Unitarias
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Ing.Julio Javier Armijo Carranza
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal e investigador
							<br />
							Licenciado y magíster en Ingeniería Química por la
							UNMSM y magíster en Ciencias con mención en Química
							por la Universidad Peruana Cayetano Heredia.
						</p>
						<p className="mb-5">
							Cuenta con más de 15 años de experiencia en docencia
							universitaria. Su área de investigación son los
							procesos de separación mediante la transferencia de
							masa: membranas, intercambio iónico, adsorción. Ha
							publicado distintos artículos científicos sobre la
							línea del modelamiento y simulación del proceso de
							extracción de aceites, la simulación dinámica de
							sistemas de ósmosis inversa, entre otros.
						</p>
						<p className="mb-6">
							Participó en proyectos de investigación en torno al
							efecto de la polarización por concentración en las
							separaciones por ósmosis inversa, el módulo de
							operaciones unitarias virtual para la enseñanza de
							la ingeniería química y, recientemente, sobre el
							estudio de la cinética de intercambio iónico en
							columna empacada aplicada al tratamiento de aguas
							residuales.
						</p>

						<div className="flex gap-x-5">
							<a
								className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://cdn.www.gob.pe/uploads/document/file/3989468/R.R.%20010901-2021-R%20-dept-operaciones-unitarias.pdf.pdf?v=1672157019"
								target={'_blank'}
								rel="noopener noreferrer">
								<span className="flex items-center justify-center">
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-complementaryOne" />
									Resolución rectoral
								</span>
							</a>
							<Boton
								secondary
								className="mb-6 text-primary"
								onClick={() =>
									window.open(
										'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=11405'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-1 fill-primary" />
								</span>
								<span>Hoja de vida</span>
							</Boton>
						</div>
					</div>
				</div>
				{/* NOTE: COORDINADORES */}
				<div className="md:col-span-2">
					<div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/dir-dept-operaciones-unitarias-quimica-ingenieria-waldir-desiderio-unmsm.jpg"
							width={209}
							height={224}
							quality={100}
							className="w-full object-cover max-w-[254px] m-auto"
						/>
					</div>

					{/* <Image
						src={directorPic}
						layout="responsive"
						width={209}
						height={224}
						priority={true}
						alt="Banner Maestría"
						className="mb-6"
					/> */}

					<p className="text-tertiary font-black mb-2">Contacto</p>
					<div className="text-sm">
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<CorreoIcon className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Correo</span>
							</p>
							<p className="mb-3 break-words">
								operacionesunitarias.quimica@unmsm.edu.pe
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<TelefonoStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Teléfono</span>
							</p>
							<p className="mb-3 break-words">
								(+51) 619 7000 anexo 1217
							</p>
						</div>
						{/* <div>
							<p className="mb-1 text-tertiary">
								<span>
									<UbicacionStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">Dirección</span>
							</p>
							<p className="mb-3 break-words">
								Jr. Puno n.° 1002, Lima, Perú
							</p>
						</div>
						<div>
							<p className="mb-1 text-tertiary">
								<span>
									<FechaHorarioStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
								</span>
								<span className="font-bold">
									Atención presencial
								</span>
							</p>
							<p className="mb-3 break-words">
								lunes a viernes de 8:00 a. m. a 1:00 p. m. y de
								2:00 p. m. a 3:45 p. m.
							</p>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default DepartamentosAcademicos;
