import { JWT_SECRET } from '$env/static/private';
import { createConnection } from '$lib/server';
import { error } from '@sveltejs/kit';
import * as jose from 'jose';
import type { RequestHandler } from './$types';

const jwtSecret = new TextEncoder().encode(JWT_SECRET);
const connection = createConnection();

export const GET: RequestHandler = async (event) => {
	const { url, cookies } = event;

	const token = url.searchParams.get('token');

	if (!token) {
		throw error(400);
	}

	const decodedToken = decodeURIComponent(token);

	let userId: string | undefined = undefined;
	let userEmail: string | undefined = undefined;
	try {
		const tokensResult = await connection.execute(
			'SELECT user_id FROM LinkTokens WHERE token = ?',
			[decodedToken]
		);

		const rows = tokensResult.rows as { user_id: string }[];

		userId = rows[0]?.user_id;

		const userResult = await connection.execute('SELECT email FROM User WHERE id = ?', [userId]);

		const userRows = userResult.rows as { email: string }[];

		userEmail = userRows[0]?.email;
	} catch (e) {
		throw error(500);
	}

	try {
		const jwt = await new jose.SignJWT({ id: userId, email: userEmail })
			.setProtectedHeader({ alg: 'HS256' })
			.setIssuedAt()
			.setExpirationTime('1w')
			.sign(jwtSecret);

		cookies.set('auth', jwt, { path: '/' });
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
