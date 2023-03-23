export const getProgramasCarrousel = (arreglo1, arreglo2) => {
	let resultado = [];
	const arr1 = [...arreglo1]
		.sort(() => (Math.random() > 0.5 ? 1 : -1))
		.slice(0, 3);

	let new_arr1 = arr1.map((e) => {
		return { ...e, tipo: 'Maestría' };
	});

	const arr2 = [...arreglo2]
		.sort(() => (Math.random() > 0.5 ? 1 : -1))
		.slice(0, 3);

	let new_arr2 = arr2.map((e) => {
		return { ...e, tipo: 'Doctorado' };
	});

	resultado = [...new_arr1, ...new_arr2];

	return resultado.sort(() => (Math.random() > 0.5 ? 1 : -1));
};
