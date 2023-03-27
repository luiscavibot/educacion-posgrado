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
import Separator from '../../shared/Separator';

const EscuelasProfesionales = () => {
	return (
		<>
			<p className="mb-8 col-span-full text-textColorTwo">
				Son los órganos de línea de la facultad encargados de la
				formación profesional para la obtención del grado académico de
				bachiller, título profesional o licenciatura correspondiente, y
				de otorgar la certificación progresiva por los módulos de
				competencia que implemente. Además, gestiona los estudios
				específicos y de especialidad de pregrado; coordina y participa
				en la implementación de los estudios generales; evalúa
				semestralmente los componentes curriculares; establece, en
				coordinación con los responsables de las asignaturas, las plazas
				para ayudantías de cátedra o de laboratorio. Está conformado por
				el/la director/a y el Comité de Gestión de la Escuela
				Profesional. Conoce más acerca de esta Unidad ingresando al
				Manual de Organización y Funciones (
				<a
					className="link"
					href="https://cdn.www.gob.pe/uploads/document/file/1978572/MOF%20de%20la%20Facultad%20de%20Farmacia%20y%20Bioqu%C3%ADmica.pdf"
					target="_blank"
					rel="noopener noreferrer">
					MOF
				</a>
				).
			</p>
			<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
				<div className="md:col-span-6">
					<div className="mb-6">
						<p className="text-tertiary font-bold mb-5">
							Escuela Profesional de Química
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dr. Julio César Santiago Contreras
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal e investigador
							<br />
							Licenciado en Química por la UNMSM, pos-doctorados
							por la Technology Research Institute (Osaka, Japón),
							doctorado en Química por la PUCP y doctorado en
							Ciencias por la Université de Neuchatel (Suiza).
						</p>
						<p className="mb-5">
							Cuenta con más de 25 años de experiencia en docencia
							universitaria en instituciones públicas como en la
							UNMSM e instituciones privadas como en la
							Universidad Peruana Cayetano Heredia y la PUCP. Se
							ha desempeñado como investigador en el Instituto
							Peruano de Energía Nuclear (IPEN). Ha realizado más
							de 40 investigaciones sobre la línea de la actividad
							antioxidante, caracterización de hidrogeles,
							tratamiento de quemaduras, entre otros. Es
							responsable de proyectos multidisciplinarios sobre
							la terapia fotodinámica del cáncer y tratamiento de
							efluentes industriales.
						</p>
						<p className="mb-6">
							Ha recibido distinciones a nivel nacional como el
							premio al Primer Puesto de Proyectos de
							Investigación Científica y Tecnológica, premio de
							trabajador más destacado en el ámbito
							Científico-tecnológico en mérito a la obtención de
							la patente preparación de quitina y quitosano
							utilizando radiación gamma y el premio Bertha del
							Rosario Calderón por el IPEN, premio al investigador
							más destacado de la Fac. de Química e Ing. Química
							por la UNMSM, incorporación a la Academia Nacional
							de Ciencias, medalla nuclear por su contribución a
							las aplicaciones de energía ionizante para la
							preparación de biomateriales, entre otras.
						</p>
						<div className="flex gap-x-5">
							<a
								className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://cdn.www.gob.pe/uploads/document/file/3989300/R.R.%20004741-2021-R%20-ep-quimica-unmsm.pdf.pdf?v=1672154738"
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
										'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=62'
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
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/dir-escuela-quimica-julio-santiago-unmsm.jpg"
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
								epq.quimica@unmsm.edu.pe
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
								(+51) 619 7000 anexo 1230
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
			<Separator className="mb-6" />
			<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
				<div className="md:col-span-6">
					<div className="mb-6">
						<p className="text-tertiary font-bold mb-5">
							Escuela Profesional de Ingeniería Química
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dr. Rubén Alfredo Palomino Infante
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal e investigador.
							<br />
							Licenciado en Ingeniería Química por la Universidad
							Nacional de San Cristóbal de Huamanga, magíster en
							Ingeniería Química por la Victoria University of
							Manchester (Inglaterra) y doctorado en Ingeniería
							Química por la UNMSM.
						</p>
						<p className="mb-5">
							Cuenta con más de 35 años de experiencia en docencia
							universitaria en instituciones públicas como en la
							Universidad Nacional de San Cristóbal de Huamanga,
							Universidad Nacional del Callao, Universidad
							Nacional de Trujillo, Universidad Nacional del
							Altiplano Puno y la UNMSM. Además, ha realizado
							capacitaciones a nivel de posgrado en ingeniería
							química, ciencia e ingeniería de materiales,
							bioprocesos, matemáticas aplicadas, medio ambiente y
							administración industrial en Inglaterra, Estados
							Unidos, Brasil, Argentina, Bolivia, México, Colombia
							y Japón.
						</p>
						<p className="mb-6">
							Ha publicado más de 30 investigaciones sobre
							distintos tópicos como la socio termodinámica,
							cinética de crecimiento de plantas, cinética de
							fermentación, aplicaciones en microscopìa confocal,
							entre otros. Asimismo, fue asesor de tesis para
							grados de licenciatura y maestría, y participó en
							proyectos de investigación en relación a tecnologías
							avanzadas de separación, tratamiento de agua,
							ingeniería del producto para generar valor agregado
							y más. Ha recibido diferentes distinciones, dentro
							de los cuales destaca ser becario de British
							Council, Japan International Cooperation Agency,
							Organización de Estados Americanos, Agencia Española
							de Cooperación Internacional y el CONCYTEC; y el
							premio Graña y Montero a la investigación en
							ingeniería peruana.
						</p>
						<div className="flex gap-x-5">
							<a
								className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://cdn.www.gob.pe/uploads/document/file/3989312/R.R.%20006858-2021-R%20-ep-ingenieria-quimica-unmsm.pdf.pdf?v=1672155031"
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
										'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=14077'
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
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/dir-escuela-ingenieria-quimica-ruben-palomino-unmsm.jpg"
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
								epingequi.quimica@unmsm.edu.pe
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
								(+51) 619 7000 anexo 1208
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
			<Separator className="mb-6" />
			<div className="md:grid md:grid-cols-8 md:gap-7 text-textColorTwo">
				<div className="md:col-span-6">
					<div className="mb-6">
						<p className="text-tertiary font-bold mb-5">
							Escuela Profesional de Ingeniería Agroindustrial
						</p>
						<p className="mb-1">
							<span className="font-bold text-tertiary">
								Director
							</span>
							<span className="mx-2 text-tertiary font-bold">
								|
							</span>
							<span className="font-bold text-textColorOne">
								Dr. Edgar Orlando Nagles Vidal
							</span>
						</p>
						<p className="text-sm text-tertiary font-medium italic mb-5">
							Profesor principal e investigador
							<br />
							Licenciado en Química por la Universidad Santiago de
							Cali de Colombia y doctorado en Química por la
							Pontificia Universidad Católica de Chile.
						</p>
						<p className="mb-5">
							Cuenta con más de 10 años de experiencia en docencia
							universitaria en instituciones privadas como en la
							Pontificia Universidad Católica de Chile y la
							Universidad de Ibagué en Colombia e instituciones
							públicas como en la Universidad de la Amazonía en
							Colombia y la UNMSM.
						</p>

						<p className="mb-5">
							Ha publicado más de 50 investigaciones sobre la
							línea de la electroquímica, su última producción
							científica publicada este año (2023) se titula
							“Detection of Allura Red in Food Samples Using
							Carbon Paste Modified with Lanthanum and Titanium
							Oxides”. Además, fue asesor de tesis para grados de
							licenciatura y maestría, y participó en proyectos de
							investigación en relación al desarrollo de sensores
							electroquímicos con electrodos de carbono vítreo y
							electrodos serigrafiados con nano materiales,
							complejos de coordinación aplicados para detectar
							dopamina, ácido úrico, ácido ascórbico, flavonoides,
							pesticidas y metales tóxicos en muestras de
							alimentos, fluidos biológicos y muestras de agua.
						</p>
						<p className="mb-6">
							Ha recibido diferentes distinciones, dentro de los
							cuales destaca el premio Manuel Elki Patarroyo a la
							Investigación en Colombia y el premio Outstanding
							contribution in reviewing gracias a sus
							contribuciones a la revista Journal of
							Electroanalytical Chemistry en Holanda.
						</p>
						<div className="flex gap-x-5">
							<a
								className="px-3 py-2 bg-primary hover:bg-secondary duration-300 text-blanco rounded-md text-sm font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)] mb-6"
								href="https://cdn.www.gob.pe/uploads/document/file/3989330/R.R.%20004478-2021-R%20-ep-ingenieria-agroindustrial.pdf.pdf?v=1672155259"
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
										'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=134878'
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
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/nosotros/autoridades/dir-escuela-ingenieria-agroindustrial-edgar-nagles-unmsm.jpg"
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
								eaptoxicologia.farmacia@unmsm.edu.pe
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
								(+51) 619 7000 anexo 4825
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

export default EscuelasProfesionales;
