import { JWT_SECRET } from '$env/static/private';
import { error } from '@sveltejs/kit';
import * as jose from 'jose';
import type { RequestHandler } from './$types';

const jwtSecret = new TextEncoder().encode(JWT_SECRET);

export const GET: RequestHandler = async (event) => {
	const { url, cookies } = event;

	const token = url.searchParams.get('token');

	if (!token) {
		throw error(400);
	}

	const decodedToken = decodeURIComponent(token);

	try {
		await jose.jwtVerify(decodedToken, jwtSecret);

		cookies.set('auth', decodedToken, { path: '/' });
		return new Response('', {
			status: 302,
			headers: {
				Location: '/'
			}
		});
	} catch (e) {
		throw error(400);
	}
};
