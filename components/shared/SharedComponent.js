import Image from 'next/future/image';
import React from 'react';
import { CerrarIcon } from '../icons';
import CajaConFuncionCopiar from './CajaConFuncionCopiar';
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share';

const socialNetworks = [
	{
		imageUrl:
			'https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/especiales/compartir/facebookShareIcon.png',
		alt: 'facebook',
		shareComponent: FacebookShareButton,
	},
	{
		imageUrl:
			'https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/especiales/compartir/twitterShareIcon.png',
		alt: 'twitter',
		shareComponent: TwitterShareButton,
	},
	{
		imageUrl:
			'https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/especiales/compartir/whatsappShareIcon.png',
		alt: 'whatsapp',
		shareComponent: WhatsappShareButton,
	},
	{
		imageUrl:
			'https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/especiales/compartir/emailShareIcon.png',
		alt: 'gmail',
		shareComponent: EmailShareButton,
	},
	{
		imageUrl:
			'https://dj6bwr7wzo1hi.cloudfront.net/Im%C3%A1genes/especiales/compartir/linkedinShareIcon.png',
		alt: 'linkedin',
		shareComponent: LinkedinShareButton,
	},
];

const SharedComponent = ({ handleClose, ogUrl }) => {
	return (
		<div className=" text-textColorOne rounded-lg overflow-hidden">
			<div className="bg-blanco py-11 px-13 ">
				<div className="flex justify-end relative">
					<button
						onClick={handleClose}
						type="button"
						className="absolute hover:fill-blanco -right-7 -top-5 text-xs rounded-md h-7 w-7 flex items-center justify-center fill-tertiary hover:bg-secondary/25 shadow-[0px_1px_4px_rgba(0,0,0,0.25)]"
					>
						<CerrarIcon className="" />
					</button>
				</div>
				<h1 className="font-bold text-center text-xl">
					Compartir vía:
				</h1>
				<div className="grid grid-cols-3 md:grid-cols-[40px_40px_40px_40px] grid-rows-[40px_40px] gap-x-10 gap-y-7 pt-6">
					{socialNetworks.map((item) => (
						<div key={item.alt} className="col-span-1 row-span-1">
							<item.shareComponent url={ogUrl}>
								<Image
									src={item.imageUrl}
									alt={item.alt}
									width={40}
									height={40}
									quality={100}
									className="hover:scale-105 transition-transform duration-300"
								/>
							</item.shareComponent>
						</div>
					))}
					<div className="col-span-3 row-span-1 flex items-center">
						<CajaConFuncionCopiar text={ogUrl} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SharedComponent;
