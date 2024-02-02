import React from 'react';
import Observacion from '../../../components/shared/Observacion';

export const Paso4 = ({ isOpen }) => {
	return (
		<div
			className={`transition-all duration-1000 transform mx-6 my-4 ${
				isOpen
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'
			}`}>
			<p>
				Para iniciar, envía los siguientes documentos al correo de
				<a> evaluacionturnitin.upgeducacion@unmsm.edu.pe</a>:
			</p>
			<ul>
				<li>
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=share_link"
						rel="noopener noreferrer">
						FUT
					</a>{' '}
					dirigido a la dirección de la Unidad de Posgrado
				</li>
				<li>Tesis en formato Word</li>
				<li>
					Copia del informe final del asesor/a, dictamen de asesor,
					expedito, jurado informantes y los informes favorables de
					los jurados informantes
				</li>
			</ul>
			<p>
				Si no alcanzas el 10 % de similitud; no te preocupes, puedes
				solicitar una segunda revisión adjuntando estos requisitos al
				correo anterior:
			</p>
			<ul>
				<li>
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1SY466ZoRzTIWGuts9rTFVPZQfTgLLrqx/view?usp=share_link"
						rel="noopener noreferrer">
						FUT
					</a>{' '}
					dirigido a la dirección de la Unidad de Posgrado
				</li>
				<li>
					Recibo de pago en el Banco Pichincha (concepto 063-176,
					monto S/ 50.00)
				</li>
			</ul>
		</div>
	);
};
