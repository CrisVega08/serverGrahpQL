exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('professors', (table) => {
      table.increments('id').primary().unsigned()
      table.string('name')
      table.string('nationality')
      table.string('gender')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('professors')
  ])
)