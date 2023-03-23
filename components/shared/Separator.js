import React from 'react';

const Separator = ({ className }) => {
	return (
		<>
			<div
				className={`w-full h-[1px] bg-textColorTwo/25 ${className}`}></div>
		</>
	);
};

export default Separator;
