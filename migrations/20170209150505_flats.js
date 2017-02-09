exports.up = knex => {
  return knex.schema.createTable('flats', table => {
    table.increments('id').primary()
    table.string('flat_name')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('flats')
}
