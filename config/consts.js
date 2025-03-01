// export const BASE_URL = 'http://localhost:4000';
export const POSGRADO_URL = 'https://cm.posgrado.unmsm.edu.pe/api';
// export const APP_CORREO = 'https://appcorreos.unmsm.edu.pe/api/posgrado';
// export const APP_CORREO = 'http://localhost:8080/api/posgrado';
export const BASE_URL =
	process.env.NODE_ENV === 'development'
		? 'https://educacionback.unmsm.edu.pe'
		: 'https://educacionback.unmsm.edu.pe';

export const APP_CORREO =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:8080/api/posgrado'
		: 'https://appcorreos.unmsm.edu.pe/api/posgrado';

// SLUG DE CARRERA PARA LAS APIS
export const SLUG_CARRERA = 'farmacia-y-bioquimica';

export const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL;
export const CORREO_COMUNICACIONES =
	process.env.NEXT_PUBLIC_CORREO_COMUNICACIONES;
