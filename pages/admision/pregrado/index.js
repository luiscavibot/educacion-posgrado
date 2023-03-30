import Link from 'next/link';
// import Image from 'next/image';
import Image from 'next/future/image';
import React, { useEffect } from 'react';

import { POSGRADO_URL, SLUG_CARRERA } from '../../../config/consts';

import { Tab } from 'semantic-ui-react';

import PrincipalLayout from '../../../components/shared/layouts/PrincipalLayout';

import { AdmisionPregrado } from '../../../components/shared/admision/Pregrado/AdmisionPregrado';

const Index = () => {
	return (
		<>
			<PrincipalLayout>
				<ul className="px-4 md:px-0 col-span-full text-tertiary text-sm mb-5">
					<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
						<Link href="/">
							<a>Inicio</a>
						</Link>
					</li>
					<li className="font-bold inline after:content-['\003e'] after:ml-1 mr-1">
						Formación académica
					</li>
					<li className="inline text-negro">Pregrado</li>
				</ul>
				<div className="mx-4 md:mx-0 col-span-full title-page mb-5">
					Admisión
				</div>
				<div className="col-span-full mb-5">
					<div className="h-bannerMobile md:h-banner xl:h-auto">
						<Image
							priority
							src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/fac-quimica/formacion-academica/admision/admision-banner-facultad-quimica.jpg"
							layout="responsive"
							alt="Banner de admisión"
							width={1080}
							height={319}
							quality={100}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className="col-span-11 mb-14">
					<div className="col-start-3 col-span-10 mb-14">
						<div className="mb-14">
							<AdmisionPregrado />
						</div>
					</div>
				</div>
			</PrincipalLayout>
		</>
	);
};

export default Index;
