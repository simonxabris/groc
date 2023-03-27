import { bigint, int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const product = mysqlTable('product', {
	id: int('id').primaryKey(),
	name: varchar('name', { length: 255 }),
	brand: varchar('name', { length: 255 }),
	price: int('price'),
	currency: varchar('currency', { length: 10 }),
	created_at: bigint('created_at', { mode: 'bigint' }),
	updated_at: bigint('updated_at', { mode: 'bigint' })
});
