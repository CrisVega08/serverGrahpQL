module.exports = `
    # This is a course on the system
    type Course {
        id: ID!
        title: String!
        # This is the description of course
        description: String!
        professor: Professor
        rating: Float @deprecated(reason: "we do not believe in the scores")
        comments: [Comment]
    }

    type Comment {
      id: ID!
      name: String!
      body: String!
    }

    input newCourse {
      title: String!
      description: String!
      rating: Float
    }

    input editCourse {
      title: String
      description: String
      rating: Float
    }
  `