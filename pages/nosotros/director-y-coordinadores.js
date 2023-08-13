import Link from 'next/link';
// import Image from 'next/image';
import Image from 'next/future/image';
import React, { useState } from 'react';
import PrincipalLayout from '../../components/shared/layouts/PrincipalLayout';

import directorPic from '../../public/img/examples/dir-pregrado-small.png';

import { Tabs } from '../../components/shared/Tabs';
import Boton from '../../components/shared/Boton';
import { Modal } from '../../components/shared/programas/Modal';

import CalendarioIcon from '../../components/icons/CalendarioIcon';
import DocumentCheckIcon from '../../components/icons/DocumentCheckIcon';
import UserCardIcon from '../../components/icons/UserCardIcon';
import CorreoIcon from '../../components/icons/CorreoIcon';

import { UltimasNoticias } from '../../components/shared/programas/UltimasNoticias';
import Coordinador from '../../components/shared/programas/Coordinador';
import { solicitarInformacionPorCorreo } from '../../helpers/appCorreo';
// import { PlanaDocente } from '../../components/shared/programas/Posgrado/PlanaDocente';
import { SeguimientoEgresado } from '../../components/shared/programas/SeguimientoEgresado';
import { BASE_URL, SLUG_CARRERA } from '../../config/consts';
import { MallaCurricular } from '../../components/shared/programas/MallaCurricular';
import { InversionEconomica } from '../../components/shared/programas/InversionEconomica';

import Consejo from '../../components/nosotros/autoridades-y-organos/Consejo';
import Decanato from '../../components/nosotros/autoridades-y-organos/Decanato';
import VicedecanatoAcademicoPregrado from '../../components/nosotros/autoridades-y-organos/VicedecanatoAcademicoPregrado';
import VicedecanatoInvestigacionPosgrado from '../../components/nosotros/autoridades-y-organos/VicedecanatoInvestigacionPosgrado';
import UnidadPosgrado from '../../components/nosotros/autoridades-y-organos/UnidadPosgrado';
import DepartamentosAcademicos from '../../components/nosotros/autoridades-y-organos/DepartamentosAcademicos';
import EscuelasProfesionales from '../../components/nosotros/autoridades-y-organos/EscuelasProfesionales';
import DireccionAdministrativa from '../../components/nosotros/autoridades-y-organos/DireccionAdministrativa';

import { FaLinkedinIn } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { capitalizarPalabra } from '../../helpers/capitalizarPalabra';
import HojaTexto from '../../components/icons/HojaTexto';
import LibroPersona from '../../components/icons/LibroPersona';
import GradoIcon from '../../components/icons/GradoIcon';
import TituloIcon from '../../components/icons/TituloIcon';
import DuracionIcon from '../../components/icons/DuracionIcon';
import InstitutoInvestigacion from '../../components/nosotros/autoridades-y-organos/InstitutoInvestigacion';

const Autoridades = (
	{
		// carrera,
		// directores,
		// ultimasNoticias,
		// asignaturas,
		// egresados,
	}
) => {
	// console.log(directores);
	const [formData, setFormData] = useState({ correo: '' });

	const [estadoModal, setEstadoModal] = useState(false);

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
			correoContacto: maestria[0].attributes.correo_contacto,
			tipoDePrograma: 'Maestría',
		};
		toast.success(
			'Información enviada correctamente. En breve nos comunicaremos.'
		);
		setFormData({ correo: '' });
		solicitarInformacionPorCorreo(data);
	};

	return (
		<PrincipalLayout>
			<ul className="px-4 md:px-0 col-span-full text-[13px] mb-5">
				<li className="text-textColorTwo inline after:content-['\003e'] after:ml-1 mr-1">
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li className="text-textColorOne inline after:content-['\003e'] after:ml-1 mr-1">
					Nosotros
				</li>
				<li className="text-textColorOne font-bold inline">
					<span>Directores y coordinadores</span>
				</li>
			</ul>
			<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
				Directores y coordinadores
			</div>
			<div className="col-span-full mb-5 ">
				<div className="relative h-bannerMobile md:h-banner xl:h-auto">
					<Image
						src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fca-posgrado/Nosotros/directores-coordinadores-administracion-posgrado.jpg"
						layout="responsive"
						width={1343}
						height={397}
						quality={100}
						priority={true}
						alt="Banner Maestría"
						className="w-full h-full object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1343px"
					/>
				</div>
			</div>
			<div className="col-span-full mb-14">
				<Tabs nombre="autoridades">
					<div label="Consejo de facultad">
						<Consejo />
					</div>
					<div label="Decanato">
						<Decanato />
					</div>
					<div label="Vicedecanato Académico">
						<VicedecanatoAcademicoPregrado />
					</div>
					<div label="Vicedecanato de Investigación y Posgrado">
						<VicedecanatoInvestigacionPosgrado />
					</div>
					<div label="Unidad de Posgrado">
						<UnidadPosgrado />
					</div>
					{/* <div label="Instituto de Investigaciones">
						<InstitutoInvestigacion />
					</div> */}
					<div label="Departamentos académicos">
						<DepartamentosAcademicos />
					</div>
					<div label="Escuelas profesionales">
						<EscuelasProfesionales />
					</div>
					<div label="Dirección administrativa">
						<DireccionAdministrativa />
					</div>
				</Tabs>
			</div>

			{/* <UltimasNoticias ultimasNoticias={ultimasNoticias} /> */}
		</PrincipalLayout>
	);
};

// export async function getStaticProps({ params }) {
// 	const resNoticias = await fetch(
// 		`${BASE_URL}/noticias/${SLUG_CARRERA}/ultimas`
// 	);
// 	const ultimasNoticias = await resNoticias.json();
// 	return {
// 		props: {
// 			ultimasNoticias,
// 		},
// 	};
// }

export default Autoridades;
