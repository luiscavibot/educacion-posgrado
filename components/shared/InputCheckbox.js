import React from 'react';

const InputCheckbox = ({
	onChange = () => {},
	label = '',
	name = '',
	value = '',
	checked = false,
	className = '',
}) => {
	return (
		//NOTE: Modifico el ancho de este componente al 100% para versión móvil
		<>
			<div className={`${className}`}>
				<label className="flex gap-x-2 justify-start place-items-start">
					<input
						className="translate-y-1 border-textColorTwo/50 cursor-pointer checked:!bg-secondary visited:!bg-secondary text-secbg-secondary focus:ring-0"
						type="checkbox"
						name={name}
						checked={checked}
						onChange={onChange}
					/>
					{label}
				</label>
			</div>
		</>
	);
};

export default InputCheckbox;
