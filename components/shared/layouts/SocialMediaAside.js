import React from 'react';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const SocialMediaAside = () => {
	return (
		<div className="absolute">
			<div className="text-lg mt-5">
				<a
					href="https://www.facebook.com/fqiq.unmsm.1946"
					target="_blank"
					rel="noreferrer"
					className="w-[36px] h-[36px] flex items-center justify-center mb-2 text-primary bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300">
					<FaFacebookF />
				</a>
				{/* <a
					href="https://www.instagram.com/unmsmfarmacia/"
					target="_blank"
					rel="noreferrer"
					className="w-[36px] h-[36px] flex items-center justify-center mb-2 text-primary bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300">
					<AiFillInstagram />
				</a>
				<a
					href="https://twitter.com/UNMSMFarmacia"
					target="_blank"
					rel="noreferrer"
					className="w-[36px] h-[36px] flex items-center justify-center mb-2 text-primary bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300">
					<FaTwitter />
				</a>
				<a
					href="https://www.youtube.com/@UNMSMFarmacia"
					target="_blank"
					rel="noreferrer"
					className="w-[36px] h-[36px] flex items-center justify-center mb-2 text-primary bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300">
					<AiFillYoutube />
				</a> */}
			</div>
		</div>
	);
};

export default SocialMediaAside;
