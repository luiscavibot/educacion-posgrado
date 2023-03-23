import React from 'react';

const Textarea = ({
	autoComplete = 'off',
	required = true,
	onChange = () => {},
	value = '',
	name = '',
	placeholder = '',
	className = '',
}) => {
	return (
		<textarea
			autoComplete={autoComplete}
			required={required}
			onChange={onChange}
			value={value}
			name={name}
			placeholder={placeholder}
			className={`${className} min-h-full w-full resize-none text-sm border-grisBordeFormulario py-2.5 px-6 rounded-lg focus:border-secondary focus:outline-none focus:ring-0 focus:ring-secondary`}
		/>
	);
};

export default Textarea;
