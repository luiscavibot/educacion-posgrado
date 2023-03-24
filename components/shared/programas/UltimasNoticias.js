import React from 'react';
import Link from 'next/link';
import Image from 'next/future/image';

import { BiTimeFive } from 'react-icons/bi';
import { getFecha } from '../../../helpers/getFecha';

export const UltimasNoticias = ({ ultimasNoticias }) => {
	return (
		<>
			{ultimasNoticias && ultimasNoticias.length > 0 && (
				<div className="col-span-full mx-4 md:mx-0">
					<div>
						<div className="flex mb-6 font-bold">
							<p className="text-textColorOne">
								Últimas noticias
							</p>
							<Link href="/noticias" passHref>
								<a className="text-secondary flex items-end hover:text-textColorOne">
									<span className="ml-2">|</span>
									<p className="ml-2">ver más</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="col-start-3 col-span-10 mb-14">
						<div className="grid grid-cols-3 gap-x-4 gap-y-8">
							{ultimasNoticias.map((noticia) => (
								<Link
									href={{
										pathname: `/noticias/[noticiaLink]`,
										query: {
											noticiaLink: `${noticia.slug}`,
										},
									}}
									key={noticia.id}>
									<a className="card col-span-3 md:col-span-1 !rounded-t-none">
										<div className="h-[13.8rem]">
											<Image
												className="object-cover w-full h-full"
												alt=""
												width={293}
												height={168}
												src={noticia.foto}></Image>
										</div>
										<div className="text-content">
											<p className="title break-words line-clamp-2">
												{noticia.titulo}
											</p>
											<div className="text-textColorTwo/50 text-xs mt-2 flex justify-start items-center">
												<BiTimeFive />
												<p className="ml-1">
													{getFecha(noticia.fecha)}
												</p>
											</div>
											{/* <p className="desc">{facultad}</p> */}
										</div>
									</a>
								</Link>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};
