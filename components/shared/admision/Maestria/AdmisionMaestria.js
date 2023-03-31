import React from 'react';
import { Tabs } from '../../Tabs';
import { GuiaAdmisionMaestria } from './GuiaAdmisionMaestria';
import { CronogramaAcademico } from './CronogramaAcademico';
import { CuadroVacante } from './CuadroVacante';
import { Requisitos } from './Requisitos';
import { Inversion } from './Inversion';

export const AdmisionMaestria = ({
	cronograma,
	proceso,
	// programas,
	facultad,
}) => {
	return (
		<>
			<Tabs
				nombre="admision_maestria"
				onClick={(e) => {
					handleClick(e);
				}}>
				<div label="Guía para el proceso de admisión">
					<GuiaAdmisionMaestria />
				</div>
				<div label="Cronograma académico">
					<CronogramaAcademico
						cronograma={cronograma}
						proceso={proceso}
					/>
				</div>
				<div label="Cuadro de vacantes">
					<CuadroVacante facultad={facultad} />
				</div>
				<div label="Requisitos para postular">
					<Requisitos />
				</div>
				<div label="Inversión">
					<Inversion />
				</div>
			</Tabs>
		</>
	);
};
