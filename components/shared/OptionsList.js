const OptionsList = ({ arrayOpciones }) => {
	return (
		<>
			{arrayOpciones.map((opcion, index) => (
				<option key={`${opcion.nombre}+${index}`} value={opcion.nombre}>
					{opcion.nombre}
				</option>
			))}
		</>
	);
};

export default OptionsList;
