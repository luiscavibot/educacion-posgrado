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

const DireccionAdministrativa = () => {
	return (
		<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
			<div className="md:col-span-6">
				<div className="mb-6">
					<p className="mb-8">
						Órgano encargado de la gestión económica y
						administrativa, encargado de controlar y ejecutar las
						acciones propias de recursos humanos, mantenimiento,
						publicaciones, recursos financieros y trámite
						documentario. Asimismo, presta apoyo administrativo a
						los órganos de gobierno, línea y dirección, ejecuta el
						presupuesto, control de ingresos y egresos de los
						recursos económicos de la facultad. Está conformado por
						el/la director/a de la Dirección Administrativa y el
						personal administrativo/técnico correspondiente. Conoce
						más acerca de esta Dirección ingresando al Manual de
						Organización y Funciones (
						<a
							className="text-secondary"
							href="https://cdn.www.gob.pe/uploads/document/file/1979591/MOF%20de%20la%20Facultad%20de%20Qu%C3%ADmica%20e%20Ingenier%C3%ADa%20Qu%C3%ADmica..pdf?v=1624896516"
							target="_blank"
							rel="noopener noreferrer"
						>
							MOF
						</a>
						).
					</p>
					<p className="mb-1">
						<span className="font-bold text-tertiary">
							Director administrativo
						</span>
						<span className="mx-2 text-tertiary font-bold">|</span>
						<span className="font-bold text-textColorOne">
							Eco. Delfor Ronald Crispin Galarza
						</span>
					</p>
					{/* <p className="text-sm text-tertiary font-medium italic mb-5">
						Administrador y especialista en Marketing.
						<br />
						Licenciado en Marketing y Dirección de Empresas, y
						egresado de la Maestría en Administración con mención en
						Gestión Empresarial.
					</p> */}
					{/* <p className="mb-5">
						Cuenta con experiencia laboral como gerente
						administrativo, marketing y comunicaciones en Punto
						Digital Revolution & Generation, personal de apoyo en la
						Dirección y Coordinación Académica de la Universidad
						Complutense de Madrid (España), encargado de gestionar
						estrategias de comunicación externa en la Unidad de
						Posgrado de la Facultad de Educación, y
						encargado del área de marketing y publicidad en el
						Centro de Idiomas de la UNMSM; además, fue jefe de la
						Oficina de Comunicaciones e Imagen Institucional en la
						Universidad Nacional Intercultural de la Selva Central
						Juan Santos Atahualpa.
					</p>
					<p className="mb-6">
						Ha recibido el reconocimiento por el “Proceso de
						implementación y desarrollo del Sistema de Gestión de la
						Calidad” con base en la norma internacional ISO 9001 en
						la Escuela de Posgrado de la UNMSM (2015).
					</p> */}
					<div className="flex gap-x-5">
						<a
							className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
							href="https://cdn.www.gob.pe/uploads/document/file/4008957/RR-005779-2021-R-director-administrativo-facultad-quimica-ingenieria-quimica.pdf.pdf?v=1672412171"
							target={'_blank'}
							rel="noopener noreferrer"
						>
							<span className="flex items-center justify-center">
								<DocumentosFillIcon className="w-5 h-5 mr-2 fill-complementaryOne" />
								Resolución rectoral
							</span>
						</a>
						{/* <Boton
							secondary
							className="mb-6 text-primary"
							onClick={() =>
								window.open(
									'https://cdn.www.gob.pe/uploads/document/file/4208051/10.%20R.R.%20Instituto%20de%20investigaciones%20Yolvi%20Oco%C3%B1a.pdf.pdf?v=1677765813'
								)
							}>
							<span>
								<DocumentosFillIcon className="w-5 h-5 mr-1 fill-primary" />
							</span>
							<span>Hoja de vida</span>
						</Boton> */}
					</div>
				</div>
			</div>
			{/* NOTE: COORDINADORES */}
			<div className="md:col-span-2">
				<div className="mb-6">
					<Image
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/director-adminsitrativo-delfor-crispin.jpg"
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
							diradmin.quimica@unmsm.edu.pe
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
							(+51) 619 7000 anexo 1205
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

export default DireccionAdministrativa;
