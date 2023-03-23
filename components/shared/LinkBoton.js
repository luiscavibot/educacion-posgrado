import React from 'react';

const LinkBoton = ({ rojo, href, children, className, target }) => {
	return (
		<a
			className={`cursor-pointer shadow-md rounded-lg py-2 px-3 font-medium text-sm text-primary duration-300 ${
				rojo ? 'bg-ptext-primary text-blanco' : 'bg-blanco text-primary'
			} ${className ? className : ''} hover:-translate-y-1`}
			href={href}
			target={target}>
			{children}
		</a>
	);
};

export default LinkBoton;
