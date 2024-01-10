import React from 'react';

import Boton from '../../Boton';

import { Modal, Box } from '@mui/material';
import FormacionContentModal from '../../../formacion-academica/FormacionContentModal';

const CronogramaPosdoctorado = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div>
			<p className="mb-6">
				A partir de agosto del 2023 estaremos anunciando los detalles
				para nuestra primera convocatoria. ¡Manténte atento/a!
			</p>
			<p className="font-bold">
				¿Te interesa conocer más sobre este posdoctorado?
			</p>
			<p className="mb-2">
				¡No te preocupes! Estamos aquí para ayudarte.
			</p>
			<Boton
				text="Contáctanos"
				// secondary
				bold
				onClick={() => handleOpen()}
			/>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					className="w-[90%] md:w-[60%] h-[90vh] md:h-auto overflow-auto rounded-lg"
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						bgcolor: 'transparent',
					}}
				>
					<FormacionContentModal
						handleClose={handleClose}
						responsableEmail="upg.educacion@unmsm.edu.pe"
						telefono="(+51) 619 7000 anexo 2624"
					/>
				</Box>
			</Modal>
		</div>
	);
};

export default CronogramaPosdoctorado;
