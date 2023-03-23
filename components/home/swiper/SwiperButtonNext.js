import React, { useState } from 'react';
import { useSwiper } from 'swiper/react';
import FlechaDerecha from '../../icons/FlechaDerecha';

const SwiperButtonNext = ({ setCount, max, sobrepuesto }) => {
	const swiper = useSwiper();
	const [isDisabled, setIsDisabled] = useState(false);
	return (
		<button
			onClick={() => {
				swiper.slideNext();
				setIsDisabled(true);

				setTimeout(() => {
					setIsDisabled(false);
				}, 100);
			}}
			disabled={isDisabled}
			className={`hidden md:flex stroke-textColorTwo hover:stroke-blanco justify-center items-center shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-lg absolute top-1/2 -translate-y-1/2 ${
				sobrepuesto ? '-right-4' : '-right-4'
			} z-10 bg-blanco hover:bg-primary transition-colors duration-300 h-9 w-9`}>
			<FlechaDerecha />
		</button>
	);
};

export default SwiperButtonNext;
