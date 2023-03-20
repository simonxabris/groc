import { DB_PASSWORD, DB_USERNAME, DB_HOST } from '$env/static/private';
import { connect, type Config } from '@planetscale/database';

const config = {
	host: DB_HOST,
	username: DB_USERNAME,
	password: DB_PASSWORD
} satisfies Config;

export function createConnection() {
	return connect(config);
}
