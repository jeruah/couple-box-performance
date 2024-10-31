import { defineDb, defineTable, column } from 'astro:db';

const post_table = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    id_user: column.text(),
    title: column.text(),
    content: column.text(),
    music: column.text(),
    img: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { post_table }
});
