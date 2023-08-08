import Image from 'next/image';
import flechaAbajo from '../../../public/img/icons/flecha-abajo.svg';
import HojaMedalla from '../../icons/HojaMedalla';
import DosHojasIcon from '../../icons/DosHojasIcon';
import HojaTexto from '../../icons/HojaTexto';
import CuadradoLapiz from '../../icons/CuadradoLapiz';
import CardCheck from '../../icons/CardCheck';
import CalendarioIcon from '../../icons/CalendarioIcon';
import PersonaMicrofonoStroke from '../../icons/PersonaMicrofonoStroke';
import DocumentoEnFolderStroke from '../../icons/DocumentoEnFolderStroke';
import BirreteStroke from '../../icons/BirreteStroke';
import ProbetaStroke from '../../icons/ProbetaStroke';
import MedallaSroke from '../../icons/MedallaSroke';
import LibroTresCaidos from '../../icons/LibroTresCaidos';
import EscuelasProfesionales from '../../icons/EscuelasProfesionales';
import GrupoPersonasTres2 from '../../icons/GrupoPersonasTres2';
import AdmisionIcon from '../../icons/AdmisionIcon';
import PresentacionIcon from '../../icons/PresentacionIcon';
import MallaCurricularIcon from '../../icons/MallaCurricularIcon';
import InversionEconomicaIcon from '../../icons/InversionEconomicaIcon';
import RequisitosIcon from '../../icons/RequisitosIcon';
import GuiaProcesoIcon from '../../icons/GuiaProcesoIcon';
import LupaStroke from '../../icons/LupaStroke';
import ProcesoEvaluacionIcon from '../../icons/ProcesoEvaluacionIcon';
import InscripcionIcon from '../../icons/InscripcionIcon';

const IconTab = (label) => {
	switch (label.label) {
		case 'admision':
			return <AdmisionIcon />;
		case 'presentacion':
			return <PresentacionIcon />;

		case 'malla-curricular':
			return <MallaCurricularIcon />;
		case 'inscripcion':
			return <InscripcionIcon />;
		case 'plana-docente':
			return (
				<>
					<span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/plana-docente-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'inversion-economica':
			return (
				<>
					{/* <span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/inversion-economica-icon.svg"
							alt=""
						/>
					</span> */}
					<InversionEconomicaIcon className="fill-textColorOne w-[21px] h-[21px]" />
				</>
			);

		case 'seguimiento-de-egresados':
			return (
				<>
					<span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/seguimiento-de-egresados-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'constancia-de-ingreso-a-estudios-de-posgrado':
			return (
				<>
					<span>
						<img
							className="w-[35px] md:w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/constancia-de-ingreso-a-estudios-de-posgrado-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'constancia-de-pago-por-derecho-de-inscripcion':
			return (
				<>
					<span>
						<img
							className="w-[35px] md:w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/constancia-de-pago-por-derecho-de-inscripcion-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'devolucion-de-dinero-por-derecho-de-inscripcion':
			return (
				<>
					<span>
						<img
							className="w-[35px] md:w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/devolucion-de-dinero-por-derecho-de-inscripcion-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'revalidacion-de-grado-de-magister-y-o-doctor':
			return (
				<>
					<span>
						<img
							className="w-[35px] md:w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/revalidacion-de-grado-de-magister-y-o-doctor-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'cronograma-academico':
			return (
				<>
					{/* <span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/cronograma-academico-icon.svg"
							alt=""
						/>
					</span> */}
					<CalendarioIcon className="fill-textColorOne" />
				</>
			);

		case 'cuadro-de-vacantes':
			return (
				<>
					{/* <span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/cuadro-de-vacantes-icon.svg"
							alt=""
						/>
					</span> */}
					<CardCheck className="fill-textColorOne" />
				</>
			);

		case 'requisitos-para-postular':
			return (
				<>
					{/* <span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/requisitos-icon.svg"
							alt=""
						/>
					</span> */}
					<RequisitosIcon className="fill-textColorOne" />
				</>
			);

		case 'modalidades-de-admision':
			return (
				<>
					{/* <span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/requisitos-icon.svg"
							alt=""
						/>
					</span> */}
					<RequisitosIcon className="fill-textColorOne" />
				</>
			);

		case 'guia-para-el-proceso-de-admision':
			return (
				<>
					<GuiaProcesoIcon className="fill-textColorOne" />
				</>
			);

		case 'proceso-de-evaluacion':
			return (
				<>
					<ProcesoEvaluacionIcon className="fill-textColorOne" />
				</>
			);

		case 'pago-de-inscripcion':
			return (
				<>
					<span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/pago-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'inversion':
			return (
				<>
					{/* <span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/pago-icon.svg"
							alt=""
						/>
					</span> */}
					<InversionEconomicaIcon className="fill-textColorOne w-[21px] h-[21px]" />
				</>
			);

		case 'ingles':
			return (
				<>
					<span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/idiomas/ingles-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'portugues':
			return (
				<>
					<span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/idiomas/portugues-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'italiano':
			return (
				<>
					<span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/idiomas/italiano-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'quechua':
			return (
				<>
					<span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/idiomas/quechua-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'examen-de-suficiencia':
			return (
				<>
					<span>
						<img
							className="w-[24px] mb-[2px] mr-1 inline-block"
							src="/img/icons/idiomas/examen-suficiencia-icon.svg"
							alt=""
						/>
					</span>
				</>
			);

		case 'documentos-oficiales':
			return (
				<>
					<HojaMedalla className="fill-textColorOne" />
				</>
			);

		case 'actas-del-consejo':
			return (
				<>
					<DosHojasIcon
						className="fill-textColorOne"
						// className="!fill-blanco"
					/>
				</>
			);

		case 'resoluciones-decanales':
			return (
				<>
					<HojaTexto className="fill-textColorOne" />
				</>
			);

		case 'memorias':
			return (
				<>
					<CuadradoLapiz className="fill-textColorOne" />
				</>
			);
			break;
		// opciones Autoridades
		case 'consejo-de-facultad':
			return (
				<>
					<PersonaMicrofonoStroke className=" w-[21px] h-[21px]" />
				</>
			);
			break;
		case 'decanato':
			return (
				<>
					<DocumentoEnFolderStroke className=" w-[21px] h-[21px]" />
				</>
			);
			break;
		case 'vicedecanato-academico':
			return (
				<>
					<BirreteStroke className=" w-[21px] h-[21px]" />
				</>
			);
			break;
		case 'vicedecanato-de-investigacion-y-posgrado':
			return (
				<>
					<ProbetaStroke className=" w-[21px] h-[21px]" />
				</>
			);
			break;
		case 'unidad-de-posgrado':
			return (
				<>
					<MedallaSroke className=" w-[21px] h-[21px]" />
				</>
			);
			break;
		case 'instituto-de-investigaciones':
			return (
				<>
					<LupaStroke className=" w-[21px] h-[21px] fill-textColorOne" />
				</>
			);
			break;
		case 'departamentos-academicos':
			return (
				<>
					<LibroTresCaidos className=" w-[21px] h-[21px]" />
				</>
			);
			break;
		case 'escuelas-profesionales':
			return (
				<>
					<EscuelasProfesionales className="fill-textColorOne w-[21px] h-[21px]" />
				</>
			);
			break;
		case 'direccion-administrativa':
			return (
				<>
					<GrupoPersonasTres2 className=" w-[21px] h-[21px]" />
				</>
			);
			break;
		default:
			return (
				<Image
					src={flechaAbajo}
					width="24"
					height="24"
					alt="flecha-abajo"
				/>
			);
	}
};
export default IconTab;
