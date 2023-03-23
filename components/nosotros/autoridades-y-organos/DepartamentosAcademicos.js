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
					className="text-secondary"
					href="https://cdn.www.gob.pe/uploads/document/file/1978572/MOF%20de%20la%20Facultad%20de%20Farmacia%20y%20Bioqu%C3%ADmica.pdf"
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
							Departamento Académico de Bioquímica
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Directora
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dra. Gloria Clotilde Gordillo Rocha
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesora principal e investigadora.
							<br />
							Licenciada en Educación Secundaria, en la
							especialidad de Biología y Química por la UNFV;
							química farmacéutica; magíster en Recursos Vegetales
							y Terapéuticos; y doctorado en Farmacia y Bioquímica
							por la UNMSM.
						</p>
						<p className="mb-5">
							Es docente de pregrado en la Facultad de Farmacia y
							Bioquímica, y ha realizado cursos de especialización
							como diplomados sobre gestión ambiental y
							tecnología. Tiene experiencia en el cargo de la
							Dirección Administrativa y en Grupos de
							Investigación en donde ha realizado 19 estudios en
							las diferentes áreas de ciencias de la salud.
							Además, ha producido más de 20 artículos publicados
							en revistas de divulgación científica.
						</p>
						<p className="mb-6">
							Ha recibido el diploma de reconocimiento a los
							investigadores con publicaciones científicas en el
							2013, en virtud a su fructífera labor en el campo de
							la investigación que le ha permitido la producción
							de conocimientos científicos. También, ha sido
							reconocida por su destacada labor en la
							investigación como asesora de grupos estudiantiles,
							en el marco de la ceremonia de clausura del año
							académico (2014).
						</p>
						<div className="flex gap-x-5">
							<Boton
								secondary
								className="mb-6"
								onClick={() =>
									window.open(
										'https://cdn.www.gob.pe/uploads/document/file/3819594/012530-2021-R.pdf?v=1667936797',
										'_blank'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-secondary" />
								</span>
								<span>Resolución rectoral</span>
							</Boton>
							<a
								className="px-3 py-2 bg-secondary hover:bg-tertiary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=4261"
								target={'_blank'}
								rel="noopener noreferrer">
								Hoja de vida
							</a>
						</div>
					</div>
				</div>
				{/* NOTE: COORDINADORES */}
				<div className="md:col-span-2">
					<div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/nosotros/autoridades-y-organos/dir-dept-bioquimica-gloria-gordillo.jpg"
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
								dabioquimica.farmacia@unmsm.edu.pe
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
								(+51) 619 7000 anexo 4831
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
							Departamento Académico de Farmacotecnia y
							Administración Farmacéutica
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Directora
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dra. Norma Julia Ramos Cevallos
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesora principal e investigadora.
							<br />
							Química farmacéutica, magíster en Docencia
							Universitaria e Investigación Educativa, estudios
							terminados en la Maestría en Ciencia de los
							Alimentos, y doctorado en Farmacia y Bioquímica por
							la UNMSM.
						</p>
						<p className="mb-5">
							Es docente universitaria por más de 20 años,
							responsable del Grupo de Investigación “Recursos
							Tecnológicos” de la UNMSM, y representante principal
							de la UNMSM ante el grupo técnico multisectorial de
							prevención y combate al contrabando, comercio Ilegal
							y falsificación de productos farmacéuticos en la
							comisión de Educación y Difusión del CONTRAFALME.
							Además, es autora y coautora de publicaciones de
							artículos científicos en revistas nacionales e
							internacionales.
						</p>
						<p className="mb-6">
							Ha sido expresidenta del sector docente e
							Investigación del Colegio Departamental del Colegio
							Químico Farmacéutico de Lima, exjefa de la Unidad
							Tecnológica Educativa de la Facultad de Farmacia y
							Bioquímica de la UNMSM, exgerente del SISMED de la
							DISA en Lima Norte, entre otros cargos notables.
						</p>
						<div className="flex gap-x-5">
							<Boton
								secondary
								className="mb-6"
								onClick={() =>
									window.open(
										'https://cdn.www.gob.pe/uploads/document/file/3819579/011223-2022-R.pdf?v=1667936542',
										'_blank'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-secondary" />
								</span>
								<span>Resolución rectoral</span>
							</Boton>
							<a
								className="px-3 py-2 bg-secondary hover:bg-tertiary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=10723"
								target={'_blank'}
								rel="noopener noreferrer">
								Hoja de vida
							</a>
						</div>
					</div>
				</div>
				{/* NOTE: COORDINADORES */}
				<div className="md:col-span-2">
					<div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/nosotros/autoridades-y-organos/dir-dept-norma-juli-ramos-cevallos.jpg"
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
								daf.farmacia@unmsm.edu.pe
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
								(+51) 619 7000 anexo 4828
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
							Departamento de Microbiología y Parasitología Básica
							y Aplicada
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Directora
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dra. María Elena Salazar Salvatierra
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesora principal e investigadora.
							<br />
							Química farmacéutica, magíster en Microbiología, y
							doctorado en Farmacia y Bioquímica por la UNMSM.
						</p>
						<p className="mb-5">
							Docente universitaria desde hace casi 20 años,
							responsable de curso y otras actividades inherentes
							a la docencia en la Universidad Nacional Mayor de
							San Marcos. Es miembro del Consejo Consultivo y de
							la Comisión de Trabajo de la Fundación Instituto
							Hipólito Unanue, socia activa de la Sociedad Química
							del Perú, y coordinadora del grupo de Investigación
							BIOBACT en la UNMSM. Fue directora del Centro de
							Control Analítico (2013-2016) y directora de la
							Unidad de Investigación (2016-2020) en la Facultad
							de Farmacia y Bioquímica.
						</p>
						<p className="mb-6">
							Cuenta con amplia experiencia en microbiología
							clínica, industrial y de alimentos, amplia labor
							realizada en análisis microbiológico y fisicoquímico
							de productos terminados y en proceso, en materia
							prima e insumos para medicamentos, dispositivos
							médicos y alimentos; y realiza investigaciones en el
							área de microbiología clínica, de alimentos, aguas y
							afines.
						</p>
						<div className="flex gap-x-5">
							<Boton
								secondary
								className="mb-6"
								onClick={() =>
									window.open(
										'https://cdn.www.gob.pe/uploads/document/file/3939039/11.%20RR%20Directora%20del%20DA%20de%20Microbiolog%C3%ADa%20Mar%C3%ADa%20Elena%20Salazar.pdf.pdf?v=1671133608',
										'_blank'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-secondary" />
								</span>
								<span>Resolución rectoral</span>
							</Boton>
							<a
								className="px-3 py-2 bg-secondary hover:bg-tertiary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=10826"
								target={'_blank'}
								rel="noopener noreferrer">
								Hoja de vida
							</a>
						</div>
					</div>
				</div>
				{/* NOTE: COORDINADORES */}
				<div className="md:col-span-2">
					<div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/nosotros/autoridades-y-organos/dir-dept-microbiologia-maria-elena-salazar.jpg"
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
								damicrobiologia.farmacia@unmsm.edu.pe
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
								(+51) 619 7000 anexo 4834
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
							Departamento Académico de Farmacología, Bromatología
							y Toxicología
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Directora
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dra. María Elena Montoya Alfaro
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesora principal e investigadora.
							<br />
							Química farmacéutica, magíster en Bromatología por
							la UNMSM, y doctorado en Farmacia por la Universidad
							de Navarra (España).
						</p>
						<p className="mb-5">
							Docente universitaria por más de 30 años,
							responsable de asignaturas en pregrado y posgrado,
							así como asesora de tesis y jurado evaluador.
							Colabora constantemente en grupos de investigación,
							cuyos resultados son publicados en revistas
							especializadas y cuenta con más de 35 trabajos
							académicos que han aportado conocimiento relevante a
							la ciencia de la salud. Fue miembro del Comité de
							Investigación de la Red Asistencial Rebagliati,
							Essalud (1999-2021), y miembro del comité de apoyo a
							la investigación en el Hospital Nacional Edgardo
							Rebagliati Martins a partir del 2021.
						</p>
						<p className="mb-6">
							Obtuvo el mérito científico como investigadora más
							destacada de la Facultad de Farmacia y Bioquímica en
							la Universidad Nacional Mayor de San Marcos entre el
							2002 al 2004. Además, recibió el reconocimiento y
							felicitación del Hospital Nacional Edgardo
							Rebagliati (2021).
						</p>
						<div className="flex gap-x-5">
							<Boton
								secondary
								className="mb-6"
								onClick={() =>
									window.open(
										'https://cdn.www.gob.pe/uploads/document/file/3939511/RESOLUCI%C3%93N%20RECTORAL-007832-2021-R%20DESIGNACI%C3%93N%20DRA.%20MARIA%20ELENA%20MONTOYA.pdf.pdf?v=1671138182',
										'_blank'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-secondary" />
								</span>
								<span>Resolución rectoral</span>
							</Boton>
							<a
								className="px-3 py-2 bg-secondary hover:bg-tertiary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=98068"
								target={'_blank'}
								rel="noopener noreferrer">
								Hoja de vida
							</a>
						</div>
					</div>
				</div>
				<div className="md:col-span-2">
					<div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/nosotros/autoridades-y-organos/dir-dept-farmacologia-maria-elena-montoya-alfaro.jpg"
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
								dafbyt.farmacia@unmsm.edu.pe
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
								(+51) 619 7000 anexo 4832
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
							Departamento Académico de Química Básica y Aplicada
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Mg. Juan José Ponce Cobos
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal e investigador.
							<br />
							Químico farmacéutico, magíster en Ciencias
							Farmacéuticas con mención en Ciencia y Tecnología
							Cosmética, y egresado del doctorado en Farmacia y
							Bioquímica por la UNMSM.
						</p>
						<p className="mb-5">
							Docente universitario desde hace más de 50 años en
							la Facultad de Farmacia y Bioquímica. Fue director
							del Departamento Académico de Química Básica y
							Aplicada (2016-2018), ha participado en proyectos
							con financiamiento económico, y ha publicado
							estudios sobre la actividad microbiana, marcadores
							bioquímicos, entre otros temas. Además, ha realizado
							estudios de especialización como diplomados y
							cursos.
						</p>
						<p className="mb-6">
							Ha recibido el premio Hipólito Unanue, por su tesis
							de bachiller titulado Propiedades Alostéricas de la
							Isoenzima M4 de L-Lactato: NAD Oxidorreductasa de
							músculo de conejo, en 1975; y se le otorgó el
							diploma de reconocimiento al Investigador con
							Publicaciones Científicas por la UNMSM (2014), en
							virtud de la fructífera labor en el campo de la
							investigación científica que ha permitido la
							producción de conocimientos, los mismos que se han
							plasmado en sus publicaciones.
						</p>

						<div className="flex gap-x-5">
							<Boton
								secondary
								className="mb-6"
								onClick={() =>
									window.open(
										'https://cdn.www.gob.pe/uploads/document/file/3819478/01238-2021-R.pdf?v=1667935058',
										'_blank'
									)
								}>
								<span>
									<DocumentosFillIcon className="w-5 h-5 mr-2 fill-secondary" />
								</span>
								<span>Resolución rectoral</span>
							</Boton>
							<a
								className="px-3 py-2 bg-secondary hover:bg-tertiary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=97208"
								target={'_blank'}
								rel="noopener noreferrer">
								Hoja de vida
							</a>
						</div>
					</div>
				</div>
				{/* NOTE: COORDINADORES */}
				<div className="md:col-span-2">
					<div className="mb-6">
						<Image
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/nosotros/autoridades-y-organos/dir-dept-qumica-basica-juan-jose-ponce-cobos.jpg"
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
								daqbya.farmacia@unmsm.edu.pe
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
								(+51) 619 7000 anexo 4829
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
