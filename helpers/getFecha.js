import * as _momentTimezone from 'moment-timezone';
const momentTimeZone = _momentTimezone;
const monthNames = [
	'enero',
	'febrero',
	'marzo',
	'abril',
	'mayo',
	'junio',
	'julio',
	'agosto',
	'setiembre',
	'octubre',
	'noviembre',
	'diciembre',
];

export const getFecha = (date) => {
	let formatedDay = momentTimeZone(date).tz('Europe/London').format('DD');
	let formatedMonth = momentTimeZone(date).tz('Europe/London').format('MM');
	let formatedYear = momentTimeZone(date).tz('Europe/London').format('YYYY');
	let formatedDate = `${formatedDay} de ${
		monthNames[formatedMonth - 1]
	} de ${formatedYear}`;
	return formatedDate;
};

export const getFechaNumeros = (date) => {
	let localyformatedDate = momentTimeZone(date)
		.tz('Europe/London')
		.format('DD/MM/YYYY');
	return localyformatedDate;
};

export const getDia = (date) => {
	let localyformatedDate = momentTimeZone(date)
		.tz('Europe/London')
		.format('DD');
	return localyformatedDate;
};

export const getMes = (date) => {
	let localyformatedDate = momentTimeZone(date)
		.tz('Europe/London')
		.format('MM');
	let formato_mes = monthNames[localyformatedDate - 1];
	return formato_mes;
};

export const getMes3Letras = (date) => {
	const fechaHora = new Date(date);
	const formato_mes = monthNames[fechaHora.getMonth()];
	const formato_mes3Letras = formato_mes.slice(0, 3);
	return formato_mes3Letras;
};

export const getHora = (date) => {
	const hora = new Date(date);
	// const formato_hora = ;

	const formato_hora =
		hora.getHours() > 12
			? ('0' + hora.getHours()).slice(-2) +
			  ':' +
			  ('0' + hora.getMinutes()).slice(-2) +
			  ' p.m'
			: ('0' + hora.getHours()).slice(-2) +
			  ':' +
			  ('0' + hora.getMinutes()).slice(-2) +
			  ' a.m';

	return formato_hora;
};
