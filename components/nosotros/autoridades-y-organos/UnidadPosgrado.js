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

const UnidadPosgrado = () => {
	return (
		<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
			<div className="md:col-span-6">
				<div className="mb-6">
					<p className="mb-8">
						Órgano de línea de la facultad encargado de planificar,
						organizar y dirigir tanto las actividades académicas
						como administrativas, orientadas al perfeccionamiento
						profesional a través de los estudios de diplomaturas,
						segundas especialidades, maestrías y doctorados. Además,
						presenta el número de vacantes para el concurso de
						admisión de los programas de posgrado. Dependen
						jerárquicamente del Consejo de Facultad, sujeta
						funcional y normativamente de la Escuela de Posgrado de
						la Universidad Nacional Mayor de San Marcos. Está
						conformado por el/la director/a de la Unidad de Posgrado
						y el personal administrativo/técnico correspondiente.
						Conoce más acerca de esta Unidad ingresando al Manual de
						Organización y Funciones (
						<a
							className="link"
							href="https://cdn.www.gob.pe/uploads/document/file/1978572/MOF%20de%20la%20Facultad%20de%20Farmacia%20y%20Bioqu%C3%ADmica.pdf"
							target="_blank"
							rel="noopener noreferrer">
							MOF
						</a>
						).
					</p>
					<p className="mb-1">
						<span className="font-bold text-tertiary">
							Director
						</span>
						<span className="mx-2 text-tertiary font-bold">|</span>
						<span className="font-bold text-textColorOne">
							Dr. Marcos Antonio Loroño Gonzáles
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Profesor principal e investigador
						<br />
						Licenciado en Química por la Universidad de Oriente
						(Venezuela), PhD Physical Chemistry por la Universidad
						de Cambridge (Inglaterra) y posdoctorados por las
						universidades de Reims y Dijon (Francia).
					</p>
					<p className="mb-5">
						Cuenta con más de 30 años de experiencia en docencia
						universitaria en instituciones nacionales e
						internacionales. Se ha desempeñado como consejero
						universitario en la Universidad de Oriente (UDO),
						investigador del Centro Nacional para la Investigación
						Científica en Universidad de Reims Champagne-Ardenne de
						Francia y evaluador de proyectores en UDO y Fundación
						Polar. Ha realizado más de 45 investigaciones sobre la
						línea de cálculos de campos de fuerza, espectroscopia de
						alta resolución, entre otros; proyectos de investigación
						y fue asesor en más de 15 tesis para grados de
						licenciado y maestría.
					</p>
					<p className="mb-6">
						Ha recibido la distinción CUM LAUDE (Venezuela) por su
						primera posición en la promoción universitaria de 1990 y
						un premio por investigación al mantener una trayectoria
						investigativa por dos años consecutivos en Inglaterra;
						alcanzó el premio Award for Research por completar sus
						estudios como estudiante de PhD en tres años
						consecutivos y, en Reino Unido logró el premio de mentor
						científico en el marco de cooperación British Council-
						CONCYTEC en el año 2020.
					</p>
					<div className="flex gap-x-5">
						<a
							className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
							href="https://cdn.www.gob.pe/uploads/document/file/3989269/R.R.%20003389-2021-R%20-%20Director-UPG-facultad-quimica-ingenieria-quimica.pdf.pdf?v=1672154211"
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
									'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=182002	'
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
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/dir-unidad-posgrado-marcos-loro%C3%B1o.jpg"
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
							upg.farmacia@unmsm.edu.pe
							<br />
							comunicadosupg.farmacia@unmsm.edu.pe
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
							(+51) 619 7000 anexo 4812
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
							lunes a viernes de 8:00 a. m. a 1:00 p. m. y de 2:00
							p. m. a 3:45 p. m.
						</p>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default UnidadPosgrado;
