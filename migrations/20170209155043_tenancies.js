
exports.up = knex => {
  return knex.schema.createTable('tenancies', table => {
    table.increments('id').primary()
    table.integer('flat_id').references('flats.id').onDelete('CASCADE')
    table.integer('user_id').references('users.id').onDelete('CASCADE')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('tenancies')
}
