import React from 'react';

const InputText = ({
	autoComplete = 'off',
	required = true,
	type = 'text',
	placeholder = '',
	onChange = () => {},
	name = '',
	value = '',
	className = '',
	onKeyDown = () => {},
	conIconoBuscador = false,
	backgroundClass = 'bg-transparent',
}) => {
	return (
		//NOTE: Modifico el ancho de este componente al 100% para versión móvil
		<div className={`relative group ${className}`}>
			{conIconoBuscador && (
				<svg
					className="w-5 stroke-grisTenue group-focus-within:stroke-secondary h-5 absolute translate-y-1/2 left-3 duration-300"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
				</svg>
			)}
			<input
				autoComplete={autoComplete}
				required={required}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				onKeyDown={onKeyDown}
				name={name}
				value={value}
				className={`${backgroundClass} ${
					// backgroundClass !== 'bg-transparent' && 'border-none'
					backgroundClass !== 'bg-transparent'
				} w-full border border-grisBordeFormulario rounded-lg text-sm py-2.5 ${
					conIconoBuscador ? 'pl-12' : 'pl-6'
				}  pr-6 outline-none focus:ring-1 focus:ring-secondary duration-300`}></input>
		</div>
	);
};

export default InputText;
