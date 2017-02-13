exports.up = knex => {
  return knex.schema.table('join-requests', table => {
    table.enu('status', ['pending', 'accepted', 'ignored'])
  })
}

exports.down = knex => {
  return knex.schema.table('join-requests', table => {
    table.dropColumn('status')
  })
}
