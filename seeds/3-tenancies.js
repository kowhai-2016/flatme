exports.seed = knex => {
  return knex('tenancies').del()
    .then(() => {
      return Promise.all([
        knex('tenancies').insert({
          flat_id: 3,
          user_id: 1
        }),
        knex('tenancies').insert({
          flat_id: 3,
          user_id: 4
        }),
        knex('tenancies').insert({
          flat_id: 3,
          user_id: 2
        }),
        knex('tenancies').insert({
          flat_id: 4,
          user_id: 3
        }),
        knex('tenancies').insert({
          flat_id: 4,
          user_id: 5
        }),
        knex('tenancies').insert({
          flat_id: 4,
          user_id: 6
        }),
        knex('tenancies').insert({
          flat_id: 9,
          user_id: 6
        }),
        knex('tenancies').insert({
          flat_id: 9,
          user_id: 7
        }),
        knex('tenancies').insert({
          flat_id: 9,
          user_id: 8
        }),
        knex('tenancies').insert({
          flat_id: 2,
          user_id: 11
        }),
        knex('tenancies').insert({
          flat_id: 2,
          user_id: 12
        }),
        knex('tenancies').insert({
          flat_id: 7,
          user_id: 9
        }),
        knex('tenancies').insert({
          flat_id: 7,
          user_id: 10
        }),
        knex('tenancies').insert({
          flat_id: 7,
          user_id: 13
        })
      ])
    })
}
