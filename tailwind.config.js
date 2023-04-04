const plugin = require('tailwindcss/plugin');
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			lineClamp: {
				7: '7',
				8: '8',
				9: '9',
				10: '10',
			},
			boxShadow: {
				button: '0px 1px 4px rgba(0, 0, 0, 0.2)',
				'basic-card': '0px 4px 20px rgba(0, 0, 0, 0.1)',
				'large-card': '0px 1px 5px rgba(0, 0, 0, 0.1)',
				submenu: '0px 1px 20px rgba(0, 0, 0, 0.15)',
			},
			backgroundImage: {
				bgHeader:
					'url("https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/facultad-header.png")',
				bgEstadistica:
					'url("https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/home/fondo-estadisticas.png")',
			},
			fontFamily: {
				lato: 'Lato',
				roboto: 'Roboto',
			},
			transitionProperty: {
				right: 'right',
				hidden: 'hidden',
				opacity: 'opacity',
				left: 'left',
				brightness: 'brightness',
			},
			fontSize: {
				numerosHome: ['1.875rem', '4.5rem'],
				formText: ['0.937rem', '1.4055rem'],
			},
			spacing: {
				18: '4.5rem',
			},
			padding: {
				21: '5.6rem',
				2.5: '0.625rem',
				13: '3.25rem',
				sidebarWidth: '213px',
			},
			margin: {
				sidebarWidth: '213px',
			},
			width: {
				// sidebarWidth: '15.7%',
				sidebarWidth: '213px',
				admisionImageWidth: '73%',
			},
			height: {
				banner: '302px',
				bannerMobile: '200px',
			},
			scale: {
				101: '1.01',
			},
			animation: {
				fadeIn: 'fadeIn',
				fadeOut: 'fadeOut',
				scaleIn: 'scaleIn',
				scaleOut: 'scaleOut',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				fadeOut: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 },
				},
				scaleIn: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				},
				scaleOut: {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(0)' },
				},
			},
		},
		colors: {
			primary: '#1267A5',
			secondary: '#101C47',
			tertiary: '#101C47',
			complementaryOne: '#EFF3F6',
			complementaryTwo: '#E6E6E9',
			complementaryThree: '#198BDE',
			disabled: '#C7DBEA',
			// complementaryFour: '#14132A',
			textColorOne: '#3A464F',
			textColorTwo: '#54626C',
			footerOne: '#202124',

			rojoBase: '#9E1D1F',
			blanco: '#FFFFFF',
			negro: 'rgba(58, 70, 79, 1)',
			blancoTransparente: 'rgba(255, 255, 255, 0.5)',
			negroTransparente: 'rgba(0, 0, 0, 0.25)',
			transparente: 'transparent',
			azulGris: 'rgba(84, 98, 108, 1)',
			gris: 'rgba(84, 98, 108, 0.05)',
			grisTenue: 'rgba(84, 98, 108, 0.5)',
			grisBordeFormulario: 'rgba(33, 34, 19, 0.1)',
			negroPuro: 'rgba(0, 0, 0, 1)',
			grisDos: '#C7DBEA',
		},
	},
	variants: {
		lineClamp: ['responsive', 'hover'],
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.text-shadow-1': {
					'text-shadow': '0px 4px 25px rgba(0, 0, 0, 0.75);',
				},
				'.text-shadow-2': {
					'text-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25);',
				},
			});
		}),
	],
};
