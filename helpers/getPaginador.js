export const getPaginador = (
	arreglo,
	paginaActual,
	cantidadPorPagina,
	buscador = ''
) => {
	const arregloBusqueda = arreglo.filter((item) =>
		item.attributes.nombre
			.toLowerCase()
			.includes(buscador.toString().toLowerCase())
	);
	const total = arregloBusqueda.length;

	const data = arregloBusqueda.slice(
		(paginaActual - 1) * cantidadPorPagina,
		cantidadPorPagina * paginaActual
	);

	return { data, total };
};
