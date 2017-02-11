const knex = require('./knex')
const bcrypt = require('bcrypt')

const saltRounds = 10

function comparePassword (password, hash) {
  return bcrypt.compare(password, hash)
}

function addUser (user) {
  return bcrypt.hash(user.password, saltRounds)
    .then(hash => {
      return knex('users')
        .insert({
          first_name: user.firstName,
          last_name: user.lastName,
          email: user.email,
          phone_number: user.phoneNumber,
          hash: hash
        })
        .then(inserted => {
          const id = inserted[0]
          return id
        })
        .then(getUserById)
    })
}

function getUserByEmail (email) {
  return knex('users')
    .where('email', email)
    .first()
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

function getFlatById (id) {
  return knex('flats')
    .where('flats.id', id)
    .first()
    .then(record => {
      return {
        id: record.id,
        flatName: record.flat_name
      }
    })
    .then(flat => {
      return getFlatmates(flat.id)
      .then(flatmates => {
        flat.flatmates = flatmates
        return flat
      })
    })
}

function getFlatmates (flatId) {
  return knex('tenancies')
    .join('users', 'tenancies.user_id', '=', 'users.id')
    .join('flats', 'tenancies.flat_id', '=', 'flats.id')
    .select('flats.id as flatId', 'users.first_name as firstName', 'users.last_name as lastName', 'users.id as userId')
    .where('flatId', flatId)
    .then(flatmates => {
      return flatmates.map(flatmate => {
        return {
          id: flatmate.userId,
          firstName: flatmate.firstName,
          lastName: flatmate.lastName
        }
      })
    })
}

module.exports = {
  addFlat,
  addUser,
  getFlatById,
  getUserById,
  getUserByEmail,
  comparePassword
}
