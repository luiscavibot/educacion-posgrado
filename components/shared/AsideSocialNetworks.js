import React from 'react';

import RedesSocialesHome from '../home/RedesSocialesHome';

const AsideSocialNetworks = () => {
	return (
		// <div className="hidden animate__fadeIn animate__animated absolute z-10 md:flex h-10 right-5 top-20 items-center justify-start">
		<div className="hidden animate__fadeIn animate__animated absolute z-20 md:block top-1/2 -translate-y-1/4 w-full">
			<div className="container px-4 m-auto flex items-center justify-end">
				<RedesSocialesHome
					className="text-lg flex flex-col gap-3"
					facebook="https://www.facebook.com/upg.administracion"
					youtube="https://www.youtube.com/c/fcaunmsm"
					tiktok="https://www.tiktok.com/@posgradoadministracionsm"
					linkedin="https://www.linkedin.com/company/posgradoadministracionunmsm/"
					// twitter="https://twitter.com/UNMSMFarmacia"
					// instagram="https://www.instagram.com/unmsmfarmacia/"
				/>
			</div>
		</div>
	);
};

export default AsideSocialNetworks;
