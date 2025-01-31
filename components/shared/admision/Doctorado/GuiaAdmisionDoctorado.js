import React from 'react';

import Paso1 from '../../../icons/Paso1';
import Paso2 from '../../../icons/Paso2';
import Paso3 from '../../../icons/Paso3';
import Paso4 from '../../../icons/Paso4';
import Paso5 from '../../../icons/Paso5';
import Paso6 from '../../../icons/Paso6';
import Paso7 from '../../../icons/Paso7';
import Paso8 from '../../../icons/Paso8';
import Paso9 from '../../../icons/Paso9';
import Link from 'next/link';

import Boton from '../../Boton';

import { Modal, Box } from '@mui/material';
import FormacionContentModal from '../../../formacion-academica/FormacionContentModal';

export const GuiaAdmisionDoctorado = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div>
			<div className="mb-6">
				¿Estás listo/a para postular a un doctorado? Sigue, por favor,
				detenidamente los siguientes pasos del proceso de admisión
				2025-I:
			</div>
			<div className="relative">
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso1 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 1:</p>
						<p>
							Te recomendamos{' '}
							<span className="font-bold">visualizar el</span>{' '}
							<Link href="/admision?programa=doctorado&tab=cronograma-academico">
								<a className="link">cronograma académico</a>
							</Link>{' '}
							con la finalidad de tener conocimiento de la
							programación del proceso de admisión.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso2 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 2:</p>
						<p>
							Luego, debes{' '}
							<span className="font-bold">
								verificar que el programa de interés cuente con
								vacantes
							</span>{' '}
							para el proceso de admisión respectivo.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso3 className="w-10" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 3:</p>
						<p>
							Verifica que{' '}
							<span className="font-bold">
								cumplas con los{' '}
								<Link href="/admision?programa=doctorado&tab=requisitos-para-postular">
									<a className="link">requisitos</a>
								</Link>{' '}
								establecidos
							</span>{' '}
							por la Dirección General de Estudios de Posgrado
							(DGEP) para postular a los programas de doctorado.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso4 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 4:</p>
						<p>
							Si cumples con los requisitos, descarga y{' '}
							<a
								className="link"
								target="_blank"
								href="https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/resumen_hv_postulante_9c4d207cfe.pdf"
								rel="noreferrer noopener"
							>
								llena la hoja de vida
							</a>
							.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso5 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 5:</p>
						<p>
							<Link href="/admision?programa=doctorado&tab=inversion">
								<a className="link">
									Realiza el pago de inscripción
								</a>
							</Link>
							{' '}a través de la plataforma San Market UNMSM y se completan utilizando las siguientes opciones: Banco BCP (de manera presencial o por banca digital) o Yape (aplicación móvil).
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso6 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 6:</p>
						<p>
							Una vez efectuado el pago por derecho de inscripción
							al número de cuenta de la Universidad Nacional Mayor
							de San Marcos, deberás{' '}
							<span className="font-bold">
								habilitar tu comprobante de pago en la
							</span>{' '}
							<a
								className="link"
								target="_blank"
								href="https://posgrado.unmsm.edu.pe/admision/inscripcion/"
								rel="noreferrer noopener"
							>
								plataforma virtual
							</a>{' '}
							<span className="font-bold">
								y registrar tus datos.
							</span>{' '}
							Una vez que finalices el registro de datos, se
							generará tu código de postulante.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso7 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 7:</p>
						<p>
							Envía
							<span className="font-bold">
								{' '}
								al correo electrónico de la Unidad de Posgrado
								de la Facultad de Educación
							</span>{' '}
							<a
								className="link"
								target="_blank"
								href="mailto:upg.educacion@unmsm.edu.pe"
								rel="noreferrer noopener"
							>
								(upg.educacion@unmsm.edu.pe)
							</a>
							<span>
								{' '}
								el expediente completo con los requisitos para
								postular.
							</span>
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center">
						<Paso8 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 8:</p>
						<p>
							Tendrás que rendir las evaluaciones para el programa
							de doctorado:{' '}
							<span className="font-bold">
								examen virtual, evaluación de la hoja de vida y
								presentación de proyecto de investigación.
							</span>{' '}
						</p>
					</div>
				</div>
				<div className="grid grid-cols-[88px_auto] mb-10">
					<div className="border-solid border-2 rounded-full text-tertiary bg-blanco w-[88px] h-[88px] flex items-center justify-center before:block before:absolute before:top-0 before:bg-azulGris before:w-[2px] before:h-[calc(100%-88px)] before:-z-10">
						<Paso9 className="w-10 fill-tertiary" />
					</div>
					<div className="ml-12">
						<p className="font-bold">Paso 9:</p>
						<p>
							Finalmente, revisa la{' '}
							<span className="font-bold">
								relación de postulantes admitidos que será
								publicada en el portal web
							</span>{' '}
							de la Unidad de Posgrado de la Facultad de Educación
							y enviada al correo electrónico de cada ingresante.
						</p>
					</div>
				</div>
			</div>
			<div>
				<p className="font-bold mb-2">
					¿Quieres saber más de este proceso de admisión?
				</p>
				<p className="mb-2">
					¡No te preocupes! Estamos aquí para ayudarte{' '}
				</p>
				<Boton
					text="Contáctanos"
					// secondary
					bold
					onClick={() => handleOpen()}
				/>

				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box
						className="w-[90%] md:w-[60%] h-[90vh] md:h-auto overflow-auto rounded-lg"
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							bgcolor: 'transparent',
						}}
					>
						<FormacionContentModal
							handleClose={handleClose}
							responsableEmail="upg.educacion@unmsm.edu.pe"
							telefono="(+51) 619 7000 anexo 2624"
						/>
					</Box>
				</Modal>
			</div>
		</div>
	);
};
