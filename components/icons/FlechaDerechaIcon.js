import React from 'react';

const FlechaDerechaIcon = ({ page, totalPaginas }) => {
	return (
		<div className="mt-[1px]">
			<svg
				width="11"
				height="19"
				viewBox="0 0 11 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2.14355 16.2461L8.14355 9.24609L2.14355 2.24609"
					stroke={
						page !== totalPaginas
							? '#54626C'
							: 'rgba(84, 98, 108, 0.5)'
					}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

export default FlechaDerechaIcon;
