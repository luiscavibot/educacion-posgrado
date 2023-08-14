import React from 'react';

export const ProcesoEvaluacionMaestria = () => {
	return (
		<div>
			<p className="mb-2">
				El proceso de evaluación de la Unidad de Posgrado de la Facultad
				de Ciencias Administrativas de la UNMSM consta de tres
				componentes:
			</p>
			<div className="mb-6">
				<ul className="list-disc list-outside pl-4 mb-4">
					<li>
						<span className="font-bold">
							Examen virtual (hasta 20 puntos):
						</span>{' '}
						Evalúa competencias cognitivas superiores y conocimiento
						básico del idioma inglés. El temario aborda: fundamentos
						de la administración, contexto nacional e internacional
						y preguntas básicas en inglés. El examen tiene carácter
						eliminatorio. (El puntaje mínimo para aprobar el examen
						es de 13 puntos).
					</li>
				</ul>
				<ul className="list-disc list-outside pl-4 mb-4">
					<li>
						<span className="font-bold">
							Evaluación de la hoja de vida (hasta 30 puntos):
						</span>{' '}
						El jurado calificador evalúa la hoja de vida de manera
						integral y asigna un puntaje según cada rubro. La hoja
						de vida se presenta según el formato de los requisitos.
						Este debe ser documentado, foliado y ordenado de acuerdo
						con los rubros de la ficha.
					</li>
				</ul>
				<ul className="list-disc list-outside pl-4 mb-4">
					<li>
						<span className="font-bold">
							Entrevista virtual (hasta 50 puntos):
						</span>{' '}
						La entrevista personal comprenderá la sustentación de un
						tema libre de la especialidad del postulante y la
						ampliación sobre los datos que figuran en la hoja de
						vida y se llevará a cabo vía la plataforma Google Meet,
						para lo cual es importante ingresar de una cuenta de
						correo GMAIL.
					</li>
				</ul>
			</div>
			<p>
				El examen virtual se llevará a cabo el jueves 3 de agosto . La
				entrevista virtual se llevará a cabo el 8 y 9 de agosto, los
				resultados finales se publicarán el 14 de agosto. El ingreso a
				cada programa de posgrado es en estricto orden de mérito según
				el número de vacantes disponibles.{' '}
				<span className="font-bold">
					El puntaje mínimo acumulativo para poder competir por una
					vacante es de 65 puntos.
				</span>
			</p>
		</div>
	);
};
