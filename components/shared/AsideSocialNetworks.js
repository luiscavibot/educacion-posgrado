import React from 'react';

import RedesSocialesHome from '../home/RedesSocialesHome';

const AsideSocialNetworks = () => {
	return (
		// <div className="hidden animate__fadeIn animate__animated absolute z-10 md:flex h-10 right-5 top-20 items-center justify-start">
		<div className="hidden animate__fadeIn animate__animated absolute z-20 md:block top-1/2 -translate-y-1/4 w-full">
			<div className="container px-4 m-auto flex items-center justify-end">
				<RedesSocialesHome
					className="text-lg flex flex-col gap-3"
					facebook={`${process.env.NEXT_PUBLIC_FACEBOOK}`}
					youtube={`${process.env.NEXT_PUBLIC_YOUTUBE}`}
					tiktok={`${process.env.NEXT_PUBLIC_TIKTOK}`}
					linkedin={`${process.env.NEXT_PUBLIC_LINKEDIN}`}
				/>
			</div>
		</div>
	);
};

export default AsideSocialNetworks;
