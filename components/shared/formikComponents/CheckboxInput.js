import React from 'react';
import { useField } from 'formik';

const CheckboxInput = ({ children, className, ...props }) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' });
	let error = meta.error && meta.touched ? meta.error : null;
	let errorClassName = '';
	let noErrorClassName = '';
	let fullClassName = `border-textColorTwo/50 cursor-pointer checked:!bg-secondary visited:!bg-secondary text-secbg-secondary focus:ring-0 ${
		error ? errorClassName : noErrorClassName
	}`;
	return (
		<div className={className}>
			<label className="flex space-x-2 items-start">
				<input
					{...field}
					{...props}
					className={fullClassName}
					type="checkbox"
				/>
				{children}
			</label>
			{error && (
				<span className="text-rojoBase text-xs ml-1 border-rojoBase">
					{meta.error}
				</span>
			)}
		</div>
	);
};

export default CheckboxInput;
