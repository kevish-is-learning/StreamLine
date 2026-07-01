import { pgTable, uuid, text, timestamp, boolean,  } from 'drizzle-orm/pg-core';

export const Users = pgTable('User', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  avatar: text('avatar'),
  password: text('password').notNull(),
  isCreator: boolean('isCreator').default(false),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// export const creator = pgTable('Creator', {
//   id: uuid('id').primaryKey().defaultRandom(),
//   banner: text('banner').notNull(),
//   userId: uuid('userId').references(() => users.id).notNull(),
//   socialLinks: text('socialLinks').array(),
//   bio: text('bio').notNull(),
    

  
// })
