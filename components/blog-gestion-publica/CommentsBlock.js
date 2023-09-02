import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import TextInput from '../../components/shared/formikComponents/TextInput';
import * as Yup from 'yup';
import TextAreaInput from '../../components/shared/formikComponents/TextAreaInput';
import Boton from '../../components/shared/Boton';
import useFetchComment from '../../hooks/useComments';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { BACKEND } from '../../config/consts';

const initialValues = {
	name: '',
	content: '',
};
const validationSchema = Yup.object({
	name: Yup.string().required('Este campo es requerido'),
	content: Yup.string().required('Este campo es requerido'),
});
const CommentsBlock = ({ gestionPublicaId }) => {
	const { data, loading, error } = useFetchComment(gestionPublicaId);
	const [allComments, setAllComments] = useState([]);
	const [totalComments, setTotalComments] = useState(0);

	useEffect(() => {
		if (data) {
			setAllComments(data.comments);
			setTotalComments(data.totalComments);
		}
	}, [data]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const onSubmit = async (
		values,
		{ setSubmitting, setFieldValue, validateForm }
	) => {
		const { name, content } = values;

		try {
			const response = await fetch(
				`${BACKEND}/comments/create/${gestionPublicaId}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name,
						content,
					}),
				}
			);

			if (!response.ok) {
				throw new Error('Error en la petición HTTP');
			}
			setAllComments([
				{ ...values, updatedAt: new Date() },
				...allComments,
			]);
			setTotalComments(totalComments + 1);
			setSubmitting(false);
			setFieldValue('content', '');
			await validateForm();
		} catch (error) {
			console.error('Ocurrió un error:', error);
		}
	};

	return (
		<div className="mx-4 md:mx-0 col-span-10 col-start-2 mt-5 mb-14">
			<p>
				{totalComments > 1 || totalComments === 0
					? `${totalComments} comentarios`
					: '1 comentario'}
			</p>
			<div className="grid grid-cols-12 mt-4 text-textColorOne rounded-lg overflow-hidden">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ isSubmitting, isValid, dirty }) => {
						return (
							<Form className="bg-[#EFF3F6] col-span-12 py-9 px-8">
								<p className=" text-lg">
									<span className="font-semibold">
										¿Qué te pareció este post?{' '}
									</span>
									Déjanos tu opinión:
								</p>
								<div className="mt-4 grid grid-cols-10 gap-x-2">
									<TextInput
										name="name"
										type="text"
										placeholder="Nombres y apellidos"
										className="col-span-10 md:col-span-4"
									/>
									<TextAreaInput
										name="content"
										type="text"
										placeholder="Añade un comentario..."
										className="col-span-10 md:col-span-10 mt-4 md:mt-4"
									/>
								</div>
								<div className="flex justify-end mt-5">
									<Boton
										text="Enviar comentario"
										submit
										className="font-bold"
										disabled={
											!isValid || isSubmitting || !dirty
										}
									/>
								</div>
								<hr className="border-t-2 border-grisTenue/10 my-8" />
								{allComments.length > 0 &&
									allComments.map((comment) => (
										<div
											key={comment.id}
											className="bg-[#FFFFFF] px-6 py-4 rounded-lg mb-5"
										>
											<h1 className="font-bold mb-1">
												{comment.name}
											</h1>
											<blockquote>
												{comment.content}
											</blockquote>
											<p className="text-end italic text-xs mt-5">
												{formatDistanceToNow(
													new Date(comment.updatedAt),
													{
														addSuffix: true,
														locale: es,
													}
												)}
											</p>
										</div>
									))}
							</Form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
};

export default CommentsBlock;
