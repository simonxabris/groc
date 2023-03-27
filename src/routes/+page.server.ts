import { AUTH_TOKEN_COOKIE_NAME } from '../../../../../../Users/asimon/src/groc/src/lib/constants';
import type { PageServerLoad } from './$types';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export const load = (async ({ cookies }) => {
	const authToken = cookies.get(AUTH_TOKEN_COOKIE_NAME);

	if (!authToken) {
		return {
			isAuthenticated: false
		};
	}

	try {
		verify(authToken, JWT_SECRET);
	} catch (error) {
		console.error('Failed to decrypt jwt token', error);
		return {
			isAuthenticated: false
		};
	}

	return {
		isAuthenticated: true
	};
}) satisfies PageServerLoad;
