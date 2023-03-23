import React, { useState, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

export const Modal = ({ children, estado, setEstado, maxWidthDeskScreen }) => {
	const [firstRender, setFirstRender] = useState(true);

	const modalContainer = useRef(null);
	const modal = useRef(null);

	const openModal = () => {
		showAndHide(
			modalContainer.current,
			['block', 'bg-fadeIn'],
			['hidden', 'bg-fadeOut']
		);
		showAndHide(modal.current, ['modal-scaleIn'], ['modal-scaleOut']);
	};
	const closeModal = () => {
		showAndHide(modalContainer.current, ['bg-fadeOut'], ['bg-fadeIn']);
		showAndHide(modal.current, ['modal-scaleOut'], ['modal-scaleIn']);

		setTimeout(() => {
			showAndHide(modalContainer.current, ['hidden'], ['block']);
		}, 500);
	};

	const showAndHide = (element, classesToAdd, classesToRemove) => {
		element.classList.remove(...classesToRemove);
		element.classList.add(...classesToAdd);
	};

	useEffect(() => {
		if (!firstRender) {
			if (estado) {
				openModal();
			} else {
				closeModal();
			}
		}
	}, [estado]);

	useEffect(() => {
		setFirstRender(false);
	}, []);

	return (
		<>
			<div
				id="modal-component-container"
				ref={modalContainer}
				className="z-40 fixed inset-0 hidden overflow-y-auto">
				<div className="modal-flex-container flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<div
						onClick={() => setEstado(false)}
						className="modal-bg-container fixed inset-0 bg-azulGris/75"></div>
					<div className="modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen">
						&nbsp;
					</div>
					<div
						id="modal-container"
						ref={modal}
						// NOTE: Creo el prop maxWidthDeskScreen para poder variar el máximo ancho del modal. Por defecto es el mismo que encontré definido: "lg"
						className={`modal-container max-h-[95vh] md:max-h-full inline-block  align-bottom bg-blanco rounded-lg text-left overflow-y-scroll md:overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ${
							!maxWidthDeskScreen && 'sm:max-w-[605px]'
						} w-full`}
						style={{
							maxWidth: maxWidthDeskScreen && maxWidthDeskScreen,
						}}>
						<div className="modal-close flex justify-end p-4 pb-0">
							<button
								className="w-[30px] h-[30px] flex items-center justify-center rounded-lg shadow-[0px_1px_4px_rgba(0,0,0,0.25)]"
								onClick={() => setEstado(false)}>
								<IoClose size={16} />
							</button>
						</div>
						<div className="modal-wrapper bg-blanco px-4 pt-5 pb-4 sm:px-8 sm:p-4 sm:pb-8">
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
