
exports.seed = knex => {
  return knex('flats').del()
    .then(() => {
      return Promise.all([
        knex('flats').insert({
          id: 1,
          flat_name: 'Mouse House'
        }),
        knex('flats').insert({
          id: 2,
          flat_name: 'Fairy Castle'
        }),
        knex('flats').insert({
          id: 3,
          flat_name: 'Bag End'
        }),
        knex('flats').insert({
          id: 4,
          flat_name: 'The Grand Stand'
        }),
        knex('flats').insert({
          id: 5,
          flat_name: 'Dog Box'
        }),
        knex('flats').insert({
          id: 6,
          flat_name: 'Greenwich Villa'
        }),
        knex('flats').insert({
          id: 7,
          flat_name: 'The Shire'
        }),
        knex('flats').insert({
          id: 8,
          flat_name: 'Hotel California'
        }),
        knex('flats').insert({
          id: 9,
          flat_name: 'Beehive'
        })
      ])
    })
}
