export const getDirectorioPorTipo = (directorio) => {
	const directorio_general = directorio.filter(
		(e) => e.attributes.unidad_posgrado === false
	);
	const unidades_posgrado = directorio.filter(
		(e) => e.attributes.unidad_posgrado === true
	);

	return { directorio_general, unidades_posgrado };
};
