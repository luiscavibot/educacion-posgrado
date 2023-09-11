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

const VicedecanatoAcademicoPregrado = () => {
	return (
		<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
			<div className="md:col-span-6">
				<div className="mb-6">
					<p className="mb-8">
						Es la Unidad Académica encargada de proponer el plan de
						trabajo y presupuesto anual de las actividades
						académicas, planificar el calendario académico y de
						matrícula, e integrar el Comité Directivo de la Unidad
						de Posgrado. Dirige y supervisa al personal docente, se
						hace responsable del proceso de evaluación de
						actividades académicas y del desempeño de los
						profesores, y brinda asesoramiento pedagógico a los
						docentes. Planifica, organiza y dirige el proceso de
						admisión, supervisa la actualización de los syllabus, y
						firma las constancias referidas área de su competencia.
						Conoce más acerca de esta Unidad ingresando al{' '}
						<a
							className="text-secondary"
							href="https://administracion.unmsm.edu.pe/1web2022/wp-content/uploads/2022/03/MOF-FCA.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Manual de Organización y Funciones (MOF)
						</a>
						.
					</p>
					<p className="mb-1">
						<span className="font-bold text-tertiary">
							Coordinador académico
						</span>
						<span className="mx-2 text-tertiary font-bold">|</span>
						<span className="text-textColorOne font-bold">
							Dr. Iván Dazir Berleine Vivanco Aquino
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Doctor en Ciencias Administrativas por la Universidad
						Nacional Mayor de San Marcos, Doctor en Gestión y
						Desarrollo del ICTE Magíster en Administración de
						empresas por la Universidad Nacional Pedro Ruíz Gallo
					</p>
					<p className="mb-5">
						Docente en la Escuela de Posgrado de la Universidad
						Nacional Mayor de San Marcos (UNMSM) desde el 2014. Es
						investigador RENACYT Carlos Monge IV. Especialista en
						metodología de la investigación y temas en Gestión
						Pública. En el 2019 obtuvo el primer lugar en la
						evaluación de satisfacción docente por los alumnos del
						doctorado en Ciencias Administrativas (FCA) y maestría
						en Gestión Pública en la Facultad de Ciencias
						Administrativas. Su íntegra vocación por la docencia le
						permitió asesorar con acierto a Karin Quijada, quien se
						convirtió, en el 2023, en la primera mujer con
						discapacidad auditiva en obtener su doctorado por la
						Decana de América. Egresado del doctorado en Filosofía
						por la UNMSM. Es coordinador académico y administrativo
						del programa de Posdoctorado en Administración, que
						realiza la FCA en coordinación con la Facultad de
						Ciencias Económicas de la Universidad de Buenos Aires
						(UBA).
					</p>
					<p className="mb-6">
						Primer puesto y designado como el mejor docente del año
						académico del 2022 de la Facultad de Ciencias
						Administrativas de la FCA UNMSM. Primer lugar en la
						Evaluación de Satisfacción Docente por los Alumnos del
						Doctorado en Ciencias Administrativas y Maestría en
						Gestión Pública, en la Facultad de Ciencias
						Administrativas Unidad de Posgrado. 2019 Reconocimiento
						Destacada labor como Asesor a la mejor Tesis Doctoral de
						la Facultad de Ciencias Contables del 2019-2020 en la
						UNMSM.
					</p>
					<div className="flex gap-x-5">
						<a
							className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
							// href="https://cdn.www.gob.pe/uploads/document/file/5047091/RESOLUCI%C3%93N%20RECTORAL-018975-2020-R%20COORDINADOR%20ACADEMICO%20FAIRLIE%20FRISANCHO%20UPG.pdf?v=1693000753"
							target={'_blank'}
							rel="noopener noreferrer"
						>
							<span className="flex items-center justify-center">
								<DocumentosFillIcon className="w-5 h-5 mr-2 fill-complementaryOne" />
								Resolución rectoral
							</span>
						</a>
						<Boton
							secondary
							className="mb-6 text-primary"
							onClick={() =>
								window
									.open
									// 'https://dj6bwr7wzo1hi.cloudfront.net/fca-posgrado/CV+Fairlie+Frisancho+Ebor+-+Coordinador+Acade%CC%81mico.pdf'
									()
							}
						>
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
						// src="https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/Nosotros/dr-Ebor-Fairlie.jpeg"
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
							ivivancoa@unmsm.edu.pe
						</p>
					</div>
					{/* <div>
						<p className="mb-1 text-tertiary">
							<span>
								<TelefonoStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
							</span>
							<span className="font-bold">Teléfono</span>
						</p>
						<p className="mb-3 break-words">
							(+51) 619 7000 anexo 1207
						</p>
					</div> */}
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
							lunes a viernes de 8:00 a. m. a 1:00 p. m. y de 2:00
							p. m. a 3:45 p. m.
						</p>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default VicedecanatoAcademicoPregrado;
