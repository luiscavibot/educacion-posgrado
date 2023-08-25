import React from 'react';
import { motion } from 'framer-motion';
import { entradaCardScroll } from '../../consts/animaciones';
import FormacionContentModal from '../formacion-academica/FormacionContentModal';

const Contactanos = ({ mail }) => {
	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			id="unete"
			className="bg-blanco py-14 md:py-18"
		>
			<motion.div
				variants={entradaCardScroll}
				className="container mx-auto px-3 grid-cols-12 gap-x-4 grid text-textColorTwo"
			>
				<div className="col-start-2 col-span-10">
					<FormacionContentModal
						noCloseButton
						responsableEmail={mail}
						telefono="(+51) 619 7000 anexo 2624"
					/>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Contactanos;
