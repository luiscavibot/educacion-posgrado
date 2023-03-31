import { Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import { CerrarIcon } from '../icons';
import CorreoIcon from '../icons/CorreoIcon';
import Boton from '../shared/Boton';
import TextInput from '../shared/formikComponents/TextInput';
import * as Yup from 'yup';
import TextAreaInput from '../shared/formikComponents/TextAreaInput';
import CheckboxInput from '../shared/formikComponents/CheckboxInput';
import TelefonoIcon from '../icons/TelefonoIcon';
import DireccionIcon from '../icons/DireccionIcon';
import HorariosAtencion from '../icons/HorariosAtencion';
import MensajeEnviadoCorrectamenteIcon from '../icons/MensajeEnviadoCorrectamenteIcon';

const FormacionContentModal = ({
	handleClose,
	responsableEmail,
	facultad,
	escuela,
	templateType,
	telefono,
}) => {
	const [isSuccessfull, setIsSuccessfull] = useState(false);
	const httpBody = {};
	const initialValues = {
		userNames: '',
		userMail: '',
		userSubject: '',
		userMessage: '',
		userAuthorization: false,
	};
	const validationSchema = Yup.object({
		userNames: Yup.string().required('Este campo es requerido'),
		userMail: Yup.string()
			.email('Correo inválido')
			.required('Este campo es requerido'),
		userSubject: Yup.string().required('Este campo es requerido'),
		userMessage: Yup.string().required('Este campo es requerido'),
		userAuthorization: Yup.boolean().oneOf(
			[true],
			'Debe aceptar los términos, antes de enviar el formulario.'
		),
	});
	const onSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			const { userAuthorization, ...queryValues } = values;
			httpBody = {
				...queryValues,
				facultad,
				responsableEmail,
				escuela,
				templateType,
			};
			fetch(`${process.env.NEXT_PUBLIC_MAILING_SERVER}/api/facultades`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(httpBody),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				});
			setSubmitting(false);
			setIsSuccessfull(true);
			setTimeout(() => {
				handleClose();
			}, 1500);
		}, 400);
	};
	if (!isSuccessfull) {
		return (
			<div className="grid grid-cols-12 text-textColorOne rounded-lg overflow-hidden">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}>
					{({ isSubmitting, isValid, dirty }) => {
						return (
							<Form className="bg-blanco col-span-12 md:col-span-7 py-9 px-8">
								<div className="md:hidden flex justify-end">
									<button
										onClick={handleClose}
										type="button"
										className="text-xs rounded-md h-7 w-7 flex items-center justify-center fill-tertiary hover:bg-tertiary/70 bg-tertiary/40">
										<CerrarIcon className="" />
									</button>
								</div>
								<h1 className="text-xl font-semibold">
									Escríbanos un mensaje
								</h1>
								<p className="mt-3">
									Para mayor información use el siguiente
									formulario y nuestro equipo le responderá lo
									más pronto posible.
								</p>
								<div className="mt-4 grid grid-cols-2 gap-x-2">
									<TextInput
										name="userNames"
										type="text"
										placeholder="Nombres y apellidos"
										className="col-span-2 md:col-span-1"
									/>
									<TextInput
										name="userMail"
										type="text"
										placeholder="Correo electrónico"
										className="col-span-2 md:col-span-1 mt-5 md:mt-0"
									/>
								</div>
								<div className="mt-5 w-full">
									<TextInput
										name="userSubject"
										placeholder="Asunto"
									/>
								</div>
								<div className="mt-5 w-full">
									<TextAreaInput
										name="userMessage"
										placeholder="Mensaje"
										className=""
									/>
								</div>
								<div className="mt-3">
									<CheckboxInput
										id="userAuthorization"
										name="userAuthorization">
										<label className="text-sm">
											Autorizo a la facultad de Química e
											Ingeniería Química a enviarme
											información académica relacionada.
											<span className="link">
												<a
													href="https://cdn.www.gob.pe/uploads/document/file/4332652/proteccion-datos-facultad-pregrado-ingenieria-quimica_c.pdf?v=1680009060"
													target="_blank"
													rel="noreferrer">
													{' '}
													Ver más.
												</a>
											</span>
										</label>
									</CheckboxInput>
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
							</Form>
						);
					}}
				</Formik>
				<div className="bg-tertiary col-span-12 md:col-span-5  text-blanco px-8 py-9">
					<div className="hidden md:flex justify-end">
						<button
							onClick={handleClose}
							type="button"
							className="text-xs rounded-md h-7 w-7 flex items-center justify-center fill-complementaryOne hover:bg-complementaryOne/70 bg-complementaryOne/40">
							<CerrarIcon className="" />
						</button>
					</div>
					<div className="flex space-x-2 mt-3">
						<div>
							<CorreoIcon className="fill-complementaryOne" />
						</div>
						<div>
							<p className="leading-none">Correo</p>
							<p className="text-sm font-light mt-[0.2rem]">
								{responsableEmail}
							</p>
						</div>
					</div>
					<div className="flex space-x-2 mt-6">
						<div>
							<HorariosAtencion className="fill-complementaryOne" />
						</div>
						<div>
							<p className="leading-none">Atención presencial</p>
							<p className="text-sm font-light mt-[0.2rem]">
								Lunes a viernes de 8:00 a. m. a 1:00 p. m. y de
								2:00 p. m. a 3:45 p. m.
							</p>
						</div>
					</div>
					<div className="flex space-x-2 mt-6">
						<div>
							<DireccionIcon className="fill-complementaryOne" />
						</div>
						<div>
							<p className="leading-none">Dirección</p>
							<p className="text-sm font-light mt-[0.2rem]">
								Av. Venezuela s/n, Lima, Perú
							</p>
						</div>
					</div>
					<div className="flex space-x-2 mt-6">
						<div>
							<TelefonoIcon className="fill-complementaryOne" />
						</div>
						<div>
							<p className="leading-none">Teléfono</p>
							<p className="text-sm font-light mt-[0.2rem]">
								{telefono}
							</p>
						</div>
					</div>
					<div className="w-full h-60 rounded-xl overflow-hidden mt-8">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3682.7676363894593!2d-77.08418219889973!3d-12.060273090669202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c94136a09f71%3A0xbdce59a5fb746268!2sFacultad%20de%20Qu%C3%ADmica%20e%20Ingenier%C3%ADa%20Qu%C3%ADmica%20-%20UNMSM!5e0!3m2!1ses!2spe!4v1680272838702!5m2!1ses!2spe"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"></iframe>
						{/* <iframe
							src="https://goo.gl/maps/UsPe3f1W9egyekMcA"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"></iframe> */}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="bg-tertiary text-blanco py-10 flex space-x-2 items-center justify-center font-bol text-xl">
				<MensajeEnviadoCorrectamenteIcon className="fill-blanco" />
				<span>¡Mensaje enviado correctamente!</span>
			</div>
		);
	}
};

export default FormacionContentModal;
