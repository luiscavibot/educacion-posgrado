import React from 'react';
import Image from 'next/future/image';
import CorreoIcon from '../../icons/CorreoIcon';
import TelefonoStroke from '../../icons/TelefonoStroke';
import DocumentosFillIcon from '../../icons/DocumentosFillIcon';
import Boton from '../../shared/Boton';
const InstitutoInvestigacion = () => {
	return (
		<>
			<p className="mb-8 col-span-full text-textColorTwo">
				Es la Unidad Operativa de la facultad encargada de promover,
				planificar, organizar, supervisar, registrar y difundir las
				investigaciones científicas y tecnológicas en el área educativa.
				Entre sus funciones se destaca la organización de programas de
				entrenamiento docente en los diferentes métodos de investigación
				científica, a través del desarrollo de eventos académicos y
				cursos de posgrado; asimismo, publica y difunde anualmente los
				trabajos de investigación realizados por sus docentes miembros.
				Está conformada por el/la director/a y los profesores dedicados
				a la investigación. Conoce más acerca de esta Unidad ingresando
				al Manual de Organización y Funciones (
				<a
					className="text-primary"
					href="https://cdn.www.gob.pe/uploads/document/file/1979502/MOF%20de%20la%20Facultad%20de%20Educaci%C3%B3n..pdf?v=1624895867"
					target="_blank"
					rel="noopener noreferrer">
					MOF
				</a>
				).
			</p>
			<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
				<div className="md:col-span-6">
					<div className="mb-6">
						{/* <p className="text-secondary font-bold mb-5">
							Departamento Académico de Educación
						</p> */}
						<p className="mb-1">
							<span className="font-bold text-secondary">
								Director
							</span>
							<span className="mx-2 text-secondary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dr. Yolvi Javier Ocaña Fernández
							</span>
						</p>
						<p className="text-sm text-secondary font-medium italic mb-5">
							Docente principal e investigador
							<br />
							Licenciado en Educación Secundaria, maestría en
							Docencia Universitaria y doctorado en Educación por
							la UNMSM.
						</p>
						<p className="mb-5">
							Cuenta con experiencia en docencia universitaria de
							pre y posgrado en instituciones privadas como en la
							Universidad Privada San Juan Bautista, Universidad
							César Vallejo y Universidad Privada del Norte e
							instituciones públicas como en la UNMSM. Además, se
							ha desempeñado como asesor en más de 25 tesis para
							grados de maestría y doctorado.
						</p>
						<p className="mb-6">
							Ha realizado más de 30 investigaciones sobre la
							línea de rendimiento académico universitario,
							gestión del conocimiento, estrategias de aprendizaje
							y más. Además, es autor de libros y escritor de más
							de 40 artículos relativos a distintos enfoques de la
							educación. Entre sus últimas publicaciones, destacan
							La competencia digital en el docente universitario
							(2020) y el libro La Metodología del Aprendizaje
							Servicio en la Educación Superior Universitaria
							(2022).
						</p>
						<div className="flex gap-x-5">
							<a
								className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=24333"
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
										'https://cdn.www.gob.pe/uploads/document/file/4208051/10.%20R.R.%20Instituto%20de%20investigaciones%20Yolvi%20Oco%C3%B1a.pdf.pdf?v=1677765813'
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
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-educacion/nosotros/autoridades-y-organos/director-instituto-investigaciones-educacion-yolvi-oca%C3%B1a.jpg"
							width={209}
							height={224}
							quality={100}
							className="w-full object-cover max-w-[254px] m-auto"
						/>
					</div>

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
								iie.educacion@unmsm.edu.pe
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
								(+51) 619 7000 anexo 3034
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
								lunes a viernes de 8:00 a. m. a 1:00 p. m. y de
								2:00 p. m. a 3:45 p. m.
							</p>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default InstitutoInvestigacion;
