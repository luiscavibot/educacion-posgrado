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
							Dr. Ebor Fairlie Frisancho
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Licenciado en Administración de Empresas, magíster en
						Admistración con mención en Gestión Empresarial y doctor
						en Ciencias Administrativas por la Universidad Nacional
						de San Marcos
					</p>
					<p className="mb-5">
						Cuenta con más de 20 años de experiencia en docencia
						universitaria en instituciones nacionales como la
						Universidad Nacional Mayor de San Marcos y la
						Universidad Nacional San Cristóbal de Huamanga, y
						particulares como la Universidad de San Martín de
						Porres. Se ha desempeñado como jefe de la Oficina de
						Calidad Académica y Acreditación, coordinador del área
						de Administración del convenio con REVALORA del
						Ministerio de Trabajo, jefe encargado de la Oficina de
						Asesoría y Orientación al Estudiante, entre otros
						cargos.
					</p>
					<p className="mb-6">
						Ha realizado distintas investigaciones y participado en
						proyectos de turismo y desarrollo sostenible como el de
						experiencia en redes temáticas de docencia con el Grupo
						La Rabida de la Universidad Internacional de Andalucía.
						Asimismo, realizó una pasantía internacional en
						Université de Bordeaux de Francia y partició en
						coonferencias internacionales de la Escuela Complutense
						Latinoamericana en Chile y Argentina, el programa de
						becarios KOICA en Corea, y en ACBSP International
						Conference de Estados Unidos.
					</p>
					<div className="flex gap-x-5">
						<a
							className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
							href="https://cdn.www.gob.pe/uploads/document/file/5047091/RESOLUCI%C3%93N%20RECTORAL-018975-2020-R%20COORDINADOR%20ACADEMICO%20FAIRLIE%20FRISANCHO%20UPG.pdf?v=1693000753"
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
								window.open(
									'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=4512'
								)
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
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fca-posgrado/Nosotros/1516649364370.jpeg"
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
							coordacadupg.administracion@unmsm.edu.pe
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
