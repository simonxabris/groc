import { JWT_SECRET } from '$env/static/private';
import type { User } from '$lib';
import { createConnection } from '$lib/server';
import { redirect } from '@sveltejs/kit';
import * as jose from 'jose';
import type { Actions } from './$types';

const JwtSecret = new TextEncoder().encode(JWT_SECRET);

const connection = createConnection();

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const email = data.get('email');

		if (!email) {
			return {
				success: false
			};
		}

		const result = await connection.execute('SELECT * FROM User WHERE email = ?', [email], {
			as: 'object'
		});

		const user = result.rows[0] as User | undefined;

		if (!user) {
			// Registration flow
			const newUserId = crypto.randomUUID();

			try {
				await connection.execute('INSERT INTO User (id, email) VALUES (?, ?)', [newUserId, email]);
			} catch (error) {
				console.log('Failed to save user', error);
				return {
					flow: 'registration',
					success: false
				};
			}

			const token = await new jose.SignJWT({ id: newUserId, email: email })
				.setProtectedHeader({ alg: 'HS256' })
				.setIssuedAt()
				.setExpirationTime('1w')
				.sign(JwtSecret);

			console.log(event.url.hostname);
			const loginUrl = new URL('/auth/login', event.url.origin);
			loginUrl.searchParams.set('token', encodeURIComponent(token));

			console.log('login URL: ', loginUrl.toString());

			return {
				flow: 'registration',
				success: true
			};
		}

		console.log('rows', user);

		const token = await new jose.SignJWT({ id: user.id, email: user.email })
			.setProtectedHeader({ alg: 'HS256' })
			.setIssuedAt()
			.setExpirationTime('1w')
			.sign(JwtSecret);

		event.cookies.set('auth', token, { path: '/' });

		throw redirect(303, '/');
	}
};
