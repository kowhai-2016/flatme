
exports.seed = knex => {
  return knex('flats').del()
    .then(() => {
      return Promise.all([
        knex('flats').insert({
          id: 88801,
          flat_name: 'Mouse House'
        }),
        knex('flats').insert({
          id: 88802,
          flat_name: 'Fairy Castle'
        }),
        knex('flats').insert({
          id: 88803,
          flat_name: 'Bag End'
        }),
        knex('flats').insert({
          id: 88804,
          flat_name: 'The Grand Stand'
        }),
        knex('flats').insert({
          id: 88805,
          flat_name: 'Dog Box'
        }),
        knex('flats').insert({
          id: 88806,
          flat_name: 'Greenwich Villa'
        }),
        knex('flats').insert({
          id: 88807,
          flat_name: 'The Shire'
        }),
        knex('flats').insert({
          id: 88808,
          flat_name: 'Hotel California'
        }),
        knex('flats').insert({
          id: 88809,
          flat_name: 'Beehive'
        })
      ])
    })
}
