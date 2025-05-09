import React, { useRef } from 'react';

import FooterComponent from '../FooterComponent';
import FHpages from './FHpages';

import PageHeader from '../PageHeader';
import SocialMediaAside from './SocialMediaAside';

const PrincipalLayout = ({ children, metaTags }) => {
	// const refFooter = useRef(null);
	const refSocialMedia = useRef(null);
	return (
		<FHpages metaTags={metaTags}>
			<PageHeader />
			<div className="block">
				<main className="relative">
					<div className="pt-24 md:pt-40 min-h-screen">
						<section className="container mx-auto md:px-4 lg:px-8 2xl:px-16 md:grid-cols-12 md:gap-x-4 md:grid">
							{children}
						</section>
					</div>
					<div className="fixed inset-y-0 pt-[25rem] w-14 right-0 md:block hidden">
						<div ref={refSocialMedia}>
							<SocialMediaAside
								facebook={process.env.NEXT_PUBLIC_FACEBOOK}
								youtube={process.env.NEXT_PUBLIC_YOUTUBE}
								twitter={process.env.NEXT_PUBLIC_TWITTER}
								instagram={process.env.NEXT_PUBLIC_INSTAGRAM}
								tiktok={process.env.NEXT_PUBLIC_TIKTOK}
								linkedin={process.env.NEXT_PUBLIC_LINKEDIN}
							/>
						</div>
					</div>
					<div id="footerId">
						<FooterComponent />
					</div>
				</main>
			</div>
		</FHpages>
	);
};

export default PrincipalLayout;
