module.exports = `
    type Professor {
      id: ID!
      name: String!
      nationality: String!
      gender: Gender
      courses: [Course]
    }

    enum Gender {
        MALE
        FEMALE
    }

    input newProfessor {
      name: String!
      nationality: String!
      gender: Gender
    }

    input editProfessor {
      name: String
      nationality: String
      gender: Gender
    }
  `