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
        }, 'id')
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
    }, 'id')
    .then(inserted => {
      const id = inserted[0]
      return {id}
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

function getFlatsByUserId (userId) {
  return knex('tenancies')
    .join('users', 'tenancies.user_id', '=', 'users.id')
    .join('flats', 'tenancies.flat_id', '=', 'flats.id')
    .select('users.id as userId', 'flats.id as flatId', 'flats.flat_name as flatName')
    .where('user_id', userId)
    .then(flatInfos => {
      return flatInfos.map(flatInfo => {
        return {
          id: flatInfo.flatId,
          flatName: flatInfo.flatName
        }
      })
    })
}

function getFlatByName (name) {
  return knex('flats')
    .where('flats.flat_name', name)
    .first()
    .then(record => {
      if (record) {
        return {
          id: record.id,
          flatName: record.flat_name
        }
      } else {
        return null
      }
    })
}

function addTenancy (userId, flatId) {
  return knex('tenancies')
    .insert({
      user_id: userId,
      flat_id: flatId
    }, 'id')
}

function getFlatmates (flatId) {
  return knex('tenancies')
    .join('users', 'tenancies.user_id', '=', 'users.id')
    .join('flats', 'tenancies.flat_id', '=', 'flats.id')
    .select('flats.id as flatId', 'users.first_name as firstName', 'users.last_name as lastName', 'users.id as userId', 'users.email as email', 'users.phone_number as phoneNumber')
    .where('flat_id', flatId)
    .then(flatmates => {
      return flatmates.map(flatmate => {
        return {
          id: flatmate.userId,
          firstName: flatmate.firstName,
          lastName: flatmate.lastName,
          email: flatmate.email,
          phoneNumber: flatmate.phoneNumber
        }
      })
    })
}

module.exports = {
  addFlat,
  addTenancy,
  addUser,
  getFlatById,
  getFlatsByUserId,
  getFlatByName,
  getUserById,
  getUserByEmail,
  comparePassword
}
