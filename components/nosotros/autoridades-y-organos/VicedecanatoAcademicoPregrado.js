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
							className="link"
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
							Mg. Manuel Exaltación Bejar Ramos
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Profesor principal, investigador y asesor de tesis.
						<br />
						Licenciado en Ingeniería Química y magíster en Ciencias
						Químicas por la UNMSM.
					</p>
					<p className="mb-5">
						Cuenta con más de 40 años como docente y ha publicado
						trabajos de investigación en revistas científicas entre
						el 2009 y 2011, tales como “Monitoreo de la síntesis del
						YBa2Cu3O7, mediante la difracción de rayos X en polvo”;
						y{' '}
						{`“Desgaste en los sistemas de inyección diésel por
						efecto del elevado contenido de azufre en petróleo
						diesel 2”. `}
					</p>
					<p className="mb-6">
						Obtuvo la distinción de miembro de la Sociedad Química
						del Perú, en calidad de Socio Profesional; y el diploma
						de reconocimiento a los investigadores con publicaciones
						científicas, esto en virtud a su fructífera labor en el
						campo de la investigación científica que le ha permitido
						la producción de conocimientos, los mismos que se han
						plasmado en sus publicaciones en el año 2011.
					</p>
					<div className="flex gap-x-5">
						<a
							className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
							href="https://cdn.www.gob.pe/uploads/document/file/3989175/R.R.%20005547-2022-R%20-%20Vicedecano-Academico-facultad-quimica-ingenieria-quimica.pdf.pdf?v=1672152363"
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
									'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=30705'
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
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/vicedecano-academico-manuel-bejar-quimica-unmsm.jpg"
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
						<p className="mb-3 break-words">mbejarr@unmsm.edu.pe</p>
					</div>
					<div>
						<p className="mb-1 text-tertiary">
							<span>
								<TelefonoStroke className="fill-tertiary inline mr-2 relative bottom-[1px]" />
							</span>
							<span className="font-bold">Teléfono</span>
						</p>
						<p className="mb-3 break-words">
							(+51) 619 7000 anexo 1201
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
