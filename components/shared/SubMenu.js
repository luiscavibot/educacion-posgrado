import React from 'react';
import Link from 'next/link';
// import 'semantic-ui-css/components/dropdown.min.css';
// import 'semantic-ui-css/components/transition.min.css';
// import DropDown from './Dropdown';

import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import DocumentosIcon from '../icons/DocumentosIcon';
import UserIcon from '../icons/UserIcon';

const SubMenu = ({ theme, color }) => {
	return (
		<div
			className={`${theme ? `bg-${theme}` : ''} ${
				color ? `text-${color}` : ''
			} hidden md:block shadow-submenu`}
		>
			<div className="container px-4 mx-auto flex justify-end text-xs">
				<ul className="grid grid-rows-1 grid-flow-col gap-4">
					<li className="flex items-center cursor-pointer">
						<Link href="/tramites">
							<a className="px-4 py-1 inline-flex items-center gap-[6px]">
								<DocumentosIcon className="w-4 h-4 fill-blanco" />
								<span>Trámites</span>
							</a>
						</Link>
					</li>
					<li className="">
						{/* <DropDown
							navBar={{
								principal: 'Intranet',
								secundario: [
									{
										name: 'Correo institucional',
										path: 'https://mail.google.com/mail/u/1/?pli=1#inbox',
									},
									{
										name: 'Sistema único de matrícula (SUM)',
										path: 'https://sum.unmsm.edu.pe/',
									},

									{
										name: 'Aula virtual (OEV)',
										path: 'http://campus.farmacia.unmsm.edu.pe/',
									},
								],
							}}
						/> */}
						<Dropdown>
							<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente inline-flex items-center gap-[6px]">
								<UserIcon className="w-3 h-3 fill-blanco" />
								<span>Intranet</span>
							</MenuButton>

							<Menu
								slotProps={{
									root: {
										className: `z-20 max-w-[125px]`,
									},
									listbox: {
										className:
											'text-sm box-border p-1.5 my-2 mx-0 rounded-xl overflow-auto outline-0 bg-blanco text-textColorOne min-w-listbox shadow-md',
									},
								}}
							>
								<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
									<a
										href="https://sum.unmsm.edu.pe/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-secondary py-2"
									>
										Sistema único de matrícula (SUM)
									</a>
								</MenuItem>
								<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
									<a
										href="https://tramiteonline.unmsm.edu.pe/sgdfd/mat/login"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-secondary py-2"
									>
										MAT
									</a>
								</MenuItem>
								<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-secondary py-2"
									>
										Aula virtual
									</a>
								</MenuItem>
							</Menu>
						</Dropdown>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SubMenu;
