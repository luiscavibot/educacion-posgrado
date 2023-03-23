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

const EscuelasProfesionales = () => {
	return (
		<>
			<p className="mb-8 col-span-full text-textColorTwo">
				Son los órganos de línea de la facultad encargada de la
				formación profesional para la obtención del grado académico de
				bachiller, título profesional o licenciatura correspondiente, y
				de otorgar la certificación progresiva por los módulos de
				competencia que implemente. Además, gestiona los estudios
				específicos y de especialidad de pregrado; coordina y participa
				en la implementación de los estudios generales; evalúa
				semestralmente los componentes curriculares; establece, en
				coordinación con los responsables de las asignaturas, las plazas
				para ayudantías de cátedra o de laboratorio. Está conformado por
				el/la director/a y el Comité de Gestión de la Escuela
				Profesional. Conoce más acerca de esta Unidad ingresando al
				Manual de Organización y Funciones (
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
							Escuela profesional de Ciencias de los alimentos
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dr. Víctor Crispín Perez
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal y médico cirujano.
							<br />
							Químico farmacéutico con especialidad en Análisis
							Bioquímicos y magíster en Microbiología por la UNMSM
							y doctorado en Salud Pública por la UNFV.
						</p>
						<p className="mb-5">
							Es docente de pre y posgrado en la Facultad de
							Farmacia y Bioquímica de la UNMSM; y realiza
							investigaciones sobre la resistencia microbiana a
							los antibióticos y epidemiología de la tuberculosis.
							Médico asistente en la Dirección de Salud IV Lima
							Este (MINSA) por 25 años; además fue miembro de la
							Asamblea Universitaria durante el periodo 2017-2020.
							Ha contribuido con 9 artículos científicos sobre
							microbiología y epidemiología de tuberculosis.
						</p>
						<p className="mb-6">
							Ha recibido medalla de oro en el área de Farmacia y
							Bioquímica por la Fundación Instituto Hipólito
							Unanue, y ha sido reconocido con el premio al Mérito
							Científico por la UNMSM. Actualmente, es miembro del
							Consejo de Facultad y brinda asesoría de tesis a los
							alumnos de pre y posgrado.
						</p>
						<div className="flex gap-x-5">
							<Boton
								secondary
								className="mb-6"
								onClick={() =>
									window.open(
										'https://cdn.www.gob.pe/uploads/document/file/3819522/4.%20RR%20Director%20de%20la%20EPCA%20Victor%20Crispin%20Perez.pdf.pdf?v=1667935733',
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
								href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=71913"
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
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/nosotros/autoridades-y-organos/director-ciencia-alimentos-victor-crispin-perez.jpg"
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
								eapcienciasalimentos.farmacia@unmsm.edu.pe
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
								(+51) 619 7000 anexo 4805
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
							Escuela Profesional de Farmacia y Bioquímica
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dr. Luis Miguel Visitación Felix Veliz
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal e investigador.
							<br />
							Químico farmacéutico, título de segunda especialidad
							y magíster en Recursos Vegetales y Terapéuticos y,
							doctorado en Farmacia y Bioquímica por la UNMSM.
						</p>
						<p className="mb-5">
							Es docente de pregrado en la Facultad de Farmacia y
							Bioquímica, Facultad de Odontología y Facultad de
							Ingeniería Industrial; así como en posgrado en la
							Facultad de Farmacia y Bioquímica de la UNMSM. Ha
							realizado cursos de especialización como diplomados
							y programas de formación. Tiene experiencia en cargo
							de dirección y ha generado diversas publicaciones
							académicas que enriquecen el acervo bibliográfico
							del área médica y bioquímica.
						</p>
						<p className="mb-6">
							Ha recibido el reconocimiento por su labor académica
							participando como miembro B en actividades de
							investigación y ha sido responsable o miembro de
							grupos de investigación; así como en eventos
							científicos congresos, talleres, cursos, seminarios
							como organizador, ponente y asistente.
						</p>
						<div className="flex gap-x-5">
							<Boton
								secondary
								className="mb-6"
								onClick={() =>
									window.open(
										'https://cdn.www.gob.pe/uploads/document/file/3819535/5.%20RR%20Director%20de%20la%20EPFB%20Luis%20Felix%20Veliz.pdf.pdf?v=1667935897',
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
								href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=96878"
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
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/nosotros/autoridades-y-organos/director-farmacia-bioquimica-luis-miguel-felix-veliz.jpg"
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
								eapfyb@unmsm.edu.pe
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
								(+51) 619 7000 anexo 4808
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
							Director de la Escuela Profesional de Toxicología
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Mg. Jesús Lizano Gutierrez
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal e investigador
							<br />
							Químico farmacéutico, título de segunda especialidad
							en Toxicología y Química Legal, magíster en
							Bromatología y, estudios en curso de doctorado por
							la UNMSM.
						</p>
						<p className="mb-5">
							Es docente universitario con más de 45 años de
							experiencia en la cátedra de Toxicología y Química
							Legal en la Universidad Nacional Mayor de San
							Marcos, y en la Universidad Norbert Wiener desde el
							2000 hasta la actualidad; además es miembro del
							Comité Asesor de la Escuela Profesional de
							Toxicología, director del Centro de Investigación,
							Control Toxicológico y Apoyo a la Gestión Ambiental
							(CICOTOX) y presidente del directorio del Centro de
							Producción Farmacéutica (CENPROFARMA).
						</p>
						<p className="mb-6">
							Cuenta con más de 40 publicaciones académicas, ha
							realizado asesoramiento y ha sido jurado de trabajo
							de investigación de 30 Tesis. Obtuvo el primer
							puesto en el concurso de trabajos de investigación
							en el I Congreso Internacional de Farmacología y
							Toxicología (2009), y el diploma de honor de la
							Facultad de Farmacia y Bioquímica por su desempeño y
							dedicación al servicio de la Facultad de Farmacia y
							Bioquímica de la UNMSM (2016).
						</p>
						<div className="flex gap-x-5">
							<Boton
								secondary
								className="mb-6"
								onClick={() =>
									window.open(
										'https://cdn.www.gob.pe/uploads/document/file/3819548/6.%20RR%20Director%20de%20la%20EPT%20Jes%C3%BAs%20Lizano%20Gutierrez.pdf.pdf?v=1667936031',
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
								href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=71913"
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
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/nosotros/autoridades-y-organos/director-toxicologia-jesus-victor-lizano.jpg"
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
								eaptoxicologia.farmacia@unmsm.edu.pe
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
								(+51) 619 7000 anexo 4825
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

export default EscuelasProfesionales;
