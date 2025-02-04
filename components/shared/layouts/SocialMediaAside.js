import React from 'react';

import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const SocialMediaAside = ({
	facebook,
	instagram,
	twitter,
	youtube,
	linkedin,
	tiktok,
}) => {
	return (
		<div className="absolute">
			<div className="text-lg mt-5">
				{
					facebook &&
					<a
						href={facebook}
						target="_blank"
						rel="noreferrer"
						className="w-[36px] h-[36px] flex items-center justify-center mb-3 text-primary border-primary border-[1px] bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300"
					>
						<FaFacebookF />
					</a>
				}
				{
					twitter &&
					<a
						href={twitter}
						target="_blank"
						rel="noreferrer"
						className="w-[36px] h-[36px] flex items-center justify-center mb-3 text-primary border-primary border-[1px] bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300"
					>
						<FaTwitter />
					</a>
				}
				{
					youtube &&
					<a
						href={youtube}
						target="_blank"
						rel="noreferrer"
						className="w-[36px] h-[36px] flex items-center justify-center mb-3 text-primary border-primary border-[1px] bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300"
					>
						<AiFillYoutube />
					</a>
				}
				{
					instagram &&
					<a
						href={instagram}
						target="_blank"
						rel="noreferrer"
						className="w-[36px] h-[36px] flex items-center justify-center mb-3 text-primary border-primary border-[1px] bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300"
					>
						<AiFillInstagram />
					</a>
				}
				{
					linkedin &&
					<a
						href={linkedin}
						target="_blank"
						rel="noreferrer"
						className="w-[36px] h-[36px] flex items-center justify-center mb-3 text-primary border-primary border-[1px] bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300"
					>
						<AiFillLinkedin />
					</a>
				}
				{
					tiktok &&
					<a
						href={tiktok}
						target="_blank"
						rel="noreferrer"
						className="w-[36px] h-[36px] flex items-center justify-center mb-3 text-primary border-primary border-[1px] bg-blanco rounded-lg p-2 text-base shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] hover:opacity-80 duration-300"
					>
						<FaTiktok />
					</a>
				}
			</div>
		</div>
	);
};

export default SocialMediaAside;
