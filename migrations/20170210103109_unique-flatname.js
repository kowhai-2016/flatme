
exports.up = knex => {
  return knex.schema.alterTable('flats', function (t) {
    t.unique('flat_name')
  })
}

exports.down = knex => {
  return knex.schema.dropUnique('flat_name')
}
