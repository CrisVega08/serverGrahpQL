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

    type Mutation {
        professorAdd(professor: newProfessor): Professor
        professorEdit(professorId: Int!, professor: editProfessor): Professor
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