import React from 'react';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

export default function RedesSocialesHome({
	facebook = '',
	instagram = '',
	twitter = '',
	youtube = '',
	className = '',
}) {
	return (
		<div className={className}>
			{facebook && (
				<div
					onClick={() => {
						window.open(`${facebook}`, '_blank');
					}}
					className="inline">
					<button className="shadow-[0px_1px_4px_rgba(0,0,0,0.25);] text-secondary bg-blanco rounded-md p-2 mr-3 text-base hover:-translate-y-1 hover:shadow-lg duration-300">
						<FaFacebookF />
					</button>
				</div>
			)}
			{instagram && (
				<div
					onClick={() => {
						window.open(`${instagram}`, '_blank');
					}}
					className="inline">
					<button className="shadow-[0px_1px_4px_rgba(0,0,0,0.25);] text-secondary bg-blanco rounded-md p-2 mr-3 text-base hover:-translate-y-1 hover:shadow-lg duration-300">
						<AiFillInstagram />
					</button>
				</div>
			)}
			{twitter && (
				<div
					onClick={() => {
						window.open(`${twitter}`, '_blank');
					}}
					className="inline">
					<button className="shadow-[0px_1px_4px_rgba(0,0,0,0.25);] text-secondary bg-blanco rounded-md p-2 mr-3 text-base hover:-translate-y-1 hover:shadow-lg duration-300">
						<FaTwitter />
					</button>
				</div>
			)}
			{youtube && (
				<div
					onClick={() => {
						window.open(`${youtube}`, '_blank');
					}}
					className="inline">
					<button className="shadow-[0px_1px_4px_rgba(0,0,0,0.25);] text-secondary bg-blanco rounded-md p-2 mr-3 text-base hover:-translate-y-1 hover:shadow-lg duration-300">
						<AiFillYoutube />
					</button>
				</div>
			)}
		</div>
	);
}
