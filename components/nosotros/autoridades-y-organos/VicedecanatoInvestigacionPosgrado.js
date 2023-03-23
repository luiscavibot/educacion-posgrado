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

const VicedecanatoInvestigacionPosgrado = () => {
	return (
		<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
			<div className="md:col-span-6">
				<div className="mb-6">
					<p className="mb-8">
						Organismo de apoyo al Decanato con el ejercicio de sus
						funciones y está encargado de coordinar y organizar las
						actividades de investigación, así como las relacionadas
						con estudios de investigación de los institutos y de la
						Unidad de Posgrado. Promueve la incorporación y
						desarrollo de todos los docentes en el campo de la
						investigación; e incentiva la publicación y difusión de
						los trabajos de investigación, tesis, patentes,
						artículos, entre otros relacionados. Está conformado por
						el/la vicedecano/a de Investigación y Posgrado, Unidades
						dependientes y personal administrativo correspondiente.
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
						<span className="font-bold text-tertiary">
							Vicedecano de Investigación y Posgrado
						</span>
						<span className="mx-2 text-tertiary font-bold">|</span>
						<span className="text-textColorOne font-bold">
							Dr. Felix Hugo Milla Flores
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Profesor principal e investigador.
						<br />
						Químico Farmacéutico por la Universidad Nacional Mayor
						de San Marcos, magíster en Educación con mención en
						Docencia e Investigación Universitaria por la
						Universidad de San Martín de Porres, y doctorado en
						Farmacia y Bioquímica por la UNMSM.
					</p>
					<p className="mb-5">
						Es docente universitario en la UNMSM, UNAC y Universidad
						Inca Garcilaso de la Vega. Con experiencia laboral como
						analista en el convenio Backus y Johnston-ITINTEC, y
						Jefe Laboratorio Control de Calidad-Bromatológico en la
						Marina de Guerra del Perú. Además, se ha desempeñado
						como director del Instituto de Investigación en Ciencias
						Farmacéuticas y Recursos Naturales de la facultad de
						Farmacia y Bioquímica (UNMSM); también fue miembro del
						Consejo de Facultad (2016-2020); y director de la Unidad
						Posgrado de la Facultad de Farmacia Bioquímica (ene.
						2020- dic. 2020).
					</p>
					<p className="mb-6">
						Ha realizado diversas investigaciones y publicaciones en
						importantes revistas de divulgación científica; además,
						ha sido reconocido con tres diplomas de agradecimiento
						por su labor como jurado calificador del premio ADIFAN
						Innovación en Ciencias y Tecnología Farmacéuticas, así
						como otros reconocimientos académicos.
					</p>
					<div className="flex gap-x-5">
						<Boton
							secondary
							className="mb-6"
							onClick={() =>
								window.open(
									'https://cdn.www.gob.pe/uploads/document/file/3819509/3.%20RR%20Vicedecano%20de%20Investigaci%C3%B3n%20y%20Posgrado%20Hugo%20Milla%20Flores.pdf.pdf?v=1667935534',
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
							href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=96089"
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
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-farmacia-bioquimica/nosotros/autoridades-y-organos/vicedecano-investigacion-hugo-milla.jpg"
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
							vicedecanoip.farmacia@unmsm.edu.pe
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
							(+51) 619 7000 anexo 4823
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

export default VicedecanatoInvestigacionPosgrado;
