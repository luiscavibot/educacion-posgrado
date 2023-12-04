import React, { useState } from 'react';
import { useSwiper } from 'swiper/react';
import FlechaIzquierda from '../../icons/FlechaIzquierda';

const SwiperButtonPrev = ({ setCount, max, sobrepuesto }) => {
	const [isDisabled, setIsDisabled] = useState(false);
	const swiper = useSwiper();
	return (
		<button
			onClick={() => {
				swiper.slidePrev();
				setIsDisabled(true);

				setTimeout(() => {
					setIsDisabled(false);
				}, 100);
			}}
			disabled={isDisabled}
			className={`hidden md:flex stroke-textColorTwo hover:stroke-blanco justify-center items-center shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-lg absolute top-1/2 -translate-y-1/2 ${
				sobrepuesto ? 'left-2' : 'left-2'
			} z-10 bg-blanco hover:bg-primary transition-colors duration-300 h-9 w-9`}
		>
			<FlechaIzquierda />
		</button>
	);
};

export default SwiperButtonPrev;
