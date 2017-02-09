const knex = require('./knex')


exports.addUser = user => {
  return knex('users')
    .insert({
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.name,
      phone_number: user.phoneNumber
    })
    .then(inserted => {
      const id = inserted[0]
      return id
    })
}

exports.getUserById = id => {
  return knex('users')
    .select('id', 'first_name', 'last_name', 'email', 'phone_number')
    .where('id', id)
    .first()
}

exports.addFlat = flat => {
  return knex('flats')
    .insert({
      flat_name: flat.name
    })
    .then(inserted => {
      const id = inserted[0]
      return id
    })
}
