export const entradaCardScroll = {
	offscreen: {
		y: 80,
		opacity: 0,
	},
	onscreen: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 0.8,
		},
	},
};
