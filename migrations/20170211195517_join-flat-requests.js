exports.up = knex => {
  return knex.schema.createTable('join-requests', table => {
    table.increments('id').primary()
    table.integer('flat_id').references('flats.id')
    table.integer('flat_name').references('flats.flat_name')
    table.integer('user_id').references('users.id')
    table.integer('first_name').references('users.first_name')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('join-requests')
}
