import React from 'react';

import Link from 'next/link';

const RequisitosDiplomatura = () => {
	return (
		<>
			<div className="overflow-x-auto">
				<p className="mb-4">
					El postulante a los programas de diplomaturas deberá enviar
					la documentación en formato PDF al link de Inscripción:{' '}
					<a
						href="https://bit.ly/inscripcion23d"
						target="_blank"
						rel="noreferrer noopener"
						className="link"
					>
						https://bit.ly/inscripcion23d
					</a>
					, que corresponde al registro para la inscripción de la
					Diplomatura de la Unidad de Posgrado de Ciencias
					Administrativas, adjuntando los siguientes documentos:
				</p>
				<ol className="list-decimal">
					<li className="py-2">
						<p className="font-bold mb-2">
							Requisitos básicos para un participante
						</p>
						<ul className="list-disc list-inside">
							<li className="py-2">
								<a
									className="link"
									target="_blank"
									href="https://www.gob.pe/488-obtener-constancia-de-inscripcion-de-diplomas"
									rel="noreferrer noopener"
								>
									Constancia de inscripción en línea del grado
									de Bachiller emitido por SUNEDU
								</a>{' '}
								o la copia del diploma de grado de Bachiller
								fedateado por la universidad de procedencia (*).
							</li>
							<li className="py-2">
								Copia simple del documento de identidad (DNI,
								carné de extranjería o pasaporte).
							</li>
							<li className="py-2">
								Recibo de pago de la primera cuota o total del
								programa.
							</li>
						</ul>
						<p className="py-2">
							(*) Los postulantes que obtuvieron el grado de
							Bachiller en la Universidad Nacional Mayor de San
							Marcos solo presentarán copia simple.
						</p>
					</li>
					<li className="py-2">
						<p className="font-bold mb-2">
							Requisitos adicionales para participantes que
							acceden a un descuento corporativos
						</p>
						<ul className="list-disc list-inside">
							<li className="py-2">Compromiso de Pago</li>
							<li className="py-2">Declaración Jurada</li>
						</ul>
						<p className="py-2">
							Los 3 participantes libres que se agrupen se
							comprometen a firmar el compromiso de pago y la
							declaración jurada como requisitos indispensables
							para acceder y mantener el dicho descuento.
						</p>
					</li>
				</ol>
			</div>
		</>
	);
};

export default RequisitosDiplomatura;
