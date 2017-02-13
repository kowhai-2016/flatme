exports.seed = knex => {
  return knex('tenancies').del()
    .then(() => {
      return Promise.all([
        knex('tenancies').insert({
          id: 77701,
          flat_id: 88803,
          user_id: 99901
        }),
        knex('tenancies').insert({
          id: 77702,
          flat_id: 88803,
          user_id: 99904
        }),
        knex('tenancies').insert({
          id: 77703,
          flat_id: 88803,
          user_id: 99902
        }),
        knex('tenancies').insert({
          id: 77704,
          flat_id: 88804,
          user_id: 99903
        }),
        knex('tenancies').insert({
          id: 77705,
          flat_id: 88804,
          user_id: 99905
        }),
        knex('tenancies').insert({
          id: 77706,
          flat_id: 88804,
          user_id: 99906
        }),
        knex('tenancies').insert({
          id: 77707,
          flat_id: 88809,
          user_id: 99906
        }),
        knex('tenancies').insert({
          id: 77708,
          flat_id: 88809,
          user_id: 99907
        }),
        knex('tenancies').insert({
          id: 77709,
          flat_id: 88809,
          user_id: 99908
        }),
        knex('tenancies').insert({
          id: 77710,
          flat_id: 88802,
          user_id: 99911
        }),
        knex('tenancies').insert({
          id: 77711,
          flat_id: 88802,
          user_id: 99912
        }),
        knex('tenancies').insert({
          id: 77712,
          flat_id: 88807,
          user_id: 99909
        }),
        knex('tenancies').insert({
          id: 77713,
          flat_id: 88807,
          user_id: 99910
        }),
        knex('tenancies').insert({
          id: 77714,
          flat_id: 88807,
          user_id: 99913
        })
      ])
    })
}
