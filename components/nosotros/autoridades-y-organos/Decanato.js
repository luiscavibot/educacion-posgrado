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
						el/la representante ante el Consejo Universitario y
						Asamblea Universitaria, y encabeza el Consejo de
						Facultad; y la jefatura de la unidad de secretaría,
						quien revisa y administra el trámite documentario.
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
						<span className="font-bold text-tertiary">Decano</span>
						<span className="mx-2 text-tertiary font-bold">|</span>
						<span className="text-textColorOne font-bold">
							Profesor principal e investigador
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Profesor principal, investigador y asesor de tesis.
						<br />
						Licenciado en Química por la UNMSM, magíster en Química
						Inorgánica por la UNMSM y doctorado en Química por la
						Universidad Técnica de Eslovaquia.
					</p>
					<p className="mb-5">
						Lleva más de 40 años ejerciendo como docente
						universitario de universidades nacionales como la UNI y
						la UNMSM. Además, se ha desempeñado como supervisor
						líder de planeamiento en el Banco Central de Reserva del
						Perú, decano del Colegio de Químicos, director de la
						revista Sociedad Química del Perú, entre otros cargos.
						Ha realizado distintas investigaciones publicadas en
						revistas científicas y congresos internacionales sobre
						la línea de síntesis química, nuevos materiales, química
						supramolecular y bioinorgánica; fue asesor de tesis para
						grados de licenciatura, maestría y doctorado; publicó
						libros, dentro de las cuales destacan
						{` "Química de
						Coordinación” (2010), "Koordinationschemie" (2012) y
						"Ácidos y Bases” (2013); `}
						y desarrolló proyectos de investigación con el Servicio
						Alemán de Intercambio Académico (DAAD) en cooperación
						con la Universidad de Leipzig y con el grupo español de
						la Universidad de Burgos financiado por la Agencia
						Española de Cooperación Internacional (AECID).
					</p>
					<p className="mb-6">
						Recibió reconocimientos a nivel nacional por su
						distinguida trayectoria en la producción científica, y a
						nivel internacional como investigador de excelencia por
						la Universidad de Burgos en España.
					</p>
					<div className="flex gap-x-5">
						<a
							className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
							href="https://www.gob.pe/institucion/unmsm/normas-legales/3789911-017244-2020-r"
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
									'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=2086'
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
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/decano-quimica-unmsm-jorge-angulo.jpg"
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
							decanoqui@unmsm.edu.pe
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

export default Decanato;
