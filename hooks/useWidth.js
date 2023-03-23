import React, { useEffect, useState } from 'react';

const useWidth = (initial_width = 780) => {
	const [width, setWidth] = useState(initial_width);
	const [isReadyWidth, setIsReadyWidth] = useState(false);
	const handleResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		setIsReadyWidth(true);
		setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return { width, isReadyWidth };
};

export default useWidth;
