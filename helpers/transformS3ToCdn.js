export function replaceUrlPrefix(url) {
	const oldPrefix = 'https://unmsm-static-files.s3.us-east-2.amazonaws.com';
	const newPrefix = 'https://dj6bwr7wzo1hi.cloudfront.net';

	if (url.startsWith(oldPrefix)) {
		return url.replace(oldPrefix, newPrefix);
	}

	return url; // Devuelve la URL original si no empieza con el prefijo antiguo
}
