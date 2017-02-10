
exports.up = knex => {
  return knex.schema.alterTable('users', function (t) {
    t.unique('email')
  })
}

exports.down = knex => {
  return knex.schema.dropUnique('email')
}
