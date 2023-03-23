import React from 'react';

const FlechaDerecha = ({ className }) => {
	return (
		<div>
			<svg
				className={className}
				width="10"
				height="18"
				viewBox="0 0 10 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M1.86133 16.4678L7.86133 9.46777L1.86133 2.46777"
					// stroke="#9E1D1F"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M1.86133 16.4678L7.86133 9.46777L1.86133 2.46777"
					// stroke="black"
					strokeOpacity="0.2"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

export default FlechaDerecha;
