import React from 'react';
import { Tabs } from '../../Tabs';
import { GuiaAdmisionDoctorado } from './GuiaAdmisionDoctorado';
import { CronogramaAcademico } from './CronogramaAcademico';
import { ProcesoEvaluacionDoctorado } from './ProcesoEvaluacionDoctorado';
import { CuadroVacante } from './CuadroVacante';
import { Requisitos } from './Requisitos';
import { Inversion } from './Inversion';

export const AdmisionDoctorado = () => {
	return (
		<>
			<Tabs
				nombre="admision_doctorado"
				onClick={(e) => {
					handleClick(e);
				}}
			>
				<div label="Guía para el proceso de admisión">
					<GuiaAdmisionDoctorado />
				</div>
				<div label="Cronograma académico">
					<CronogramaAcademico />
				</div>
				<div label="Proceso de evaluación">
					<ProcesoEvaluacionDoctorado />
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
