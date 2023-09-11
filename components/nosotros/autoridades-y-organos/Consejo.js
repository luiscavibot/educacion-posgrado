import React from 'react';
import Image from 'next/future/image';

import CorreoIcon from '../../icons/CorreoIcon';
import DocumentosFillIcon from '../../icons/DocumentosFillIcon';
import Boton from '../../shared/Boton';

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
						facultad. Es el representante ante el Consejo
						Universitario y Asamblea Universitaria, y encabeza el
						Consejo de Facultad. Conoce más acerca de esta autoridad
						ingresando al{' '}
						<a
							className="text-secondary"
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
							Dr. Augusto Hidalgo Sánchez
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Bachiller en Ciencias Económicas, Licenciado en
						administración, con maestría en Administración, maestría
						en Ciencias en la Universidad de Tennessee. Es doctor en
						Administración.
					</p>
					<p className="mb-5">
						Fue Vicedecano de Investigación y Posgrado de la
						Facultad de Ciencias Administrativas de la UNMSM;
						Presidente de la Comisión Organizadora del programa de
						Estudios Generales de la UNMSM; Director de la Escuela
						de Administración de Negocios Internacionales;
						Vicepresidente Administrativo (a cargo de la
						organización inicial), de la Universidad Nacional de
						Cañete; así como Decano de la Facultad de Administración
						(el primer decano, a cargo de su institucionalización),
						de la Universidad Norbert Wiener, entre otros cargos.
					</p>
					<p className="mb-6">
						Con más de 40 años de experiencia profesional, el doctor
						Hidalgo es catedrático principal en la UNMSM y se ha
						desempeñado como docente en pre y posgrado en otras
						universidades del país; así como docente invitado en la
						Universidad Técnica de Machala – Ecuador. Su producción
						intelectual se refleja como autor, coautor y editor de
						numerosos libros y ha publicado diversos artículos
						científicos en revistas especializadas. También ha
						desempeñado cargos gerenciales, entre ellos Gerente de
						la Red Asistencial de Lambayeque de EsSalud. Gerente
						General del Hospital Nacional “Almanzor Aguinaga Asenjo”
						de Chiclayo – EsSalud y Secretario Técnico (Gerente
						General) del Consejo Transitorio de Administración
						Regional (CTAR) de La Libertad-Trujillo.
					</p>
					<div className="flex gap-x-5">
						<a
							className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
							href="https://cdn.www.gob.pe/uploads/document/file/1964954/R.R.%20N.%C2%BA%20017240%20-%202020.-%20Encargar%20a%20las%20Facultades%2C%20Secretar%C3%ADa%20General%2C%20Direcci%C3%B3n%20General%20de%20Administraci%C3%B3n%2C%20Oficinas%20Generales%20y%20Dependencias%20de%20la%20Universidad%2C%20el%20cumplimiento%20de%20la%20presente%20Resoluci%C3%B3n..pdf?v=1624460552"
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
									'https://administracion.unmsm.edu.pe/1web2022/wp-content/uploads/2022/04/CV_DR_AUGUSTO_HIDALGO_SANCHEZ.pdf'
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
						src="https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/Nosotros/img_decano_augusto_hidalgo.jpg"
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
							ahidalgos@unmsm.edu.pe
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
							(+51) 619 7000 anexo 1201
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

export default Consejo;
