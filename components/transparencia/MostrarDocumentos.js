import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const MostrarDocumentos = ({ documentos, categorias }) => {
	const [categoriasFiltradas, setCategoriasFiltradas] = useState(categorias);
	useEffect(() => {
		let categoriasProv = [];
		documentos.forEach((doc) => {
			doc.catDocumento.forEach((cat) => {
				if (!categoriasProv.includes(cat)) {
					categoriasProv.push(cat);
				}
			});
		});
		setCategoriasFiltradas(categoriasProv.map((cat) => ({ nombre: cat })));
	}, [documentos]);

	return (
		<>
			{categoriasFiltradas.map(({ nombre }) => (
				<div key={nombre} className="mt-8">
					<p className="font-bold">{nombre}</p>
					<ul className="list-disc ml-6">
						{documentos
							.filter((documento) =>
								documento.catDocumento.includes(nombre)
							)
							.map((doc) => (
								<li
									key={doc.titulo}
									className="mt-4 hover:text-secondary">
									<Link href={doc.link}>
										<a>{doc.titulo}</a>
									</Link>
								</li>
							))}
					</ul>
				</div>
			))}
		</>
	);
};

export default MostrarDocumentos;
