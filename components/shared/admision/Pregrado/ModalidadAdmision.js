import React from 'react';
import { Tab } from 'semantic-ui-react';
import Link from 'next/link';

export const ModalidadAdmision = ({ programas }) => {
	return (
		<>
			<div className="mb-6">
				<p className="subtitle mb-3">
					Educación básica regular (EBR) y Educación básica
					alternativa (EBA)
				</p>

				<p className="mb-4">
					a) Egresados de Educación Básica Regular (EBR).
				</p>

				<p>b) Egresados de Educación Básica Alternativa (EBA).</p>
			</div>
			<div className="mb-6">
				<p className="subtitle mb-3">
					Primeros puestos de educación secundaria
				</p>
				<p>
					El postulante por esta modalidad es el que ha concluido sus
					estudios secundarios, en los dos años anteriores al proceso
					de admisión, en una institución educativa pública o privada,
					ubicada en la región Lima o en la región Callao, y ha
					ocupado uno de los dos primeros puestos en dicha institución
					según su respectivo cuadro de mérito.
				</p>
			</div>
			<div className="mb-6">
				<p className="subtitle mb-3">
					Personas con discapacidad (Ley N.° 29973)
				</p>
				<p>
					El postulante por esta modalidad debe ser egresado de
					Educación Básica Regular (EBR) o Educación Básica
					Alternativa (EBA) y deberá presentar la resolución ejecutiva
					de inscripción en el Registro Nacional de la Persona con
					Discapacidad en original, expedida por el Consejo Nacional
					para la Integración de la Persona con Discapacidad
					(CONADIS).
				</p>
			</div>
			<div className="mb-6">
				<p className="subtitle mb-3">
					Centro preuniversitario de la UNMSM
				</p>
				<p>
					El postulante por esta modalidad es quien alcanzó vacante en
					el cuadro de méritos del Centro Preuniversitario de la
					UNMSM. Para formalizar su ingreso, debe adquirir la carpeta
					del postulante, pagar el derecho de inscripción al Examen de
					Admisión 2020-II e inscribirse.
				</p>
			</div>
			<div className="mb-6">
				<p className="subtitle mb-3">Deportista calificado</p>
				<p>
					El deportista calificado debe ser egresado de Educación
					Básica Regular (EBR) o Educación Básica Alternativa (EBA) y
					tener acreditación vigente otorgada por el Instituto Peruano
					del Deporte (artículo 65).
				</p>
			</div>
			<div className="mb-6">
				<p className="subtitle mb-3">
					Deportistas calificados de alto nivel (Ley N.° 28036 y su
					modificatoria Ley N.° 29544 y Resolución Rectoral N.°
					02274-R-13)
				</p>
				<p>
					El deportista calificado de alto nivel debe ser egresado de
					Educación Básica Regular (EBR) o Educación Básica
					Alternativa (EBA) y tener acreditación vigente otorgada por
					el Instituto Peruano del Deporte (artículo 66).
				</p>
			</div>
			<div className="mb-6">
				<p className="subtitle mb-3">
					Víctimas del terrorismo (Ley N.° 27277)
				</p>
				<p>
					El postulante por esta modalidad debe ser egresado de
					Educación Básica Regular (EBR) o Educación Básica
					Alternativa (EBA) y haber sido reconocido como víctima del
					terrorismo según Decreto Supremo N.° 051-88-PCM.
				</p>
			</div>
			<div className="mb-6">
				<p className="subtitle mb-3">Graduados o titulados</p>
				<p>
					Corresponden a esta modalidad los graduados o titulados en
					una universidad peruana o extranjera. También podrán
					postular los titulados de las instituciones y escuelas de
					educación superior señalados por la ley universitaria.
				</p>
			</div>
			<div className="mb-6">
				<p className="subtitle mb-3">
					Traslado externo nacional e internacional
				</p>
				<p>
					Se refiere al traslado externo a la misma carrera de origen
					del postulante. Pueden postular los estudiantes de otras
					universidades del país o del extranjero que hayan aprobado
					por lo menos cuatro periodos lectivos semestrales o dos
					anuales de acuerdo con su plan de estudios o setenta y dos
					(72) créditos en la universidad de origen. La última
					matrícula debe ser posterior a febrero 2019.
				</p>
			</div>
			<div className="mb-6">
				<p className="subtitle mb-3">Traslado interno</p>
				<p className="mb-3">
					Corresponde a los alumnos de la UNMSM con matrícula vigente
					que hayan aprobado, por lo menos, cuatro periodos lectivos
					semestrales o dos anuales de acuerdo con su plan de estudios
					o setenta y dos (72) créditos. Solo procede el traslado a
					una Escuela Profesional del área académica a la que
					pertenece la carrera de origen de acuerdo con el artículo 1
					(artículo 63).
				</p>
				<p>
					No tienen derecho a traslado interno los alumnos que hayan
					ingresado a la UNMSM por las modalidades de Traslado externo
					nacional e internacional, Traslado interno y Graduados o
					titulados.
				</p>
			</div>
		</>
	);
};
