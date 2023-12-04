import React from 'react';
import Image from 'next/future/image';

import CorreoIcon from '../../icons/CorreoIcon';
import DocumentosFillIcon from '../../icons/DocumentosFillIcon';
import Boton from '../../shared/Boton';
import TelefonoStroke from '../../icons/TelefonoStroke';

const Decanato = () => {
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
							className="text-primary"
							href="https://cdn.www.gob.pe/uploads/document/file/1979502/MOF%20de%20la%20Facultad%20de%20Educaci%C3%B3n..pdf?v=1624895867"
							target="_blank"
							rel="noopener noreferrer"
						>
							MOF
						</a>
						).
					</p>
					<p className="mb-1">
						<span className="font-bold text-secondary">
							Director
						</span>
						<span className="mx-2 text-secondary font-bold">|</span>
						<span className="font-bold text-textColorOne">
							Dr. Edgar Froilán Damián Núñez
						</span>
					</p>
					<p className="text-sm text-secondaryy font-medium italic mb-5">
						Docente principal e investigador
						<br />
						Licenciado en Educación Física por la Universidad
						Nacional Mayor de San Marcos, magíster Educación con
						mención en Actividad Física para el Desarrollo por la
						UNMSM y doctorado en Educación por la UNMSM.
					</p>
					<p className="mb-5">
						Cuenta con experiencia de más de 25 años en docencia
						universitaria en instituciones privadas como en la
						Universidad Alas Peruanas e instituciones públicas como
						en la UNMSM. En los últimos 15 años, se ha desempeñado
						como director del Colegio Aplicación San Marcos
						(2009-2011), director administrativo de la Facultad de
						Educación (2012-2016), director de la Escuela
						Profesional de Educación Física (2016) y director
						académico de la Escuela Profesional de Educación Física
						(2016-2020).
					</p>
					<p className="mb-6">
						Ha realizado más de 15 investigaciones sobre la línea de
						rendimiento académico, actividad física, desarrollo
						psicomotriz, pedagogía universitaria, entre otros
						tópicos. Además, es autor de distintos libros, dentro de
						los cuales destaca Bases biológicas y psicológicas del
						comportamiento humano (2014) y Pedagogía Universitaria
						(2016); y ha sido asesor en más de medio ciento de tesis
						para grados de maestría y doctorado.
					</p>
					<div className="flex gap-x-5">
						<Boton
							secondary
							className="mb-6 text-primary"
							onClick={() =>
								window.open(
									'https://cdn.www.gob.pe/uploads/document/file/4208029/10.%20R.%20R.%20Director%20de%20la%20Unidad%20Posgrado%20Edgar%20Damian.pdf.pdf?v=1677765377'
								)
							}
						>
							<span>
								<DocumentosFillIcon className="w-5 h-5 mr-2 fill-primary" />
							</span>
							<span>Resolución rectoral</span>
						</Boton>
						<a
							className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
							href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=75508"
							target={'_blank'}
							rel="noopener noreferrer"
						>
							<span className="flex">
								<DocumentosFillIcon className="w-5 h-5 mr-2 fill-complementaryOne" />
								Hoja de vida
							</span>
						</a>
					</div>
				</div>
			</div>
			{/* NOTE: COORDINADORES */}
			<div className="md:col-span-2">
				<div className="mb-6">
					<Image
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-educacion/nosotros/autoridades-y-organos/vicedecano-investigacion-posgrado-educacion-edgar-damian.jpg"
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

				<p className="text-secondary font-black mb-2">Contacto</p>
				<div className="text-sm">
					<div>
						<p className="mb-1 text-secondary">
							<span>
								<CorreoIcon className="fill-secondary inline mr-2 relative bottom-[1px]" />
							</span>
							<span className="font-bold">Correo</span>
						</p>
						<p className="mb-3 break-words">
							upg.educacion@unmsm.edu.pe
						</p>
					</div>
					<div>
						<p className="mb-1 text-secondary">
							<span>
								<TelefonoStroke className="fill-secondary inline mr-2 relative bottom-[1px]" />
							</span>
							<span className="font-bold">Teléfono</span>
						</p>
						<p className="mb-3 break-words">
							(+51) 619 7000 anexo 3051
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

export default Decanato;
