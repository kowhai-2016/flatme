exports.seed = knex => {
  return knex('tenancies').del()
    .then(() => {
      return Promise.all([
        knex('tenancies').insert({
          id: 1,
          flat_id: 3,
          user_id: 1
        }),
        knex('tenancies').insert({
          id: 2,
          flat_id: 3,
          user_id: 4
        }),
        knex('tenancies').insert({
          id: 3,
          flat_id: 3,
          user_id: 2
        }),
        knex('tenancies').insert({
          id: 4,
          flat_id: 4,
          user_id: 3
        }),
        knex('tenancies').insert({
          id: 5,
          flat_id: 4,
          user_id: 5
        }),
        knex('tenancies').insert({
          id: 6,
          flat_id: 4,
          user_id: 6
        }),
        knex('tenancies').insert({
          id: 7,
          flat_id: 9,
          user_id: 6
        }),
        knex('tenancies').insert({
          id: 8,
          flat_id: 9,
          user_id: 7
        }),
        knex('tenancies').insert({
          id: 9,
          flat_id: 9,
          user_id: 8
        }),
        knex('tenancies').insert({
          id: 10,
          flat_id: 2,
          user_id: 11
        }),
        knex('tenancies').insert({
          id: 11,
          flat_id: 2,
          user_id: 12
        }),
        knex('tenancies').insert({
          id: 12,
          flat_id: 7,
          user_id: 9
        }),
        knex('tenancies').insert({
          id: 13,
          flat_id: 7,
          user_id: 10
        }),
        knex('tenancies').insert({
          id: 14,
          flat_id: 7,
          user_id: 13
        })
      ])
    })
}
