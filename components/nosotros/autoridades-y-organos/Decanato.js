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
							rel="noopener noreferrer"
						>
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
							Dr. Enrique Javier Cornejo Ramírez
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Licenciado en Economía por la Universidad de Lima,
						magíster en Administración por la Universidad de San
						Martín de Porres y doctor en Administración por la
						Universidad Nacional Federico Villareal
					</p>
					<p className="mb-5">
						Lleva más de 40 años ejerciendo como docente a nivel de
						pregrado y posgrado en universidades de Perú, Ecuador y
						Bolivia. Se ha desempeñado como presidente del Instituto
						de Comercio Exterior del Perú; ministro tanto de
						Vivienda, Construcción y Saneamiento como de Transportes
						y Comunicaciones; presidente ejecutivo del Banco de la
						Nación del Perú; director del Banco Central de Reserva
						del Perú; presidente ejecutivo del Banco de la Vivienda
						del Perú; miembro titular del Consejo Consultivo del
						Banco Latinoamericano de Exportaciones, secretario Pro
						Témpore del Parlamento Andino y dos veces director del
						Departamento de Economía de la Universidad de Lima.
					</p>
					<p className="mb-6">
						Ha publicado más de 1500 artículos científicos y ensayos
						en revistas peruanas e internacionales. Asimismo, ha
						escrito 36 libros de los cuales los más recientes son
						{`“La Innovación Política: No es sólo cuestión de hacer
						campañas y ganar elecciones”`}{' '}
						(2018),{' '}
						{`“El Paso siguiente
						de la Globalización”`}{' '}
						(2017) y{' '}
						{`“El Eslabón de la
						Economía: Usura, Interés y Economía”`}{' '}
						(2017). Ha realizado diferentes investigaciones para la
						Facultad de Economía de la Universidad de Lima, la Junta
						del Acuerdo de Cartagena, el Programa de las Naciones
						Unidas para el Desarrollo, entre otras instituciones.
						Obtuvo numerosas distinciones a lo largo de su vida
						profesional como el premio América Latina otorgado por
						la Asociación Latinoamérica de Integración y la
						Fundación Banco de Boston de Buenos Aires-Argentina,
						ganador del concurso para periodista especializados en
						economía organizado por el City Bank National
						Association, y muchas más condecoraciones por su
						producción científica y sus labores.
					</p>
					<div className="flex gap-x-5">
						<a
							className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
							href="https://cdn.www.gob.pe/uploads/document/file/5047023/RESOLUCI%C3%93N%20RECTORAL-002705-2022-R%20DIRECTOR%20UNIDAD%20DE%20POSGRADO%20CORNEJO%20RAMIREZ%20FCA.pdf?v=1693000077"
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
									'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=73943'
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
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fca-posgrado/Nosotros/dr-cornejo.jpg"
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
							vicedecanoip.administracion@unmsm.edu.pe
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

export default Decanato;
