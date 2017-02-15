exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('notes').insert({
          id: 66601,
          flat_id: 88804,
          content: 'Flat inspection this thursday!',
          author: 'Jessica'}),
        knex('notes').insert({
          id: 66602,
          flat_id: 88804,
          content: 'Recycling goes out on Tuesday nights',
          author: 'Jessica'}),
        knex('notes').insert({
          id: 66603,
          flat_id: 88801,
          content: 'Bathroom tap leaks',
          author: 'Jessica'})
      ])
    })
}
