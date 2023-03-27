import { bigint, int, mysqlTable } from 'drizzle-orm/mysql-core';

export const shoppingTrip = mysqlTable('shopping_trip', {
	id: int('id').primaryKey(),
	created_at: bigint('created_at', { mode: 'bigint' }),
	updated_at: bigint('updated_at', { mode: 'bigint' })
});
