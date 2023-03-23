import Link from 'next/link';

const TituloResultado = ({ resultado }) => {
	let url = '';
	if (resultado.tipo === 'maestrias') {
		url += '/maestrias/' + resultado.url;
	}

	return (
		<Link href={url} passHref>
			<a className="subtitle mb-1">{resultado?.titulo}</a>
		</Link>
	);
};

export default TituloResultado;
