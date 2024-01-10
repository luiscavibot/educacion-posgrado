import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Logo from '../icons/Logo';

import SideBar from '../shared/SideBar';
import SubMenu from './SubMenu';

import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import Image from 'next/image';

const HeaderPage = () => {
	return (
		<header className="bg-bgEventos bg-no-repeat bg-cover lg:bg-center bg-secondary text-blanco fixed inset-x-0 z-10">
			<SubMenu theme="footerOne" color="blanco" />
			<div className="container mx-auto px-4 lg:px-8 2xl:px-16 py-3 lg:py-5 flex justify-between relative z-10">
				<div className="lg:hidden block">
					<SideBar interno />
				</div>
				<div className="">
					<Link href="/">
						<a className="flex items-center gap-3">
							<div className="w-10">
								<Image
									src="https://unmsm-static-files.s3.us-east-2.amazonaws.com/general/escudo-unmsm.png"
									alt="escudo-unmsm"
									width={130.94}
									height={158}
								/>
							</div>
							<p className="font-bold">Posgrado Educación</p>
						</a>
					</Link>
				</div>
				<div className="items-center lg:flex hidden">
					<nav>
						<ul className="flex items-start gap-1 text-sm font-bold">
							<li>
								<Link href={`/admision?programa=maestria`}>
									<a className="block px-4 py-2">
										<span>Admisión</span>
									</a>
								</Link>
							</li>
							<li>
								<Dropdown>
									<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente">
										Maestrías
									</MenuButton>
									<Menu
										slotProps={{
											root: {
												className: `z-20 max-w-[225px] relative before:block before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-8 before:border-solid before:border-transparente before:border-b-blanco`,
											},
											listbox: {
												className:
													'text-sm box-border p-1.5 my-2 mx-0 rounded-xl overflow-auto outline-0 bg-blanco text-textColorOne min-w-listbox shadow-md',
											},
										}}
									>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/programas/maestrias/maestria-en-educacion-con-mencion-en-gestion-de-la-educacion">
												<a className="hover:text-secondary py-2">
													Med. con mención en Gestión
													de la Educación
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/programas/maestrias/maestria-en-educacion-con-mencion-en-docencia-universitaria">
												<a className="hover:text-secondary py-2">
													Med. con mención en Docencia
													Universitaria
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/programas/maestrias/maestria-en-educacion-con-mencion-en-evaluacion-y-acreditacion-de-la-calidad-de-la-educacion">
												<a className="hover:text-secondary py-2">
													Med. con mención en
													Evaluación y Acreditación de
													la Calidad de la Educación
												</a>
											</Link>
										</MenuItem>
									</Menu>
								</Dropdown>
							</li>
							<li>
								<Link href={`/programas/doctorado`}>
									<a className="block px-4 py-2">
										<span>Doctorado</span>
									</a>
								</Link>
							</li>
							<li>
								<Dropdown>
									<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente">
										Comunidad
									</MenuButton>

									<Menu
										slotProps={{
											root: {
												className: `z-20 max-w-[125px] relative before:block before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-8 before:border-solid before:border-transparente before:border-b-blanco`,
											},
											listbox: {
												className:
													'text-sm box-border p-1.5 my-2 mx-0 rounded-xl overflow-auto outline-0 bg-blanco text-textColorOne min-w-listbox shadow-md',
											},
										}}
									>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/comunidad/informacion-academica">
												<a className="hover:text-secondary py-2">
													Información académica
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/comunidad/plana-docente">
												<a className="hover:text-secondary py-2">
													Plana docente
												</a>
											</Link>
										</MenuItem>
										{/* <MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/comunidad/seguimiento-egresados">
												<a className="hover:text-secondary py-2">
													Testimonios de egresados
												</a>
											</Link>
										</MenuItem> */}
									</Menu>
								</Dropdown>
							</li>
							<li>
								<Dropdown>
									<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente">
										Actualidad
									</MenuButton>

									<Menu
										slotProps={{
											root: {
												className: `z-20 max-w-[125px] relative before:block before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-8 before:border-solid before:border-transparente before:border-b-blanco`,
											},
											listbox: {
												className:
													'text-sm box-border p-1.5 my-2 mx-0 rounded-xl overflow-auto outline-0 bg-blanco text-textColorOne min-w-listbox shadow-md',
											},
										}}
									>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/actualidad/agenda-publica">
												<a className="hover:text-secondary py-2">
													Noticias
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/actualidad/comunicados">
												<a className="hover:text-secondary py-2">
													Comunicados
												</a>
											</Link>
										</MenuItem>
									</Menu>
								</Dropdown>
							</li>
							<li>
								<Dropdown>
									<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente">
										Nosotros
									</MenuButton>

									<Menu
										slotProps={{
											root: {
												className: `z-20 max-w-[125px] relative before:block before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-8 before:border-solid before:border-transparente before:border-b-blanco`,
											},
											listbox: {
												className:
													'text-sm box-border p-1.5 my-2 mx-0 rounded-xl overflow-auto outline-0 bg-blanco text-textColorOne min-w-listbox shadow-md',
											},
										}}
									>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/nosotros/director-y-coordinadores">
												<a className="hover:text-secondary py-2">
													Autoridades
												</a>
											</Link>
										</MenuItem>
										{/* <MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/nosotros/historia">
												<a className="hover:text-secondary py-2">
													Historia
												</a>
											</Link>
										</MenuItem> */}
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/nosotros/transparencia">
												<a className="hover:text-secondary py-2">
													Transparencia
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/nosotros/directorio">
												<a className="hover:text-secondary py-2">
													Directorio
												</a>
											</Link>
										</MenuItem>
									</Menu>
								</Dropdown>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default HeaderPage;
