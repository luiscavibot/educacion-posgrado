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
	// let formatedDay = momentTimeZone(date).tz('Europe/London').format('DD');
	// let formatedMonth = momentTimeZone(date).tz('Europe/London').format('MM');
	// let formatedYear = momentTimeZone(date).tz('Europe/London').format('YYYY');
	let formatedDay = momentTimeZone.utc(date).format('DD');
	let formatedMonth = momentTimeZone.utc(date).format('MM');
	let formatedYear = momentTimeZone.utc(date).format('YYYY');
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
	// let localyformatedDate = momentTimeZone(date)
	// 	.tz('Europe/London')
	// 	.format('DD');
	let localyformatedDate = momentTimeZone.utc(date).format('DD');
	return localyformatedDate;
};

export const getMes = (date) => {
	// let localyformatedDate = momentTimeZone(date)
	// 	.tz('Europe/London')
	// 	.format('MM');
	let localyformatedDate = momentTimeZone.utc(date).format('MM');
	let formato_mes = monthNames[localyformatedDate - 1];
	return formato_mes;
};

export const getMes3Letras = (date) => {
	const fechaHora = new Date(date);
	const formato_mes = monthNames[fechaHora.getMonth()];
	const formato_mes3Letras = formato_mes.slice(0, 3);
	return formato_mes3Letras;
};

export const getDuracionFecha = (inicio, final) => {
	let formatedDayStart = momentTimeZone.utc(inicio).format('DD');
	let formatedMonthStart = momentTimeZone.utc(inicio).format('MM');
	let formatedYearStart = momentTimeZone.utc(inicio).format('YYYY');
	let formatedDayEnd = momentTimeZone.utc(final).format('DD');
	let formatedMonthEnd = momentTimeZone.utc(final).format('MM');
	let formatedYearEnd = momentTimeZone.utc(final).format('YYYY');
	if (
		formatedDayStart === formatedDayEnd &&
		formatedMonthStart === formatedMonthEnd &&
		formatedYearStart === formatedYearEnd
	) {
		return getFecha(inicio);
	} else if (
		formatedMonthStart === formatedMonthEnd &&
		formatedYearStart === formatedYearEnd
	) {
		return `Del ${formatedDayStart} al ${formatedDayEnd} de ${
			monthNames[formatedMonthStart - 1]
		} de ${formatedYearStart}`;
	} else if (formatedYearStart === formatedYearEnd) {
		return `Del ${formatedDayStart} de ${
			monthNames[formatedMonthStart - 1]
		} al ${formatedDayEnd} de ${
			monthNames[formatedMonthEnd - 1]
		} de ${formatedYearStart}`;
	} else {
		return `Del ${getFecha(inicio)} al ${getFecha(final)}`;
	}
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
