const Course = require('./models/Courses')
const Professor = require('./models/Professors')

let data;
const resolvers = {
  Query: {
    courses: () => Course.query().eager('[professor, comments]'),
    professors: () => {
      let pro = Professor.query().eager('course')
      console.log(pro)
      return pro
    },
    course: (rootValue, args) => Course.query().eager('[professor, comments]').findById(args.id),
    professor: (rootValue, args) => Professor.query().findById(args.id),
    search: (rootValue, args) => {
      return [
        Professor.query().findById(1),
        Course.query().findById(1)
      ]
    }
  },
  searchResult: {
    __resolveType: (obj) => {
      if (obj.name) return 'Professor'
      return 'Course'
      console.log(obj, 'obj')
    }
  },
  Mutation: {
    // ====================== Professor ================================
    professorAdd: (_, args) => {
      return Professor.query().insert(args.professor)
    },
    professorEdit: (_, args) => {
      return Professor.query().patchAndFetchById(args.professorId, args.professor)
    },
    professorDelete: (_, args) => {
      return Professor.query().findById(args.professorId)
        .then(proInfo => {
          data = proInfo;
          return Professor.query().deleteById(args.professorId)
        })
        .then((delRows) => {
          if (delRows > 0) return data
          throw new Error(` Professor with id ${args.professorId} can not be eliminated`)
        })
    },
    // ========================Course ============================
    courseAdd: (_, args) => {
      return Course.query().insert(args.course)
    },
    courseEdit: (_, args) => {
      return Course.query().patchAndFetchById(args.courseId, args.course)
    },
    courseDelete: (_, args) => {
      return Course.query().findById(args.courseId)
        .then(proInfo => {
          data = proInfo;
          return Course.query().deleteById(args.courseId)
        })
        .then((delRows) => {
          if (delRows > 0) return data
          throw new Error(` Course with id ${args.courseId} can not be eliminated`)
        })
    }
  }
}

module.exports = resolvers

// mutation adCourse{
//   courseAdd(course: {
//     title: "GraphQL"
//     description: "Learning started"
//     rating:4.3
//   }) {
//     id
//   }
// }