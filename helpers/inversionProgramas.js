export const totalCreditos = (arreglo) => {
	const creditos = arreglo.reduce((a, e) => {
		console.log(e.attributes.credito);
		if (e.attributes.tipo === 'normal') {
			a = a + e.attributes.credito;
		}
		return a;
	});
};
