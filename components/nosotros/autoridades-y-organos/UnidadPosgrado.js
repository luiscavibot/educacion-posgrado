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
							className="text-secondary"
							href="https://cdn.www.gob.pe/uploads/document/file/1978572/MOF%20de%20la%20Facultad%20de%20Farmacia%20y%20Bioqu%C3%ADmica.pdf"
							target="_blank"
							rel="noopener noreferrer">
							MOF
						</a>
						).
					</p>
					<p className="mb-1">
						<span className="font-bold text-tertiary">
							Directora
						</span>
						<span className="mx-2 text-tertiary font-bold">|</span>
						<span className="font-bold text-textColorOne">
							Dra. Norma Julia Ramos Cevallos
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Profesora principal e investigadora.
						<br />
						Química farmacéutica, magíster en Docencia Universitaria
						e Investigación Educativa, estudios terminados en la
						Maestría en Ciencia de los Alimentos, y doctorado en
						Farmacia y Bioquímica por la UNMSM.
					</p>
					<p className="mb-5">
						Es docente universitaria por más de 20 años, responsable
						del Grupo de Investigación “Recursos Tecnológicos” de la
						UNMSM, y representante principal de la UNMSM ante el
						grupo técnico multisectorial de prevención y combate al
						contrabando, comercio Ilegal y falsificación de
						productos farmacéuticos en la comisión de Educación y
						Difusión del CONTRAFALME. Además, es autora y coautora
						de publicaciones de artículos científicos en revistas
						nacionales e internacionales.
					</p>
					<p className="mb-6">
						Ha sido expresidenta del sector docente e Investigación
						del Colegio Departamental del Colegio Químico
						Farmacéutico de Lima, exjefa de la Unidad Tecnológica
						Educativa de la Facultad de Farmacia y Bioquímica de la
						UNMSM, exgerente del SISMED de la DISA en Lima Norte,
						entre otros cargos notables.
					</p>
					<div className="flex gap-x-5">
						<Boton
							secondary
							className="mb-6"
							onClick={() =>
								window.open(
									'https://cdn.www.gob.pe/uploads/document/file/3819559/7.%20RR%20Directora%20de%20la%20UPG%20Norma%20Ramos%20Cevellos.pdf.pdf?v=1667936144',
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
