import Link from 'next/link';

const RutaResultado = ({ resultado }) => {
	let rutaArray = [];
	if (resultado.tipo === 'maestrias') {
		rutaArray = [
			{ url: 'maestrias', nombre: 'Maestrías' },
			{ url: '', nombre: resultado.titulo },
		];
	} else if (resultado.tipo === 'doctorados') {
		rutaArray = [
			{ url: 'doctorados', nombre: 'Doctorados' },
			{ url: '', nombre: resultado.titulo },
		];
	}

	return (
		<ul className="breadcrumbs text-secondary mb-1">
			<li className="breadcrumbs-item">
				<Link href="/" passHref>
					<a className="hover:font-bold">Inicio</a>
				</Link>
			</li>

			{rutaArray.map((ruta, id) =>
				id !== rutaArray.length - 1 ? (
					<li
						className="breadcrumbs-item hover:font-bold duration-100"
						key={ruta.url}>
						<Link href={ruta.url} passHref>
							<a>{ruta.nombre}</a>
						</Link>
					</li>
				) : (
					<li className="breadcrumbs-item" key={ruta.url}>
						{ruta.nombre}
					</li>
				)
			)}
		</ul>
	);
};

export default RutaResultado;
