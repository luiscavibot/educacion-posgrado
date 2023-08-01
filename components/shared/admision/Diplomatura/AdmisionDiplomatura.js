import React from 'react';
import { Tabs } from '../../Tabs';
import GuiaAdmisionDiplomatura from './GuiaAdmisionDiplomatura';
import CronogramaDiplomatura from './CronogramaDiplomatura';
import ProcesoEvaluacionDiplomatura from './ProcesoEvaluacionDiplomatura';
import CuadroVacantesDiplomatura from './CuadroVacantesDiplomatura';
import RequisitosDiplomatura from './RequisitosDiplomatura';
import InversionDiplomatura from './InversionDiplomatura';

export const AdmisionDiplomatura = () => {
	return (
		<>
			<Tabs
				nombre="admision_diplomatura"
				onClick={(e) => {
					handleClick(e);
				}}
			>
				<div label="Guía para el proceso de admisión">
					<GuiaAdmisionDiplomatura />
				</div>
				<div label="Cronograma académico">
					<CronogramaDiplomatura />
				</div>
				<div label="Proceso de evaluación">
					<ProcesoEvaluacionDiplomatura />
				</div>
				<div label="Cuadro de vacantes">
					<CuadroVacantesDiplomatura />
				</div>
				<div label="Requisitos para postular">
					<RequisitosDiplomatura />
				</div>
				<div label="Inversión">
					<InversionDiplomatura />
				</div>
			</Tabs>
		</>
	);
};
