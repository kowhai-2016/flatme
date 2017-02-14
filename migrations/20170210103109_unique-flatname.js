
exports.up = knex => {
  return knex.schema.alterTable('flats', function (t) {
    t.unique('flat_name')
  })
}

exports.down = knex => {
  return knex.schema.alterTable('flats', function (t) {
    t.dropUnique('flat_name')
  })
}
