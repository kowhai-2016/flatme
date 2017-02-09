
exports.seed = knex => {
  return knex('users').del()
    .then(() => {
      return Promise.all([
        knex('users').insert({
          id: 1,
          first_name: 'Alice',
          last_name: 'R',
          email: 'foo@bar.com',
          phone_number: '000 000 0000',
          hash: 'xxxx'
        }),
        knex('users').insert({
          id: 2,
          first_name: 'Amanda',
          last_name: 'H',
          email: 'foo@bar.com',
          phone_number: '000 000 0000',
          hash: 'xxxx'
        }),
        knex('users').insert({
          id: 3,
          first_name: 'Anna',
          last_name: 'J',
          email: 'foo@bar.com',
          phone_number: '000 000 0000',
          hash: 'xxxx'
        }),
        knex('users').insert({
          id: 4,
          first_name: 'Anna',
          last_name: 'U',
          email: 'foo@bar.com',
          phone_number: '000 000 0000',
          hash: 'xxxx'
        }),
        knex('users').insert({
          id: 5,
          first_name: 'David',
          last_name: 'C',
          email: 'foo@bar.com',
          phone_number: '000 000 0000',
          hash: 'xxxx'
        }),
        knex('users').insert({
          id: 6,
          first_name: 'Jessica',
          last_name: 'N',
          email: 'foo@bar.com',
          phone_number: '000 000 0000',
          hash: 'xxxx'
        }),
        knex('users').insert({
          id: 7,
          first_name: 'Thibaud',
          last_name: 'B',
          email: 'foo@bar.com',
          phone_number: '000 000 0000',
          hash: 'xxxx'
        }),
        knex('users').insert({
          id: 8,
          first_name: 'Quinn',
          last_name: 'H',
          email: 'foo@bar.com',
          phone_number: '000 000 0000',
          hash: 'xxxx'
        })
      ])
    })
}
