import { solicitarInformacionPorCorreo } from '../../../helpers/appCorreo';
import Boton from '../Boton';
import React, { useState, useEffect } from 'react';

const DeseasConocerSobreEsta = () => {
	const [formData, setFormData] = useState({ correo: '' });

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			programa: maestria[0].attributes.nombre,
			correo: formData.correo,
		};
		solicitarInformacionPorCorreo(data);
		setFormData({ correo: '' });
		alert('correo enviado correctamente');
	};
	return (
		<div className="flex items-center justify-between bg-negro text-blanco px-14 py-6">
			<div className="flex items-center">
				<span className="mr-3">
					<svg
						width="61"
						height="61"
						viewBox="0 0 61 61"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M16.2187 16.6032C14.9492 16.9169 13.7759 17.8798 13.2591 19.032C13.0331 19.5359 12.946 20.0735 12.9025 21.2321C12.8465 22.7224 12.8551 22.7756 13.2095 23.133C13.6698 23.5972 14.2098 23.6029 14.6603 23.1485C14.9755 22.8307 15.0095 22.6793 15.0095 21.5943C15.0095 20.9333 15.0478 20.3538 15.0945 20.3066C15.1922 20.2082 26.9587 30.3475 26.9587 30.5303C26.9587 30.7131 15.1922 40.8524 15.0945 40.754C15.0478 40.7068 15.0095 40.1273 15.0095 39.4662C15.0095 38.3812 14.9755 38.2299 14.6603 37.9121C14.2098 37.4576 13.6698 37.4634 13.2095 37.9276C12.8551 38.285 12.8465 38.3382 12.9025 39.8285C12.946 40.9871 13.0331 41.5246 13.2591 42.0286C13.6389 42.8753 14.4673 43.7133 15.3711 44.1652L16.0764 44.5178H33.6445C50.3725 44.5178 51.2432 44.5052 51.8527 44.254C52.7778 43.8728 53.5777 43.1561 54.0617 42.2747L54.4844 41.5051V30.5303V19.5555L54.0617 18.7859C53.6034 17.9513 52.8217 17.2285 51.9238 16.8087C51.3804 16.5547 50.5737 16.5417 34.0001 16.5202C24.455 16.5077 16.4534 16.545 16.2187 16.6032ZM50.5725 18.7374C50.5725 18.8453 47.3111 21.6905 38.1643 29.5619C34.6879 32.5535 34.1462 32.9691 33.723 32.9691C33.2936 32.9691 32.4738 32.3079 26.2234 26.9195C16.5588 18.5877 16.8595 18.8506 16.8592 18.7305C16.859 18.6714 24.4444 18.623 33.7156 18.623C42.9869 18.623 50.5725 18.6745 50.5725 18.7374ZM52.3879 35.7097L52.3506 40.889L46.4472 35.784C43.2003 32.9763 40.5437 30.6138 40.5437 30.534C40.5437 30.4544 43.2003 28.09 46.4472 25.28L52.3506 20.1709L52.3879 25.3506C52.4085 28.1995 52.4085 32.861 52.3879 35.7097ZM10.0525 27.0513C9.89075 27.1895 9.71707 27.4783 9.66671 27.6933C9.59316 28.0067 9.66031 28.1703 10.0053 28.5182L10.4356 28.9522H13.9125C17.2146 28.9522 17.4083 28.9373 17.7642 28.6548C18.0539 28.4251 18.1391 28.2313 18.1391 27.8022C18.1391 26.8281 18.0223 26.8003 13.9267 26.8003C10.7242 26.8003 10.3158 26.8267 10.0525 27.0513ZM30.6265 33.5658C32.2342 34.9611 32.7837 35.263 33.7156 35.263C34.6774 35.263 35.2271 34.9577 36.9466 33.4681C37.9877 32.5664 38.7363 32.0167 38.8391 32.0782C39.2255 32.3096 50.5725 42.2163 50.5725 42.3223C50.5725 42.3857 42.9815 42.4376 33.7038 42.4376C23.0618 42.4376 16.8526 42.3871 16.8826 42.3008C16.9854 42.0039 28.7153 31.9788 28.8567 32.0671C28.9398 32.1188 29.7361 32.7933 30.6265 33.5658ZM7.08825 32.2528C6.45097 32.5118 6.27742 33.4192 6.76449 33.9463C7.05269 34.2584 7.08669 34.2603 12.3123 34.2603C17.3804 34.2603 17.5803 34.25 17.8546 33.9734C18.2782 33.5461 18.234 32.7783 17.7642 32.4058C17.4006 32.1173 17.2395 32.1087 12.3942 32.1174C9.64694 32.1224 7.25924 32.1834 7.08825 32.2528Z"
							fill="white"
						/>
					</svg>
				</span>
				<div>
					<p className="text-xl font-bold">¿Tienes alguna duda?</p>
					<p className="text-sm">
						Déjanos tu correo y nuestro equipo se contactará lo más
						pronto posible.
					</p>
				</div>
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						className="focus:border-blanco focus:outline-none focus:ring-0 focus:ring-blanco w-auto md:w-[256px] border-[1px] border-blanco rounded-xl bg-negro placeholder:text-blanco px-4 py-2 text-sm mr-4"
						placeholder="Correo"
						type="email"
						name="correo"
						onChange={handleChange}
						autoComplete="off"
						required
						value={formData.correo}
					/>
					<Boton text="Enviar" submit />
				</form>
			</div>
		</div>
	);
};

export default DeseasConocerSobreEsta;
