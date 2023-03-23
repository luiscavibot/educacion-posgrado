import React from 'react';

const Checkbox = ({
	name = '',
	text = '',
	onChange = () => {},
	className = '',
	value = false,
}) => {
	return (
		<>
			<input
				checked={value}
				type="checkbox"
				id={name}
				name={name}
				onChange={onChange}
				className={`${className} border-grisBordeFormulario cursor-pointer checked:bg-secondary visited:bg-secondary text-secondary focus:ring-0`}
			/>
			<label htmlFor={name} className="text-sm">
				{text}
			</label>
		</>
	);
};

export default Checkbox;
