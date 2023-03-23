//Aquí se agregan las opciones que se muestran en el menú
const opcionesSideBar = [
	{
		seccion: 'Formación académica',
		links: [
			{ nombreLink: 'Admisión', path: '/formacion-academica/admision' },
			{ nombreLink: 'Pregrado', path: '/formacion-academica/pregrado' },
			{
				nombreLink: 'Posgrado',
				path: '/formacion-academica/posgrado',
			},
			// {
			// 	nombreLink: 'Educación continua',
			// 	path: '/formacion-academica/educacion-continua',
			// },
		],
	},
	// {
	// 	seccion: 'Programas especiales',
	// 	links: [{ nombreLink: 'Test2', path: '/programas-especiales/test2' }],
	// },
	// {
	// 	seccion: 'Investigación',
	// 	links: [
	// 		{
	// 			nombreLink: 'Recursos para la investigación',
	// 			path: '/investigacion/recursos-investigacion',
	// 		},
	// 		{
	// 			nombreLink: 'Producción científica',
	// 			path: '/investigacion/produccion-cientifica',
	// 		},
	// 		{
	// 			nombreLink: 'Bibliotecas',
	// 			path: '/investigacion/bibliotecas',
	// 		},
	// 		{
	// 			nombreLink: 'Grupos de investigación',
	// 			path: '/investigacion/grupos-investigacion',
	// 		},
	// 		{
	// 			nombreLink: 'Instituto de Investigaciones educativas',
	// 			path: '/investigacion/intituto-investigaciones',
	// 		},
	// 	],
	// },
	{
		seccion: 'Noticias y eventos',
		links: [
			{
				nombreLink: 'Noticias',
				path: '/noticias',
			},
			{
				nombreLink: 'Eventos',
				path: '/eventos',
			},
		],
	},
	// {
	// 	seccion: 'Comunidad',
	// 	links: [
	// 		{
	// 			nombreLink: 'Egresados',
	// 			path: '/egresados',
	// 		},
	// 		{
	// 			nombreLink: 'Docentes',
	// 			path: '/docentes',
	// 		},
	// 		{
	// 			nombreLink: 'Estudiante',
	// 			path: '/estudiante',
	// 		},
	// 		{
	// 			nombreLink: 'Conoce la facultad',
	// 			path: '/conoce-la-facultad',
	// 		},
	// 		{
	// 			nombreLink: 'Extensión universitaria',
	// 			path: '/extension-universitaria',
	// 		},
	// 	],
	// },
	{
		seccion: 'Nosotros',
		links: [
			// {
			// 	nombreLink: 'Historia',
			// 	path: '/historia',
			// },
			{
				nombreLink: 'Autoridades y órganos de gobierno',
				path: '/nosotros/autoridades-y-organos',
			},
			// {
			// 	nombreLink: 'Institución y organización',
			// 	path: '/institucion-y-organizacion',
			// },
			// {
			// 	nombreLink: 'Calidad',
			// 	path: '/calidad',
			// },
			{
				nombreLink: 'Transparencia',
				path: '/transparencia',
			},
		],
	},
];
export default opcionesSideBar;
