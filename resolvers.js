const Course = require('./models/Courses')
const Professor = require('./models/Professors')

const resolvers = {
  Query: {
    courses: () => Course.query().eager('[professor, comments]'),
    professors: () => {
      let pro = Professor.query().eager('course')
      console.log(pro)
      return pro
    },
    course: (rootValue, args) => Course.query().eager('[professor, comments]').findById(args.id),
    professor: (rootValue, args) => Professor.query().findById(args.id)
  },
  Mutation: {
    professorAdd: (_, args) => {
      return Professor.query().insert(args.professor)
    },
    professorEdit: (_, args) => {
      return Professor.query().patchAndFetchById(args.professorId, args.professor)
    }
  }
}

module.exports = resolvers