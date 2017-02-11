const knex = require('knex')

module.exports = {
  addNote,
  deleteNote,
  getNotes
}

function addNote (note) {
  return knex('notes')
    .insert({
      flat_id: note.flat_id,
      content: note.content,
      author: note.author
    })
    .then(getNotes(note.flat_id))
}

function deleteNote (note) {
  return knex('notes')
    .where('id', note.id)
    .del()
    .then(getNotes(note.flat_id))
}

function getNotes (id) {
  return knex('notes')
  .where('flat_id', id)
}
