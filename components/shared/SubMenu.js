import React from 'react';
import Link from 'next/link';
import 'semantic-ui-css/components/dropdown.min.css';
import 'semantic-ui-css/components/transition.min.css';
import DropDown from './Dropdown';

const SubMenu = ({ theme, color }) => {
	return (
		<div
			className={`${theme ? `bg-${theme}` : ''} ${
				color ? `text-${color}` : ''
			} hidden md:block shadow-submenu`}>
			<div className="container px-4 mx-auto flex justify-end text-xs">
				<ul className="grid grid-rows-1 grid-flow-col gap-6">
					<li className="flex items-center  cursor-pointer">
						<Link href="/tramites">
							<a className="py-1">Trámites</a>
						</Link>
					</li>
					<li className="flex items-center  cursor-pointer">
						<Link href="/comunicados">
							<a className="py-1">Comunicados</a>
						</Link>
					</li>
					<li className="">
						<DropDown
							openInTheSameTab
							width={150}
							navBar={{
								principal: 'Información académica',
								secundario: [
									{
										name: 'Pregrado',
										path: '/informacion-academica/pregrado',
										condicional: false,
									},
									{
										name: 'Posgrado',
										path: '/informacion-academica/posgrado',
										condicional: false,
									},

									{
										name: 'Docentes',
										path: '/informacion-academica/docentes',
										condicional: true,
									},
								],
							}}
						/>
					</li>
					<li className="flex items-center ">
						<Link href="/directorio">
							<a className="py-1">Directorio</a>
						</Link>
					</li>
					<li className="flex items-center ">
						<Link href="/transparencia">
							<a className="py-1">Transparencia</a>
						</Link>
					</li>
					<li className="">
						<DropDown
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
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SubMenu;
