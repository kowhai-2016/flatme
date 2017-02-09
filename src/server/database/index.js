const knex = require('./knex')

function addUser (user) {
  return knex('users')
    .insert({
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      phone_number: user.phoneNumber
    })
    .then(inserted => {
      const id = inserted[0]
      return id
    })
    .then(getUserById)
}

function getUserById (id) {
  return knex('users')
    .select('id', 'first_name', 'last_name', 'email', 'phone_number')
    .where('id', id)
    .first()
    .then(user => {
      return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phoneNumber: user.phone_number
      }
    })
}

function addFlat (flat) {
  return knex('flats')
    .insert({
      flat_name: flat.flatName
    })
    .then(inserted => {
      const id = inserted[0]
      return id
    })
}

module.exports = {
  addUser,
  getUserById,
  addFlat
}
