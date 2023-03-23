export default async function handler(req, res) {
	const TOKEN_UPDATE = 'equipoespecialweb';
	if (req.query.secret !== TOKEN_UPDATE) {
		return res.status(401).json({ message: 'Invalid token' });
	}
	try {
		await res.revalidate('/');
		return res.json({ revalidated: true });
	} catch (err) {
		return res.status(500).send('Error revalidating');
	}
}
