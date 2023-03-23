import React from 'react';
import OptionsList from './OptionsList';

const Select = ({
	arrayOpciones = [],
	primeraOpcion = '',
	required = true,
	onChange = () => {},
	value = '',
	name = '',
	disabled = false,
	className = '',
}) => {
	return (
		<select
			name={name}
			required={required}
			onChange={onChange}
			value={value}
			disabled={disabled}
			className={`${className} cursor-pointer text-sm border border-grisBordeFormulario py-2.5 px-6 rounded-lg outline-none focus:ring-1 focus:ring-secondary duration-300`}>
			<option value="">{primeraOpcion}</option>
			<OptionsList arrayOpciones={arrayOpciones} />
		</select>
	);
};

export default Select;
