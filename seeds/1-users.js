
exports.seed = knex => {
  return knex('users').del()
    .then(() => {
      return Promise.all([
        knex('users').insert({
          first_name: 'Alice',
          last_name: 'Rosier',
          email: 'alice@bar.com',
          phone_number: '021 320 0450',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'Amanda',
          last_name: 'Hogan',
          email: 'amanda@bar.com',
          phone_number: '027 090 8300',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'Anna',
          last_name: 'Jackson',
          email: 'annaj@bar.com',
          phone_number: '021 130 6700',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'Anna',
          last_name: 'Ulyanova',
          email: 'annau@bar.com',
          phone_number: '022 067 3000',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'David',
          last_name: 'Christie',
          email: 'david@bar.com',
          phone_number: '021 080 8080',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'Jessica',
          last_name: 'Neary',
          email: 'jessica@bar.com',
          phone_number: '021 900 9876',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'Thibaud',
          last_name: 'Bretin',
          email: 'thibaud@bar.com',
          phone_number: '021 770 7272',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'Quinn',
          last_name: 'Hu',
          email: 'quinn@bar.com',
          phone_number: '021 034 4875',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'Rich',
          last_name: 'Churcher',
          email: 'rich@bar.com',
          phone_number: '027 987 0912',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'Daisy',
          last_name: 'Rich',
          email: 'daisy@bar.com',
          phone_number: '09 555 1388',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'Don',
          last_name: 'Smith',
          email: 'don@bar.com',
          phone_number: '021 390 4572',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'Esther',
          last_name: 'Smith',
          email: 'esther@bar.com',
          phone_number: '021 390 4571',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          first_name: 'Christy',
          last_name: 'Joy',
          email: 'christy@bar.com',
          phone_number: '021 020 4700',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        })
      ])
    })
}
