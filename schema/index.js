const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Professor = require('./Professor')
const Course = require('./Course')

const rootQuery = `
    union searchResult = Professor | Course

    type Query {
        courses: [Course]
        professors: [Professor]
        course(id: Int): Course
        professor(id: Int): Professor
        search(query: String!): [searchResult]
    }

    type Mutation {
        professorAdd    ( professor: newProfessor): Professor
        professorEdit   ( professorId: Int!, professor: editProfessor): Professor
        professorDelete ( professorId: Int!): Professor
        courseAdd       ( course: newCourse): Course
        courseEdit      ( courseId: Int!, course: editCourse): Course
        courseDelete    ( courseId: Int!): Course
    }
`
const schema = makeExecutableSchema({
  typeDefs: [rootQuery, Professor, Course],
  resolvers
})

module.exports = schema

// mutation editProfessor {
//     professorEdit(professorId: 41,professor:{
//       name:"Yessika Ortega"
//     }){
//       id
//       name
//     }
//   }