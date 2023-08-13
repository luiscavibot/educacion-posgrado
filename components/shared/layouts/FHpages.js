import Head from 'next/head';
import React from 'react';

const FHpages = ({
	metaTags = {
		description: '',
		ogUrl: ' ',
		ogType: 'website',
		ogTitle: '',
		ogImage: '',
		ogDescription: '',
	},
	children,
}) => {
	return (
		<div className="font-lato">
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta property="og:url" content={metaTags.ogUrl}></meta>
				<meta property="og:type" content="website" />
				<meta property="og:title" content={metaTags.ogTitle} />
				<meta property="og:image" content={metaTags.ogImage} />
				<meta
					property="og:description"
					content={metaTags.ogDescription}
				/>
				<meta
					name="title"
					content={process.env.NEXT_PUBLIC_TITLE}
				></meta>
				<meta name="DC.Title" content={metaTags.ogTitle} />
				<meta
					httpEquiv="title"
					content={process.env.NEXT_PUBLIC_TITLE}
				></meta>
				<meta name="description" content={metaTags.ogDescription} />
				<meta
					httpEquiv="description"
					content={metaTags.ogDescription}
				/>
				<meta
					httpEquiv="DC.Description"
					content={metaTags.ogDescription}
				></meta>
				<link rel="icon" href="/logito.png"></link>
				<title>{process.env.NEXT_PUBLIC_TITLE}</title>
				<meta
					name="description"
					content={process.env.NEXT_PUBLIC_NAME_DESCRIPTION}
				/>
			</Head>
			{children}
		</div>
	);
};

export default FHpages;
