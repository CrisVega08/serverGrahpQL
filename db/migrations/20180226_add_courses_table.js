exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('courses', (table) => {
      table.increments('id').primary().unsigned()
      table.string('title')
      table.string('description')
      table.integer('professor_id').unsigned()
      table.double('rating').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('courses')
  ])
)