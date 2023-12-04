import React from 'react';
import Image from 'next/future/image';

import CorreoIcon from '../../icons/CorreoIcon';
import DocumentosFillIcon from '../../icons/DocumentosFillIcon';
import Boton from '../../shared/Boton';
import TelefonoStroke from '../../icons/TelefonoStroke';

const Consejo = () => {
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
						el/la representante ante el Consejo Universitario y
						Asamblea Universitaria, y encabeza el Consejo de
						Facultad; y la jefatura de la unidad de secretaría,
						quien revisa y administra el trámite documentario.
						Conoce más acerca de este órgano de autoridad ingresando
						al{' '}
						<a
							className="text-primary"
							href="https://sum.unmsm.edu.pe/assets/Estatuto/estatuto.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Estatuto de la UNMSM
						</a>
						.
					</p>
					<p className="mb-1">
						<span className="font-bold text-tertiary">Decano</span>
						<span className="mx-2 text-tertiary font-bold">|</span>
						<span className="text-textColorOne font-bold">
							Dr. Miguel Gerardo Inga Arias
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Profesor principal, investigador y lingüista
						<br />
						Licenciado en Educación con mención en Lengua y
						Literatura, magíster en Lingüística y doctorado en
						Educación por la UNMSM.
					</p>
					<p className="mb-5">
						Catedrático con más de 35 años de experiencia en
						instituciones educativas de nivel secundario,
						preuniversitario y universitario, tanto de pre y
						posgrado. Creador, junto con los doctores Gonzalo
						Pacheco y Raymundo Casas, de la Prueba de Destrezas
						Cognitivas (DECO), y miembro de la Red Latinoamericana
						de Estudios sobre trabajo docente (Red Estrado). Además,
						fue jefe de la Oficina de Estudios y Elaboración de
						Pruebas de la Oficina de Admisión de la UNMSM
						(2012-2016) y vicedecano académico de la Facultad de
						Educación de la UNMSM (2016-2017).
					</p>
					<p className="mb-6">
						Articulista habitual en la revista del Instituto de
						Investigaciones y revistas indizadas; es autor, entre
						otros títulos, de Memoria Operativa, inferencia y
						gramática en la comprensión lectora, (editorial
						académica española) y Comprensión lectora: el modelo de
						destrezas cognitivas, (Mantaro). Ha recibido la
						distinción como investigador en Ciencia y Tecnología del
						SINACYT: investigador REGINA y el reconocimiento de la
						UNMSM por la asesoría de tesis Presuposición pragmática
						e ironía verbal: la cognición irónica. Desde el 2018, es
						responsable del Grupo de Investigación Conocimiento y
						Desarrollo hasta la fecha.
					</p>
					<div className="flex gap-x-5">
						<Boton
							secondary
							className="mb-6 text-primary"
							onClick={() =>
								window.open(
									'https://cdn.www.gob.pe/uploads/document/file/3981416/1.%20RR%20Decano%20Miguel%20Inga%20Arias.pdf.pdf?v=1672069416'
								)
							}
						>
							<span>
								<DocumentosFillIcon className="w-5 h-5 mr-2 fill-primary" />
							</span>
							<span>Resolución rectoral</span>
						</Boton>
						<a
							className="px-3 py-2 bg-primary hover:bg-tertiary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
							href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=80367"
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
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-educacion/nosotros/autoridades-y-organos/decano-educacion-miguel-inga-unmsm.jpg"
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
							decanoedu@unmsm.edu.pe
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
							(+51) 619 7000 anexo 3001
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

export default Consejo;
