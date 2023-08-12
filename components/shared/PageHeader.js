import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Logo from '../icons/Logo';

import SideBar from '../shared/SideBar';
import SubMenu from './SubMenu';

const HeaderPage = () => {
	return (
		<header className="bg-bgHeader bg-no-repeat bg-cover md:bg-center bg-secondary text-blanco fixed inset-x-0 z-10">
			<SubMenu theme="footerOne" color="blanco" />
			<div className="container mx-auto px-3 py-3 md:py-5 flex justify-between relative z-10">
				<div className="md:hidden block">
					<SideBar interno />
				</div>
				<div className="relative left-4">
					<Link href="/">
						<a>
							<Logo />
						</a>
					</Link>
				</div>
				<div className="items-end md:flex hidden">
					<nav>
						<ul className="flex items-center gap-7 text-sm font-bold">
							<li>
								<Link href={`/admision`}>
									<a>
										<span>Admisión</span>
									</a>
								</Link>
							</li>
							<li>
								<span>Programas</span>
							</li>
							<li>
								<span>Investigación</span>
							</li>
							<li>
								<span>Comunidad</span>
							</li>
							<li>
								<span>Actualidad</span>
							</li>
							<li>
								<span>Nosotros</span>
							</li>
							<li>
								<Link href={`/blog-gestion-publica`}>
									<a>
										<span>Blog de Gestión pública</span>
									</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default HeaderPage;
