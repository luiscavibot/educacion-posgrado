import React from 'react';
import { Form, Formik } from 'formik';
import TextInput from '../../components/shared/formikComponents/TextInput';
import * as Yup from 'yup';
import TextAreaInput from '../../components/shared/formikComponents/TextAreaInput';
import Boton from '../../components/shared/Boton';

const initialValues = {
	name: '',
	content: '',
};
const validationSchema = Yup.object({
	name: Yup.string().required('Este campo es requerido'),
	content: Yup.string().required('Este campo es requerido'),
});
const CommentsBlock = () => {
	const onSubmit = () => {};
	return (
		<div className="mx-4 md:mx-0 col-span-10 col-start-2 mt-5 mb-14">
			<p>3 comentarios</p>
			<div className="grid grid-cols-12 mt-4 text-textColorOne rounded-lg overflow-hidden">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ isSubmitting, isValid, dirty }) => {
						return (
							<Form className="bg-[#EFF3F6] col-span-12 py-9 px-8">
								<p className="font-semibold text-lg">
									¿Qué te pareció este post? Déjanos tu
									opinión:
								</p>
								<div className="mt-4 grid grid-cols-10 gap-x-2">
									<TextInput
										name="userNames"
										type="text"
										placeholder="Nombres y apellidos"
										className="col-span-4 md:col-span-4"
									/>
									<TextAreaInput
										name="userMail"
										type="text"
										placeholder="Añade un comentario..."
										className="col-span-10 md:col-span-10 mt-4 md:mt-4"
									/>
								</div>
								<div className="flex justify-end mt-5">
									<Boton
										text="Enviar"
										submit
										className="font-bold"
										disabled={
											!isValid || isSubmitting || !dirty
										}
									/>
								</div>
								<hr class="border-t-2 border-grisTenue/10 my-8" />
								<div className="bg-[#FFFFFF] px-6 py-4 rounded-lg mb-5">
									<h1 className="font-bold mb-1">
										Soledad Aravena
									</h1>
									<blockquote>
										Qué gran iniciativa! Felicitaciones a
										todo el equipo de trabajo. Sigan así!
									</blockquote>
									<p className="text-end italic">
										Hace 4 días
									</p>
								</div>
								<div className="bg-[#FFFFFF] px-6 py-4 rounded-lg mb-4">
									<h1 className="font-bold mb-1">
										Soledad Aravena
									</h1>
									<blockquote>
										Qué gran iniciativa! Felicitaciones a
										todo el equipo de trabajo. Sigan así!
									</blockquote>
									<p className="text-end italic">
										Hace 4 días
									</p>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
};

export default CommentsBlock;
