import React from 'react';

import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

export default function RedesSocialesHome({
	facebook = '',
	instagram = '',
	twitter = '',
	youtube = '',
	className = '',
	linkedin = '',
	tiktok = '',
}) {
	return (
		<div className={className}>
			{facebook && (
				<a
					href={facebook}
					target="_blank"
					rel="noopener noreferrer"
					className="inline"
				>
					<button className="shadow-[0px_1px_4px_rgba(0,0,0,0.25);] text-blanco bg-transparente rounded-md outline outline-1 outline-blanco p-2 text-base hover:-translate-y-1 hover:shadow-lg duration-300">
						<FaFacebookF />
					</button>
				</a>
			)}
			{twitter && (
				<a
					href={twitter}
					target="_blank"
					rel="noopener noreferrer"
					className="inline"
				>
					<button className="shadow-[0px_1px_4px_rgba(0,0,0,0.25);] text-blanco bg-transparente rounded-md outline outline-1 outline-blanco p-2 text-base hover:-translate-y-1 hover:shadow-lg duration-300">
						<FaTwitter />
					</button>
				</a>
			)}
			{youtube && (
				<a
					href={youtube}
					target="_blank"
					rel="noopener noreferrer"
					className="inline"
				>
					<button className="shadow-[0px_1px_4px_rgba(0,0,0,0.25);] text-blanco bg-transparente rounded-md outline outline-1 outline-blanco p-2 text-base hover:-translate-y-1 hover:shadow-lg duration-300">
						<AiFillYoutube />
					</button>
				</a>
			)}
			{instagram && (
				<a
					href={instagram}
					target="_blank"
					rel="noopener noreferrer"
					className="inline"
				>
					<button className="shadow-[0px_1px_4px_rgba(0,0,0,0.25);] text-blanco bg-transparente rounded-md outline outline-1 outline-blanco p-2 text-base hover:-translate-y-1 hover:shadow-lg duration-300">
						<AiFillInstagram />
					</button>
				</a>
			)}
			{linkedin && (
				<a
					href={linkedin}
					target="_blank"
					rel="noopener noreferrer"
					className="inline"
				>
					<button className="shadow-[0px_1px_4px_rgba(0,0,0,0.25);] text-blanco bg-transparente rounded-md outline outline-1 outline-blanco p-2 text-base hover:-translate-y-1 hover:shadow-lg duration-300">
						<AiFillLinkedin />
					</button>
				</a>
			)}
			{tiktok && (
				<a
					href={tiktok}
					target="_blank"
					rel="noopener noreferrer"
					className="inline"
				>
					<button className="shadow-[0px_1px_4px_rgba(0,0,0,0.25);] text-blanco bg-transparente rounded-md outline outline-1 outline-blanco p-2 text-base hover:-translate-y-1 hover:shadow-lg duration-300">
						<FaTiktok />
					</button>
				</a>
			)}
		</div>
	);
}
