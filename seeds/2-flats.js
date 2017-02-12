
exports.seed = knex => {
  return knex('flats').del()
    .then(() => {
      return Promise.all([
        knex('flats').insert({
          flat_name: 'Mouse House'
        }),
        knex('flats').insert({
          flat_name: 'Fairy Castle'
        }),
        knex('flats').insert({
          flat_name: 'Bag End'
        }),
        knex('flats').insert({
          flat_name: 'The Grand Stand'
        }),
        knex('flats').insert({
          flat_name: 'Dog Box'
        }),
        knex('flats').insert({
          flat_name: 'Greenwich Villa'
        }),
        knex('flats').insert({
          flat_name: 'The Shire'
        }),
        knex('flats').insert({
          flat_name: 'Hotel California'
        }),
        knex('flats').insert({
          flat_name: 'Beehive'
        })
      ])
    })
}
