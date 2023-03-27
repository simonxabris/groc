import { JWT_SECRET } from '$env/static/private';
import { createConnection } from '$lib/server';
import { error } from '@sveltejs/kit';
import * as jwt from 'jsonwebtoken';
import { AUTH_TOKEN_COOKIE_NAME } from '$lib/constants';
import type { RequestHandler } from './$types';

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
		const token = jwt.sign({ id: userId, email: userEmail }, JWT_SECRET, { expiresIn: '2w' });

		cookies.set(AUTH_TOKEN_COOKIE_NAME, token, { path: '/' });
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
