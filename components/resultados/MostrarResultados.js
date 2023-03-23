import React from 'react';
import Link from 'next/link';
import DescripcionResultado from './DescripcionResultado';
import TituloResultado from './TituloResultado';
import RutaResultado from './RutaResultado';
import Cargando from './Cargando';

const MostrarResultados = ({ resultados, loadingResultados, tipo }) => {
	return !loadingResultados ? (
		resultados.length > 0 ? (
			<>
				{resultados.map((resultado) => (
					<div className="block mb-8" key={resultado.url}>
						<TituloResultado resultado={resultado} />
						<RutaResultado resultado={resultado} />
						<DescripcionResultado resultado={resultado} />
					</div>
				))}
			</>
		) : (
			<p>No se encontraron resultados coincidentes.</p>
		)
	) : (
		<Cargando />
	);
};

export default MostrarResultados;
