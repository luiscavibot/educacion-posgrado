import React from 'react';
import { WhatsappIcon } from '../../../icons/WhatsappIcon';

export const Presentacion = () => {
	return (
		<>
			<div className="ml-6 mt-6">
				<p className="mb-6">
					Son estudios que tienen como finalidad perfeccionar a
					profesionales titulados en el campo de Farmacia y
					Bioquímica. Conduce al Título Profesional de Especialista en
					un área definida. Tienen una duración mínima de cuatro
					semestres académicos y un mínimo de cuarenta (40) créditos.
				</p>
				<p className="mb-6">
					Contamos con seis (6) programas de Segundas Especialidades:
				</p>
				<div className="mb-6">
					<p className="font-bold mb-4">
						Modalidad residentado Químico Farmacéutico:
					</p>
					<ul className="list-disc list-inside mb-4 pl-3 font-normal">
						<li className="subtitle">
							<div className="inline-flex items-center">
								<p className="mr-2 font-normal mb-2">
									Farmacia Clínica
								</p>
							</div>
						</li>
						<li className="subtitle">
							<div className="inline-flex items-center">
								<span className="mr-2 font-normal mb-2">
									Toxicología y Química legal
								</span>
							</div>
						</li>
						<li className="subtitle">
							<div className="inline-flex items-center">
								<span className="mr-2 font-normal mb-2">
									Farmacia Hospitalaria
								</span>
							</div>
						</li>
					</ul>
				</div>
				<div className="mb-6">
					<p className="font-bold mb-4 text-tertiary">
						Modalidad académica (actualmente en proceso de
						admisión*):
					</p>
					<ul className="list-disc list-inside mb-4 pl-3 font-normal">
						<li className="subtitle">
							<div className="inline-flex items-center">
								<p className="mr-2 font-normal mb-2">
									Industria Farmacéutica
								</p>
							</div>
						</li>
						<li className="subtitle">
							<div className="inline-flex items-center">
								<span className="mr-2 font-normal mb-2">
									Políticas y Regulación Farmacéutica
								</span>
							</div>
						</li>
						<li className="subtitle">
							<div className="inline-flex items-center">
								<span className="mr-2 font-normal mb-2">
									Productos Sanitarios, Materiales Biomédicos
									y Dispositivos Médicos
								</span>
							</div>
						</li>
					</ul>
					<p className="mb-4">
						(*)Ten en cuenta que la
						<span className="font-bold">
							{' '}
							inscripción extemporánea{' '}
						</span>
						es hasta el
						<span className="font-bold"> 24 de marzo</span>, el
						examen de aptitud es el 25 marzo e inicio de clases el
						10 de abril para proceso de admisión 2023-I.
					</p>
				</div>
				<div className="mb-6">
					<p className="font-bold mb-4">
						¿Te gustaría saber más sobre nuestras Segundas
						Especialidades?
					</p>
					<p className="mb-4">
						¡Nuestro equipo se encuentra listo para ayudarte!
						Consulta tus dudas y te responderemos lo antes posible.
					</p>
					<p className="mb-4">
						<span className="mr-2">Correo electrónico:</span>
						<a className="text-secondary font-bold">
							upg.farmacia@unmsm.edu.pe
						</a>
					</p>
					<p className="mb-4">
						<span className="mr-2">Teléfono:</span>
						<a className="text-secondary mr-3">(+51) 988 089 955</a>
						<a
							href="https://wa.me/+51988089955"
							target="_blank"
							rel="noopener noreferrer"
							className={`inline-block cursor-pointer border-[1px] border-primary rounded-lg py-2 px-3  font-medium text-sm text-tertiary duration-300 bg-primary hover:-translate-y-1`}>
							<span className="font-semibold flex">
								<div className="mt-[2px] mr-2">
									<WhatsappIcon />
								</div>
								Asesoría Virtual
							</span>
						</a>
					</p>
				</div>
			</div>
		</>
	);
};
