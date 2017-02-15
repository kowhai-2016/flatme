
exports.seed = knex => {
  return knex('users').del()
    .then(() => {
      return Promise.all([
        knex('users').insert({
          id: 99901,
          first_name: 'Alice',
          last_name: 'Rosier',
          email: 'alice@bar.com',
          phone_number: '021 320 0450',
          avatar: 'https://avatars3.githubusercontent.com/u/11096313?v=3&s=400',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99902,
          first_name: 'Amanda',
          last_name: 'Hogan',
          email: 'amanda@bar.com',
          phone_number: '027 090 8300',
          avatar: 'http://localhost:3000/images/displaypics/Amanda.png',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99903,
          first_name: 'Anna',
          last_name: 'Jackson',
          email: 'annaj@bar.com',
          phone_number: '021 130 6700',
          avatar: 'https://avatars1.githubusercontent.com/u/22289088?v=3&s=460',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99904,
          first_name: 'Anna',
          last_name: 'Ulyanova',
          email: 'annau@bar.com',
          phone_number: '022 067 3000',
          avatar: 'http://localhost:3000/images/displaypics/Anna.jpeg',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99905,
          first_name: 'David',
          last_name: 'Christie',
          email: 'david@bar.com',
          phone_number: '021 080 8080',
          avatar: 'http://localhost:3000/images/displaypics/David.jpeg',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99906,
          first_name: 'Jessica',
          last_name: 'Neary',
          email: 'jessica@bar.com',
          phone_number: '021 900 9876',
          avatar: 'http://localhost:3000/images/displaypics/Jess.jpeg',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99907,
          first_name: 'Thibaud',
          last_name: 'Bretin',
          email: 'thibaud@bar.com',
          phone_number: '021 770 7272',
          avatar: 'http://localhost:3000/images/displaypics/Ti.jpeg',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99908,
          first_name: 'Quinn',
          last_name: 'Hu',
          email: 'quinn@bar.com',
          phone_number: '021 034 4875',
          avatar: 'http://localhost:3000/images/displaypics/Quinn.jpeg',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99909,
          first_name: 'Rich',
          last_name: 'Churcher',
          email: 'rich@bar.com',
          phone_number: '027 987 0912',
          avatar: 'https://avatars3.githubusercontent.com/u/171905?v=3&s=460',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99910,
          first_name: 'Daisy',
          last_name: 'Rich',
          email: 'daisy@bar.com',
          phone_number: '09 555 1388',
          avatar: '',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99911,
          first_name: 'Don',
          last_name: 'Smith',
          email: 'don@bar.com',
          phone_number: '021 390 4572',
          avatar: 'https://avatars0.githubusercontent.com/u/228761?v=3&s=460',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99912,
          first_name: 'Esther',
          last_name: 'Smith',
          email: 'esther@bar.com',
          phone_number: '021 390 4571',
          avatar: '',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        }),
        knex('users').insert({
          id: 99913,
          first_name: 'Christy',
          last_name: 'Joy',
          email: 'christy@bar.com',
          phone_number: '021 020 4700',
          avatar: '',
          hash: '$2a$10$fyrFvFQMYX8SkMeP1By8muQ6BWM7EtuXRS0c0u7tfykTVO8gIdvh2'
        })
      ])
    })
}
