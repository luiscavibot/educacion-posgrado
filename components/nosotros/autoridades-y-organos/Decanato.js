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

const Decanato = () => {
	return (
		<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
			<div className="md:col-span-6">
				<div className="mb-6">
					<p className="mb-8">
						Máxima autoridad de dirección y gobierno de la facultad,
						encargado de dirigir, proponer y ejecutar académica,
						financiera y administrativamente a la facultad; además,
						es la máxima autoridad sobre los demás órganos de la
						facultad. Está conformado por el/la decano/a, quien es
						el representante ante el Consejo Universitario y
						Asamblea Universitaria, y encabeza el Consejo de
						Facultad; y la jefatura de la unidad de secretaría,
						quien revisa y administra el trámite documentario.
						Conoce más acerca de este órgano de autoridad ingresando
						al{' '}
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
						<span className="font-bold text-tertiary">Decano</span>
						<span className="mx-2 text-tertiary font-bold">|</span>
						<span className="text-textColorOne font-bold">
							Dr. Eduardo Flores Juaréz
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Profesor principal e investigador.
						<br />
						Químico farmacéutico, magíster en Microbiología,
						estudios de maestría en Economía con mención en
						Políticas Públicas y doctorado en Farmacia y Bioquímica
						por la UNMSM.
					</p>
					<p className="mb-5">
						Es catedrático y asesor de tesis de pre y posgrado en la
						Facultad de Farmacia y Bioquímica de la UNMSM. También,
						es investigador y miembro de proyectos monetarios, no
						monetarios y con fondo externo, especialmente en temas
						de bioquímica clínica. Durante su gestión como director
						de la Escuela Profesional de Farmacia y Bioquímica logró
						la acreditación de la carrera profesional de Farmacia y
						Bioquímica por el SINEACE y la implementación de la ISO
						9001-2008 por la fundación Bureau Veritas; además fue
						decano de su facultad en el periodo 2010-2013,
						consiguiendo gestionar proyectos de inversión pública.
					</p>
					<p className="mb-6">
						Ha recibido reconocimientos por su trayectoria académica
						y labor investigativa, otorgados por la Municipalidad
						distrital de Bellavista, prov. Sullana (Piura); el
						Colegio Químico Farmacéutico del Perú; el Colegio
						Químico Farmacéutico del Callao; el club provincial de
						Sullana; y la Facultad de Farmacia y Bioquímica de la
						UNMSM. Actualmente, es presidente de la Asociación de
						Facultades y Escuelas de Farmacia y Bioquímica del Perú
						(ASPEFEFB); y presidente del subcomité de Planificación,
						Presupuesto y Admisión del Comité Nacional del
						Residentado Químico Farmacéutico (CONAREQF), MINSA.
					</p>
					<div className="flex gap-x-5">
						<Boton
							secondary
							className="mb-6"
							onClick={() =>
								window.open(
									'https://cdn.www.gob.pe/uploads/document/file/3819472/1.%20RR%20Decano%20Eduardo%20Flores%20Juarez.pdf.pdf?v=1667934889',
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
							href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=79354"
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
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/nosotros/autoridades-y-organos/decano-farmacia-bioquimica.jpg"
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
							decanofyb@unmsm.edu.pe
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
							(+51) 619 7000 anexo 4801
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
