exports.up = knex => {
  return knex.schema.createTable('documents', table => {
    table.increments('id').primary()
    table.integer('flat_id').references('flats.id').onDelete('CASCADE')
    table.string('url')
    table.string('name')
    table.timestamp('date_uploaded')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('documents')
}
