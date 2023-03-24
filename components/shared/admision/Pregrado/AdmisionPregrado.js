import React from 'react';
import Link from 'next/link';
import { Tabs } from '../../Tabs';

import Observacion from '../../Observacion';

import { CuadroVacante } from './CuadroVacante';
import { Inversion } from './Inversion';
import { ModalidadAdmision } from './ModalidadAdmision';

import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import UserCheck from '../../../icons/UserCheck';
import { GuiaAdmisionPregrado } from './GuiaAdmisionPregrado';
import { CronogramaAcademico } from './CronogramaAcademico';

export const AdmisionPregrado = ({
	cronograma,
	proceso,
	programas,
	vacante,
}) => {
	return (
		<>
			<Tabs nombre="admision_pregrado">
				<div label="Guía para el proceso de admisión">
					<GuiaAdmisionPregrado />
				</div>
				<div label="Cronograma académico">
					<CronogramaAcademico />
				</div>
				<div label="Cuadro de vacantes">
					<CuadroVacante />
				</div>
				<div label="Modalidades de admisión">
					<ModalidadAdmision />
				</div>
				<div label="Inversión">
					<Inversion />
				</div>
			</Tabs>
		</>
	);
};
