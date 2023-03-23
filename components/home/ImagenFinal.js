import React from 'react';
import Image from 'next/image';

const ImagenFinal = () => {
	return (
		<section id="ImagenFinal">
			<div className="w-100 relative">
				<Image
					src="https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/estudios_posgrado_infraestructura_ddd97f0d79.png"
					quality={100}
					layout="responsive"
					width={1366}
					height={670}
				/>
			</div>
		</section>
	);
};

export default ImagenFinal;
