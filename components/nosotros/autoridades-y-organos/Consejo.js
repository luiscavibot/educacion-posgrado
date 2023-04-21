import React from 'react';
import Link from 'next/link';
import Boton from '../../shared/Boton';
import DosDocumentosFillStroke from '../../icons/DosDocumentosFillStroke';

const Consejo = () => {
	return (
		<>
			<div>
				<p className="mb-6">
					El Consejo de Facultad es el órgano máximo de gobierno de la
					facultad, según el Estatuto de la UNMSM de conformidad con
					la ley n.° 302220 y artículo 57.°, y está integrado por los
					siguientes miembros:
				</p>
				<p className="font-bold mb-6">Miembros docentes del Consejo</p>
				<ul className="mb-6 list-disc list-inside">
					<li className="mb-2">
						Dr. Angulo Cornejo Jorge Reinaldo - Decano
					</li>
					<li className="mb-2">
						Mg. Lino Pacheco María Nieves - Miembro docente
					</li>
					<li className="mb-2">
						Dr. Palomino Infante Rubén Alfredo - Miembro docente
					</li>
					<li className="mb-2">
						Dr. Loroño Gonzalez, Marcos Antonio - Miembro docente
					</li>
					<li className="mb-2">
						Ing. Cardenas Ruiz, Jorge Luis - Miembro docente
					</li>
					<li className="mb-2">
						Mg. Memenza Zegarra Miriam Estela - Miembro docente
					</li>
					<li className="mb-2">
						Ing. Crisóstomo Gordillo Oscar Amado - Miembro docente
					</li>
				</ul>
				<p className="font-bold mb-6">
					Miembros Estudiantes del Consejo{' '}
				</p>
				<ul className="list-disc list-inside">
					<li className="mb-2">Almna. Michelle Pamela Pinto Rojas</li>
					<li className="mb-2">
						Almna. Kerem Yemina Sánchez Chamana
					</li>
					<li className="mb-2">Al. Víctor Stwar Rocha Bardales</li>
					<li className="mb-2">
						Almna. María Del Carmen Aquise Gutiérrez
					</li>
					<li className="mb-2">
						Al. Harold Waldir Julca Salvatierra
					</li>
				</ul>
			</div>
			<Link href="/transparencia?tab=actas-del-consejo">
				<Boton className="mt-6">
					<span>
						<DosDocumentosFillStroke className="w-5 h-5 mr-2 " />
					</span>
					<span>Ver actas del consejo</span>
				</Boton>
			</Link>
		</>
	);
};

export default Consejo;
