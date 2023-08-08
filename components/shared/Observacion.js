import React from 'react';

const Observacion = ({ children, className, label }) => {
	return (
		<div
			className={`bg-complementaryTwo rounded-lg py-4 px-8 ${className}`}
		>
			<h2 className="font-medium mb-[6px] inline-flex items-center">
				<p className="font-bold">
					<img
						className="w-[19px] mb-[1px] mr-1 inline-block"
						src="/img/icons/observacion-white-icon.svg"
						alt=""
					/>
					<span>{label ? label : 'Observación'}</span>
				</p>
			</h2>
			<div>{children}</div>
		</div>
	);
};

export default Observacion;
