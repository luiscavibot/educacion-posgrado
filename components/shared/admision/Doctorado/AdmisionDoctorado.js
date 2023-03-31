import React from 'react';
import { Tabs } from '../../Tabs';
import { GuiaAdmisionDoctorado } from './GuiaAdmisionDoctorado';
import { CronogramaAcademico } from './CronogramaAcademico';
import { CuadroVacante } from './CuadroVacante';
import { Requisitos } from './Requisitos';
import { Inversion } from './Inversion';

export const AdmisionDoctorado = ({
	cronograma,
	proceso,
	// programas,
	facultad,
}) => {
	return (
		<>
			<Tabs
				nombre="admision_doctorado"
				onClick={(e) => {
					handleClick(e);
				}}>
				<div label="Guía para el proceso de admisión">
					<GuiaAdmisionDoctorado />
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
