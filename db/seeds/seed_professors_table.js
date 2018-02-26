const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('professors').del().then(() => {
    const promises = Array(40).fill().map((_, i) => {
      return knex('professors').insert([{
        id: i + 1,
        name: casual.name,
        nationality: casual.country,
        gender: casual.random_element(['MALE', 'FEMALE'])
      }])
    })
    return Promise.all(promises)
  })
}