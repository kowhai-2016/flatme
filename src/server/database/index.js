const knex = require('./knex')
const bcrypt = require('bcrypt')

const saltRounds = 10

function addDocument (flatId, url, name) {
  return knex('documents')
    .insert({
      flat_id: flatId,
      url,
      name
    })
}

function getDocuments (flatId) {
  return knex('documents')
    .where('flat_id', flatId)
    .then(records => {
      return records.map(record => {
        return {
          id: record.id,
          url: record.url,
          name: record.name
        }
      })
    })
}

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
          email: user.email.toLowerCase(),
          phone_number: user.phoneNumber,
          hash: hash
        })
        .returning('id')
        .then(inserted => {
          const id = inserted[0]
          return id
        })
        .then(getUserById)
    })
}

function updateUser (id, fields) {
  return knex('users')
    .where('id', id)
    .update({
      first_name: fields.firstName,
      last_name: fields.lastName,
      phone_number: fields.phoneNumber,
      email: fields.email ? fields.email.toLowerCase() : undefined
    })
}

function getUserByEmail (email) {
  return knex('users')
    .where('email', email.toLowerCase())
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
    .returning('id')
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
    .then(flat => {
      return getJoinRequests(flat.id)
        .then(requests => {
          flat.requests = requests.filter(request => {
            return request.status === 'pending'
          })
          return flat
        })
    })
    .then(flat => {
      return getDocuments(flat.id)
        .then(documents => {
          flat.documents = documents
          return flat
        })
    })
}

function getFlatsByUserId (userId) {
  return knex('tenancies')
    .join('users', 'tenancies.user_id', '=', 'users.id')
    .join('flats', 'tenancies.flat_id', '=', 'flats.id')
    .select('users.id', 'flats.id as flatId', 'flats.flat_name as flatName')
    .where('users.id', userId)
    .then(records => {
      return records.map(record => {
        return {
          id: record.flatId,
          flatName: record.flatName
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
  return getTenancy(userId, flatId)
    .then(tenancy => {
      if (tenancy) {
        return Promise.resolve(tenancy.id)
      } else {
        return knex('tenancies')
          .insert({
            user_id: userId,
            flat_id: flatId
          })
          .returning('id')
          .then(inserted => {
            return inserted[0]
          })
      }
    })
}

function getTenancy (userId, flatId) {
  return knex('tenancies')
    .where('user_id', userId)
    .where('flat_id', flatId)
    .first()
}

function leaveFlat (userId, flatId) {
  return knex('tenancies')
  .where('user_id', userId)
  .where('flat_id', flatId)
  .del()
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

function addJoinRequest (userId, flatId) {
  return knex('join-requests')
    .insert({
      flat_id: flatId,
      user_id: userId,
      status: 'pending'
    })
    .returning('id')
}

function getJoinRequests (flatId) {
  return knex('join-requests')
    .join('users', 'join-requests.user_id', '=', 'users.id')
    .join('flats', 'join-requests.flat_id', '=', 'flats.id')
    .select('join-requests.id as id', 'flats.id as flatId', 'users.first_name as firstName', 'users.last_name as lastName', 'users.id as userId', 'join-requests.status as status')
    .where('flat_id', flatId)
    .then(records => {
      return records.map(record => {
        return {
          id: record.id,
          status: record.status,
          user: {
            id: record.userId,
            firstName: record.firstName,
            lastName: record.lastName
          }
        }
      })
    })
    .then(requests => {
      return requests
    })
}

function updateJoinRequestStatus (requestId, status) {
  return knex('join-requests')
    .where('id', requestId)
    .update('status', status)
    .then(result => {
      if (status === 'accepted') {
        return knex('join-requests')
          .where('id', requestId)
          .select('join-requests.flat_id as flatId', 'join-requests.user_id as userId')
          .first()
          .then(record => {
            return addTenancy(record.userId, record.flatId)
          })
      } else {
        return result
      }
    })
}

function addNote (note) {
  return knex('notes')
    .insert({
      flat_id: note.flat_id,
      content: note.content,
      author: note.author
    })
    .returning('id')
    .then(noteId => {
      return getNoteById(noteId[0])
    })
}

function editNote (note) {
  return knex('notes')
    .where('id', note.id)
    .update({
      content: note.content
    })
}

function deleteNote (id) {
  return knex('notes')
    .where('id', id)
    .del()
}

function getNoteById (id) {
  return knex('notes')
    .where('id', id)
}

function getNotesByFlatId (flatId) {
  return knex('notes')
    .where('flat_id', flatId)
    .then(notes => {
      return notes.map(note => {
        return {
          id: note.id,
          content: note.content,
          author: note.author
        }
      })
    })
}

module.exports = {
  addDocument,
  addFlat,
  addJoinRequest,
  addTenancy,
  addUser,
  updateUser,
  getFlatById,
  getFlatsByUserId,
  getFlatByName,
  getJoinRequests,
  getTenancy,
  getUserById,
  getUserByEmail,
  comparePassword,
  getNotesByFlatId,
  addNote,
  deleteNote,
  editNote,
  leaveFlat,
  updateJoinRequestStatus
}
