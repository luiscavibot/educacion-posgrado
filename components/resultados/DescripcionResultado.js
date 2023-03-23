import Link from 'next/link';

const DescripcionResultado = ({ resultado }) => {
	let url = '';
	if (resultado.tipo === 'maestrias') {
		url += '/maestrias/' + resultado.url;
	}

	return (
		<Link href={url} passHref>
			<a>{resultado?.descripcion}</a>
		</Link>
	);
};

export default DescripcionResultado;
