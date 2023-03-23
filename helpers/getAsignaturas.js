export const getAsignaturasXAnio = (anio, arreglo) => {
	const asignaturasNormal = arreglo.filter(
		(asignatura) =>
			asignatura.anio === anio && asignatura.electivo === false
	);

	return asignaturasNormal;
};

export const getAsignaturasXSemestre = (semestre, arreglo) => {
	const asignaturasNormal = arreglo.filter(
		(asignatura) =>
			asignatura.semestre === semestre && asignatura.electivo === false
	);

	return asignaturasNormal;
};

export const getAsignaturasXSemestrePosgrado = (semestre, arreglo) => {
	const asignaturasNormal = arreglo.filter(
		(asignatura) =>
			asignatura.attributes.semestre === semestre &&
			asignatura.attributes.tipo === 'normal'
	);

	return asignaturasNormal;
};

export const getElectivos = (arreglo) => {
	const asignaturasElectivo = arreglo.filter(
		(asignatura) => asignatura.electivo === true
	);

	return asignaturasElectivo;
};

export const getElectivosPosgrado = (arreglo) => {
	const asignaturasElectivo = arreglo.filter(
		(asignatura) => asignatura.attributes.tipo === 'electivo'
	);

	return asignaturasElectivo;
};
