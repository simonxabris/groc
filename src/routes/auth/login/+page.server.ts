import type { User } from '$lib';
import { createConnection } from '$lib/server';
import { error } from '@sveltejs/kit';
import type { Actions } from './$types';

const connection = createConnection();

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const email = data.get('email');

		if (!email) {
			throw error(400, 'Email not provided');
		}

		const result = await connection.execute('SELECT * FROM User WHERE email = ?', [email], {
			as: 'object'
		});

		const user = result.rows[0] as User | undefined;

		const linkToken = crypto.randomUUID();
		if (!user) {
			// Registration flow
			const newUserId = crypto.randomUUID();

			try {
				await connection.transaction(async (tx) => {
					await tx.execute('INSERT INTO User (id, email) VALUES (?, ?)', [newUserId, email]);
					await tx.execute('INSERT INTO LinkTokens (token, user_id) VALUES (?, ?)', [
						linkToken,
						newUserId
					]);
				});
			} catch (e) {
				console.error('Failed to save user', e);
				throw error(500);
			}

			const loginUrl = new URL('/auth/login', event.url.origin);
			loginUrl.searchParams.set('token', encodeURIComponent(linkToken));

			console.log('login URL: ', loginUrl.toString());

			return {
				success: true
			};
		}

		try {
			await connection.execute('INSERT INTO LinkTokens (token, user_id) VALUES (?, ?)', [
				linkToken,
				user.id
			]);
		} catch (e) {
			throw error(500);
		}

		const loginUrl = new URL('/auth/login', event.url.origin);
		loginUrl.searchParams.set('token', encodeURIComponent(linkToken));

		console.log('login URL: ', loginUrl.toString());

		return {
			success: true
		};
	}
};
