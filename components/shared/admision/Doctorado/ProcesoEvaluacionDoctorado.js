import React from 'react';

export const ProcesoEvaluacionDoctorado = () => {
	return (
		<div>
			<p className="mb-2">
				El proceso de evaluación de la Unidad de Posgrado de la Facultad
				de Educación de la UNMSM consta de tres componentes:
			</p>
			<div className="mb-6">
				<ul className="list-disc list-outside pl-4 mb-4">
					<li>
						<span className="font-bold">
							Examen virtual (hasta 20 puntos):
						</span>{' '}
						Evalúa competencias cognitivas superiores y conocimiento
						básico del idioma inglés. Tiene un peso de 20% en la
						evaluación final. El puntaje mínimo para aprobar el
						examen de aptitud, en su modalidad virtual, es de 13
						puntos. El temario aborda: fundamentos de la
						administración, contexto nacional e internacional y
						preguntas básicas en inglés. El examen tiene carácter
						eliminatorio; es decir, solo pasan a las siguientes
						etapas de evaluación aquellos que logran aprobarlo.
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
						a los rubros de la ficha.
					</li>
				</ul>
				<ul className="list-disc list-outside pl-4 mb-4">
					<li>
						<span className="font-bold">
							Proyecto de investigación(hasta 50 puntos):
						</span>{' '}
						El cual deberá contar con un máximo de 5 páginas sobre
						un tema propio del postulante o de los propuestos por la
						Universidad y sustentarse oralmente(traer PPT) ante el
						Jurado de Admisión. El puntaje mínimo para aprobar la
						presentación del proyecto de investigación es 28.00
						puntos.
					</li>
				</ul>
			</div>
			<p>
				El examen virtual se llevará a cabo el sábado 25 de marzo. La
				sustentación del proyecto de investigación del doctorado se
				llevará a cabo el 26 de marzo. Los resultados finales se
				publicarán el 31 de marzo. El ingreso a cada programa de
				posgrado es en estricto orden de mérito según el número de
				vacantes disponibles.{' '}
				<span className="font-bold">
					El puntaje total mínimo aprobatorio para acceder a una
					vacante es de 65 puntos.
				</span>
			</p>
		</div>
	);
};
