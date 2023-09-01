import Link from 'next/link';
import Image from 'next/image';

const CardsResultados = ({ resultados, tipo }) => {
	return (
		<>
			{resultados.map((resultado) => {
				return (
					<Link
						href={{
							pathname: `/${tipo}/[programa]`,
							query: { programa: `${resultado.url}` },
						}}
						key={resultado.nombre}
					>
						<a className="card animate__animated animate__fadeIn">
							<Image
								alt=""
								width={293}
								height={168}
								layout="responsive"
								objectFit="cover"
								// src={
								// 	'https://swiperjs.com/demos/images/nature-1.jpg'
								// }
								src={resultado.imagen}
							></Image>
							<div className="text-content">
								<p className="title">{resultado.nombre}</p>
								<p className="desc">
									{resultado.facultad.nombre}
								</p>
							</div>
						</a>
					</Link>
				);
			})}
		</>
	);
};

export default CardsResultados;
