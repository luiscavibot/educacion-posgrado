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
				{/* <ul className="mb-6 list-disc list-inside">
					<li className="mb-2">Dr. Eduardo Flores Juárez - Decano</li>
					<li className="mb-2">
						Dr. Víctor Críspin Pérez – Miembro docente
					</li>
					<li className="mb-2">
						Mg. Juan José Ponce Cobos – Miembro docente
					</li>
					<li className="mb-2">
						Dr. Christian Solis Calero – Miembro docente
					</li>
					<li className="mb-2">
						Dr. Jorge Jave Nakayo - Miembro docente
					</li>
					<li className="mb-2">
						Q.F. José F. Jaúregui Maldonado - Miembro docente
					</li>
					<li className="mb-2">
						Q.F. Alfredo Alonzo Castillo Calle – Profesor auxiliar
					</li>
				</ul> */}
				<p className="font-bold mb-6">
					Miembros Estudiantes del Consejo{' '}
				</p>
				{/* <ul className="list-disc list-inside">
					<li className="mb-2">
						Alum. Gianfranco Talavera Gutiérrez
					</li>
					<li className="mb-2">
						Alum. Luzvi Valentina Centeno Merino
					</li>
					<li className="mb-2">
						Alum. Katiushka Melissa Meneses Narva
					</li>
				</ul> */}
			</div>
			<Link href="/transparencia?tab=actas-del-consejo">
				<Boton className="mt-6">
					<span>
						<DosDocumentosFillStroke className="w-5 h-5 mr-2" />
					</span>
					<span>Ver actas del consejo</span>
				</Boton>
			</Link>
		</>
	);
};

export default Consejo;
