export const getPathTipoPrograma = (tipoPrograma) => {
	let result = '';
	switch (tipoPrograma) {
		case 'MAESTRIA':
			result = 'maestria';
			break;
		case 'DIPLOMATURA':
			result = 'diplomatura';
			break;
		case 'DOCTORADO':
			result = 'doctorado';
			break;
		case 'POSDOCTORADO':
			result = 'posdoctorado';
			break;
		default:
			break;
	}
	return result;
};
