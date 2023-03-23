const tiposEventos = [
	{
		value: 'ACTOINSTITUCIONAL',
		label: 'Acto Institucional',
	},
	{
		value: 'CAPACITACION',
		label: 'Capacitación',
	},
	{
		value: 'CHARLA',
		label: 'Charla',
	},
	{
		value: 'CLASEMAGISTRAL',
		label: 'Clase Magistral',
	},
	{
		value: 'COLOQUIOINTERNACIONAL',
		label: 'Coloquio Internacional',
	},
	{
		value: 'COLOQUIO',
		label: 'Coloquio',
	},
	{
		value: 'CONCURSO',
		label: 'Concurso',
	},
	{
		value: 'CONCURSOPUBLICO',
		label: 'Concurso público',
	},
	{
		value: 'CONFERENCIAMAGISTRAL',
		label: 'Conferencia Magistral',
	},
	{
		value: 'CONFERENCIA',
		label: 'Conferencia',
	},
	{
		value: 'CONGRESOINTERNACIONAL',
		label: 'Congreso Internacional',
	},
	{
		value: 'CONGRESO',
		label: 'Congreso',
	},
	{
		value: 'CONVERSATORIO',
		label: 'Conversatorio',
	},
	{
		value: 'CONVENCION',
		label: 'Convención',
	},
	{
		value: 'CULTURAL',
		label: 'Cultural',
	},
	{
		value: 'DEPORTIVO',
		label: 'Deportivo',
	},
	{
		value: 'DISERTACION',
		label: 'Disertación',
	},
	{
		value: 'EXPOSICION',
		label: 'Exposición',
	},
	{
		value: 'FERIA',
		label: 'Feria',
	},
	{
		value: 'FORO',
		label: 'Foro',
	},
	{
		value: 'MESAREDONDA',
		label: 'Mesa redonda',
	},
	{
		value: 'PANEL',
		label: 'Panel',
	},
	{
		value: 'PRESENTACION',
		label: 'Presentación',
	},
	{
		value: 'SEMINARIO',
		label: 'Seminario',
	},
	{
		value: 'SIMPOSIO',
		label: 'Simposio',
	},
	{
		value: 'TALLER',
		label: 'Taller',
	},
	{
		value: 'TRAMITEACADEMICO',
		label: 'Trámite académico',
	},
];

export const getTipoEvento = (value) => {
	const evento = tiposEventos.find((item) => item.value === value);
	return evento ? evento.label : '';
};
