import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
registerLocale('es', es);

// import 'react-datepicker/dist/react-datepicker.css';

import CalendarioIcon from '../../components/icons/CalendarioIcon';
import DatePicker from 'react-datepicker';

export default function SelectorIntervalosFechas({ controles }) {
	const [
		endDate,
		setEndDate,
		startDate,
		setStartDate,
		setPage,
		INITIAL_PAGE,
	] = controles;
	return (
		<>
			<div className="ml-6 items-center hidden md:inline-block w-full md:w-auto">
				<p className="text-base font-normal inline-block">Inicio:</p>
				<div className="relative ml-2 inline-block">
					<div className="absolute flex items-center justify-center rounded-xl h-10 w-10">
						<CalendarioIcon className="fill-primary" />
					</div>
					<DatePicker
						dateFormat={'dd/MM/yyyy'}
						locale="es"
						selected={startDate}
						onChange={(date) => {
							setStartDate(date);
							setPage(INITIAL_PAGE);
						}}
						selectsStart
						startDate={startDate}
						endDate={endDate}
						className="bg-transparente pl-9 w-[8rem] border-grisBordeFormulario rounded-lg text-sm py-2.5 focus:border-solid focus:border-secondary focus:outline-none focus:ring-0 focus:ring-secondary"
					/>
				</div>
			</div>
			<div className="ml-6 items-center hidden md:inline-block w-full md:w-auto">
				<p className="text-base font-normal inline-block">Final:</p>
				<div className="relative ml-2 inline-block">
					<div className="absolute flex items-center justify-center rounded-xl h-10 w-10">
						<CalendarioIcon className="fill-primary" />
					</div>
					<DatePicker
						dateFormat={'dd/MM/yyyy'}
						locale="es"
						selected={endDate}
						onChange={(date) => {
							setEndDate(date);
							setPage(INITIAL_PAGE);
						}}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						minDate={startDate}
						className="bg-transparente pl-9 w-[8rem] border-grisBordeFormulario rounded-lg text-sm py-2.5 focus:border-solid focus:border-secondary focus:outline-none focus:ring-0 focus:ring-secondary"
					/>
				</div>
			</div>
		</>
	);
}
