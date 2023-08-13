import React from 'react';

const InputRadioButton = ({ name, options, value, onChange }) => {
	return (
		//NOTE: Modifico el ancho de este componente al 100% para versión móvil
		<div className="flex flex-col gap-y-1 mt-2">
			{options.map((option) => (
				<div key={option.value} className="mb-2">
					<label className="flex gap-x-2 justify-start place-items-start">
						<input
							className="translate-y-1 border-textColorTwo/50 cursor-pointer checked:!bg-primary visited:!bg-secondary text-secbg-secondary focus:ring-0"
							type="radio"
							name={name}
							value={option.value}
							checked={option.value === value}
							onChange={onChange}
						/>
						{option.label}
					</label>
				</div>
			))}
		</div>
	);
};

export default InputRadioButton;
