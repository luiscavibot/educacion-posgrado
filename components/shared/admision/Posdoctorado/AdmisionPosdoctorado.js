import React from 'react';
import { Tabs } from '../../Tabs';
import GuiaAdmisionPosdoctorado from './GuiaAdmisionPosdoctorado.js';
import CronogramaPosdoctorado from './CronogramaPosdoctorado.js';
import ProcesoEvaluacionPosdoctorado from './ProcesoEvaluacionPosdoctorado.js';
import CuadroVacantesPosdoctorado from './CuadroVacantesPosdoctorado.js';
import RequisitosPosdoctorado from './RequisitosPosdoctorado.js';
import InversionPosdoctorado from './InversionPosdoctorado.js';

export const AdmisionPosdoctorado = () => {
	return (
		<>
			<Tabs
				nombre="admision_posdoctorado"
				onClick={(e) => {
					handleClick(e);
				}}
			>
				<div label="Guía para el proceso de admisión">
					<GuiaAdmisionPosdoctorado />
				</div>
				<div label="Cronograma académico">
					<CronogramaPosdoctorado />
				</div>
				<div label="Proceso de evaluación">
					<ProcesoEvaluacionPosdoctorado />
				</div>
				<div label="Cuadro de vacantes">
					<CuadroVacantesPosdoctorado />
				</div>
				<div label="Requisitos para postular">
					<RequisitosPosdoctorado />
				</div>
				<div label="Inversión">
					<InversionPosdoctorado />
				</div>
			</Tabs>
		</>
	);
};
