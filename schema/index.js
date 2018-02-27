const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Professor = require('./Professor')
const Course = require('./Course')
const rootQuery = `
    type Query {
        courses: [Course]
        professors: [Professor]
        course(id: Int): Course
        professor(id: Int): Professor
    }
`
const schema = makeExecutableSchema({
  typeDefs: [rootQuery, Professor, Course],
  resolvers
})

module.exports = schema