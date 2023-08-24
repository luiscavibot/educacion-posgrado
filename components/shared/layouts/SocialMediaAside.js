import React from 'react';

import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const SocialMediaAside = () => {
	return (
		<div className="absolute">
			<div className="text-lg mt-5">
				<a
					href={`${process.env.NEXT_PUBLIC_FACEBOOK}`}
					target="_blank"
					rel="noreferrer"
					className="w-[36px] h-[36px] flex items-center justify-center mb-3 text-primary border-primary border-[1px] bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300"
				>
					<FaFacebookF />
				</a>
				<a
					href={`${process.env.NEXT_PUBLIC_YOUTUBE}`}
					target="_blank"
					rel="noreferrer"
					className="w-[36px] h-[36px] flex items-center justify-center mb-3 text-primary border-primary border-[1px] bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300"
				>
					<AiFillYoutube />
				</a>
				<a
					href={`${process.env.NEXT_PUBLIC_LINKEDIN}`}
					target="_blank"
					rel="noreferrer"
					className="w-[36px] h-[36px] flex items-center justify-center mb-3 text-primary border-primary border-[1px] bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300"
				>
					<AiFillLinkedin />
				</a>
				<a
					href={`${process.env.NEXT_PUBLIC_TIKTOK}`}
					target="_blank"
					rel="noreferrer"
					className="w-[36px] h-[36px] flex items-center justify-center mb-3 text-primary border-primary border-[1px] bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300"
				>
					<FaTiktok />
				</a>
			</div>
		</div>
	);
};

export default SocialMediaAside;
