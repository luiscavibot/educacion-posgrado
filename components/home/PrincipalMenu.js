import React from 'react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/autoplay';

import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import DocumentosIcon from '../icons/DocumentosIcon';
import UserIcon from '../icons/UserIcon';
// import SideBar from '../shared/SideBar';
import SideBar from '../shared/SideBar';

const PrincipalMenu = () => {
	return (
		<div className="absolute w-full top-8">
			<div className="lg:hidden block">
				<SideBar />
			</div>
			<div className="container mx-auto hidden lg:flex justify-between">
				<div className="flex text-blanco">
					<nav>
						<ul className="flex items-start gap-2 text-base font-bold">
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
													M. Ed. con mención en Gestión
													de la Educación
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/programas/maestrias/maestria-en-educacion-con-mencion-en-docencia-universitaria">
												<a className="hover:text-secondary py-2">
													M. Ed. con mención en Docencia
													Universitaria
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/programas/maestrias/maestria-en-educacion-con-mencion-en-evaluacion-y-acreditacion-de-la-calidad-de-la-educacion">
												<a className="hover:text-secondary py-2">
													M. Ed. con mención en
													Evaluación y Acreditación de
													la Calidad de la Educación
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/programas/maestrias/maestria-profesional-en-didactica-en-la-matematica">
												<a className="hover:text-secondary py-2">
													M. Profesional en didáctica de la matemática
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/programas/maestrias/maestria-profesional-en-didactica-de-la-comunicacion-e-innovacion">
												<a className="hover:text-secondary py-2">
													M. Profesional en didáctica de la comunicación e innovación
												</a>
											</Link>
										</MenuItem>
									</Menu>
								</Dropdown>
							</li>
							<li>
								{/* <Dropdown>
									<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente">
										Doctorado
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
											<Link href="/programas/maestrias">
												<a className="hover:text-secondary py-2">
													Maestrías
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/programas/doctorado">
												<a className="hover:text-secondary py-2">
													Doctorado
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/programas/posdoctorado">
												<a className="hover:text-secondary py-2">
													Posdoctorado
												</a>
											</Link>
										</MenuItem>
									</Menu>
								</Dropdown> */}
								<Link href={`/programas/doctorado`}>
									<a className="block px-4 py-2">
										<span>Doctorado</span>
									</a>
								</Link>
							</li>
							{/* <li>
								<Dropdown>
									<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente">
										Investigación
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
											<Link href="/investigacion/actividad-cientifica">
												<a className="hover:text-secondary py-2">
													Actividad científica
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/investigacion/taller-tesis">
												<a className="hover:text-secondary py-2">
													Taller de tesis (Maestrías)
												</a>
											</Link>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<a
												rel="noopener noreferrer"
												target="_blank"
												href="https://revistasinvestigacion.unmsm.edu.pe/index.php/administrativas/index"
												className="hover:text-secondary py-2"
											>
												Gestión en el Tercer Milenio
											</a>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<a
												rel="noopener noreferrer"
												href="https://administracion.unmsm.edu.pe/grupos-de-investigaciones/"
												target="_blank"
												className="hover:text-secondary py-2"
											>
												Grupos de Investigación
											</a>
										</MenuItem>
									</Menu>
								</Dropdown>
							</li> */}
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
										{/* <MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/actualidad/eventos">
												<a className="hover:text-secondary py-2">
													Eventos
												</a>
											</Link>
										</MenuItem> */}
										{/* <MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<Link href="/actualidad/boletines">
												<a className="hover:text-secondary py-2">
													Boletines
												</a>
											</Link>
										</MenuItem> */}
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
							{/* <li>
								<Link href={`/blog-gestion-publica`}>
									<a className="block px-4 py-2">
										<span>Blog de Gestión pública</span>
									</a>
								</Link>
							</li> */}
						</ul>
					</nav>
				</div>
				<div className="text-blanco">
					<nav>
						<ul className="flex items-start gap-2 text-base font-bold">
							<li>
								<Link href="/tramites">
									<a className="px-4 py-2 flex items-center gap-[6px]">
										<DocumentosIcon className="w-5 h-5 fill-blanco" />
										<span>Trámites</span>
									</a>
								</Link>
							</li>
							<li>
								<Dropdown>
									<MenuButton className="cursor-pointer box-border rounded-lg px-4 py-2 leading-normal bg-transparente text-blanco hover:bg-transparente hover:border-transparente focus-visible:border-transparente focus-visible:hover:border-transparente focus-visible:outline-0 focus-visible:shadow-outline-transparente inline-flex items-center gap-[6px]">
										<UserIcon className="w-4 h-4 fill-blanco" />
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
												href="https://mail.google.com/mail/u/1/?pli=1#inbox"
												className="hover:text-secondary py-2"
											>
												Sistema único de matrícula (SUM)
											</a>
										</MenuItem>
										<MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<a
												href="https://sum.unmsm.edu.pe/"
												className="hover:text-secondary py-2"
											>
												MAT
											</a>
										</MenuItem>
										{/* <MenuItem className="list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0">
											<a
												href="https://forms.gle/6QHcRQ5gZQKxpZpn8"
												className="hover:text-secondary py-2"
											>
												Registro de pagos
											</a>
										</MenuItem> */}
									</Menu>
								</Dropdown>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default PrincipalMenu;
