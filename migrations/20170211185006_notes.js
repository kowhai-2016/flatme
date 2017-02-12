
exports.up = function (knex, Promise) {
  return knex.schema.createTable('notes', table => {
    table.increments('id').primary()
    table.integer('flat_id')
    table.string('content')
    table.string('author')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('notes')
}
