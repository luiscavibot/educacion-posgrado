export default async function handler(req, res) {
	const TOKEN_UPDATE = 'equipoespecialweb';
	if (req.query.secret !== TOKEN_UPDATE) {
		return res.status(401).json({ message: 'Invalid token' });
	}
	try {
		await res.revalidate('/formacion-academica/posgrado/[programa]');
		return res.json({ revalidated: true });
	} catch (err) {
		return res.status(500).send('Error revalidating');
	}
}

// Path: pages\formacion-academica\posgrado\[programa].js
export function test({ params }) {
	const { programa } = params;
	return {
		props: {
			programa: programa,
		},
		// revalidate: 1,
	};
}
