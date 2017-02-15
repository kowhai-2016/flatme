
exports.up = knex => {
  return knex.schema.alterTable('users', function (t) {
    t.string('avatar')
  })
}

exports.down = knex => {
  return knex.schema.alterTable('users', function (table) {
    table.dropColumn('avatar')
  })
}
