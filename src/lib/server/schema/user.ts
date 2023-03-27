import { bigint, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('User', {
	id: varchar('id', { length: 36 }),
	email: varchar('email', { length: 255 }),
	created_at: bigint('created_at', { mode: 'bigint' })
});
