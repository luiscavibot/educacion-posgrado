import React, { useEffect, useRef, useState } from 'react';
import { Popup } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

export default function CajaConFuncionCopiar({ text, margin, big }) {
	const boxElement = useRef(null);
	const [boxState, setBoxState] = useState({
		isOpen: false,
		isCopied: false,
		isRed: false,
	});

	const copiarPortapapeles = () => {
		navigator.clipboard.writeText(`${boxElement.current.innerText}`);
		setBoxState({
			isOpen: true,
			isCopied: true,
			isRed: true,
		});
		setTimeout(() => {
			setBoxState({
				...boxState,
				isRed: false,
				isOpen: false,
				isCopied: false,
			});
		}, 2000);
	};

	useEffect(() => {
		const open = () => setBoxState((state) => ({ ...state, isOpen: true }));
		const close = () =>
			setBoxState((state) => ({ ...state, isOpen: false }));
		boxElement.current?.addEventListener('mouseenter', open);
		boxElement.current?.addEventListener('mouseleave', close);

		return () => {
			boxElement.current?.removeEventListener('mouseenter', open);
			boxElement.current?.removeEventListener('mouseleave', close);
		};
	}),
		[];

	return (
		<Popup
			open={boxState.isOpen}
			position="top right"
			className="z-[1300] bg-blanco relative translate-x-5 rounded-lg shadow-[3px_1px_27px_1px_rgba(0,0,0,0.15)] -translate-y-1 px-2 text-xs leading-none py-1"
			trigger={
				<div
					onClick={copiarPortapapeles}
					ref={boxElement}
					className={`${
						boxState.isRed && 'fill-primary'
					} fill-negro hover:fill-primary flex w-full h-full flex-none justify-between px-2 py-1 border-[1px] border-grisTenue rounded-xl cursor-pointer`}>
					<div className="flex items-center">
						<span
							className={`${
								big ? `w-[200px]` : `w-[150px]`
							} overflow-hidden text-ellipsis whitespace-nowrap`}>
							{text}
						</span>
					</div>
					<button className="ml-3">
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							xmlns="http://www.w3.org/2000/svg"
							className="">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M14.3299 13.827C14.5959 13.747 14.8003 13.5837 14.9026 13.3696C14.9892 13.1885 15 12.5813 15 7.89667L15 2.62742L14.8606 2.42031C14.5669 1.98384 14.738 2.00006 10.4259 2.00006C6.86447 2.00006 6.54109 2.00853 6.34725 2.10666C6.00545 2.27964 5.88659 2.49589 5.85171 3.00812L5.82101 3.45897L9.32069 3.47604C12.6934 3.49255 12.8279 3.49761 13.0288 3.61507C13.1435 3.68211 13.2955 3.81437 13.3665 3.90903C13.4951 4.08018 13.4958 4.10761 13.5121 8.98317L13.5286 13.8853L13.8498 13.88C14.0265 13.8771 14.2426 13.8533 14.3299 13.827Z"
							/>
							<rect
								x="3"
								y="4.6814"
								width="9.32872"
								height="11.3187"
								rx="1"
							/>
						</svg>
					</button>
				</div>
			}>
			<div className="py-1 px-2 after:content-[''] after:w-4 after:h-4 after:shadow-[21px_21px_50px_-25px_rgba(0,0,0,0.64)] after:bg-blanco after:absolute after:left-[30%] after:bottom-0 after:rotate-45 after:translate-y-2 ">
				<p className="relative z-[1400]">
					{boxState.isCopied ? 'Copiado' : 'Copiar'}
				</p>
			</div>
		</Popup>
	);
}
