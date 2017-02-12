exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('notes').insert({
          id: 1,
          flat_id: 4,
          content: 'Flat inspection this thursday!',
          author: 'Jessica'}),
        knex('notes').insert({
          id: 2,
          flat_id: 4,
          content: 'Recycling goes out on Tuesday nights',
          author: 'Jessica'}),
        knex('notes').insert({
          id: 3,
          flat_id: 1,
          content: 'Bathroom tap leaks',
          author: 'Jessica'})
      ])
    })
}
