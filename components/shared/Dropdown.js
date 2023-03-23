import React, { useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';

const DropDown = ({ navBar, width = 200, openInTheSameTab = false }) => {
	const dropDown = useRef(null);
	const dropDownTrigger = useRef(null);
	const flecha = useRef(null);

	useEffect(() => {
		dropDownTrigger.current?.addEventListener('mouseenter', () => {
			dropDown.current?.classList.remove('hidden');
			dropDown.current?.classList.add('aparecer');
			flecha.current?.classList.add('rotateIcon');
		});
		dropDownTrigger.current?.addEventListener('mouseleave', () => {
			dropDown.current?.classList.add('hidden');
			dropDown.current?.classList.remove('aparecer');
			flecha.current?.classList.remove('rotateIcon');
		});

		return () => {
			dropDownTrigger.current?.removeEventListener('mouseenter', () => {
				dropDown.current?.classList.remove('hidden');
				dropDown.current?.classList.add('aparecer');
				flecha.current?.classList.add('rotateIcon');
			});
			dropDownTrigger.current?.removeEventListener('mouseleave', () => {
				dropDown.current?.classList.add('hidden');
				dropDown.current?.classList.remove('aparecer');
				flecha.current?.classList.remove('rotateIcon');
			});
		};
	}, []);
	return (
		<div ref={dropDownTrigger} className="relative h-full">
			<div className="relative z-10 h-full cursor-pointer flex items-center">
				<p className="mr-2">{navBar.principal}</p>
				<div ref={flecha}>
					<IoIosArrowDown />
				</div>
			</div>
			<ul
				ref={dropDown}
				className={`absolute bg-blanco -z-10 hidden w-[${width}px] rounded-b-md pt-2 shadow-lg overflow-hidden`}>
				{navBar.secundario.map((sec) => {
					if (openInTheSameTab) {
						return (
							<div key={sec.name}>
								<li className="bg-blanco cursor-pointer px-4 py-2 hover:bg-textColorOne/20">
									{sec.condicional ? (
										<a className="text-textColorTwo/70">
											{sec.name}
										</a>
									) : (
										<Link href={sec.path}>
											<a className="text-negro">
												{sec.name}
											</a>
										</Link>
									)}
								</li>
							</div>
						);
					}
					return (
						<div
							onClick={() => {
								window.open(sec.path, '_blank');
							}}
							key={sec.name}>
							<li className="bg-blanco cursor-pointer px-4 py-2 hover:bg-textColorOne/20">
								<a className="text-negro">{sec.name}</a>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default DropDown;
