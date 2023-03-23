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
						Organismo de apoyo al Decanato con el ejercicio de sus
						funciones. Se encarga de emitir y resguardar las actas
						promocionales de las asignaturas de pregrado y posgrado,
						los registros de grados, títulos y otros documentos
						otorgados por la facultad. Además, se encarga de
						coordinar con entidades que concedan becas y prácticas
						preprofesionales a estudiantes y, así como de gestionar
						convenios con instituciones internacionales. Está
						conformado por el/la vicedecano/a académico y sus
						respectivas Unidades dependientes. Conoce más acerca de
						este órgano de autoridad ingresando al{' '}
						<a
							className="text-secondary"
							href="https://sum.unmsm.edu.pe/assets/Estatuto/estatuto.pdf"
							target="_blank"
							rel="noopener noreferrer">
							Estatuto de la UNMSM
						</a>
						.
					</p>
					<p className="mb-1">
						<span className="font-bold text-tertiary">
							Vicedecano académico
						</span>
						<span className="mx-2 text-tertiary font-bold">|</span>
						<span className="text-textColorOne font-bold">
							Dr. Victor Luis Izaguirre Pasquel
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Profesor principal e investigador.
						<br />
						Químico Farmacéutico por la UNMSM, magíster en Ciencias
						con mención en Farmacología por la Universidad Peruana
						Cayetano Heredia y doctor en Medicina y Cirugía por la
						Universidad Miguel Hernández de Elche (España).
					</p>
					<p className="mb-5">
						Es docente de pre y posgrado en la Facultad de Farmacia
						y Bioquímica de la UNMSM y docente en programas de
						educación continua del Instituto para la Calidad de la
						PUCP. En los últimos 20 años, se ha desempeñado en
						diversos cargos en organizaciones públicas y privadas,
						entre ellos, desde 2016 al 2020 fue director de la
						Escuela Profesional de Farmacia y Bioquímica (UNMSM).
						Cuenta con 19 publicaciones científicas y ha participado
						en 10 proyectos de investigación que aportan
						conocimiento en el campo de las ciencias farmacéuticas.
					</p>
					<p className="mb-6">
						Actualmente, es presidente del Comité Técnico de
						Normalización de Gestión de la Calidad en Organizaciones
						Educativas (INACAL), evaluador del Premio Nacional a la
						Calidad y del Premio Iberoamericano a la Calidad, es
						Académico de Número de la Academia Peruana de Farmacia y
						miembro del Consejo Consultivo de la Fundación Hipólito
						Unanue.
					</p>
					<div className="flex gap-x-5">
						<Boton
							secondary
							className="mb-6"
							onClick={() =>
								window.open(
									'https://cdn.www.gob.pe/uploads/document/file/3819485/2.%20RR%20Vicedecano%20Acad%C3%A9mico%20Victor%20Izaguirre%20Pasquel.pdf.pdf?v=1667935135',
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
							href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=14589"
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
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/nosotros/autoridades-y-organos/vicedecano-academico-victor-izaguirre.jpg"
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
							dacadfyb@unmsm.edu.pe
							<br />
							vicedecanato.academico.ffb@unmsm.edu.pe
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
							(+51) 619 7000 anexo 4811
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

export default VicedecanatoAcademicoPregrado;
