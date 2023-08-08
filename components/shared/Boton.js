import React from 'react';
import Link from 'next/link';

const Boton = ({
	onClick = () => {},
	secondary = false,
	text,
	submit,
	className = '',
	link = '',
	disabled = false,
	children,
}) => {
	const baseStyle =
		'flex gap-x-1 shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-lg py-2 px-3 text-sm duration-100';

	let primaryStyle = disabled
		? 'bg-blanco/50 text-disabled hover:bg-blanco hover:shadow-[0px_1px_4px_rgba(0,0,0,0.25)]'
		: 'bg-primary text-blanco hover:bg-primary-hover hover:shadow-md';
	let secondaryStyle =
		'bg-transparent border  border-primary text-primary font-bold hover:bg-primary-hover/[0.08]';

	let fullStyle =
		baseStyle + ' ' + (secondary ? secondaryStyle : primaryStyle);

	if (link === '') {
		return (
			<button
				onClick={onClick}
				className={className + ' ' + fullStyle}
				type={submit ? 'submit' : 'button'}
				disabled={disabled}
			>
				{children}
				{text}
			</button>
		);
	} else {
		return (
			<Link href={`${link}`}>
				<a
					className={`${className} shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-lg py-2 px-3 text-sm hover:shadow-md duration-300 ${
						secondary ? secondaryStyle : primaryStyle
					}`}
				>
					{text}
					{children}
				</a>
			</Link>
		);
	}
};

export default Boton;
