import { APP_CORREO } from '../config/consts';

export const enviarInformacionParaContacto = (formData) => {
	fetch(`${APP_CORREO}/informacion-contacto-desde-home`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res.mnsj);
		});
};

export const solicitarInformacionPorCorreo = (data) => {
	fetch(`${APP_CORREO}/informacion-programa-desde-programa`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res.mnsj);
		});
};
