import React from 'react';
import { useField } from 'formik';

const TextAreaInput = ({ className, ...props }) => {
	const [field, meta] = useField(props);
	let error = meta.error && meta.touched ? meta.error : null;
	let errorClassName =
		'focus:border-rojoBase focus:ring-rojoBase border-rojoBase';
	let noErrorClassName =
		'focus:border-secondary outline-none focus:ring-secondary border-textColorTwo/50';
	let fullClassName = `min-h-[12.5rem] resize-none w-full bg-blanco outline-none focus:border-solid focus:ring-0 duration-300 border rounded-lg px-6 py-2 ${
		error ? errorClassName : noErrorClassName
	}`;
	return (
		<div className={className}>
			<textarea {...field} {...props} className={fullClassName} />
			{error && (
				<span className="text-rojoBase text-xs ml-1 border-rojoBase">
					{meta.error}
				</span>
			)}
		</div>
	);
};

export default TextAreaInput;
