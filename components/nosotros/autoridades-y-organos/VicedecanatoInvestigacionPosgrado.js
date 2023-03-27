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
							Vicedecano de Investigación y Posgrado
						</span>
						<span className="mx-2 text-tertiary font-bold">|</span>
						<span className="text-textColorOne font-bold">
							Dr. Mario Ceroni Galloso
						</span>
					</p>
					<p className="text-sm text-tertiary font-medium italic mb-5">
						Profesor principal, investigador y asesor de tesis.
						<br />
						Licenciado en Química por la UNMSM, magíster en Química
						por la PUCP y doctorado en Química por la Universidad de
						Oviedo.
					</p>
					<p className="mb-5">
						Docente en la UNMSM por más de 30 años. Se ha
						desempeñado como evaluador en proyectos de investigación
						básica en la Universidad Nacional de Ingeniería y en
						pasantías del Programa Nacional de Investigación
						Científica y Estudios Avanzados - Prociencia. Ha
						realizado más de 35 investigaciones sobre la línea de la
						síntesis química, organometálica, química de
						coordinación, seguridad química, entre otros; y fue
						asesor en diversas tesis para grados de licenciatura,
						maestría y doctorado. Responsable y participante de
						proyectos de investigación, de los cuales el último se
						titula
						{` "Síntesis y caracterización de ligandos O, N y S
						dadores por reacción de n-tiocarbamoil-benzimidoil
						cloruro con piridina-4-carbohidrazida (isoniacida),
						piridina-2-carbohidrazida y piridina-3-carbohidrazida.
						evaluación de la actividad tuberculostática"
						desarrollado en 2021.`}
					</p>
					<p className="mb-6">
						Ha recibido distinciones a nivel nacional como el premio
						a mejor investigador de la Facultad de Química e
						Ingeniería Química, premio al mérito científico,
						reconocimiento al investigador con publicaciones
						científicas, entre otras.
					</p>
					<div className="flex gap-x-5">
						<a
							className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
							href="https://cdn.www.gob.pe/uploads/document/file/3989201/R.R.%20003343-2021-R%20-vicedecano-investigacion-posgrado-facultad-quimica-ingenieria-quimica.pdf.pdf?v=1672152819"
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
									'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=345'
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
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/vicedecano-investigacion-mario-ceroni.jpg"
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
							viceip.quimica@unmsm.edu.pe
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
							(+51) 619 7000 anexo 1204
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
