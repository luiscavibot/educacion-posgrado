import React from 'react';
import { Tabs } from '../../Tabs';
import { GuiaAdmisionMaestria } from './GuiaAdmisionMaestria';
import { CronogramaAcademico } from './CronogramaAcademico';
import { ProcesoEvaluacionMaestria } from './ProcesoEvaluacionMaestria';
import { CuadroVacante } from './CuadroVacante';
import { Requisitos } from './Requisitos';
import { Inversion } from './Inversion';

export const AdmisionMaestria = () => {
	return (
		<>
			<Tabs
				nombre="admision_maestria"
				onClick={(e) => {
					handleClick(e);
				}}
			>
				<div label="Guía para el proceso de admisión">
					<GuiaAdmisionMaestria />
				</div>
				<div label="Cronograma académico">
					<CronogramaAcademico />
				</div>
				<div label="Proceso de evaluación">
					<ProcesoEvaluacionMaestria />
				</div>
				<div label="Cuadro de vacantes">
					<CuadroVacante />
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
