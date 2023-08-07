const plugin = require('tailwindcss/plugin');
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			// padding: '1rem',
		},
		extend: {
			screens: {
				tablet: '1440px',
				'3xl': '2350px',
			},
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
				bgEventos:
					'url("https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/posgrado-administracion/home/fondos-eventos.jpg")',
				bgHeader:
					'url("https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/posgrado-admision/header.jpg")',
				bgEstadistica:
					'url("https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/home/fondo-estadisticas.png")',
				TikTok: 'url("https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/posgrado-admision/cintillo-tiktok.jpg")',
				TikTokGradient:
					'linear-gradient(180deg, #004283 22.92%, rgba(0, 66, 131, 0.91) 41.15%, rgba(0, 66, 131, 0.76) 58.85%, rgba(0, 66, 131, 0.00) 100%)',
				BlogGestionPublica:
					'url("https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/posgrado-administracion/home/blog-gestion-publica-imagen.jpg")',
				Posdoctorado:
					'url("https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/posgrado-administracion/home/posdoctorado-imagen.jpg")',
				Gradient:
					'linear-gradient(90deg, #004283 22.92%, rgba(0, 66, 131, 0.91) 42.48%, rgba(0, 66, 131, 0.76) 59.22%, rgba(0, 66, 131, 0.00) 100%);',
				bgGradienteCarruselPortada:
					'linear-gradient(180deg, #19191B 0%, rgba(25, 25, 27, 0) 100%);',
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
			// primary: '#A68403',
			primary: {
				DEFAULT: '#A68403',
				hover: '#AA8B14',
			},
			// secondary: '#004283',
			secondary: {
				DEFAULT: '#004283',
				hover: '#084873',
			},
			tertiary: '#033759',
			complementaryOne: '#E0E0E0',
			// complementaryTwo: '#E6E6E9',
			// complementaryThree: '#198BDE',
			disabled: '#C7DBEA',
			// complementaryFour: '#14132A',
			textColorOne: '#3A464F',
			textColorTwo: '#54626C',
			footerOne: '#252525',
			homebg2: '#DEE3F7',

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
