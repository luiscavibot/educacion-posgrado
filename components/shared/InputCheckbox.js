import React from 'react';

const InputCheckbox = ({
	onChange = () => {},
	label = '',
	name = '',
	checked = false,
	className = '',
	disabled = false,
}) => {
	return (
		//NOTE: Modifico el ancho de este componente al 100% para versión móvil
		<>
			<div className={`${className}`}>
				<label className="flex gap-x-2 justify-start place-items-start">
					<input
						className="translate-y-1 border-textColorTwo/50 cursor-pointer checked:!bg-primary visited:!bg-secondary text-secbg-secondary focus:ring-0"
						type="checkbox"
						name={name}
						checked={checked}
						onChange={onChange}
						disabled={disabled}
					/>
					{label}
				</label>
			</div>
		</>
	);
};

export default InputCheckbox;
